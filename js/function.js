$(function() {

	// bodyにhomeクラスがある場合の処理
	if ($('body').hasClass('pref')) {
		// URLパラメータから都道府県名を取得
		const urlParams = new URLSearchParams(window.location.search);
		// 取得できなかった場合は「不明」を設定
		const pref = urlParams.get('pref') || "不明";

		// 都道府県名を表示
		$('.js-pref-name').text(pref);

		// settings.jsで定義したPREF_WEATHERからパラメーターで指定された都道府県の天気情報を取得
		const data = PREF_WEATHER[pref];

		// 天気情報がない場合の処理
		if (!data) {
			$('.today-weather, .tomorrow-weather').html('<p>天気情報が登録されていません。</p>');
			return;
		}

		// 日付表示用の配列
		const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
		// 今日と明日の日付オブジェクトを作成
		const today = new Date();
		// 明日の日付オブジェクトを作成
		const tomorrow = new Date();
		// 明日の日付を設定
		tomorrow.setDate(today.getDate() + 1);

		// 日付を「M月D日 (曜)」の形式でフォーマットする関数
		const formatDate = (d) => `${d.getMonth()+1}月${d.getDate()}日 (${dayNames[d.getDay()]})`;

		// 天気情報を画面に表示する関数("today"または"tomorrow"をprefixに指定, dateObjに日付オブジェクト, infoに天気情報を指定)
		const renderWeather = (prefix, dateObj, info) => {
			
			// 日付を表示
			$(`.js-date-${prefix}`).text(formatDate(dateObj));
			
			// 天気情報を表示
			$(`.js-weather-main-${prefix}`)
				.text(info.weather.text)
				.attr('class', `js-weather-main-${prefix} ${info.weather.className}`);
			
			// 気温と天気画像を表示
			// $(`.js-temp-${prefix}`).text(`${info.maxTemp}℃ / ${info.minTemp}℃`);
			$(`.js-temp-${prefix}`).html(`
				<span class="max-temp">最高 ${info.maxTemp}℃</span>
				<span class="min-temp">最低 ${info.maxTemp}℃</span>
			`)

			// 天気画像を表示
			$(`.js-weather-img-${prefix}`).html(`<img src="${info.weather.img}" alt="${info.weather.text}" width="50">`);

			// 詳細情報の表を表示
			const $table = $(`.js-weather-table-${prefix}`);

			// 表の中身をクリア
			$table.empty();

			// 表のヘッダー行を追加
			info.table.forEach(row => {
				const $tr = $('<tr>');
				$tr.append(`<td>${row.time}</td>`);
				$tr.append(`<td>${row.precip}</td>`);
				$tr.append(`<td>${row.wind}</td>`);
				$tr.append(`<td>${row.wave}</td>`);
				$table.append($tr);
			});
		};


		// 今日と明日の天気情報を表示
		renderWeather("today", today, data.today);
		renderWeather("tomorrow", tomorrow, data.tomorrow);
	}
});