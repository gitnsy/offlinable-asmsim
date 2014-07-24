asmsim.data = asmsim.data || {};
(function (data) {
    function assistWeapon(name, bland, weight,rank) {
        this.name = name;
        this.bland = bland;
        this.weight = weight;
        this.rank = rank;
    }

    data.assaultassist = [
        new assistWeapon("デュエルソード", "sword", 220, 1)
        , new assistWeapon("マーシャルソード", "sword", 430,2)
, new assistWeapon("SW-ティアダウナー", "sword", 600,3)
, new assistWeapon("スティールハーツ", "sword", 430,2.1)
, new assistWeapon("Tダウナー/CV", "sword", 600, 3.1)
, new assistWeapon("SW-エグゼクター", "sword", 760,4)
, new assistWeapon("ロングスピア", "spear", 190,1)
, new assistWeapon("ピアシングスピア", "spear", 340, 2)
, new assistWeapon("SP-ペネトレーター", "spear", 480, 3)
, new assistWeapon("リヒトメッサー", "rihit", 180,1)
, new assistWeapon("リヒトメッサーII", "rihit", 300, 2)
, new assistWeapon("LM-ジリオス", "rihit", 390, 3)
, new assistWeapon("テオグレース", "rihit", 350, 2.1)
, new assistWeapon("LE-ブリッツァー", "britour", 220, 1)
, new assistWeapon("LE-ブリッツァーII", "britour", 480, 2)
, new assistWeapon("LE-ライゲル", "britour", 580, 3)
, new assistWeapon("スパークロッド", "rod", 190,1)
, new assistWeapon("スパークロッドII", "rod", 310, 2)
, new assistWeapon("SR-ヴァジュラ", "rod", 420, 1)
, new assistWeapon("ダブルクロー", "crow", 200,1)
, new assistWeapon("コンバットクロー", "crow", 300, 2)
, new assistWeapon("CL-エビセレイター", "crow", 400, 3)
, new assistWeapon("スラッシュグレイヴ", "glaive", 320,1)
, new assistWeapon("ツイングレイヴ", "glaive", 470, 2)
, new assistWeapon("SG-テンペスト", "glaive", 590, 3)
];

})(asmsim.data);
