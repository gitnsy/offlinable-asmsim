asmsim.data = asmsim.data || {};
(function (data) {
    function HeavyAssist(name, bland, weight, rank) {
        this.name = name;
        this.bland = bland;
        this.weight = weight;
        this.rank = rank;
    }
    data.heavyassist = [new HeavyAssist("ECMグレネード", "ecm", 140,1)
, new HeavyAssist("試験型ECMグレネード", "ecm", 160, 2)
, new HeavyAssist("新型ECMグレネード", "ecm", 120, 3)
, new HeavyAssist("改良型ECMグレネード", "ecm", 170, 4)
, new HeavyAssist("インパクトボム", "impact", 160,1)
, new HeavyAssist("インパクトボムS", "impact", 140, 2)
, new HeavyAssist("インパクトボムV", "impact", 180, 3)
, new HeavyAssist("アームパイク", "pike", 210,1)
, new HeavyAssist("ヘヴィパイク", "pike", 240, 2)
, new HeavyAssist("ラベージパイク", "pike", 280, 3)
, new HeavyAssist("バトルチェーンソー", "sow", 320,1)
, new HeavyAssist("ブレイクチェーンソー", "sow", 360, 2)
, new HeavyAssist("ケイオスチェーンソー", "sow", 420, 3)];
})(asmsim.data);
