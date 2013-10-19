asmsim.data = asmsim.data || {};
(function (data) {
    function BoltOnArms(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    data.boltOnArms = [new BoltOnArms("バラム重機砲", 720),
        new BoltOnArms("爆撃通信機", 600),
        new BoltOnArms("オートガン", 660)
    ];

})(asmsim.data);