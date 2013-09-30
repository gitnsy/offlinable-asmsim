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

    asmsim.datacontext.prototype.getArmList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getBodyList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getHeadList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getLegList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getMainWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getSubWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getAssistWeaponList = function () {
        return testparts;
    };
    asmsim.datacontext.prototype.getSpWeaponList = function () {
        return testparts;
    };
})(asmsim = asmsim || {});