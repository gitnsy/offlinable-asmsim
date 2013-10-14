asmsim.data = asmsim.data || {};
(function (data) {
    function SetBonus(description, adjustRoutine) {
        this.description = description;
        this.adjustRoutine = adjustRoutine;
    }

    data.setbonus = {
        Cooger: new SetBonus("重量耐性UP(150)", 150)
, HG: new SetBonus("装甲UP(各部位+3%)")
, Shrike: new SetBonus("歩行UP(+1.62km/h(+0.45m/s))")
, Zebra: new SetBonus("索敵UP(+15m)")
, Enfocer: new SetBonus("ブースターUP(3)")
, Kafer: new SetBonus("反動吸収UP(5%)")
, EDG: new SetBonus("リロードUP(3%)")
, YAKSHA: new SetBonus("ダッシュUP(+2.16km/h(+0.60m/s))")
, Saber: new SetBonus("エリア移動UP(-0.5秒)")
, Discus: new SetBonus("SP供給率UP(5%)")
, Nereid: new SetBonus("射撃補正UP(3%)")
, Jinga: new SetBonus("ロックオンUP(+5m)")
, Rosie: new SetBonus("装甲UP(各部位+3%)")
, BUZ: new SetBonus("通常移動UP(+2.16km/h(+0.60m/s))")
, LANDBULK: new SetBonus("重量耐性UP(150)", 150)
, Formula: new SetBonus("高速移動UP(+2.592km/h(+0.72m/s))")
, Raika: new SetBonus("ブースターUP(3)")
, JADE: new SetBonus("ダッシュUP(+2.16km/h(+0.60m/s))")
, ASURA: new SetBonus("武器変更UP(5%)")
    };
})(asmsim.data);