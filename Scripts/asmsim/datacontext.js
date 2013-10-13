var asmsim;
(function (asmsim) {
    asmsim.datacontext = function datacontext() {
    };
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

    //Weapon-Assault
    asmsim.datacontext.prototype.getAssaultMainWeaponList = function () {
        return asmsim.data.assaultmain;
    };
    asmsim.datacontext.prototype.getAssaultSubWeaponList = function () {
        return asmsim.data.assaultsub;
    };
    asmsim.datacontext.prototype.getAssaultAssistWeaponList = function () {
        return asmsim.data.assaultassist;
    };
    asmsim.datacontext.prototype.getAssaultSpWeaponList = function () {
        return asmsim.data.assaultsp;
    };
    //Weapon-Heavy
    asmsim.datacontext.prototype.getHeavyMainWeaponList = function () {
        return asmsim.data.heavymain;
    };
    asmsim.datacontext.prototype.getHeavySubWeaponList = function () {
        return asmsim.data.heavysub;
    };
    asmsim.datacontext.prototype.getHeavyAssistWeaponList = function () {
        return asmsim.data.heavyassist;
    };
    asmsim.datacontext.prototype.getHeavySpWeaponList = function () {
        return asmsim.data.heavysp;
    };
    //Weapon-Support
    asmsim.datacontext.prototype.getSupportMainWeaponList = function () {
        return asmsim.data.supportmain;
    };
    asmsim.datacontext.prototype.getSupportSubWeaponList = function () {
        return asmsim.data.supportsub;
    };
    asmsim.datacontext.prototype.getSupportAssistWeaponList = function () {
        return asmsim.data.supportassist;
    };
    asmsim.datacontext.prototype.getSupportSpWeaponList = function () {
        return asmsim.data.supportsp;
    };
    //Weapon-Sniper
    asmsim.datacontext.prototype.getSniperMainWeaponList = function () {
        return asmsim.data.snipermain;
    };
    asmsim.datacontext.prototype.getSniperSubWeaponList = function () {
        return asmsim.data.snipersub;
    };
    asmsim.datacontext.prototype.getSniperAssistWeaponList = function () {
        return asmsim.data.sniperassist;
    };
    asmsim.datacontext.prototype.getSniperSpWeaponList = function () {
        return asmsim.data.snipersp;
    };
})(asmsim = asmsim || {});