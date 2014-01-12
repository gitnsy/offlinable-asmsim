asmsim.data = asmsim.data || {};
(function (data) {
    function SupportSp(name, bland, weight, rank) {
        this.name = name;
        this.bland = bland;
        this.weight = weight;
        this.rank = rank;
    }
    data.supportsp = [new SupportSp("リペアユニット", "unit", 560,1)
, new SupportSp("リペアユニットβ", "unit", 600, 2)
, new SupportSp("リペアユニットγ", "unit", 620, 3)
, new SupportSp("Rユニットβ/CV", "unit", 600, 2.1)
, new SupportSp("リペアショット", "shot", 490,1)
, new SupportSp("リペアショットβ", "shot", 540, 2)
, new SupportSp("リペアショットγ", "shot", 510, 3)
, new SupportSp("リペアショットδ", "shot", 520, 4)
, new SupportSp("リペアポスト", "post", 480, 1)
, new SupportSp("リペアポストβ", "post", 520, 2)
, new SupportSp("リペアポストγ", "post", 530, 3)
, new SupportSp("リペアフィールド", "field", 530,1)
, new SupportSp("リペアフィールドβ", "field", 570, 2)
, new SupportSp("リペアセントリー", "sentry", 450, 1)
, new SupportSp("リペアセントリーβ", "sentry", 490, 2)
, new SupportSp("リペアセントリーγ", "sentry", 460, 3)];
})(asmsim.data);
