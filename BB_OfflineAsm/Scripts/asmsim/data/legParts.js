﻿asmsim.data = asmsim.data || {};
(function (data) {
    function Leg(name, armor, walk, dash, weightCapacity, legType, weight, chipCapacity) {
        this.name = name;
        this.weight = weight;
        this.armor = armor;
        this.walk = walk;
        this.dash = dash;
        this.legType = legType;
        this.weightCapacity = weightCapacity;
        this.chipCapacity = chipCapacity;
    }

    data.legs = [new Leg("クーガーⅠ型", "C+", "D+", "C-", "D", "2LEG", 1000, 2.2)
, new Leg("クーガーⅡ型", "C", "B-", "C-", "D", "2LEG", 1000, 2.2)
, new Leg("クーガーS型", "C+", "D", "B", "C", "2LEG", 1050, 1.6)
, new Leg("クーガーNX", "B-", "E+", "B+", "C", "2LEG", 1120, 1.4)
, new Leg("ツェーブラ38", "C", "B-", "D", "C-", "2LEG", 1000, 2.6)
, new Leg("ツェーブラ39", "C", "A-", "D", "D+", "2LEG", 950, 2.6)
, new Leg("ツェーブラ41", "C", "C-", "C+", "C-", "2LEG", 1050, 2.4)
, new Leg("ツェーブラ48C", "C+", "B", "B-", "C-", "2LEG", 1100, 2)
, new Leg("エンフォーサーⅠ型", "C", "C+", "C-", "D+", "2LEG", 920, 2.4)
, new Leg("エンフォーサーⅡ型", "C", "D", "C-", "C+", "2LEG", 1000, 2.2)
, new Leg("エンフォーサーⅢ型", "C", "E+", "B", "C+", "2LEG", 1050, 1.5)
, new Leg("エンフォーサーⅩ型", "C+", "E", "B-", "B-", "2LEG", 1100, 1.7)
, new Leg("E.D.G.‐α", "D-", "C-", "B", "D+", "2LEG", 930, 1.8)
, new Leg("E.D.G.‐β", "D-", "B-", "B", "D+", "2LEG", 970, 1.8)
, new Leg("E.D.G.‐δ", "D-", "D+", "A-", "D+", "2LEG", 990, 1.3)
, new Leg("ディスカス・プロト", "B", "B-", "D", "B-", "2LEG", 1100, 2.4)
, new Leg("ディスカス・ダート", "C", "A+", "C+", "D+", "2LEG", 1030, 2.2)
, new Leg("ディスカス・ノヴァ", "B", "D", "C+", "B-", "2LEG", 1200, 1.9)
, new Leg("ネレイド45", "C", "B-,", "C+", "D+", "HOVER", 900, 2.2)
, new Leg("ネレイド45改", "C", "C+,", "C+", "C-", "HOVER", 880, 2.1)
, new Leg("ネレイド46", "C", "C+,", "B", "D+", "HOVER", 940, 2.2)
, new Leg("ネレイドRT", "C+", "D+,", "B", "C-", "HOVER", 980, 1.9)
, new Leg("迅牙", "D+", "A-", "C+", "C-", "2LEG", 980, 2.2)
, new Leg("迅牙・甲", "D+", "D+", "B+", "C-", "2LEG", 1020, 1.7)
, new Leg("迅牙・真", "C+", "E+", "C+", "B-", "2LEG", 1080, 2)
, new Leg("雷花", "C-", "C+", "B", "D+", "2LEG", 960, 1.8)
, new Leg("雷花・燕", "D+", "D-", "A-", "D+", "2LEG", 940, 1)
, new Leg("雷花・麗", "C", "C+", "B-", "C", "2LEG", 990, 1.8)
, new Leg("ヘヴィガードⅠ型", "A", "E+", "E", "A", "2LEG", 1200, 2.7)
, new Leg("ヘヴィガードⅢ型", "A+", "E", "E", "A+", "2LEG", 1250, 2.6)
, new Leg("ヘヴィガードⅣ型", "A", "E", "D", "A", "2LEG", 1250, 2.5)
, new Leg("ヘヴィガードG型", "A", "E+", "D-", "A+", "2LEG", 1230, 2.4)
, new Leg("ケーファー42", "B+", "D", "D", "A-", "2LEG", 1150, 2.2)
, new Leg("ケーファー44", "B", "C+", "D", "B+", "2LEG", 1100, 2.3)
, new Leg("ケーファー45", "B+", "E+", "C-", "A-", "2LEG", 1200, 2)
, new Leg("ケーファー52", "A-", "E", "C-", "A", "2LEG", 1230, 1.8)
, new Leg("ロージーR", "A+", "D+,", "E", "A", "HOVER", 1270, 2.3)
, new Leg("ロージーR+", "A+", "D,", "E", "A+", "HOVER", 1260, 2.2)
, new Leg("ロージーLM", "A+", "D,", "D", "A", "HOVER", 1230, 2.3)
, new Leg("ランドバルクⅠ型", "B", "C-", "D", "A", "2LEG", 1140, 1.6)
, new Leg("ランドバルクⅡ型", "B", "D", "D", "A+", "2LEG", 1220, 1.5)
, new Leg("ランドバルクⅣ型", "B", "E", "C", "A", "2LEG", 1270, 1.4)
, new Leg("ヤーデ54", "A-", "B-", "D-", "B+", "2LEG", 1180, 2.3)
, new Leg("ヤーデ54S", "A", "D+", "D-", "A", "2LEG", 1270, 2)
, new Leg("ヤーデ55", "A+", "C", "(D+", "B+", "2LEG", 1220, 1.8)
, new Leg("シュライクⅠ型", "D-", "B", "B+", "E", "2LEG", 750, 2)
, new Leg("シュライクⅡ型", "E", "A+", "B+", "E", "2LEG", 700, 2)
, new Leg("シュライクⅤ型", "D-", "B-", "A+", "E", "2LEG", 800, 1.4)
, new Leg("シュライクW型", "E", "S", "A", "E", "2LEG", 790, 1.6)
, new Leg("ヤクシャ", "D", "C-", "A-", "D", "2LEG", 880, 1.1)
, new Leg("ヤクシャ・改", "D-", "B-", "A-", "D", "2LEG", 850, 1.2)
, new Leg("ヤクシャ・弐", "D", "D", "A", "D", "2LEG", 940, 1)
, new Leg("セイバーⅠ型", "D-", "A+", "B", "D-", "2LEG", 770, 2)
, new Leg("セイバーⅠ型R", "D", "B", "B", "D", "2LEG", 830, 1.8)
, new Leg("セイバーⅡ型", "D", "C+", "A-", "D", "2LEG", 900, 1.4)
, new Leg("B.U.Z.-α", "E", "A+,", "B", "E", "2LEG", 700, 1.8)
, new Leg("B.U.Z.-β", "E", "B,", "B", "D-", "HOVER", 750, 1.8)
, new Leg("B.U.Z.-γ", "E", "A-,", "A-", "E", "HOVER", 720, 2)
, new Leg("フォーミュラⅡ型", "D-", "B-,", "A-", "D-", "HOVER", 850, 1.7)
, new Leg("フォーミュラⅡ型C", "D-", "C-,", "A-", "D", "HOVER", 850, 1.7)
, new Leg("フォーミュラF型", "D-", "C+,", "A+", "D-", "HOVER", 900, 1.6)
    ];
})(asmsim.data);