$(function() {
  // bodyに class="pref" がある場合に実行
  if ($('body').hasClass('pref')) {
    
    // URLのパラメータ (?pref=〇〇) を取得
    const urlParams = new URLSearchParams(window.location.search);
    const prefKey = urlParams.get('pref');

    // パラメータ・対応データがない場合の処理
    if (!prefKey || typeof PREF_MAP === 'undefined' || !PREF_MAP[prefKey]) {
      $('.js-pref-name').text('都道府県が選択されていません');
      $('#loading').fadeOut(300);
      return;
    }

    const prefInfo = PREF_MAP[prefKey];
    $('.js-pref-name').text(prefInfo.name);

    // 気象庁APIのエンドポイント
    const apiUrl = `https://www.jma.go.jp/bosai/forecast/data/forecast/${prefInfo.code}.json`;

    $.ajax({
      url: apiUrl,
      type: 'GET',
      dataType: 'json'
    }).done(function(data) {
      // 1. 基本データ抽出
      const weatherSeries = data[0].timeSeries[0]; // 日付・天気・風・波
      const popSeries = data[0].timeSeries[1];     // 降水確率
      const tempSeries = data[0].timeSeries[2];    // 気温

      const areaWeather = weatherSeries.areas[0];
      const areaPop = popSeries.areas[0];
      const areaTemp = tempSeries ? tempSeries.areas[0] : null;

      // 【今日】のデータをセット (index: 0)
      setDayWeather('today', 0, weatherSeries, popSeries, areaWeather, areaPop, areaTemp);
      
      // 【明日】のデータをセット (index: 1)
      setDayWeather('tomorrow', 1, weatherSeries, popSeries, areaWeather, areaPop, areaTemp);

    }).fail(function() {
      $('.js-pref-name').text('データの取得に失敗しました');
    }).always(function() {
      // 通信完了後、ローディングを消去
      $('#loading').fadeOut(300);
    });
  }

  // 今日/明日のデータを画面に埋め込む共通処理関数
  function setDayWeather(type, index, weatherSeries, popSeries, areaWeather, areaPop, areaTemp) {
    // 日付フォーマット
    const dateStr = new Date(weatherSeries.timeDefines[index]).toLocaleDateString('ja-JP', {
      month: 'long', day: 'numeric', weekday: 'short'
    });
    $(`.js-date-${type}`).text(dateStr);

    // 天気テキスト
    $(`.js-weather-main-${type}`).text(areaWeather.weathers[index]);

    // 天気画像（気象庁公式アイコン）
    if (areaWeather.weatherCodes && areaWeather.weatherCodes[index]) {
      const code = areaWeather.weatherCodes[index];
      const imgUrl = `https://www.jma.go.jp/bosai/forecast/img/${code}.png`;
      $(`.js-weather-img-${type}`).html(`<img src="${imgUrl}" alt="${areaWeather.weathers[index]}" style="width:80px;">`);
    }

    // 気温表示
    if (areaTemp && areaTemp.temps && areaTemp.temps.length > index * 2) {
      const minTemp = areaTemp.temps[index * 2] || '-';
      const maxTemp = areaTemp.temps[index * 2 + 1] || '-';
      $(`.js-temp-${type}`).text(`最高: ${maxTemp}℃ / 最低: ${minTemp}℃`);
    } else {
      $(`.js-temp-${type}`).text('気温データなし');
    }

    // 風・波
    const wind = areaWeather.winds ? areaWeather.winds[index] : '-';
    const wave = areaWeather.waves ? areaWeather.waves[index] : 'なし';
    
    // 時間帯別 降水確率の組み立て
    let popRows = '';
    if (areaPop && areaPop.pops) {
      areaPop.pops.forEach((pop, i) => {
        const popTime = new Date(popSeries.timeDefines[i]);
        const targetTime = new Date(weatherSeries.timeDefines[index]);

        // 同じ日付のデータだけ抽出
        if (popTime.getDate() === targetTime.getDate()) {
          const hour = popTime.getHours();
          const timeLabel = `${hour}時〜${hour + 6}時`;
          
          popRows += `
            <tr>
              <td>${timeLabel}</td>
              <td>${pop}%</td>
              <td>${wind}</td>
              <td>${wave}</td>
            </tr>
          `;
        }
      });
    }

    $(`.js-weather-table-${type}`).html(popRows || `<tr><td colspan="4">データなし</td></tr>`);
  }
});