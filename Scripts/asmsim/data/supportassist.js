asmsim.data = asmsim.data || {};
(function (data) {
    function SupportAssist(name, bland, weight, rank) {
        this.name = name;
        this.bland = bland;
        this.weight = weight;
        this.rank = rank;
    }
        data.supportassist = [new SupportAssist("ラーク偵察機", "spyplane", 400,1)
, new SupportAssist("ファルコン偵察機", "spyplane", 390,2)
, new SupportAssist("アウル偵察機", "spyplane", 420,3)
, new SupportAssist("ロビン偵察機", "spyplane", 410,4)
, new SupportAssist("ストーク偵察機", "spyplane", 430,5)
, new SupportAssist("ガルーダ", "spyplane", 390,2.1)
, new SupportAssist("索敵センサー", "sensor", 350,1)
, new SupportAssist("小型索敵センサー", "sensor", 280,2)
, new SupportAssist("広域索敵センサー", "sensor", 380,3)
, new SupportAssist("軽量索敵センサー", "sensor", 250,4)
, new SupportAssist("滞空索敵弾", "airsensor", 370,1)
, new SupportAssist("小型滞空索敵弾", "airsensor", 360, 2)
, new SupportAssist("広域滞空索敵弾", "airsensor", 420, 3)
, new SupportAssist("レーダーユニット", "rader", 410,1)
, new SupportAssist("レーダーユニットII", "rader", 420, 2)
, new SupportAssist("レーダーユニットIII", "rader", 450, 3)
, new SupportAssist("スタナーJ", "stunner", 320,1)
, new SupportAssist("スタナーJ2", "stunner", 350, 2)
, new SupportAssist("スタナーK", "stunner", 370, 3)
, new SupportAssist("弾薬BOX", "box", 300,1)
, new SupportAssist("自律型弾薬BOX", "box", 320, 2)
, new SupportAssist("ND索敵センサー", "ndsensor", 340,1)
, new SupportAssist("小型ND索敵センサー", "ndsensor", 310, 2)];

})(asmsim.data);
