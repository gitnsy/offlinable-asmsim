asmsim.data = asmsim.data || {};
(function (data) {
    function AssaultMain(name, bland, weight, rank) {
        this.name = name;
        this.bland = bland;
        this.weight = weight;
        this.rank = rank;
    }

    data.assaultmain = [new AssaultMain("M90サブマシンガン", "smg", 140, 1)
, new AssaultMain("M90Cサブマシンガン", "smg", 130, 2)
, new AssaultMain("M91サブマシンガン", "smg", 160, 3)
, new AssaultMain("M99サーペント", "smg", 170, 4)
, new AssaultMain("M92ヴァイパー", "smg", 190, 5)
, new AssaultMain("サーペント/CV", "smg", 170, 4.1)
, new AssaultMain("D90デュアル", "dual", 290,1)
, new AssaultMain("D90カスタム", "dual", 270, 2)
, new AssaultMain("D92ジェイナス", "dual", 310, 3)
, new AssaultMain("D99オルトロス", "dual", 320, 4)
, new AssaultMain("D102アシュヴァイン", "dual", 360, 5)
, new AssaultMain("ヴォルペ突撃銃", "volpe", 220,1)
, new AssaultMain("ヴォルペ突撃銃C", "volpe", 210, 2)
, new AssaultMain("ヴォルペ突撃銃FAM", "volpe", 230, 3)
, new AssaultMain("ヴォルペ・スコーピオ", "volpe", 240, 4)
, new AssaultMain("ヴォルペ・メガロ", "volpe", 250, 5)
, new AssaultMain("スイッチアサルト", "swa", 300,1)
, new AssaultMain("スイッチアサルトC", "swa", 280, 2)
, new AssaultMain("スイッチアサルトR", "swa", 340, 3)
, new AssaultMain("スイッチアサルトII", "swa", 350, 4)
, new AssaultMain("電磁加速砲・壱式", "rgun", 280,1)
, new AssaultMain("電磁加速砲・弐式", "rgun", 290, 2)
, new AssaultMain("電磁加速砲・特式", "rgun", 310, 3)
, new AssaultMain("電磁加速砲・紫電", "rgun", 320, 4)
, new AssaultMain("電磁加速砲・速式", "rgun", 340, 5)
, new AssaultMain("VOLT-01", "volt", 190,1)
, new AssaultMain("VOLT-02", "volt", 180, 2)
, new AssaultMain("VOLT-R", "volt", 210, 3)
, new AssaultMain("VOLT-X", "volt", 230, 4)
, new AssaultMain("VOLT-RX", "volt", 250, 5)
, new AssaultMain("STAR-05", "star", 250,1)
, new AssaultMain("STAR-10", "star", 240, 2)
, new AssaultMain("STAR-10C", "star", 290, 3)
, new AssaultMain("STAR-20", "star", 270, 4)];
})(asmsim.data);
