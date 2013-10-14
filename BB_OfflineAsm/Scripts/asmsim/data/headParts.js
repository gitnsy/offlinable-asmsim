asmsim.data = asmsim.data || {};
(function (data) {
    function Head(name, armor, shotAdjust, search, lockon,bland, weight, chipCapacity) {
        this.name = name;
        this.weight = weight;
        this.armor = armor;
        this.shotAdjust = shotAdjust;
        this.search = search;
        this.lockon = lockon;
        this.bland = bland;
        this.chipCapacity = chipCapacity;
    }

    data.heads = [new Head("クーガーⅠ型", "C+", "C", "D", "C+", "Cooger", 600, 2)
, new Head("クーガーⅡ型", "C+", "C", "C", "D+", "Cooger", 620, 2.2)
, new Head("クーガーS型", "C+", "B+", "D", "B+", "Cooger", 630, 1.5)
, new Head("クーガーNX", "B-", "B", "D", "B-", "Cooger", 650, 1.9)
, new Head("ツェーブラ38", "C", "B+", "C+", "D+", "Zebra", 600, 2.3)
, new Head("ツェーブラ39", "C", "B+", "B+", "E+", "Zebra", 620, 2.6)
, new Head("ツェーブラ41", "C", "A-", "C", "C+", "Zebra", 640, 2.2)
, new Head("ツェーブラ48C", "C", "B+", "A+", "D", "Zebra", 650, 2.4)
, new Head("エンフォーサーⅠ型", "C", "B-", "D", "C+", "Enfocer", 550, 2.1)
, new Head("エンフォーサーⅡ型", "D+", "B-", "D", "A+", "Enfocer", 520, 1.9)
, new Head("エンフォーサーⅢ型", "C", "B-", "C", "C", "Enfocer", 560, 2.4)
, new Head("エンフォーサーX型", "C+", "B", "C-", "C+", "Enfocer", 610, 2.4)
, new Head("E.D.G.-α", "E", "A+", "B-", "D+", "EDG", 600, 2.5)
, new Head("E.D.G.-β", "E", "A+", "A+", "E", "EDG", 610, 2.7)
, new Head("E.D.G.-δ", "E", "A+", "C+", "C+", "EDG", 620, 2.5)
, new Head("E.D.G.-θ", "E+", "S", "C+", "C", "EDG", 610, 2.6)
, new Head("ディスカス・プロト", "B", "B-", "D-", "C", "Discus", 700, 1.8)
, new Head("ディスカス・ダート", "C", "B+", "C-", "D", "Discus", 530, 2.2)
, new Head("ディスカス・ノヴァ", "B+", "B-", "E+", "C+", "Discus", 770, 1.8)
, new Head("ディスカス・エヴォル", "C", "B", "C+", "B-", "Discus", 620, 2.3)
, new Head("ネレイド45", "C", "C", "C", "C+", "Nereid", 550, 2.3)
, new Head("ネレイド45改", "C", "C", "D+", "B+", "Nereid", 560, 2.2)
, new Head("ネレイド46", "C", "B-", "B-", "D+", "Nereid", 580, 2.5)
, new Head("ネレイドRT", "C", "A", "D-", "D+", "Nereid", 630, 2.2)
, new Head("迅牙", "D+", "B", "D+", "B", "Jinga", 600, 2.4)
, new Head("迅牙・甲", "C+", "B-", "E+", "A-", "Jinga", 620, 1.8)
, new Head("迅牙・真", "D+", "A-", "A-", "C", "Jinga", 670, 2.5)
, new Head("雷花", "D+", "C+", "B-", "C", "Raika", 510, 2.8)
, new Head("雷花・燕", "C-", "C", "B", "B-", "Raika", 530, 2.7)
, new Head("雷花・麗", "C-", "B", "D+", "B-", "Raika", 570, 2.4)
, new Head("へヴィガードⅠ型", "A", "E", "D-", "C+", "HG", 800, 2.2)
, new Head("へヴィガードⅢ型", "A+", "E", "E", "B+", "HG", 850, 1.9)
, new Head("へヴィガードⅣ型", "A", "D-", "D", "C", "HG", 800, 2.2)
, new Head("へヴィガードG型", "A+", "D+", "D+", "D+", "HG", 840, 2)
, new Head("ケーファー42", "B+", "D-", "D", "B", "Kafer", 750, 2.4)
, new Head("ケーファー44", "B+", "D-", "E+", "A+", "Kafer", 730, 2)
, new Head("ケーファー45", "B", "C", "D+", "B", "Kafer", 770, 2.2)
, new Head("ケーファー52", "A-", "C", "E+", "B", "Kafer", 820, 2)
, new Head("ロージーR", "A+", "E", "D+", "C", "Rosie", 780, 2.1)
, new Head("ロージーR＋", "A+", "E", "E", "A+", "Rosie", 880, 2.1)
, new Head("ロージーLM", "A+", "D-", "D", "C+", "Rosie", 830, 2.2)
, new Head("ランドバルクⅠ型", "B", "C-", "B-", "C", "LANDBULK", 720, 2.3)
, new Head("ランドバルクⅡ型", "B", "C", "D", "B", "LANDBULK", 710, 2.1)
, new Head("ランドバルクⅣ型", "B", "B-", "C", "D+", "LANDBULK", 750, 2.3)
, new Head("ヤーデ54", "A-", "C+", "E+", "C", "JADE", 730, 1.6)
, new Head("ヤーデ54S", "A", "C", "C-", "D+", "JADE", 780, 1.8)
, new Head("ヤーデ55", "A", "B-", "E+", "D", "JADE", 740, 1.6)
, new Head("シュライクⅠ型", "E", "C", "C-", "C+", "Shrike", 450, 3)
, new Head("シュライクⅡ型", "E", "C", "B-", "D+", "Shrike", 470, 3.1)
, new Head("シュライクⅤ型", "E", "B+", "D", "B+", "Shrike", 450, 2.7)
, new Head("シュライクW型", "E+", "A-", "D-", "B", "Shrike", 480, 2.5)
, new Head("ヤクシャ", "D", "B+", "D", "B", "YAKSHA", 500, 1.9)
, new Head("ヤクシャ・改", "D", "B+", "D-", "A+", "YAKSHA", 500, 1.7)
, new Head("ヤクシャ・弐", "D-", "A-", "C-", "C+", "YAKSHA", 520, 2.1)
, new Head("セイバーⅠ型", "D-", "C-", "B+", "B+", "Saber", 480, 2.8)
, new Head("セイバーⅠ型R", "D-", "C-", "B-", "A+", "Saber", 510, 2.7)
, new Head("セイバーⅡ型", "D-", "C", "C", "A+", "Saber", 530, 2.8)
, new Head("B.U.Z.-α", "E", "A-", "C+", "D+", "BUZ", 490, 2.6)
, new Head("B.U.Z.-β", "E", "A-", "A+", "E+", "BUZ", 520, 2.8)
, new Head("B.U.Z.-γ", "E", "A+", "D", "B", "BUZ", 500, 2.3)
, new Head("フォーミュラⅡ型", "D-", "B", "D+", "B+", "Formula", 530, 2.4)
, new Head("フォーミュラⅡ型C", "D-", "B+", "D", "A-", "Formula", 510, 2.1)
, new Head("フォーミュラF型", "D-", "B+", "B-", "C+", "Formula", 550, 2.5)
, new Head("アスラ", "E", "A+", "D", "C+", "ASURA", 470, 2.3)
, new Head("アスラ・弐", "E", "A+", "E", "B+", "ASURA", 460, 2.1)
, new Head("アスラ・参", "E", "S", "D-", "C", "ASURA", 490, 2.3)];

})(asmsim.data);