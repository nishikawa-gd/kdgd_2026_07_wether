// $(function() {

// 	// bodyにhomeクラスがある場合の処理
// 	if ($('body').hasClass('pref')) {
// 		// URLパラメータから都道府県名を取得
// 		const urlParams = new URLSearchParams(window.location.search);
// 		// 取得できなかった場合は「不明」を設定
// 		const pref = urlParams.get('pref') || "不明";

// 		// 都道府県名を表示
// 		$('.js-pref-name').text(pref);

// 		// settings.jsで定義したPREF_WEATHERからパラメーターで指定された都道府県の天気情報を取得
// 		const data = PREF_WEATHER[pref];

// 		// 天気情報がない場合の処理
// 		if (!data) {
// 			$('.today-weather, .tomorrow-weather').html('<p>天気情報が登録されていません。</p>');
// 			return;
// 		}

// 		// 日付表示用の配列
// 		const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
// 		// 今日と明日の日付オブジェクトを作成
// 		const today = new Date();
// 		// 明日の日付オブジェクトを作成
// 		const tomorrow = new Date();
// 		// 明日の日付を設定
// 		tomorrow.setDate(today.getDate() + 1);

// 		// 日付を「M月D日 (曜)」の形式でフォーマットする関数
// 		const formatDate = (d) => `${d.getMonth()+1}月${d.getDate()}日 (${dayNames[d.getDay()]})`;

// 		// 天気情報を画面に表示する関数("today"または"tomorrow"をprefixに指定, dateObjに日付オブジェクト, infoに天気情報を指定)
// 		const renderWeather = (prefix, dateObj, info) => {
			
// 			// 日付を表示
// 			$(`.js-date-${prefix}`).text(formatDate(dateObj));
			
// 			// 天気情報を表示
// 			$(`.js-weather-main-${prefix}`)
// 				.text(info.weather.text)
// 				.attr('class', `js-weather-main-${prefix} ${info.weather.className}`);
			
// 			// 気温と天気画像を表示
// 			$(`.js-temp-${prefix}`).text(`${info.maxTemp}℃ / ${info.minTemp}℃`);

// 			// 天気画像を表示
// 			$(`.js-weather-img-${prefix}`).html(`<img src="${info.weather.img}" alt="${info.weather.text}" width="50">`);

// 			// 詳細情報の表を表示
// 			const $table = $(`.js-weather-table-${prefix}`);

// 			// 表の中身をクリア
// 			$table.empty();

// 			// 表のヘッダー行を追加
// 			info.table.forEach(row => {
// 				const $tr = $('<tr>');
// 				$tr.append(`<td>${row.time}</td>`);
// 				$tr.append(`<td>${row.precip}</td>`);
// 				$tr.append(`<td>${row.wind}</td>`);
// 				$tr.append(`<td>${row.wave}</td>`);
// 				$table.append($tr);
// 			});
// 		};


// 		// 今日と明日の天気情報を表示
// 		renderWeather("today", today, data.today);
// 		renderWeather("tomorrow", tomorrow, data.tomorrow);
// 	}
// });
$(function() {
  // bodyに class="pref" がある場合に実行
  if ($('body').hasClass('pref')) {
    
    // URLのパラメータ (?pref=〇〇) を取得
    const urlParams = new URLSearchParams(window.location.search);
    const prefKey = urlParams.get('pref');

    if (!prefKey || !PREF_MAP[prefKey]) {
      $('.js-pref-name').text('都道府県が選択されていません');
      return;
    }

    const prefInfo = PREF_MAP[prefKey];
    $('.js-pref-name').text(prefInfo.name);

    // 気象庁API
    const apiUrl = `https://www.jma.go.jp/bosai/forecast/data/forecast/${prefInfo.code}.json`;

    $.ajax({
      url: apiUrl,
      type: 'GET',
      dataType: 'json'
    }).done(function(data) {
      // 1. 基本データ抽出
      const weatherSeries = data[0].timeSeries[0]; // 日付・天気
      const popSeries = data[0].timeSeries[1];     // 降水確率
      const tempSeries = data[0].timeSeries[2];    // 気温

      const areaWeather = weatherSeries.areas[0];
      const areaPop = popSeries.areas[0];
      const areaTemp = tempSeries ? tempSeries.areas[0] : null;

      // 【今日】のデータをセット
      setDayWeather('today', 0, weatherSeries, areaWeather, areaPop, areaTemp);
      
      // 【明日】のデータをセット
      setDayWeather('tomorrow', 1, weatherSeries, areaWeather, areaPop, areaTemp);

    }).fail(function() {
      $('.js-pref-name').text('データの取得に失敗しました');
    });
  }

  // 今日/明日のデータを画面に埋め込む共通処理関数
  function setDayWeather(type, index, weatherSeries, areaWeather, areaPop, areaTemp) {
    // 日付
    const dateStr = new Date(weatherSeries.timeDefines[index]).toLocaleDateString('ja-JP', {
      month: 'long', day: 'numeric', weekday: 'short'
    });
    $(`.js-date-${type}`).text(dateStr);

    // 天気テキスト
    $(`.js-weather-main-${type}`).text(areaWeather.weathers[index]);

    // 天気画像
    if (areaWeather.weatherCodes && areaWeather.weatherCodes[index]) {
      const imgUrl = getWeatherImage(areaWeather.weatherCodes[index]);
      $(`.js-weather-img-${type}`).html(`<img src="${imgUrl}" alt="天気アイコン" style="width:64px;">`);
    }

    // 気温（最低 / 最高）
    if (areaTemp && areaTemp.temps) {
      // 気象庁データの配列形式に合わせて調整
      const minTemp = areaTemp.temps[index * 2] || '-';
      const maxTemp = areaTemp.temps[index * 2 + 1] || '-';
      $(`.js-temp-${type}`).text(`最高: ${maxTemp}℃ / 最低: ${minTemp}℃`);
    } else {
      $(`.js-temp-${type}`).text('気温データなし');
    }

    // テーブル（時間帯別の降水確率・風・波）の組み立て
    const wind = areaWeather.winds ? areaWeather.winds[index] : '-';
    const wave = areaWeather.waves ? areaWeather.waves[index] : 'なし';
    
    // 対象日の降水確率（時系列）を取得
    let popRows = '';
    areaPop.pops.forEach((pop, i) => {
      // 該当する日付の時間帯だけをピックアップ
      const popTime = new Date(popSeries.timeDefines[i]);
      const targetTime = new Date(weatherSeries.timeDefines[index]);

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

    $(`.js-weather-table-${type}`).html(popRows || `<tr><td colspan="4">データなし</td></tr>`);
  }
});