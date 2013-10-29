asmsim.data = asmsim.data || {};
(function (data) {
    function AssaultSub(name, bland, weight, rank) {
        this.name = name;
        this.bland = bland;
        this.weight = weight;
        this.rank = rank;
    }
    data.assaultsub = [new AssaultSub("38型手榴弾", "hgre", 80,1)
, new AssaultSub("40型軽量手榴弾", "hgre", 90, 2)
, new AssaultSub("41型強化手榴弾", "hgre", 140, 3)
, new AssaultSub("41型手榴弾・改", "hgre", 110, 4)
, new AssaultSub("39型クラッカー", "cracker", 100, 1)
, new AssaultSub("40型クラッカー", "cracker", 110, 2)
, new AssaultSub("42型クラッカー", "cracker", 160, 3)
, new AssaultSub("バーストチャクラム", "chakram", 200, 1)
, new AssaultSub("バーストチャクラムS ", "chakram", 180, 2)
, new AssaultSub("バーストチャクラムV ", "chakram", 250, 3)
, new AssaultSub("チェインボム", "chainb", 140,1)
, new AssaultSub("チェインボムS", "chainb", 120, 2)
, new AssaultSub("チェインボムV", "chainb", 170, 3)
, new AssaultSub("フレアグレネード", "fgre", 170,1)
, new AssaultSub("フレアグレネードS", "fgre", 160, 2)
, new AssaultSub("グレネードランチャー", "grun", 220,3)
, new AssaultSub("多装Gランチャー", "grun", 250, 1)
, new AssaultSub("強化型Gランチャー", "grun", 330, 2)
, new AssaultSub("連射式Gランチャー", "grun", 320, 3)
, new AssaultSub("拡散型Gランチャー", "grun", 360, 4)
, new AssaultSub("ミサイルスロアー", "msl", 350,1)
, new AssaultSub("MSL-ハイヴ", "msl", 360, 2)
, new AssaultSub("MSL-ナイダス", "msl", 380, 3)
, new AssaultSub("MSL-スウォーム", "msl", 420, 4)
, new AssaultSub("MSL-ホード", "msl", 430, 5)];
})(asmsim.data);