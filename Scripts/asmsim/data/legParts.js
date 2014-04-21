asmsim.data = asmsim.data || {};
(function (data) {
    function Leg(name, armor, walk, dash, weightCapacity, legType, bland, rank, weight, chipCapacity) {
        this.name = name;
        this.weight = weight;
        this.armor = armor;
        this.walk = walk;
        this.dash = dash;
        this.legType = legType;
        this.bland = bland;
        this.rank = rank;
        this.weightCapacity = weightCapacity;
        this.chipCapacity = chipCapacity;
    }

    data.legs = [new Leg("クーガーⅠ型", "C+", "D+", "C-", "D", "2LEG", "Cooger", 1, 950, 2.2)
    , new Leg("クーガーⅡ型", "C", "B-", "C-", "D", "2LEG", "Cooger", 2, 950, 2.2)
    , new Leg("クーガーS型", "C+", "D", "B", "C", "2LEG", "Cooger", 3, 1000, 1.6)
    , new Leg("クーガーNX", "B-", "E+", "B+", "C", "2LEG", "Cooger", 4, 1120, 1.4)
    , new Leg("ツェーブラ38", "C", "B-", "D", "C-", "2LEG", "Zebra", 1, 920, 2.6)
    , new Leg("ツェーブラ39", "C", "A-", "D", "D+", "2LEG", "Zebra", 2, 870, 2.6)
    , new Leg("ツェーブラ41", "C", "C-", "C+", "C-", "2LEG", "Zebra", 3, 960, 2.4)
    , new Leg("ツェーブラ48C", "C+", "B", "B-", "C-", "2LEG", "Zebra", 4, 1010, 2)
    , new Leg("エンフォーサーⅠ型", "C", "C+", "C-", "D+", "2LEG", "Enfocer", 1, 920, 2.4)
    , new Leg("エンフォーサーⅡ型", "C", "D", "C-", "C+", "2LEG", "Enfocer", 2, 1000, 2.2)
    , new Leg("エンフォーサーⅢ型", "C", "E+", "B", "C+", "2LEG", "Enfocer", 3, 1050, 1.5)
    , new Leg("エンフォーサーⅩ型", "C+", "E", "B-", "B-", "2LEG", "Enfocer", 4, 1100, 1.7)
    , new Leg("E.D.G.‐α", "D-", "C-", "B", "D+", "2LEG", "EDG", 1, 930, 1.8)
    , new Leg("E.D.G.‐β", "D-", "B-", "B", "D+", "2LEG", "EDG", 2, 970, 1.8)
    , new Leg("E.D.G.‐δ", "D-", "D+", "A-", "D+", "2LEG", "EDG", 3, 990, 1.3)
    , new Leg("E.D.G.‐θ", "D", "C+", "B+", "C-", "2LEG", "EDG", 4, 960, 1.6)
    , new Leg("ディスカス・プロト", "B", "B-", "D", "B-", "2LEG", "Discus", 1, 1100, 2.4)
    , new Leg("ディスカス・ダート", "C", "A+", "C+", "D+", "2LEG", "Discus", 2, 1030, 2.2)
    , new Leg("ディスカス・ノヴァ", "B", "D", "C+", "B-", "2LEG", "Discus", 3, 1200, 1.9)
    , new Leg("ディスカス・エヴォル", "B-", "C+", "B-", "C+", "2LEG", "Discus", 4, 1140, 2)
    , new Leg("ネレイド45", "C", "B-", "C+", "C-", "HOVER", "Nereid", 1, 900, 2.2)
    , new Leg("ネレイド45改", "C", "C+", "C+", "C", "HOVER", "Nereid", 2, 880, 2.1)
    , new Leg("ネレイド46", "C", "C+", "B", "C-", "HOVER", "Nereid", 3, 940, 2.2)
    , new Leg("ネレイドRT", "C+", "D+", "B", "C", "HOVER", "Nereid", 4, 980, 1.9)
    , new Leg("迅牙", "D+", "A-", "C+", "C-", "2LEG", "Jinga", 1, 980, 2.2)
    , new Leg("迅牙・甲", "D+", "D+", "B+", "C-", "2LEG", "Jinga", 2, 1020, 1.7)
    , new Leg("迅牙・真", "C+", "E+", "C+", "B-", "2LEG", "Jinga", 3, 1080, 2)
    , new Leg("迅牙・飛天", "C+", "D-", "C+", "B", "2LEG", "Jinga", 4, 1100, 1.6)
    , new Leg("雷花", "C-", "C+", "B", "D+", "2LEG", "Raika", 1, 960, 1.8)
    , new Leg("雷花・燕", "D+", "D-", "A-", "D+", "2LEG", "Raika", 2, 940, 1)
    , new Leg("雷花・麗", "C", "C+", "B-", "C", "2LEG", "Raika", 3, 990, 1.8)
    , new Leg("ヘヴィガードⅠ型", "A", "E+", "E", "A", "2LEG", "HG", 1, 1200, 2.7)
    , new Leg("ヘヴィガードⅢ型", "A+", "E", "E", "A+", "2LEG", "HG", 2, 1250, 2.6)
    , new Leg("ヘヴィガードⅣ型", "A", "E", "D", "A", "2LEG", "HG", 3, 1250, 2.5)
    , new Leg("ヘヴィガードG型", "A", "E+", "D-", "A+", "2LEG", "HG", 4, 1230, 2.4)
    , new Leg("ケーファー42", "B+", "D", "D", "A-", "2LEG", "Kafer", 1, 1150, 2.2)
    , new Leg("ケーファー44", "B", "C+", "D", "B+", "2LEG", "Kafer", 2, 1100, 2.3)
    , new Leg("ケーファー45", "B+", "E+", "C-", "A-", "2LEG", "Kafer", 3, 1200, 2)
    , new Leg("ケーファー52", "A-", "E", "C-", "A", "2LEG", "Kafer", 4, 1230, 1.8)
    , new Leg("ロージーＲ", "A+", "D+", "E", "A", "HOVER", "Rosie", 1, 1270, 2.3)
    , new Leg("ロージーＲ＋", "A+", "D", "E", "A+", "HOVER", "Rosie", 2, 1260, 2.2)
    , new Leg("ロージーLM", "A+", "D", "D", "A", "HOVER", "Rosie", 3, 1230, 2.3)
    , new Leg("ロージーEVE", "S", "D-", "E+", "A+", "HOVER", "Rosie", 4, 1350, 2.0)
    , new Leg("ランドバルクⅠ型", "B", "C-", "D", "A", "2LEG", "LANDBULK", 1, 1140, 1.6)
    , new Leg("ランドバルクⅡ型", "B", "D", "D", "A+", "2LEG", "LANDBULK", 2, 1220, 1.5)
    , new Leg("ランドバルクⅣ型", "B", "E", "C", "A", "2LEG", "LANDBULK", 3, 1270, 1.4)
    , new Leg("ヤーデ54", "A-", "B-", "D-", "B+", "2LEG", "JADE", 1, 1180, 2.3)
    , new Leg("ヤーデ54S", "A", "D+", "D-", "A", "2LEG", "JADE", 2, 1270, 2)
    , new Leg("ヤーデ55", "A+", "C", "D+", "B+", "2LEG", "JADE", 3, 1220, 1.8)
    , new Leg("シュライクⅠ型", "D-", "B", "B+", "E", "2LEG", "Shrike", 1, 750, 2)
    , new Leg("シュライクⅡ型", "E", "A+", "B+", "E", "2LEG", "Shrike", 2, 700, 2)
    , new Leg("シュライクⅤ型", "D-", "B-", "A+", "E", "2LEG", "Shrike", 3, 800, 1.4)
    , new Leg("シュライクW型", "E", "S", "A", "E", "2LEG", "Shrike", 4, 790, 1.6)
    , new Leg("ヤクシャ", "D", "C-", "A-", "D", "2LEG", "YAKSHA", 1, 880, 1.1)
    , new Leg("ヤクシャ・改", "D-", "B-", "A-", "D", "2LEG", "YAKSHA", 2, 850, 1.2)
    , new Leg("ヤクシャ・弐", "D", "D", "A", "D", "2LEG", "YAKSHA", 3, 940, 1)
    , new Leg("セイバーⅠ型", "D-", "A+", "B", "D-", "2LEG", "Saber", 1, 770, 2)
    , new Leg("セイバーⅠ型R", "D", "B", "B", "D", "2LEG", "Saber", 2, 830, 1.8)
    , new Leg("セイバーⅡ型", "D", "C+", "A-", "D", "2LEG", "Saber", 3, 900, 1.4)
    , new Leg("B.U.Z.-α", "E", "A+", "B", "E", "2LEG", "BUZ", 1, 700, 1.8)
    , new Leg("B.U.Z.-β", "E", "B", "B", "D-", "HOVER", "BUZ", 2, 750, 1.8)
    , new Leg("B.U.Z.-γ", "E", "A-", "A-", "E", "HOVER", "BUZ", 3, 720, 2)
    , new Leg("フォーミュラⅡ型", "D-", "B-", "A-", "D-", "HOVER", "Formula", 1, 850, 1.7)
    , new Leg("フォーミュラⅡ型C", "D-", "C-", "A-", "D", "HOVER", "Formula", 2, 850, 1.7)
    , new Leg("フォーミュラF型", "D-", "C+", "A+", "D-", "HOVER", "Formula", 3, 900, 1.6)
    , new Leg("アスラ", "E", "B", "A+", "E", "2LEG", "ASURA", 1, 750, 1)
    , new Leg("アスラ・弐", "E", "C+", "A+", "E+", "2LEG", "ASURA", 2, 780, 0.9)
    , new Leg("アスラ・参", "E", "C+", "S", "E", "2LEG", "ASURA", 3, 870, 0.7)
    , new Leg("ジーシェン", "A-", "C-", "D-", "A-", "2LEG","JIXIEN", 1, 1180, 2.6)
    , new Leg("ジーシェン・フー", "B", "C", "C-", "B+", "2LEG","JIXIEN", 2, 1100, 1.6)
    , new Leg("ジーシェン・シー", "A-", "D", "D", "A", "2LEG","JIXIEN", 3, 1200, 2.1)];

})(asmsim.data);
