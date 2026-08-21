// // setting.js

// // 各天気パターン
// const WEATHER_LIST = {
//   sunny: { text: "晴れ", className: "weather-sunny", img: "img/sun.png" },
//   cloudy: { text: "曇り", className: "weather-cloudy", img: "img/cloud.png" },
//   rain: { text: "雨", className: "weather-rain", img: "img/rain.png" },
//   snow: { text: "雪", className: "weather-snow", img: "img/snow.png" },
//   thunder: { text: "雷", className: "weather-thunder", img: "img/thunder.png" },
//   fog: { text: "霧", className: "weather-fog", img: "img/fog.png" }
// };

// // 都道府県ごとの固定天気データ
// const PREF_WEATHER = {
//   "北海道": {
//     today: {
//       weather: WEATHER_LIST.snow,
//       maxTemp: -2,
//       minTemp: -8,
//       table: [
//         { time: "0-6", precip: "50％", wind: "北西の風", wave: "1メートル" },
//         { time: "6-12", precip: "60％", wind: "北西の風", wave: "1メートル" },
//         { time: "12-18", precip: "70％", wind: "北西の風", wave: "1.5メートル" },
//         { time: "18-24", precip: "80％", wind: "北西の風", wave: "1.5メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.snow,
//       maxTemp: -1,
//       minTemp: -7,
//       table: [
//         { time: "0-6", precip: "40％", wind: "北西の風", wave: "1メートル" },
//         { time: "6-12", precip: "50％", wind: "北西の風", wave: "1メートル" },
//         { time: "12-18", precip: "60％", wind: "北西の風", wave: "1.5メートル" },
//         { time: "18-24", precip: "70％", wind: "北西の風", wave: "1.5メートル" }
//       ]
//     }
//   },
//   "青森": {
//     today: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 3,
//       minTemp: -2,
//       table: [
//         { time: "0-6", precip: "20％", wind: "北の風", wave: "1メートル" },
//         { time: "6-12", precip: "30％", wind: "北の風", wave: "1メートル" },
//         { time: "12-18", precip: "40％", wind: "北の風", wave: "1.5メートル" },
//         { time: "18-24", precip: "50％", wind: "北の風", wave: "1.5メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.rain,
//       maxTemp: 5,
//       minTemp: 0,
//       table: [
//         { time: "0-6", precip: "50％", wind: "北東の風", wave: "1メートル" },
//         { time: "6-12", precip: "60％", wind: "北東の風", wave: "1メートル" },
//         { time: "12-18", precip: "70％", wind: "北東の風", wave: "1.5メートル" },
//         { time: "18-24", precip: "80％", wind: "北東の風", wave: "1.5メートル" }
//       ]
//     }
//   },
//   "岩手": {
//     today: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 4,
//       minTemp: -1,
//       table: [
//         { time: "0-6", precip: "10％", wind: "北の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "北の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "北の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "北の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 6,
//       minTemp: 1,
//       table: [
//         { time: "0-6", precip: "0％", wind: "北東の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "北東の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "20％", wind: "北東の風", wave: "1メートル" },
//         { time: "18-24", precip: "30％", wind: "北東の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "宮城": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "秋田": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "山形": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "福島": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "茨城": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "栃木": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "群馬": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "埼玉": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "千葉": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "東京": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "神奈川": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "新潟": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "富山": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "石川": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "福井": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "山梨": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "長野": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "岐阜": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "静岡": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "愛知": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "三重": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "滋賀": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "京都": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "大阪": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "兵庫": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "奈良": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "和歌山": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "鳥取": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "島根": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "岡山": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "広島": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "山口": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "徳島": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "香川": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "愛媛": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "高知": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "福岡": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "佐賀": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "長崎": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "熊本": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "大分": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "宮崎": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "鹿児島": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   },
//   "沖縄": {
//     today: {
//       weather: WEATHER_LIST.sunny,
//       maxTemp: 8,
//       minTemp: 2,
//       table: [
//         { time: "0-6", precip: "0％", wind: "南の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "10％", wind: "南の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "10％", wind: "南の風", wave: "1メートル" },
//         { time: "18-24", precip: "20％", wind: "南の風", wave: "1メートル" }
//       ]
//     },
//     tomorrow: {
//       weather: WEATHER_LIST.cloudy,
//       maxTemp: 10,
//       minTemp: 3,
//       table: [
//         { time: "0-6", precip: "10％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "6-12", precip: "20％", wind: "南西の風", wave: "0.5メートル" },
//         { time: "12-18", precip: "30％", wind: "南西の風", wave: "1メートル" },
//         { time: "18-24", precip: "40％", wind: "南西の風", wave: "1メートル" }
//       ]
//     }
//   }
// };
// 都道府県名と気象庁エリアコードの対応表
const PREF_MAP = {
  "北海": { code: "016000", name: "北海道（札幌）" },
  "青森": { code: "020000", name: "青森県" },
  "岩手": { code: "030000", name: "岩手県" },
  "宮城": { code: "040000", name: "宮城県" },
  "秋田": { code: "050000", name: "秋田県" },
  "山形": { code: "060000", name: "山形県" },
  "福島": { code: "070000", name: "福島県" },
  "茨城": { code: "080000", name: "茨城県" },
  "栃木": { code: "090000", name: "栃木県" },
  "群馬": { code: "100000", name: "群馬県" },
  "埼玉": { code: "110000", name: "埼玉県" },
  "千葉": { code: "120000", name: "千葉県" },
  "東京": { code: "130000", name: "東京都" },
  "神奈川": { code: "140000", name: "神奈川県" },
  "新潟": { code: "150000", name: "新潟県" },
  "富山": { code: "160000", name: "富山県" },
  "石川": { code: "170000", name: "石川県" },
  "福井": { code: "180000", name: "福井県" },
  "山梨": { code: "190000", name: "山梨県" },
  "長野": { code: "200000", name: "長野県" },
  "岐阜": { code: "210000", name: "岐阜県" },
  "静岡": { code: "220000", name: "静岡県" },
  "愛知": { code: "230000", name: "愛知県" },
  "三重": { code: "240000", name: "三重県" },
  "滋賀": { code: "250000", name: "滋賀県" },
  "京都": { code: "260000", name: "京都府" },
  "大阪": { code: "270000", name: "大阪府" },
  "兵庫": { code: "280000", name: "兵庫県" },
  "奈良": { code: "290000", name: "奈良県" },
  "和歌山": { code: "300000", name: "和歌山県" },
  "鳥取": { code: "310000", name: "鳥取県" },
  "島根": { code: "320000", name: "島根県" },
  "岡山": { code: "330000", name: "岡山県" },
  "広島": { code: "340000", name: "広島県" },
  "山口": { code: "350000", name: "山口県" },
  "徳島": { code: "360000", name: "徳島県" },
  "香川": { code: "370000", name: "香川県" },
  "愛媛": { code: "380000", name: "愛媛県" },
  "高知": { code: "390000", name: "高知県" },
  "福岡": { code: "400000", name: "福岡県" },
  "佐賀": { code: "410000", name: "佐賀県" },
  "長崎": { code: "420000", name: "長崎県" },
  "熊本": { code: "430000", name: "熊本県" },
  "大分": { code: "440000", name: "大分県" },
  "宮崎": { code: "450000", name: "宮崎県" },
  "鹿児島": { code: "460100", name: "鹿児島県" },
  "沖縄": { code: "471000", name: "沖縄県" }
};

// 天気コードに応じた画像ファイル名（または絵文字）を取得する関数
function getWeatherImage(code) {
  // 気象庁公式の天気アイコン画像のURL（※自分で用意した画像パスに変更可能）
  return `https://www.jma.go.jp/bosai/forecast/img/${code}.svg`;
}