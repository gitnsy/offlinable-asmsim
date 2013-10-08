asmsim.data = asmsim.data || {};
(function (data) {
    function Body(name, armor, boosterGen, spGen, areaChange, weight, chipCapacity) {
        this.name = name;
        this.armor = armor;
        this.boosterGen = boosterGen;
        this.spGen = spGen;
        this.areaChange = areaChange;
        this.weight = weight;
        this.chipCapacity = chipCapacity;
    }

    data.bodys = [new Body("クーガーⅠ型", "C+", "C+", "D+", "C+", 1250, 2)
, new Body("クーガーⅡ型", "C+", "B", "D+", "C+", 1300, 2)
, new Body("クーガーS型", "B", "C+", "C+", "C+", 1320, 1.5)
, new Body("クーガーNX", "B-", "B+", "D", "B-", 1350, 2.2)
, new Body("ツェーブラ38", "C", "C-", "C", "C+", 1150, 2)
, new Body("ツェーブラ39", "C", "A-", "D", "C+", 1200, 1.9)
, new Body("ツェーブラ41", "C+", "E+", "A-", "C+", 1250, 2.1)
, new Body("ツェーブラ48C", "C", "B", "C-", "C+", 1280, 2.3)
, new Body("エンフォーサーⅠ型", "C", "B", "D+", "C+", 1150, 1.8)
, new Body("エンフォーサーⅡ型", "B", "B-", "D+", "C+", 1300, 1.9)
, new Body("エンフォーサーⅢ型", "C", "A+", "E+", "C+", 1250, 2.4)
, new Body("エンフォーサーX型", "B-", "B-", "D-", "B+", 1280, 2.3)
, new Body("E.D.G.-α", "D-", "D", "B", "A+", 1250, 2.6)
, new Body("E.D.G.-β", "D-", "C+", "C", "A+", 1280, 2.7)
, new Body("E.D.G.-δ", "D", "E", "A+", "A+", 1250, 2.4)
, new Body("ディスカス・プロト", "B", "C-", "C+", "C+", 1300, 1.7)
, new Body("ディスカス・ダート", "C+", "B-", "D+", "B-", 1260, 2.1)
, new Body("ディスカス・ノヴァ", "B+", "D+", "B+", "C+", 1380, 1.7)
, new Body("ネレイド45", "C", "B", "D", "B+", 1200, 2)
, new Body("ネレイド45改", "C", "C+", "C", "B+", 1220, 1.9)
, new Body("ネレイド46", "D+", "A-", "D", "B+", 1260, 2.5)
, new Body("ネレイドRT", "C+", "C+", "D", "B+", 1290, 2.9)
, new Body("迅牙", "D+", "C-", "C+", "B+", 1190, 2.1)
, new Body("迅牙・甲", "C+", "C+", "C", "C+", 1260, 1.9)
, new Body("迅牙・真", "C+", "D+", "B", "B+", 1330, 2.2)
, new Body("雷花", "C-", "C+", "C-", "B-", 1130, 2.3)
, new Body("雷花・燕", "D+", "C", "B-", "B-", 1090, 1.8)
, new Body("雷花・麗", "C+", "A", "D", "B-", 1240, 1.8)
, new Body("へヴィガードⅠ型", "A", "C+", "C", "E", 1430, 1.7)
, new Body("へヴィガードⅢ型", "A+", "B", "D+", "E", 1550, 1.9)
, new Body("へヴィガードⅣ型", "A", "A-", "D+", "E", 1500, 2)
, new Body("へヴィガードG型", "A+", "C", "C+", "E", 1570, 2)
, new Body("ケーファー42", "B+", "B-", "C-", "D", 1380, 1.9)
, new Body("ケーファー44", "B+", "C+", "C+", "D", 1420, 1.8)
, new Body("ケーファー45", "B+", "A", "D", "D", 1450, 2.3)
, new Body("ケーファー52", "A-", "C", "B-", "D", 1500, 2.2)
, new Body("ロージーR", "A+", "C+", "C", "D", 1560, 1.7)
, new Body("ロージーR+", "A+", "D", "B+", "D", 1580, 1.7)
, new Body("ロージーLM", "A+", "A+", "E+", "C-", 1530, 1.9)
, new Body("ランドバルクⅠ型", "B", "B", "D+", "C+", 1340, 1.9)
, new Body("ランドバルクⅡ型", "B", "A-", "E+", "B+", 1370, 2.1)
, new Body("ランドバルクⅣ型", "B+", "C-", "C-", "B+", 1400, 2.3)
, new Body("ヤーデ54", "A-", "C+", "C-", "C+", 1380, 1.8)
, new Body("ヤーデ54S", "A", "B+", "D-", "D", 1490, 2.3)
, new Body("ヤーデ55", "A+", "C+", "D", "C+", 1400, 1.7)
, new Body("シュライクⅠ型", "E", "C-", "D", "A+", 1000, 3)
, new Body("シュライクⅡ型", "E", "B", "E", "A+", 1030, 3.1)
, new Body("シュライクⅤ型", "D-", "C-", "C", "A+", 1100, 2.9)
, new Body("シュライクW型", "D-", "B", "D-", "S", 1130, 2.8)
, new Body("ヤクシャ", "D", "B", "D+", "B+", 1150, 2.3)
, new Body("ヤクシャ・改", "D-", "A+", "E+", "B+", 1200, 2.6)
, new Body("ヤクシャ・弐", "D", "B-", "C", "B+", 1180, 2.2)
, new Body("セイバーⅠ型", "D-", "B-", "D", "A+", 1130, 2.9)
, new Body("セイバーⅠ型R", "D-", "C+", "C", "A-", 1150, 2.7)
, new Body("セイバーⅡ型", "D-", "A-", "E+", "A+", 1180, 3)
, new Body("B.U.Z.-α", "E", "B-", "E+", "A+", 980, 2.8)
, new Body("B.U.Z.-β", "E", "C-", "C", "A-", 1000, 2.5)
, new Body("B.U.Z.-γ", "E", "A+", "E", "A+", 1060, 2.9)
, new Body("フォーミュラⅡ型", "D-", "C-", "C+", "A-", 1140, 2.5)
, new Body("フォーミュラⅡ型C", "D-", "B", "D+", "A-", 1160, 2.7)
, new Body("フォーミュラF型", "D+", "E+", "B+", "A-", 1200, 2.4)];

})(asmsim.data);