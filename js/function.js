$(function() {
  // 1. URLのパラメータ (?pref=〇〇) を取得
  const urlParams = new URLSearchParams(window.location.search);
  const prefKey = urlParams.get('pref');

  // ==========================================
  // 詳細ページ（body class="pref"）での処理
  // ==========================================
  if ($('body').hasClass('pref')) {

    // ----------------------------------------
    // 【分岐1】隠しパラメータ（?pref=secret）の場合
    // ----------------------------------------
    if (prefKey === 'secret') {
		// ★画面全体を不気味な黒背景＋赤文字モードにするクラスを付与
      $('body').addClass('is-secret-mode');
      
      // MP3音声を再生する関数
      const playMp3 = function() {
        const audio = document.getElementById('js-secret-audio');
        if (audio) {
          audio.currentTime = 0;
          audio.play().catch(function(e) {
            console.log("自動再生がブロックされました:", e);
          });
        }
      };

      // 音声再生（直接 ＋ 初回操作時）
      playMp3();
      $(document).one('click touchstart', function() {
        playMp3();
      });

      // 画面テキストの書き換え
      $('.js-pref-name').text('？？？？');

      // 今日の天気
      $('.js-weather-main-today').text('コノサキ ズット アメ');
      $('.js-wind-today').text('ゼツボウ ノ カゼ');
      $('.js-temp-today').text('--℃ / --℃');
      $('.js-weather-img-today').html('<span style="font-size:2rem; color:red;">☠️</span>');

      // 明日の天気
      $('.js-weather-main-tomorrow').text('コノサキ ズット アメ');
      $('.js-wind-tomorrow').text('ゼツボウ ノ カゼ');
      $('.js-temp-tomorrow').text('--℃ / --℃');
      $('.js-weather-img-tomorrow').html('<span style="font-size:2rem; color:red;">☠️</span>');

      // 降水確率
      $('.js-rain-today, .js-rain-tomorrow').html('<td>100%</td><td>100%</td><td>100%</td><td>100%</td>');

      // ローディング解除して処理を完全に終了する
      $('#loading').fadeOut(300);
      return; 
    }

    // ----------------------------------------
    // 【分岐2】パラメータがない・またはPREF_MAPに無い場合
    // ----------------------------------------
    if (!prefKey || typeof PREF_MAP === 'undefined' || !PREF_MAP[prefKey]) {
      $('.js-pref-name').text('都道府県が選択されていません');
      $('#loading').fadeOut(300);
      return; // ★ここにも return を入れて後続処理をストップ
    }

    // ----------------------------------------
    // 【分岐3】通常の都道府県表示（気象庁API取得）
    // ----------------------------------------
    const prefInfo = PREF_MAP[prefKey];
    $('.js-pref-name').text(prefInfo.name);

    const apiUrl = `https://www.jma.go.jp/bosai/forecast/data/forecast/${prefInfo.code}.json`;

    $.ajax({
      url: apiUrl,
      type: 'GET',
      dataType: 'json'
    }).done(function(data) {
      const weatherSeries = data[0].timeSeries[0];
      const popSeries = data[0].timeSeries[1];
      const tempSeries = data[0].timeSeries[2];

      const areaWeather = findTargetArea(weatherSeries.areas, prefInfo.code);
      const areaPop = findTargetArea(popSeries.areas, prefInfo.code);
      const areaTemp = tempSeries ? findTargetArea(tempSeries.areas, prefInfo.code) : null;

      // 今日(0) / 明日(1) のデータセット
      setDayWeather('today', 0, weatherSeries, popSeries, areaWeather, areaPop, areaTemp);
      setDayWeather('tomorrow', 1, weatherSeries, popSeries, areaWeather, areaPop, areaTemp);

    }).fail(function() {
      $('.js-pref-name').text('データの取得に失敗しました');
    }).always(function() {
      $('#loading').fadeOut(300);
    });
  }

  // ==========================================
  // トップページで隠しボタンを同一画面内で発動させる場合の処理
  // ==========================================
  $('.js-secret-btn').on('click', function(e) {
    const href = $(this).attr('href');
    // 別ページへ移動するリンクになっている場合はそのまま遷移
    if (href && href !== '#' && href !== 'javascript:void(0);') {
      return;
    }

    e.preventDefault();

    const audio = document.getElementById('js-secret-audio');
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(e => console.log(e));
    }

    $('#loading').show();
    $('body').addClass('is-glitching');

    setTimeout(function() {
      $('#loading').fadeOut(300);
      $('body').removeClass('is-glitching');

      $('.js-pref-name').text('？？？？');
      $('.js-weather-main-today, .js-weather-main-tomorrow').text('キョウハ ゼッコウノ ウミワタリビヨリ');
      $('.js-wind-today, .js-wind-tomorrow').text('ゼツボウ ノ カゼ');
      $('.js-temp-today, .js-temp-tomorrow').text('--℃ / --℃');
      $('.js-weather-img-today, .js-weather-img-tomorrow').html('<span style="font-size:2rem; color:red;">☠️</span>');
      $('.js-rain-today, .js-rain-tomorrow').html('<td>100%</td><td>100%</td><td>100%</td><td>100%</td>');
    }, 500);
  });

  // ==========================================
  // 共通関数
  // ==========================================

  // エリア判定関数
  function findTargetArea(areas, code) {
    if (!areas || areas.length === 0) return null;

    let found = areas.find(a => a.area && a.area.code === code);
    if (found) return found;

    const prefPrefix = code.substring(0, 2);
    found = areas.find(a => a.area && a.area.code && a.area.code.startsWith(prefPrefix));
    if (found) return found;

    return areas[0];
  }

  // 画面データ流し込み関数
  function setDayWeather(type, index, weatherSeries, popSeries, areaWeather, areaPop, areaTemp) {
    if (!areaWeather) return;

    // 日付
    if (weatherSeries.timeDefines && weatherSeries.timeDefines[index]) {
      const dateObj = new Date(weatherSeries.timeDefines[index]);
      const dateStr = `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
      $(`.js-date-${type}`).text(dateStr);
    }

    // 天気テキスト
    if (areaWeather.weathers && areaWeather.weathers[index]) {
      const cleanWeatherText = areaWeather.weathers[index].replace(/\s+/g, ' ').trim();
      $(`.js-weather-main-${type}`).text(cleanWeatherText);
    }

    // 天気アイコン
    if (areaWeather.weatherCodes && areaWeather.weatherCodes[index]) {
      const code = areaWeather.weatherCodes[index];
      const imgUrl = `https://www.jma.go.jp/bosai/forecast/img/${code}.svg`;
      $(`.js-weather-img-${type}`).html(`
        <img src="${imgUrl}" alt="天気アイコン" onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\'no-img\'>☀️/☁️</span>';">
      `);
    }

    // 風情報
    if (areaWeather.winds && areaWeather.winds[index]) {
      const cleanWindText = areaWeather.winds[index].replace(/\s+/g, ' ').trim();
      $(`.js-wind-${type}`).text(cleanWindText);
    } else {
      $(`.js-wind-${type}`).text('---');
    }

    // 気温
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

    // 降水確率
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