﻿asmsim.data = asmsim.data || {};
(function (data) {
    function Body(name, armor, boosterGen, spGen, areaChange, bland, rank, weight, chipCapacity) {
        this.name = name;
        this.armor = armor;
        this.boosterGen = boosterGen;
        this.spGen = spGen;
        this.areaChange = areaChange;
        this.bland = bland;
        this.rank = rank;
        this.weight = weight;
        this.chipCapacity = chipCapacity;
    }
    data.bodys = [new Body("クーガーⅠ型", "C+", "C+", "D+", "C+", "Cooger", 1, 1250, 2)
        , new Body("クーガーⅡ型", "C+", "B", "D+", "C+", "Cooger", 2, 1300, 2)
        , new Body("クーガーS型", "B", "C+", "C+", "C+", "Cooger", 3, 1320, 1.5)
        , new Body("クーガーNX", "B-", "B+", "D", "B-", "Cooger", 4, 1350, 2.2)
        , new Body("ツェーブラ38", "C", "C-", "C", "C+", "Zebra", 1, 1150, 2)
        , new Body("ツェーブラ39", "C", "A-", "D", "C+", "Zebra", 2, 1200, 1.9)
        , new Body("ツェーブラ41", "C+", "E+", "A-", "C+", "Zebra", 3, 1250, 2.1)
        , new Body("ツェーブラ48C", "C", "B", "C-", "C+", "Zebra", 4, 1280, 2.3)
        , new Body("エンフォーサーⅠ型", "C", "B", "D+", "C+", "Enfocer", 1, 1150, 1.8)
        , new Body("エンフォーサーⅡ型", "B", "B-", "D+", "C+", "Enfocer", 2, 1300, 1.9)
        , new Body("エンフォーサーⅢ型", "C", "A+", "E+", "C+", "Enfocer", 3, 1250, 2.4)
        , new Body("エンフォーサーX型", "B-", "B-", "D-", "B+", "Enfocer", 4, 1280, 2.3)
        , new Body("E.D.G.-α", "D-", "D", "B", "A+", "EDG", 1, 1250, 2.6)
        , new Body("E.D.G.-β", "D-", "C+", "C", "A+", "EDG", 2, 1280, 2.7)
        , new Body("E.D.G.-δ", "D", "E", "A+", "A+", "EDG", 3, 1250, 2.4)
        , new Body("E.D.G.-θ", "D+", "B", "C-", "A+", "EDG", 4, 1200, 2)
        , new Body("ディスカス・プロト", "B", "C-", "C+", "C+", "Discus", 1, 1300, 1.7)
        , new Body("ディスカス・ダート", "C+", "B-", "D+", "B-", "Discus", 2, 1260, 2.1)
        , new Body("ディスカス・ノヴァ", "B+", "D+", "B+", "C+", "Discus", 3, 1380, 1.7)
        , new Body("ディスカス・エヴォル", "B", "B+", "C", "C+", "Discus", 4, 1330, 1.7)
        , new Body("ネレイド45", "C", "B", "D", "B+", "Nereid", 1, 1200, 2)
        , new Body("ネレイド45改", "C", "C+", "C", "B+", "Nereid", 2, 1220, 1.9)
        , new Body("ネレイド46", "D+", "A-", "D", "B+", "Nereid", 3, 1260, 2.5)
        , new Body("ネレイドRT", "C+", "C+", "D", "B+", "Nereid", 4, 1290, 2.9)
        , new Body("迅牙", "D+", "C-", "C+", "B+", "Jinga", 1, 1190, 2.1)
        , new Body("迅牙・甲", "C+", "C+", "C", "C+", "Jinga", 2, 1260, 1.9)
        , new Body("迅牙・真", "C+", "D+", "B", "B+", "Jinga", 3, 1330, 2.2)
        , new Body("迅牙・飛天", "B+", "C+", "C-", "C+", "Jinga", 4, 1350, 1.8)
        , new Body("雷花", "C-", "C+", "C-", "B-", "Raika", 1, 1130, 2.3)
        , new Body("雷花・燕", "D+", "C", "B-", "B-", "Raika", 2, 1090, 1.8)
        , new Body("雷花・麗", "C+", "A", "D", "B-", "Raika", 3, 1240, 1.8)
        , new Body("へヴィガードⅠ型", "A", "C+", "C", "E", "HG", 1, 1430, 1.7)
        , new Body("へヴィガードⅢ型", "A+", "B", "D+", "E", "HG", 2, 1550, 1.9)
        , new Body("へヴィガードⅣ型", "A", "A-", "D+", "E", "HG", 3, 1500, 2)
        , new Body("へヴィガードG型", "A+", "C", "C+", "E", "HG", 4, 1570, 2)
        , new Body("ケーファー42", "B+", "B-", "C-", "D", "Kafer", 1, 1380, 1.9)
        , new Body("ケーファー44", "B+", "C+", "C+", "D", "Kafer", 2, 1420, 1.8)
        , new Body("ケーファー45", "B+", "A", "D", "D", "Kafer", 3, 1450, 2.3)
        , new Body("ケーファー52", "A-", "C", "B-", "D", "Kafer", 4, 1500, 2.2)
        , new Body("ロージーR", "A+", "C+", "C", "D", "Rosie", 1, 1560, 1.7)
        , new Body("ロージーR＋", "A+", "D", "B+", "D", "Rosie", 2, 1580, 1.7)
        , new Body("ロージーLM", "A+", "A+", "E+", "C-", "Rosie", 3, 1530, 1.9)
        , new Body("ランドバルクⅠ型", "B", "B", "D+", "C+", "LANDBULK", 1, 1340, 1.9)
        , new Body("ランドバルクⅡ型", "B", "A-", "E+", "B+", "LANDBULK", 2, 1370, 2.1)
        , new Body("ランドバルクⅣ型", "B+", "C-", "C-", "B+", "LANDBULK", 3, 1400, 2.3)
        , new Body("ヤーデ54", "A-", "C+", "C-", "C+", "JADE", 1, 1380, 1.8)
        , new Body("ヤーデ54S", "A", "B+", "D-", "D", "JADE", 2, 1490, 2.3)
        , new Body("ヤーデ55", "A+", "C+", "D", "C+", "JADE", 3, 1400, 1.7)
        , new Body("シュライクⅠ型", "E", "C-", "D", "A+", "Shrike", 1, 1000, 3)
        , new Body("シュライクⅡ型", "E", "B", "E", "A+", "Shrike", 2, 1030, 3.1)
        , new Body("シュライクⅤ型", "D-", "C-", "C", "A+", "Shrike", 3, 1100, 2.9)
        , new Body("シュライクW型", "D-", "B", "D-", "S", "Shrike", 4, 1130, 2.8)
        , new Body("ヤクシャ", "D", "B", "D+", "B+", "YAKSHA", 1, 1150, 2.3)
        , new Body("ヤクシャ・改", "D-", "A+", "E+", "B+", "YAKSHA", 2, 1200, 2.6)
        , new Body("ヤクシャ・弐", "D", "B-", "C", "B+", "YAKSHA", 3, 1180, 2.2)
        , new Body("セイバーⅠ型", "D-", "B-", "D", "A+", "Saber", 1, 1130, 2.9)
        , new Body("セイバーⅠ型R", "D-", "C+", "C", "A-", "Saber", 2, 1150, 2.7)
        , new Body("セイバーⅡ型", "D-", "A-", "E+", "A+", "Saber", 3, 1180, 3)
        , new Body("B.U.Z.-α", "E", "B-", "E+", "A+", "BUZ", 1, 980, 2.8)
        , new Body("B.U.Z.-β", "E", "C-", "C", "A-", "BUZ", 2, 1000, 2.5)
        , new Body("B.U.Z.-γ", "E", "A+", "E", "A+", "BUZ", 3, 1060, 2.9)
        , new Body("フォーミュラⅡ型", "D-", "C-", "C+", "A-", "Formula", 1, 1140, 2.5)
        , new Body("フォーミュラⅡ型C", "D-", "B", "D+", "A-", "Formula", 2, 1160, 2.7)
        , new Body("フォーミュラF型", "D+", "E+", "B+", "A-", "Formula", 3, 1200, 2.4)
        , new Body("アスラ", "E", "C+", "D+", "A-", "ASURA", 1, 1020, 2.6)
        , new Body("アスラ・弐", "E", "D+", "B-", "A-", "ASURA", 2, 1040, 2.3)
        , new Body("アスラ・参", "E", "B+", "D", "A-", "ASURA", 3, 1080, 2.7)];
})(asmsim.data);
