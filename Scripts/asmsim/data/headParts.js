asmsim.data = asmsim.data || {};
(function (data) {
    function Head(name, armor, shotAdjust, search, lockon, weight, chipCapacity) {
        this.name = name;
        this.weight = weight;
        this.armor = armor;
        this.shotAdjust = shotAdjust;
        this.search = search;
        this.lockon = lockon;
        this.chipCapacity = chipCapacity;
    }

    data.heads = [new Head("クーガーⅠ型", "C+", "C", "D", "C+", 600, 2)
, new Head("クーガーⅡ型", "C+", "C", "C", "D+", 620, 2.2)
, new Head("クーガーS型", "C+", "B+", "D", "B+", 630, 1.5)
, new Head("クーガーNX", "B-", "B", "D", "B-", 650, 1.9)
, new Head("ツェーブラ38", "C", "B+", "C+", "D+", 600, 2.3)
, new Head("ツェーブラ39", "C", "B+", "B+", "E+", 620, 2.6)
, new Head("ツェーブラ41", "C", "A-", "C", "C+", 640, 2.2)
, new Head("ツェーブラ48C", "C", "B+", "A+", "D", 650, 2.4)
, new Head("エンフォーサーⅠ型", "C", "B-", "D", "C+", 550, 2.1)
, new Head("エンフォーサーⅡ型", "D+", "B-", "D", "A+", 520, 1.9)
, new Head("エンフォーサーⅢ型", "C", "B-", "C", "C", 560, 2.4)
, new Head("エンフォーサーX型", "C+", "B", "C-", "C+", 610, 2.4)
, new Head("E.D.G.-α", "E", "A+", "B-", "D+", 600, 2.5)
, new Head("E.D.G.-β", "E", "A+", "A+", "E", 610, 2.7)
, new Head("E.D.G.-δ", "E", "A+", "C+", "C+", 620, 2.5)
, new Head("ディスカス・プロト", "B", "B-", "D-", "C", 700, 1.8)
, new Head("ディスカス・ダート", "C", "B+", "C-", "D", 530, 2.2)
, new Head("ディスカス・ノヴァ", "B+", "B-", "E+", "C+", 770, 1.8)
, new Head("ネレイド45", "C", "C", "C", "C+", 550, 2.3)
, new Head("ネレイド45改", "C", "C", "D+", "B+", 560, 2.2)
, new Head("ネレイド46", "C", "B-", "B-", "D+", 580, 2.5)
, new Head("ネレイドRT", "C", "A", "D-", "D+", 630, 2.2)
, new Head("迅牙", "D+", "B", "D+", "B", 600, 2.4)
, new Head("迅牙・甲", "C+", "B-", "E+", "A-", 620, 1.8)
, new Head("迅牙・真", "D+", "A-", "A-", "C", 670, 2.5)
, new Head("雷花", "D+", "C+", "B-", "C", 510, 2.8)
, new Head("雷花・燕", "C-", "C", "B", "B-", 530, 2.7)
, new Head("雷花・麗", "C-", "B", "D+", "B-", 570, 2.4)
, new Head("へヴィガードⅠ型", "A", "E", "D-", "C+", 800, 2.2)
, new Head("へヴィガードⅢ型", "A+", "E", "E", "B+", 850, 1.9)
, new Head("へヴィガードⅣ型", "A", "D-", "D", "C", 800, 2.2)
, new Head("へヴィガードG型", "A+", "D+", "D+", "D+", 840, 2)
, new Head("ケーファー42", "B+", "D-", "D", "B", 750, 2.4)
, new Head("ケーファー44", "B+", "D-", "E+", "A+", 730, 2)
, new Head("ケーファー45", "B", "C", "D+", "B", 770, 2.2)
, new Head("ケーファー52", "A-", "C", "E+", "B", 820, 2)
, new Head("ロージーR", "A+", "E", "D+", "C", 780, 2.1)
, new Head("ロージーR+", "A+", "E", "E", "A+", 880, 2.1)
, new Head("ロージーLM", "A+", "D-", "D", "C+", 830, 2.2)
, new Head("ランドバルクⅠ型", "B", "C-", "B-", "C", 720, 2.3)
, new Head("ランドバルクⅡ型", "B", "C", "D", "B", 710, 2.1)
, new Head("ランドバルクⅣ型", "B", "B-", "C", "D+", 750, 2.3)
, new Head("ヤーデ54", "A-", "C+", "E+", "C", 730, 1.6)
, new Head("ヤーデ54S", "A", "C", "C-", "D+", 780, 1.8)
, new Head("ヤーデ55", "A", "B-", "E+", "D", 740, 1.6)
, new Head("シュライクⅠ型", "E", "C", "C-", "C+", 450, 3)
, new Head("シュライクⅡ型", "E", "C", "B-", "D+", 470, 3.1)
, new Head("シュライクⅤ型", "E", "B+", "D", "B+", 450, 2.7)
, new Head("シュライクW型", "E+", "A-", "D-", "B", 480, 2.5)
, new Head("ヤクシャ", "D", "B+", "D", "B", 500, 1.9)
, new Head("ヤクシャ・改", "D", "B+", "D-", "A+", 500, 1.7)
, new Head("ヤクシャ・弐", "D-", "A-", "C-", "C+", 520, 2.1)
, new Head("セイバーⅠ型", "D-", "C-", "B+", "B+", 480, 2.8)
, new Head("セイバーⅠ型R", "D-", "C-", "B-", "A+", 510, 2.7)
, new Head("セイバーⅡ型", "D-", "C", "C", "A+", 530, 2.8)
, new Head("B.U.Z.-α", "E", "A-", "C+", "D+", 490, 2.6)
, new Head("B.U.Z.-β", "E", "A-", "A+", "E+", 520, 2.8)
, new Head("B.U.Z.-γ", "E", "A+", "D", "B", 500, 2.3)
, new Head("フォーミュラⅡ型", "D-", "B", "D+", "B+", 530, 2.4)
, new Head("フォーミュラⅡ型C", "D-", "B+", "D", "A-", 510, 2.1)
, new Head("フォーミュラF型", "D-", "B+", "B-", "C+", 550, 2.5)
, new Head("アスラ", "E", "A+", "D", "C+", 470, 2.3)
, new Head("アスラ・弐", "E", "A+", "E", "B+", 460, 2.1)
, new Head("アスラ・参", "E", "S", "D-", "C", 490, 2.3)
    ];

})(asmsim.data);