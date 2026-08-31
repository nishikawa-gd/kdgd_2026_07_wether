// setting.js

// 各天気パターン
const WEATHER_LIST = {
  sunny: { text: "晴れ", className: "weather-sunny", img: "img/sunny.svg"  },
  cloudy: { text: "曇り", className: "weather-cloudy", img: "img/cloudy.svg" },
  rain: { text: "雨", className: "weather-rain", img: "img/rain.svg" },
  snow: { text: "雪", className: "weather-snow", img: "img/snow.svg" },
  thunder: { text: "雷", className: "weather-thunder", img: "img/thunder.svg" },
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
        { time: "0-6", precip: "50％", wind: "北西の風", wave: "1メートル" },
        { time: "6-12", precip: "60％", wind: "北西の風", wave: "1メートル" },
        { time: "12-18", precip: "70％", wind: "北西の風", wave: "1.5メートル" },
        { time: "18-24", precip: "80％", wind: "北西の風", wave: "1.5メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.snow,
      maxTemp: -1,
      minTemp: -7,
      table: [
        { time: "0-6", precip: "40％", wind: "北西の風", wave: "1メートル" },
        { time: "6-12", precip: "50％", wind: "北西の風", wave: "1メートル" },
        { time: "12-18", precip: "60％", wind: "北西の風", wave: "1.5メートル" },
        { time: "18-24", precip: "70％", wind: "北西の風", wave: "1.5メートル" }
      ]
    }
  },
  "青森県": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 3,
      minTemp: -2,
      table: [
        { time: "0-6", precip: "20％", wind: "北の風", wave: "1メートル" },
        { time: "6-12", precip: "30％", wind: "北の風", wave: "1メートル" },
        { time: "12-18", precip: "40％", wind: "北の風", wave: "1.5メートル" },
        { time: "18-24", precip: "50％", wind: "北の風", wave: "1.5メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.rain,
      maxTemp: 5,
      minTemp: 0,
      table: [
        { time: "0-6", precip: "50％", wind: "北東の風", wave: "1メートル" },
        { time: "6-12", precip: "60％", wind: "北東の風", wave: "1メートル" },
        { time: "12-18", precip: "70％", wind: "北東の風", wave: "1.5メートル" },
        { time: "18-24", precip: "80％", wind: "北東の風", wave: "1.5メートル" }
      ]
    }
  },
  "岩手県": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 4,
      minTemp: -1,
      table: [
        { time: "0-6", precip: "10％", wind: "北の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "北の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "北の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "北の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 6,
      minTemp: 1,
      table: [
        { time: "0-6", precip: "0％", wind: "北東の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "北東の風", wave: "0.5メートル" },
        { time: "12-18", precip: "20％", wind: "北東の風", wave: "1メートル" },
        { time: "18-24", precip: "30％", wind: "北東の風", wave: "1メートル" }
      ]
    }
  },
  "宮城県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "秋田県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "山形県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "福島県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "茨城県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "栃木県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "群馬県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "埼玉県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "千葉県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "東京都": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "神奈川県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "新潟県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "富山県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "石川県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "福井県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "山梨県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "長野県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "岐阜県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "静岡県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "愛知県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "三重県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "滋賀県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "京都府": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "大阪府": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "兵庫県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "奈良県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "和歌山県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "鳥取県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "島根県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "岡山県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "広島県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "山口県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "徳島県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "香川県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "愛媛県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "高知県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "福岡県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "佐賀県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "長崎県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "熊本県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "大分県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "宮崎県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "鹿児島県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  },
  "沖縄県": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 8,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
        { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
        { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
        { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 10,
      minTemp: 3,
      table: [
        { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
        { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
        { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
        { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
      ]
    }
  }
};
