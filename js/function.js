$(function () {



    if (!$('body').hasClass('pref')) {
        return;
    }



    // URL取得
    const urlParams = new URLSearchParams(window.location.search);
    const pref = urlParams.get('pref');
    const todayDate = new Date();
    const tomorrowDate = new Date();
    const dayafterDate = new Date();

    tomorrowDate.setDate(todayDate.getDate() + 1);
    dayafterDate.setDate(todayDate.getDate() + 2);

    const dayNames = [
        "日",
        "月",
        "火",
        "水",
        "木",
        "金",
        "土"
    ];



    // 共通 - ファンクション
    function formatDate(date) {
        return `${date.getMonth() + 1}月${date.getDate()}日 (${dayNames[date.getDay()]})`;
    }

    function formatHour(date) {
        return `${date.getHours()}時`;
    }



    getWeather(pref).then(data => {


        if (!data) {
            $('.today-weather, .tomorrow-weather, .dayaftertomorrow-weather')
                .addClass("weather-error")
                .html(`<p>天気情報がありません</p>`);
            return;
        }



        // テキスト - 日付/時間まわり
        $(".js-date-today")
        .text(formatDate(todayDate));

        $(".js-time-today")
        .text(formatHour(todayDate));

        $(".js-date-tomorrow")
        .text(formatDate(tomorrowDate));

        $(".js-date-dayaftertomorrow")
        .text(formatDate(dayafterDate));



        // テキスト - 県名
        $(".js-pref-name")
        .text(pref)
        .addClass(`region-${data.region}`);

        $(".js-place-name")
        .text(data.location);



        // 天気アイコン
        function getWeatherImage(icon) {

            if (icon.startsWith("01")) {
                return "../img/pref/p-whether-sun.png"; // 晴れ
            }

            if (icon.startsWith("02")) {
                return "../img/pref/p-whether-cloud-and-sun.png"; // 曇り時々晴れ
            }

            if (icon.startsWith("03") || icon.startsWith("04") || icon.startsWith("50")) {
                return "../img/pref/p-whether-cloud.png"; // 曇り・霧
            }

            if (icon.startsWith("09")) {
                return "../img/pref/p-whether-cloud-and-rain.png"; // 曇り時々雨
            }

            if (icon.startsWith("10")) {
                return "../img/pref/p-whether-sun-and-rain.png"; // 晴れ時々雨
            }

            if (icon.startsWith("11")) {
                return "../img/pref/p-whether-thunder.png"; // 雷
            }

            if (icon.startsWith("13")) {
                return "../img/pref/p-whether-snow.png"; // 雪
            }

            // 万が一どれにも当てはまらなかった時は曇り!
            return "../img/pref/p-whether-cloud.png";
        }



        // 今日 - xxx
        $(".js-temp-today")
        .text(
            Math.round(data.list[0].main.temp) + "℃"
        );

        $(".js-weather-img-today")
        .html(
            `<img src="${getWeatherImage(data.list[0].weather[0].icon)}">`
        );



        // 今日 - 3時間予報（0〜7個くらい）から探す
        const todayList = data.list.slice(0, 8);

        const maxTemp = Math.max(
            ...todayList.map(item => item.main.temp)
        );

        const minTemp = Math.min(
            ...todayList.map(item => item.main.temp)
        );



        // 今日 - 最高気温/最低気温
        $(".js-temp-max-today")
        .text(
            Math.round(maxTemp) + "℃"
        );

        $(".js-temp-min-today")
        .text(
            Math.round(minTemp) + "℃"
        );



        // 明日 - 気温/天気
        const tomorrow = data.list[8];

        $(".js-temp-tomorrow")
        .text(
            Math.round(tomorrow.main.temp) + "℃"
        );

        $(".js-weather-img-tomorrow")
        .html(
            `<img src="${getWeatherImage(tomorrow.weather[0].icon)}">`
        );



        // 明後日 - 気温/天気
        const dayafter = data.list[16];

        $(".js-temp-dayaftertomorrow")
        .text(
            Math.round(dayafter.main.temp) + "℃"
        );

        $(".js-weather-img-dayaftertomorrow")
        .html(
            `<img src="${getWeatherImage(dayafter.weather[0].icon)}">`
        );



        // 降水確率 (%変換)
        let rain = Math.round(
            data.list[0].pop * 100
        );



        // テーブル
        $(".js-weather-table-today")
        .html(
            `<tr>
            <th>時間帯</th>
            <td>現在</td>
            </tr>
            
            <tr>
            <th>降水確率</th>
            <td>${rain}%</td>
            </tr>
            
            <tr>
            <th>風</th>
            <td>${data.list[0].wind.speed}m/s</td>
            </tr>
            
            <tr>
            <th>波</th>
            <td>取得不可</td>
            </tr>
            `
        );
    });
});