asmsim.data = asmsim.data || {};
(function (data) {
    function SniperSp(name, bland, weight, rank) {
        this.name = name;
        this.bland = bland;
        this.weight = weight;
        this.rank = rank;
    }
    data.snipersp = [new SniperSp("シールド発生装置", "shield", 230, 1)
, new SniperSp("シールド発生装置・改", "shield", 290, 2)
, new SniperSp("高出力シールド", "shield", 330, 3)
, new SniperSp("光学迷彩・試作型", "ocamouf", 260, 1)
, new SniperSp("光学迷彩・実用型", "ocamouf", 300, 2)
, new SniperSp("光学迷彩・耐久型", "ocamouf", 340,3)
, new SniperSp("マグネタイザー", "magne", 320, 1)
, new SniperSp("マグネタイザーβ", "magne", 360, 2)
, new SniperSp("マグネタイザーγ", "magne", 380,3)
, new SniperSp("照準補正装置・試験型", "aimdev", 250,1)
, new SniperSp("照準補正装置・耐久型", "aimdev", 220, 2)
, new SniperSp("照準補正装置・強化型", "aimdev", 270, 3)
, new SniperSp("EUS-T1", "eus", 350,1)
, new SniperSp("EUS-T2", "eus", 360, 2)
, new SniperSp("EUS-TLZ", "eus", 400, 3)
];
})(asmsim.data);
