asmsim.data = asmsim.data || {};
(function (data) {
    function HeavySp(name, bland, weight, rank) {
        this.name = name;
        this.bland = bland;
        this.weight = weight;
        this.rank = rank;
    }
    data.heavysp = [new HeavySp("タイタン榴弾砲", "howitzer", 900, 1)
, new HeavySp("コロッサス榴弾砲", "howitzer", 940, 2)
, new HeavySp("アトラント榴弾砲", "howitzer", 1010, 3)
, new HeavySp("ギガノト榴弾砲", "howitzer", 1050, 4)
, new HeavySp("ネフィリム榴弾砲", "howitzer", 1030, 5)
, new HeavySp("タルラッピーキャノン", "howitzer", 940, 2.1)
, new HeavySp("エアバスターT10", "airb", 720,1)
, new HeavySp("エアバスターT25", "airb", 890, 2)
, new HeavySp("エアバスターXHR", "airb", 930, 3)
, new HeavySp("エアバスターT30", "airb", 660, 4)
, new HeavySp("タウル重装砲", "hcannon", 780,1)
, new HeavySp("ヴァーゴ重装砲", "hcannon", 860, 2)
, new HeavySp("ドラード重装砲", "hcannon", 960, 3)
, new HeavySp("ハイドラ重装砲", "hcannon", 840, 4)
, new HeavySp("バリアユニット", "barrier", 710, 1)
, new HeavySp("バリアユニットβ", "barrier", 680, 2)
, new HeavySp("UAD-レモラ", "uad", 600,1)
, new HeavySp("UAD-ケリブ", "uad", 620, 2)
, new HeavySp("UAD-ガレオス", "uad", 670, 4)];
})(asmsim.data);