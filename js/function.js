$(function() {

		// トップページのSVG地図を、都道府県ごとのリンクとして扱う
	if ($('body').hasClass('home')) {
		const prefectures = [
			'北海道', '青森', '岩手', '宮城', '秋田', '山形', '福島',
			'茨城', '栃木', '群馬', '埼玉', '千葉', '東京', '神奈川',
			'新潟', '富山', '石川', '福井', '山梨', '長野', '岐阜',
			'静岡', '愛知', '三重', '滋賀', '京都', '大阪', '兵庫',
			'奈良', '和歌山', '鳥取', '島根', '岡山', '広島', '山口',
			'徳島', '香川', '愛媛', '高知', '福岡', '佐賀', '長崎',
			'熊本', '大分', '宮崎', '鹿児島', '沖縄'
		];

		// 地図上の場所と、現在表示されている都道府県の対応
		const displayedByMap = {
			'北海道': '北海道',
			'青森': '青森',
			'秋田': '宮城',
			'岩手': '秋田',
			'山形': '山形',
			'宮城': '福島',
			'福島': '群馬',
			'茨城': '愛知',
			'栃木': '福井',
			'群馬': '石川',
			'千葉': '愛媛',
			'埼玉': '大阪',
			'東京': '山口',
			'神奈川': '佐賀',
			'新潟': '栃木',
			'長野': '京都',
			'山梨': '広島',
			'富山': '富山',
			'石川': '茨城',
			'岐阜': '島根',
			'静岡': '沖縄',
			'愛知': '鹿児島',
			'福井': '静岡',
			'滋賀': '鳥取',
			'三重': '宮崎',
			'奈良': '和歌山',
			'京都': '岐阜',
			'大阪': '奈良',
			'和歌山': '大分',
			'兵庫': '長野',
			'鳥取': '新潟',
			'岡山': '滋賀',
			'島根': '神奈川',
			'広島': '三重',
			'山口': '山梨',
			'香川': '香川',
			'徳島': '熊本',
			'愛媛': '徳島',
			'高知': '長崎',
			'福岡': '東京',
			'佐賀': '千葉',
			'長崎': '埼玉',
			'大分': '岡山',
			'熊本': '兵庫',
			'宮崎': '福岡',
			'鹿児島': '高知',
			'沖縄': '岩手'
		};

		const map = document.querySelector('.js-japan-map');
		if (!map) return;

		map.addEventListener('load', () => {
			const svgDocument = map.contentDocument;
			if (!svgDocument) return;

			const areas = Array.from(
				svgDocument.querySelectorAll('path[stroke="white"][stroke-width="2"]')
			);

			const positionedAreas = areas.map((area) => ({
				area,
				center: (() => {
					const box = area.getBBox();
					return {
						x: box.x + box.width / 2,
						y: box.y + box.height / 2
					};
				})()
			}));

			// SVGの位置順に並べる
			positionedAreas.sort((a, b) => {
				if (Math.abs(a.center.y - b.center.y) > 25) {
					return a.center.y - b.center.y;
				}
				return a.center.x - b.center.x;
			});

			positionedAreas.forEach((item, index) => {
				const mapPref = prefectures[index];
				if (!mapPref) return;

				// 「地図上の場所 → 現在表示される県」を逆にして、
				// 正しい県名を取得する
				const correctPref =
					prefectures.find((pref) => displayedByMap[pref] === mapPref) || mapPref;

				const area = item.area;

				area.style.cursor = 'pointer';
				area.setAttribute('tabindex', '0');
				area.setAttribute('role', 'link');
				area.setAttribute(
					'aria-label',
					`${correctPref}の天気予報を見る`
				);

				area.insertAdjacentHTML(
					'afterbegin',
					`<title>${correctPref}の天気予報を見る</title>`
				);

				const openWeather = () => {
					window.location.href =
						`pref.html?pref=${encodeURIComponent(correctPref)}`;
				};

				area.addEventListener('click', openWeather);

				area.addEventListener('keydown', (event) => {
					if (event.key === 'Enter' || event.key === ' ') {
						event.preventDefault();
						openWeather();
					}
				});

				area.addEventListener(
					'mouseenter',
					() => area.style.filter = 'brightness(0.85)'
				);

				area.addEventListener(
					'mouseleave',
					() => area.style.filter = ''
				);

				area.addEventListener(
					'focus',
					() => area.style.filter = 'brightness(0.85)'
				);

				area.addEventListener(
					'blur',
					() => area.style.filter = ''
				);
			});
		});
	}

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
			$(`.js-temp-${prefix}`).text(`${info.maxTemp}℃ / ${info.minTemp}℃`);

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
