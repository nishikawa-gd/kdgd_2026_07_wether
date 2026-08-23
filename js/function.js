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
      const weatherSeries = data[0].timeSeries[0]; // 日付・天気・風・波・天気コード
      const popSeries = data[0].timeSeries[1];     // 降水確率
      const tempSeries = data[0].timeSeries[2];    // 気温

      // 【修正】都道府県コード（先頭2桁）に基づく柔軟なエリア判定
      const areaWeather = findTargetArea(weatherSeries.areas, prefInfo.code);
      const areaPop = findTargetArea(popSeries.areas, prefInfo.code);
      const areaTemp = tempSeries ? findTargetArea(tempSeries.areas, prefInfo.code) : null;

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

  // エリア判定用関数（鹿児島・沖縄などのサブ地域・コード不一致に対応）
  function findTargetArea(areas, code) {
    if (!areas || areas.length === 0) return null;

    // 1. 完全一致するコードを探す
    let found = areas.find(a => a.area && a.area.code === code);
    if (found) return found;

    // 2. 先頭2桁（都道府県番号 例: 鹿児島なら"46"）が一致するエリアを探す
    const prefPrefix = code.substring(0, 2);
    found = areas.find(a => a.area && a.area.code && a.area.code.startsWith(prefPrefix));
    if (found) return found;

    // 3. 見つからなければ配列の先頭(0番目)を返す
    return areas[0];
  }

  // 今日/明日のデータを画面に埋め込む共通処理関数
  function setDayWeather(type, index, weatherSeries, popSeries, areaWeather, areaPop, areaTemp) {
    if (!areaWeather) return;

    // 1. 日付
    if (weatherSeries.timeDefines && weatherSeries.timeDefines[index]) {
      const dateObj = new Date(weatherSeries.timeDefines[index]);
      const dateStr = `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
      $(`.js-date-${type}`).text(dateStr);
    }

    // 2. 天気テキスト
    if (areaWeather.weathers && areaWeather.weathers[index]) {
      const cleanWeatherText = areaWeather.weathers[index]
        .replace(/\s+/g, ' ')
        .trim();
      $(`.js-weather-main-${type}`).text(cleanWeatherText);
    }

    // 3. 天気アイコン画像（エラー時はフォールバック表示）
    if (areaWeather.weatherCodes && areaWeather.weatherCodes[index]) {
      const code = areaWeather.weatherCodes[index];
      const imgUrl = `https://www.jma.go.jp/bosai/forecast/img/${code}.svg`;
      
      $(`.js-weather-img-${type}`).html(`
        <img src="${imgUrl}" alt="天気アイコン" onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\'no-img\'>☀️/☁️</span>';">
      `);
    }

    // 4. 風情報
    if (areaWeather.winds && areaWeather.winds[index]) {
      const cleanWindText = areaWeather.winds[index]
        .replace(/\s+/g, ' ')
        .trim();
      $(`.js-wind-${type}`).text(cleanWindText);
    } else {
      $(`.js-wind-${type}`).text('---');
    }

    // 5. 気温情報
    if (areaTemp && areaTemp.temps) {
      const temps = areaTemp.temps;
      if (type === 'today' && temps.length >= 2) {
        $(`.js-temp-today`).text(`${temps[0]}℃ / ${temps[1]}℃`);
      } else if (type === 'tomorrow' && temps.length >= 4) {
        $(`.js-temp-tomorrow`).text(`${temps[2]}℃ / ${temps[3]}℃`);
      } else {
        $(`.js-temp-${type}`).text('---');
      }
    }

    // 6. 降水確率テーブル (00-06, 06-12, 12-18, 18-24)
    if (areaPop && areaPop.pops) {
      const startIndex = index * 4;
      const dayPops = areaPop.pops.slice(startIndex, startIndex + 4);

      let tableHtml = '';
      for (let i = 0; i < 4; i++) {
        const popVal = (dayPops[i] !== undefined && dayPops[i] !== "") ? `${dayPops[i]}%` : '---';
        tableHtml += `<td>${popVal}</td>`;
      }
      $(`.js-rain-${type}`).html(tableHtml);
    }
  }
});