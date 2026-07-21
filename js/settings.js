


// API取得 (内容は私のキー!)
const OPENWEATHER_API_KEY = "268afb369149fec720908ceb1b8c3398";



// 共通 - 都道府県の位置
const PREF_LOCATION = {

    "北海道": {
        region: "hokkaido",
        lat: 43.0642,
        lon: 141.3469,
        location: "札幌"
    },

    "青森県": {
        region: "tohoku",
        lat: 40.8246,
        lon: 140.7400,
        location: "青森"
    },

    "岩手県": {
        region: "tohoku",
        lat: 39.7036,
        lon: 141.1527,
        location: "盛岡"
    },

    "宮城県": {
        region: "tohoku",
        lat: 38.2682,
        lon: 140.8694,
        location: "仙台"
    },

    "秋田県": {
        region: "tohoku",
        lat: 39.7186,
        lon: 140.1024,
        location: "秋田"
    },

    "山形県": {
        region: "tohoku",
        lat: 38.2404,
        lon: 140.3633,
        location: "山形"
    },

    "福島県": {
        region: "tohoku",
        lat: 37.7503,
        lon: 140.4676,
        location: "福島"
    },

    "茨城県": {
        region: "kanto",
        lat: 36.3418,
        lon: 140.4468,
        location: "水戸"
    },

    "栃木県": {
        region: "kanto",
        lat: 36.5658,
        lon: 139.8836,
        location: "宇都宮"
    },

    "群馬県": {
        region: "kanto",
        lat: 36.3911,
        lon: 139.0608,
        location: "前橋"
    },

    "埼玉県": {
        region: "kanto",
        lat: 35.8570,
        lon: 139.6489,
        location: "さいたま"
    },

    "千葉県": {
        region: "kanto",
        lat: 35.6051,
        lon: 140.1233,
        location: "千葉"
    },

    "東京都": {
        region: "kanto",
        lat: 35.6895,
        lon: 139.6917,
        location: "東京"
    },

    "神奈川県": {
        region: "kanto",
        lat: 35.4478,
        lon: 139.6425,
        location: "横浜"
    },

    "新潟県": {
        region: "chubu",
        lat: 37.9026,
        lon: 139.0232,
        location: "新潟"
    },

    "富山県": {
        region: "chubu",
        lat: 36.6953,
        lon: 137.2113,
        location: "富山"
    },

    "石川県": {
        region: "chubu",
        lat: 36.5947,
        lon: 136.6256,
        location: "金沢"
    },

    "福井県": {
        region: "chubu",
        lat: 36.0652,
        lon: 136.2216,
        location: "福井"
    },

    "山梨県": {
        region: "chubu",
        lat: 35.6642,
        lon: 138.5684,
        location: "甲府"
    },

    "長野県": {
        region: "chubu",
        lat: 36.6513,
        lon: 138.1810,
        location: "長野"
    },

    "岐阜県": {
        region: "chubu",
        lat: 35.3912,
        lon: 136.7223,
        location: "岐阜"
    },

    "静岡県": {
        region: "chubu",
        lat: 34.9769,
        lon: 138.3831,
        location: "静岡"
    },

    "愛知県": {
        region: "chubu",
        lat: 35.1802,
        lon: 136.9066,
        location: "名古屋"
    },

    "三重県": {
        region: "kinki",
        lat: 34.7303,
        lon: 136.5086,
        location: "津"
    },

    "滋賀県": {
        region: "kinki",
        lat: 35.0170,
        lon: 135.8546,
        location: "大津"
    },

    "京都府": {
        region: "kinki",
        lat: 35.0116,
        lon: 135.7681,
        location: "京都"
    },

    "大阪府": {
        region: "kinki",
        lat: 34.6937,
        lon: 135.5023,
        location: "大阪"
    },

    "兵庫県": {
        region: "kinki",
        lat: 34.6901,
        lon: 135.1955,
        location: "神戸"
    },

    "奈良県": {
        region: "kinki",
        lat: 34.6851,
        lon: 135.8048,
        location: "奈良"
    },

    "和歌山県": {
        region: "kinki",
        lat: 34.2260,
        lon: 135.1675,
        location: "和歌山"
    },

    "鳥取県": {
        region: "chugoku",
        lat: 35.5011,
        lon: 134.2351,
        location: "鳥取"
    },

    "島根県": {
        region: "chugoku",
        lat: 35.4723,
        lon: 133.0505,
        location: "松江"
    },

    "岡山県": {
        region: "chugoku",
        lat: 34.6618,
        lon: 133.9350,
        location: "岡山"
    },

    "広島県": {
        region: "chugoku",
        lat: 34.3963,
        lon: 132.4596,
        location: "広島"
    },

    "山口県": {
        region: "chugoku",
        lat: 34.1858,
        lon: 131.4714,
        location: "山口"
    },

    "徳島県": {
        region: "shikoku",
        lat: 34.0658,
        lon: 134.5593,
        location: "徳島"
    },

    "香川県": {
        region: "shikoku",
        lat: 34.3401,
        lon: 134.0434,
        location: "高松"
    },

    "愛媛県": {
        region: "shikoku",
        lat: 33.8416,
        lon: 132.7657,
        location: "松山"
    },

    "高知県": {
        region: "shikoku",
        lat: 33.5597,
        lon: 133.5311,
        location: "高知"
    },

    "福岡県": {
        region: "kyushu",
        lat: 33.5904,
        lon: 130.4017,
        location: "福岡"
    },

    "佐賀県": {
        region: "kyushu",
        lat: 33.2494,
        lon: 130.2988,
        location: "佐賀"
    },

    "長崎県": {
        region: "kyushu",
        lat: 32.7503,
        lon: 129.8777,
        location: "長崎"
    },

    "熊本県": {
        region: "kyushu",
        lat: 32.8031,
        lon: 130.7079,
        location: "熊本"
    },

    "大分県": {
        region: "kyushu",
        lat: 33.2382,
        lon: 131.6126,
        location: "大分"
    },

    "宮崎県": {
        region: "kyushu",
        lat: 31.9111,
        lon: 131.4239,
        location: "宮崎"
    },

    "鹿児島県": {
        region: "kyushu",
        lat: 31.5602,
        lon: 130.5581,
        location: "鹿児島"
    },

    "沖縄県": {
        region: "okinawa",
        lat: 26.2124,
        lon: 127.6809,
        location: "那覇"
    }

};





// 共通 - 天気取得
async function getWeather(pref) {
    
    const place = PREF_LOCATION[pref];

    if (!place) {
        return null; // 場所返ってこなかった場合の処理?ぽい
    }

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${place.lat}&lon=${place.lon}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=ja`;
    const response = await fetch(url);
    const data = await response.json();

    // 自分用!
    data.location = place.location;
    data.region = place.region;

    return data;
}