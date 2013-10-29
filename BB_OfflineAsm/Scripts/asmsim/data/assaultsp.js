asmsim.data = asmsim.data || {};
(function (data) {
    function AssaultSp(name, bland, weight, rank) {
        this.name = name;
        this.bland = bland;
        this.weight = weight;
        this.rank = rank;
    }
    data.assaultsp = [new AssaultSp("アサルトチャージャー", "ac", 260,1)
, new AssaultSp("AC-マルチウェイ", "ac", 230, 2)
, new AssaultSp("AC-ディスタンス", "ac", 300, 3)
, new AssaultSp("AC-マルチウェイII", "ac", 280, 4)
, new AssaultSp("AC-マルチウェイX", "ac", 270, 5)];

})(asmsim.data);