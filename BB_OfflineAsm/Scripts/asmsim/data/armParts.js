﻿asmsim.data = asmsim.data || {};
(function (data) {
    function Arm(name, armor, recoil, reload, weaponChange, bland, rank, weight, chipCapacity) {
        this.name = name;
        this.armor = armor;
        this.recoil = recoil;
        this.reload = reload;
        this.weaponChange = weaponChange;
        this.bland = bland;
        this.weight = weight;
        this.rank = rank;
        this.chipCapacity = chipCapacity;
    }

data.arms = [new Arm("クーガーⅠ型", "C+", "C-", "C-", "C-", "Cooger", 1, 850, 1.5)
, new Arm("クーガーⅡ型", "C+", "B", "D", "C-", "Cooger", 2, 870, 1.6)
, new Arm("クーガーS型", "B", "B+", "C-", "C-", "Cooger", 3, 900, 1.5)
, new Arm("クーガーNX", "B-", "C-", "C+", "B-", "Cooger", 4, 930, 1.4)
, new Arm("ツェーブラ38", "C", "C+", "B-", "E", "Zebra", 1, 850, 1.7)
, new Arm("ツェーブラ39", "D+", "D+", "A-", "E", "Zebra", 2, 850, 1.6)
, new Arm("ツェーブラ41", "C+", "A+", "C-", "E", "Zebra", 3, 900, 2)
, new Arm("ツェーブラ48C", "C+", "A-", "C+", "D", "Zebra", 4, 910, 1.6)
, new Arm("エンフォーサーⅠ型", "C", "C-", "C+", "C+", "Enfocer", 1, 800, 1.2)
, new Arm("エンフォーサーⅡ型", "B", "C-", "C+", "D", "Enfocer", 2, 850, 1.4)
, new Arm("エンフォーサーⅢ型", "C", "B+", "C+", "D", "Enfocer", 3, 850, 1.6)
, new Arm("エンフォーサーX型", "B", "B", "C", "D+", "Enfocer", 4, 840, 1.5)
, new Arm("E.D.G.‐α", "D-", "C-", "B+", "C-", "EDG", 1, 850, 1.1)
, new Arm("E.D.G.‐β", "D-", "E", "A+", "C-", "EDG", 2, 860, 0.6)
, new Arm("E.D.G.‐δ", "D-", "A-", "B-", "C-", "EDG", 3, 850, 1.3)
, new Arm("E.D.G.‐θ", "D", "D", "A-", "C", "EDG", 4, 860, 0.9)
, new Arm("ディスカス・プロト", "B", "C+", "D+", "C", "Discus", 1, 900, 1.6)
, new Arm("ディスカス・ダート", "D+", "D+", "C+", "B-", "Discus", 2, 810, 1.2)
, new Arm("ディスカス・ノヴァ", "B+", "A-", "D", "C-", "Discus", 3, 1020, 1.8)
, new Arm("ディスカス・エヴォル", "B", "C", "C", "B+", "Discus", 4, 920, 1.5)
, new Arm("ネレイド45", "C", "D", "C-", "B-", "Nereid", 1, 760, 1.2)
, new Arm("ネレイド45改", "C", "C+", "D", "B-", "Nereid", 2, 780, 1.3)
, new Arm("ネレイド46", "C+", "D", "D", "A", "Nereid", 3, 830, 1.5)
, new Arm("ネレイドRT", "B-", "D-", "D", "A+", "Nereid", 4, 860, 1.4)
, new Arm("迅牙", "D+", "C-", "C-", "B+", "Jinga", 1, 760, 1.1)
, new Arm("迅牙・甲", "C", "C", "B-", "C+", "Jinga", 2, 850, 1.1)
, new Arm("迅牙・真", "C+", "A-", "B-", "D-", "Jinga", 3, 890, 1.5)
, new Arm("迅牙・飛天", "B-", "B", "B-", "D", "Jinga", 4, 880, 1.3)
, new Arm("雷花", "C", "C+", "C+", "C", "Raika", 1, 830, 1.4)
, new Arm("雷花・燕", "D+", "D+", "B+", "C+", "Raika", 2, 780, 0.7)
, new Arm("雷花・麗", "B-", "A-", "C+", "C-", "Raika", 3, 880, 0.9)
, new Arm("へヴィガードⅠ型", "A", "B+", "E+", "D-", "HG", 1, 1000, 2.2)
, new Arm("へヴィガードⅢ型", "A+", "A+", "E", "E", "HG", 2, 1120, 2.3)
, new Arm("へヴィガードⅣ型", "A", "B", "D+", "D", "HG", 3, 1050, 2)
, new Arm("へヴィガードG型", "A+", "B+", "C-", "D-", "HG", 4, 1070, 2)
, new Arm("ケーファー42", "B+", "B", "D", "D", "Kafer", 1, 950, 1.9)
, new Arm("ケーファー44", "B", "C+", "C-", "C+", "Kafer", 2, 930, 1.5)
, new Arm("ケーファー45", "B+", "A+", "E+", "D", "Kafer", 3, 980, 2)
, new Arm("ケーファー52", "A-", "B+", "D-", "B-", "Kafer", 4, 1000, 1.7)
, new Arm("ロージーR", "A+", "B-", "D+", "D-", "Rosie", 1, 1010, 2)
, new Arm("ロージーR+", "A+", "A-", "D", "E", "Rosie", 2, 1030, 2.1)
, new Arm("ロージーLM", "A", "C", "C+", "D", "Rosie", 3, 980, 1.8)
, new Arm("ロージーEVE", "S", "B", "E+", "E+", "Rosie", 4, 1150, 2.1)
, new Arm("ランドバルクⅠ型", "B", "C-", "B-", "D", "LANDBULK", 1, 930, 1.4)
, new Arm("ランドバルクⅡ型", "B", "D-", "B-", "C", "LANDBULK", 2, 900, 1.3)
, new Arm("ランドバルクⅣ型", "B", "B", "B-", "D-", "LANDBULK", 3, 950, 1.5)
, new Arm("ヤーデ54", "A-", "C", "C-", "C", "JADE", 1, 920, 1.5)
, new Arm("ヤーデ54S", "A", "A", "D-", "D-", "JADE", 2, 1010, 2)
, new Arm("ヤーデ55", "A+", "C+", "D", "C", "JADE", 3, 950, 1.7)
, new Arm("シュライクⅠ型", "D-", "D-", "C+", "B-", "Shrike", 1, 660, 1.1)
, new Arm("シュライクⅡ型", "E", "E", "B", "A", "Shrike", 2, 630, 0.6)
, new Arm("シュライクⅤ型", "D-", "C-", "C+", "C+", "Shrike", 3, 700, 1.3)
, new Arm("シュライクW型", "E", "E+", "A-", "C+", "Shrike", 4, 650, 1)
, new Arm("ヤクシャ", "D", "D", "C+", "B+", "YAKSHA", 1, 770, 1)
, new Arm("ヤクシャ・改", "D-", "E", "B", "A+", "YAKSHA", 2, 710, 0.5)
, new Arm("ヤクシャ・弐", "D", "B", "C-", "B+", "YAKSHA", 3, 790, 1)
, new Arm("セイバーⅠ型", "D-", "D", "C-", "A+", "Saber", 1, 680, 0.9)
, new Arm("セイバーⅠR型", "E", "A-", "D", "B+", "Saber", 2, 670, 1.1)
, new Arm("セイバーⅡ型", "D", "D", "B-", "B-", "Saber", 3, 720, 0.9)
, new Arm("B.U.Z.-α", "E", "E", "C+", "A+", "BUZ", 1, 610, 0.7)
, new Arm("B.U.Z.-β", "E", "E", "B+", "B+", "BUZ", 2, 640, 0.8)
, new Arm("B.U.Z.-γ", "E", "D", "A-", "C-", "BUZ", 3, 650, 0.7)
, new Arm("フォーミュラⅡ型", "D-", "D", "B", "C+", "Formula", 1, 700, 0.9)
, new Arm("フォーミュラⅡ型C", "D+", "B-", "C+", "C-", "Formula", 2, 750, 1)
, new Arm("フォーミュラF型", "D-", "D-", "B", "B+", "Formula", 3, 710, 0.9)
, new Arm("アスラ", "E", "E", "A-", "B-", "ASURA", 1, 640, 0.7)
, new Arm("アスラ・弐", "E", "E-", "B-", "S", "ASURA", 2, 620, 0.5)
, new Arm("アスラ・参", "E", "D-", "A", "C", "ASURA", 3, 670, 0.7)
, new Arm("ジーシェン", "B+", "C", "D+", "D+", "JIXIEN", 1, 960, 1.8)
, new Arm("ジーシェン・フー", "B", "C-", "B-", "C+", "JIXIEN", 2, 950, 1.3)
, new Arm("ジーシェン・シー", "A-", "B+", "D", "C+", "JIXIEN", 3, 980, 1.9)]

})(asmsim.data);
