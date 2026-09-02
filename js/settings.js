// setting.js

// 各天気パターン
const WEATHER_LIST = {
  sunny: { text: "晴れ", className: "weather-sunny", img: "img/sun.png" },
  cloudy: { text: "曇り", className: "weather-cloudy", img: "img/cloud.png" },
  rain: { text: "雨", className: "weather-rain", img: "img/rain.png" },
  snow: { text: "雪", className: "weather-snow", img: "img/snow.png" },
  thunder: { text: "雷", className: "weather-thunder", img: "img/thunder.png" },
  fog: { text: "霧", className: "weather-fog", img: "img/fog.png" }
};

// 都道府県ごとの固定天気データ
const PREF_WEATHER = {
  "北海道": {
    today: {
      weather: WEATHER_LIST.snow,
      maxTemp: -2,
      minTemp: -8,
      table: [
        { time: "0-6", precip: "50％", wind: "北西の風", wave: "1m" },
        { time: "6-12", precip: "60％", wind: "北西の風", wave: "1m" },
        { time: "12-18", precip: "70％", wind: "北西の風", wave: "1.5m" },
        { time: "18-24", precip: "80％", wind: "北西の風", wave: "1.5m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.snow,
      maxTemp: -1,
      minTemp: -7,
      table: [
        { time: "0-6", precip: "40％", wind: "北西の風", wave: "1m" },
        { time: "6-12", precip: "50％", wind: "北西の風", wave: "1m" },
        { time: "12-18", precip: "60％", wind: "北西の風", wave: "1.5m" },
        { time: "18-24", precip: "70％", wind: "北西の風", wave: "1.5m" }
      ]
    }
  },
  "青森": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 3,
      minTemp: -2,
      table: [
        { time: "0-6", precip: "20％", wind: "北の風", wave: "1m" },
        { time: "6-12", precip: "30％", wind: "北の風", wave: "1m" },
        { time: "12-18", precip: "40％", wind: "北の風", wave: "1.5m" },
        { time: "18-24", precip: "50％", wind: "北の風", wave: "1.5m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.rain,
      maxTemp: 5,
      minTemp: 0,
      table: [
        { time: "0-6", precip: "50％", wind: "北東の風", wave: "1m" },
        { time: "6-12", precip: "60％", wind: "北東の風", wave: "1m" },
        { time: "12-18", precip: "70％", wind: "北東の風", wave: "1.5m" },
        { time: "18-24", precip: "80％", wind: "北東の風", wave: "1.5m" }
      ]
    }
  },
  "岩手": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 4,
      minTemp: -1,
      table: [
        { time: "0-6", precip: "10％", wind: "北の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "北の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "北の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "北の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 6,
      minTemp: 1,
      table: [
        { time: "0-6", precip: "0％", wind: "北東の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "北東の風", wave: "0.5m" },
        { time: "12-18", precip: "20％", wind: "北東の風", wave: "1m" },
        { time: "18-24", precip: "30％", wind: "北東の風", wave: "1m" }
      ]
    }
  },
  "宮城": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "秋田": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "山形": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "福島": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "茨城": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "栃木": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "群馬": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "埼玉": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "千葉": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "東京": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "神奈川": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "新潟": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "富山": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "石川": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "福井": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "山梨": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "長野": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "岐阜": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "静岡": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "愛知": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "三重": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "滋賀": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "京都": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "大阪": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "兵庫": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "奈良": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "和歌山": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "鳥取": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "島根": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "岡山": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "広島": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "山口": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "徳島": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "香川": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "愛媛": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "高知": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "福岡": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "佐賀": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "長崎": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "熊本": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "大分": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "宮崎": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "鹿児島": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  },
  "沖縄": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1m" }
      ]
    }
  }
};




