var asmsim;
(function (asmsim) {
    asmsim.datacontext = function datacontext() {
    }

    var testparts = [{ name: "クーガーI型", weight: 100 }
        , { name: "クーガーII型", weight: 120 }
        , { name: "シュライクI型", weight: 90 }
        , { name: "シュライクII型", weight: 70 }
        , { name: "ヘヴィガードI型", weight: 200 }
        , { name: "ヘヴィガードII型", weight: 250 }
    ];
    //Frame
    asmsim.datacontext.prototype.getArmList = function () {
        return asmsim.data.arms;
    };
    asmsim.datacontext.prototype.getBodyList = function () {
        return asmsim.data.bodys;
    };
    asmsim.datacontext.prototype.getHeadList = function () {
        return asmsim.data.heads;
    };
    asmsim.datacontext.prototype.getLegList = function () {
        return asmsim.data.legs;
    };
    //Weapon-Assult
    asmsim.datacontext.prototype.getAssultMainWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getAssultSubWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getAssultAssistWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getAssultSpWeaponList = function () {
        return testparts;
    };
    //Weapon-Heavy
    asmsim.datacontext.prototype.getHeavyMainWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getHeavySubWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getHeavyAssistWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getHeavySpWeaponList = function () {
        return testparts;
    };
    //Weapon-Support
    asmsim.datacontext.prototype.getSupportMainWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getSupportSubWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getSupportAssistWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getSupportSpWeaponList = function () {
        return testparts;
    };
    //Weapon-Sniper
    asmsim.datacontext.prototype.getSniperMainWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getSniperSubWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getSniperAssistWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getSniperSpWeaponList = function () {
        return testparts;
    };
})(asmsim = asmsim || {});