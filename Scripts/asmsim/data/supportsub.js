asmsim.data = asmsim.data || {};
(function (data) {
    function SupportSub(name, bland, weight, rank) {
        this.name = name;
        this.bland = bland;
        this.weight = weight;
        this.rank = rank;
    }
    data.supportsub = [new SupportSub("ヘヴィマイン", "mine", 230,1)
, new SupportSub("ヘヴィマインS", "mine", 210, 2)
, new SupportSub("ヘヴィマインV", "mine", 290, 3)
, new SupportSub("44型浮遊機雷", "amine", 150,1)
, new SupportSub("44型浮遊機雷S", "amine", 170, 2)
, new SupportSub("45型浮遊機雷", "amine", 210, 3)
, new SupportSub("46型指向性地雷", "craymore", 180,1)
, new SupportSub("46型指向性地雷S", "craymore", 190, 2)
, new SupportSub("49型指向性地雷", "craymore", 220, 3)
, new SupportSub("リモートボム", "remote", 270,1)
, new SupportSub("リムペットボムS", "remote", 230, 2)
, new SupportSub("リムペットボムV", "remote", 330, 3)
, new SupportSub("ホバーマイン", "hmine", 190,1)
, new SupportSub("ホバーマインS", "hmine", 220, 2)
, new SupportSub("ホバーマインV", "hmine", 240, 3)
, new SupportSub("N60デトネーター", "detonator", 260, 1)
, new SupportSub("N60デトネーターR", "detonator", 290, 2)
, new SupportSub("N70デトネーター", "detonator", 310, 3)];
})(asmsim.data);