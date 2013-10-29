asmsim.data = asmsim.data || {};
(function (data) {
    function SniperSub(name, bland, weight, rank) {
        this.name = name;
        this.bland = bland;
        this.weight = weight;
        this.rank = rank;
    }

    data.snipersub = [new SniperSub("マーゲイM40", "mg", 100,1)
, new SniperSub("マーゲイ・カスタム", "mg", 120, 2)
, new SniperSub("マーゲイRF", "mg", 140, 3)
, new SniperSub("マーゲイ・ストライフ", "mg", 130, 4)
, new SniperSub("マーゲイ・バリアンス", "mg", 150, 5)
, new SniperSub("MGカスタム/CV", "mg", 120, 2.1)
, new SniperSub("レヴェラーMP20", "reveler", 120,1)
, new SniperSub("レヴェラーMP20C", "reveler", 130, 2)
, new SniperSub("レヴェラーR", "reveler", 140, 3)
, new SniperSub("レヴェラー・ブルート", "reveler", 160, 4)
, new SniperSub("レヴェラーRR", "reveler", 150, 1)
, new SniperSub("ディスクシューター", "disc", 210,2)
, new SniperSub("ディスクシューターR", "disc", 220, 3)
, new SniperSub("ワイドショット", "wide", 140,1)
, new SniperSub("ワイドショットTF", "wide", 160, 2)
, new SniperSub("ワイドショットX", "wide", 170, 3)
, new SniperSub("ワイドショットX2", "wide", 180, 4)
, new SniperSub("ジャンプマイン", "jmine", 150,1)
, new SniperSub("ジャンプマインS", "jmine", 160, 2)
, new SniperSub("ジャンプマインV", "jmine", 200, 3)
, new SniperSub("ジャンプマインX", "jmine", 240, 4)
, new SniperSub("スティッキーボム", "sticky", 120, 1)
, new SniperSub("スティッキーボムS", "sticky", 130, 2)
, new SniperSub("スティッキーボムV", "sticky", 170, 3)];
})(asmsim.data);