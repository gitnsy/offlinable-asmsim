asmsim.data = asmsim.data || {};
(function (data) {
    function SetBonus(bland, description) {
        this.bland = bland;
        this.description = description;
    }

    data.setbonus = [new SetBonus("Cooger" , "重量耐性UP(150)")];
})(asmsim.data);