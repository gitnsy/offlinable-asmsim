asmsim.data = asmsim.data || {};
(function (data) {
    function Arm(name, armor, recoil, reload, weaponChange, bland, weight, chipCapacity) {
        this.name = name;
        this.armor = armor;
        this.recoil = recoil;
        this.reload = reload;
        this.weaponChange = weaponChange;
        this.bland = bland;
        this.weight = weight;
        this.chipCapacity = chipCapacity;
    }

    data.arms = [new Arm("クーガーⅠ型", "C+", "C-", "C-", "C-", "Cooger", 850, 1.5)
, new Arm("クーガーⅡ型", "C+", "B", "D", "C-", "Cooger", 870, 1.6)
, new Arm("クーガーS型", "B", "B+", "C-", "C-", "Cooger", 900, 1.5)
, new Arm("クーガーNX", "B-", "C-", "C+", "B-", "Cooger", 930, 1.4)
, new Arm("ツェーブラ38", "C", "C+", "B-", "E", "Zebra", 850, 1.7)
, new Arm("ツェーブラ39", "D+", "D+", "A-", "E", "Zebra", 850, 1.6)
, new Arm("ツェーブラ41", "C+", "A+", "C-", "E", "Zebra", 900, 2)
, new Arm("ツェーブラ48C", "C+", "A-", "C+", "D", "Zebra", 910, 1.6)
, new Arm("エンフォーサーⅠ型", "C", "C-", "C+", "C+", "Enfocer", 800, 1.2)
, new Arm("エンフォーサーⅡ型", "B", "C-", "C+", "D", "Enfocer", 850, 1.4)
, new Arm("エンフォーサーⅢ型", "C", "B+", "C+", "D", "Enfocer", 850, 1.6)
, new Arm("エンフォーサーX型", "B", "B", "C", "D+", "Enfocer", 840, 1.5)
, new Arm("E.D.G.‐α", "D-", "C-", "B+", "C-", "EDG", 850, 1.1)
, new Arm("E.D.G.‐β", "D-", "E", "A+", "C-", "EDG", 860, 0.6)
, new Arm("E.D.G.‐δ", "D-", "A-", "B-", "C-", "EDG", 850, 1.3)
, new Arm("ディスカス・プロト", "B", "C+", "D+", "C", "Discus", 900, 1.6)
, new Arm("ディスカス・ダート", "D+", "D+", "C+", "B-", "Discus", 810, 1.2)
, new Arm("ディスカス・ノヴァ", "B+", "A-", "D", "C-", "Discus", 1020, 1.8)
, new Arm("ネレイド45", "C", "D", "C-", "B-", "Nereid", 760, 1.2)
, new Arm("ネレイド45改", "C", "C+", "D", "B-", "Nereid", 780, 1.3)
, new Arm("ネレイド46", "C+", "D", "D", "A", "Nereid", 830, 1.5)
, new Arm("ネレイドRT", "B-", "D-", "D", "A+", "Nereid", 860, 1.4)
, new Arm("迅牙", "D+", "C-", "C-", "B+", "Jinga", 760, 1.1)
, new Arm("迅牙・甲", "C", "C", "B-", "C+", "Jinga", 850, 1.1)
, new Arm("迅牙・真", "C+", "A-", "B-", "D-", "Jinga", 890, 1.5)
, new Arm("雷花", "C", "C+", "C+", "C", "Raika", 830, 1.4)
, new Arm("雷花・燕", "D+", "D+", "B+", "C+", "Raika", 780, 0.7)
, new Arm("雷花・麗", "B-", "A-", "C+", "C-", "Raika", 880, 0.9)
, new Arm("へヴィガードⅠ型", "A", "B+", "E+", "D-", "HG", 1000, 2.2)
, new Arm("へヴィガードⅢ型", "A+", "A+", "E", "E", "HG", 1120, 2.3)
, new Arm("へヴィガードⅣ型", "A", "B", "D+", "D", "HG", 1050, 2)
, new Arm("へヴィガードG型", "A+", "B+", "C-", "D-", "HG", 1070, 2)
, new Arm("ケーファー42", "B+", "B", "D", "D", "Kafer", 950, 1.9)
, new Arm("ケーファー44", "B", "C+", "C-", "C+", "Kafer", 930, 1.5)
, new Arm("ケーファー45", "B+", "A+", "E+", "D", "Kafer", 980, 2)
, new Arm("ケーファー52", "A-", "B+", "D-", "B-", "Kafer", 1000, 1.7)
, new Arm("ロージーR", "A+", "B-", "D+", "D-", "Rosie", 1010, 2)
, new Arm("ロージーR＋", "A+", "A-", "D", "E", "Rosie", 1030, 2.1)
, new Arm("ロージーLM", "A", "C", "C+", "D", "Rosie", 980, 1.8)
, new Arm("ランドバルクⅠ型", "B", "C-", "B-", "D", "LANDBULK", 930, 1.4)
, new Arm("ランドバルクⅡ型", "B", "D-", "B-", "C", "LANDBULK", 900, 1.3)
, new Arm("ランドバルクⅣ型", "B", "B", "B-", "D-", "LANDBULK", 950, 1.5)
, new Arm("ヤーデ54", "A-", "C", "C-", "C", "JADE", 920, 1.5)
, new Arm("ヤーデ54S", "A", "A", "D-", "D-", "JADE", 1010, 2)
, new Arm("ヤーデ55", "A+", "C+", "D", "C", "JADE", 950, 1.7)
, new Arm("シュライクⅠ型", "D-", "D-", "C+", "B-", "Shrike", 660, 1.1)
, new Arm("シュライクⅡ型", "E", "E", "B", "A", "Shrike", 630, 0.6)
, new Arm("シュライクⅤ型", "D-", "C-", "C+", "C+", "Shrike", 700, 1.3)
, new Arm("シュライクW型", "E", "E+", "A-", "C+", "Shrike", 650, 1)
, new Arm("ヤクシャ", "D", "D", "C+", "B+", "YAKSHA", 770, 1)
, new Arm("ヤクシャ・改", "D-", "E", "B", "A+", "YAKSHA", 710, 0.5)
, new Arm("ヤクシャ・弐", "D", "B", "C-", "B+", "YAKSHA", 790, 1)
, new Arm("セイバーⅠ型", "D-", "D", "C-", "A+", "Saber", 680, 0.9)
, new Arm("セイバーⅠR型", "E", "A-", "D", "B+", "Saber", 670, 1.1)
, new Arm("セイバーⅡ型", "D", "D", "B-", "B-", "Saber", 720, 0.9)
, new Arm("B.U.Z.-α", "E", "E", "C+", "A+", "BUZ", 610, 0.7)
, new Arm("B.U.Z.-β", "E", "E", "B+", "B+", "BUZ", 640, 0.8)
, new Arm("B.U.Z.-γ", "E", "D", "A-", "C-", "BUZ", 650, 0.7)
, new Arm("フォーミュラⅡ型", "D-", "D", "B", "C+", "Formula", 700, 0.9)
, new Arm("フォーミュラⅡ型C", "D+", "B-", "C+", "C-", "Formula", 750, 1)
, new Arm("フォーミュラF型", "D-", "D-", "B", "B+", "Formula", 710, 0.9)]
})(asmsim.data);