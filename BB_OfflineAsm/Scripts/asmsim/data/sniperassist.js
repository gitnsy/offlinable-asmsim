asmsim.data = asmsim.data || {};
(function (data) {
    function SniperAssist(name, bland, weight, rank) {
        this.name = name;
        this.bland = bland;
        this.weight = weight;
        this.rank = rank;
    }
    data.sniperassist = [new SniperAssist("セントリーガンSMG", "sentry", 380,1)
, new SniperAssist("セントリーガンAC", "sentry", 410, 2)
, new SniperAssist("セントリーガンLZ", "sentry", 420, 3)
, new SniperAssist("セントリーガンSHG", "sentry", 450, 4)
, new SniperAssist("エアロセントリー", "asentry", 460, 1)
, new SniperAssist("エアロセントリーS", "asentry", 500, 2)
, new SniperAssist("エアロセントリーV", "asentry", 470, 3)
, new SniperAssist("高振動ブレード", "knife", 160,1)
, new SniperAssist("新型高振動ブレード", "knife", 170, 2)
, new SniperAssist("強化高振動ブレード", "knife", 250, 3)
, new SniperAssist("シャルフエッジ", "knife", 220, 2.1)];
})(asmsim.data);