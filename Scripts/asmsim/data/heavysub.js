asmsim.data = asmsim.data || {};
(function (data) {
    function HeavySub(name, bland, weight, rank) {
        this.name = name;
        this.bland = bland;
        this.weight = weight;
        this.rank = rank;
    }
    data.heavysub = [new HeavySub("サワードロケット", "weight", 480,1)
, new HeavySub("サワード・カスタム", "weight", 500,2)
, new HeavySub("サワード・バラージ", "weight", 530,3)
, new HeavySub("サワード・コング", "weight", 580,4)
, new HeavySub("サワード・スマイト", "weight", 490,5)
, new HeavySub("SSPNランチャー", "weight", 480,1.1)
, new HeavySub("コング/CV", "weight", 580,4.1)
, new HeavySub("プラズマカノン", "prasma", 450, 1)
, new HeavySub("プラズマカノンMk-2", "prasma", 460,2)
, new HeavySub("プラズマカノンXM", "prasma", 500, 3)
, new HeavySub("プラズマカノン・ネオ", "prasma", 480, 4)
, new HeavySub("プラズマカノンUG", "prasma", 470, 5)
, new HeavySub("チャージカノン", "chargep", 490,1)
, new HeavySub("チャージカノンMk-2", "chargep", 500, 2)
, new HeavySub("チャージカノンC", "chargep", 530, 3)
, new HeavySub("チャージカノン・イオ", "chargep", 560, 4)
, new HeavySub("試験型MLRS", "mlrs", 500,1)
, new HeavySub("高速型MLRS", "mlrs", 520, 2)
, new HeavySub("強化型MLRS", "mlrs", 570, 3)
, new HeavySub("多連装型MLRS", "mlrs", 590, 4)
, new HeavySub("斉射型MLRS", "mlrs", 620, 5)
, new HeavySub("シーカーロケット", "seeker", 470, 1)
, new HeavySub("トライシーカー", "seeker", 510, 2)
, new HeavySub("パワードシーカー", "seeker", 520, 3)
, new HeavySub("マルチシーカー", "seeker", 490, 4)
, new HeavySub("スプレッドランチャー", "spl", 530,1)
, new HeavySub("SPL-サージ", "spl", 560, 2)
, new HeavySub("SPL-プロミネンス", "spl", 570, 3)];
})(asmsim.data);
