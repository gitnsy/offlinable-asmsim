/// <reference path="../_reference.js" />
/// <reference path="datacontext.js" />
var asmsim = asmsim || {};
(function (asmsim, datacontext) {
    asmsim.viewModel = function ViewModel() {
        var self = this;

        this.headList = ko.observableArray(datacontext.getHeadList());
        this.bodyList = ko.observableArray(datacontext.getBodyList());
        this.armList = ko.observableArray(datacontext.getArmList());
        this.legList = ko.observableArray(datacontext.getLegList());

        this.assaultMainWeapons = ko.observableArray(datacontext.getAssaultMainWeaponList());
        this.assaultSubWeapons = ko.observableArray(datacontext.getAssaultSubWeaponList());
        this.assaultAssistWeapons = ko.observableArray(datacontext.getAssaultAssistWeaponList());
        this.assaultSpWeapons = ko.observableArray(datacontext.getAssaultSpWeaponList());

        this.heavyMainWeapons = ko.observableArray(datacontext.getHeavyMainWeaponList());
        this.heavySubWeapons = ko.observableArray(datacontext.getHeavySubWeaponList());
        this.heavyAssistWeapons = ko.observableArray(datacontext.getHeavyAssistWeaponList());
        this.heavySpWeapons = ko.observableArray(datacontext.getHeavySpWeaponList());

        this.sniperMainWeapons = ko.observableArray(datacontext.getSniperMainWeaponList());
        this.sniperSubWeapons = ko.observableArray(datacontext.getSniperSubWeaponList());
        this.sniperAssistWeapons = ko.observableArray(datacontext.getSniperAssistWeaponList());
        this.sniperSpWeapons = ko.observableArray(datacontext.getSniperSpWeaponList());

        this.supportMainWeapons = ko.observableArray(datacontext.getSupportMainWeaponList());
        this.supportSubWeapons = ko.observableArray(datacontext.getSupportSubWeaponList());
        this.supportAssistWeapons = ko.observableArray(datacontext.getSupportAssistWeaponList());
        this.supportSpWeapons = ko.observableArray(datacontext.getSupportSpWeaponList());

        //user's selected
        this.selectedHead = ko.observable(self.headList()[0]);
        this.selectedBody = ko.observable(self.bodyList()[0]);
        this.selectedArm = ko.observable(self.armList()[0]);
        this.selectedLeg = ko.observable(self.legList()[0]);

        this.selectedAssaultMain = ko.observable(datacontext.getAssaultMainWeaponList()[0]);
        this.selectedAssaultSub = ko.observable(datacontext.getAssaultSubWeaponList()[0]);
        this.selectedAssaultAssist = ko.observable(datacontext.getAssaultAssistWeaponList()[0]);
        this.selectedAssaultSp = ko.observable(datacontext.getAssaultSpWeaponList()[0]);

        this.selectedHeavyMain = ko.observable(datacontext.getHeavyMainWeaponList()[0]);
        this.selectedHeavySub = ko.observable(datacontext.getHeavySubWeaponList()[0]);
        this.selectedHeavyAssist = ko.observable(datacontext.getHeavyAssistWeaponList()[0]);
        this.selectedHeavySp = ko.observable(datacontext.getHeavySpWeaponList()[0]);

        this.selectedSniperMain = ko.observable(datacontext.getSniperMainWeaponList()[0]);
        this.selectedSniperSub = ko.observable(datacontext.getSniperSubWeaponList()[0]);
        this.selectedSniperAssist = ko.observable(datacontext.getSniperAssistWeaponList()[0]);
        this.selectedSniperSp = ko.observable(datacontext.getSniperSpWeaponList()[0]);

        this.selectedSupportMain = ko.observable(datacontext.getSupportMainWeaponList()[0]);
        this.selectedSupportSub = ko.observable(datacontext.getSupportSubWeaponList()[0]);
        this.selectedSupportAssist = ko.observable(datacontext.getSupportAssistWeaponList()[0]);
        this.selectedSupportSp = ko.observable(datacontext.getSupportSpWeaponList()[0]);

        this.totalWeight = ko.computed(function () {
            return self.selectedHead().weight
                + self.selectedBody().weight
                + self.selectedArm().weight
                + self.selectedLeg().weight;
        });

        this.assaultWeight = ko.computed(function () {
            return self.totalWeight()
                + self.selectedAssaultMain().weight
                + self.selectedAssaultSub().weight
                + self.selectedAssaultAssist().weight
                + self.selectedAssaultSp().weight;
        });

        this.heavyWeight = ko.computed(function () {
            return self.totalWeight()
                + self.selectedHeavyMain().weight
                + self.selectedHeavySub().weight
                + self.selectedHeavyAssist().weight
                + self.selectedHeavySp().weight;
        });

        this.supportWeight = ko.computed(function () {
            return self.totalWeight()
                + self.selectedSupportMain().weight
                + self.selectedSupportSub().weight
                + self.selectedSupportAssist().weight
                + self.selectedSupportSp().weight;
        });

        this.sniperWeight = ko.computed(function () {
            return self.totalWeight()
                + self.selectedSniperMain().weight
                + self.selectedSniperSub().weight
                + self.selectedSniperAssist().weight
                + self.selectedSniperSp().weight;
        });

        this.armorAvarage = ko.computed(function () {
            return (self.selectedHead().armor
                + self.selectedBody().armor
                + self.selectedArm().armor
                + self.selectedLeg().armor) / 4;
        });

        this.totalChipCapacity = ko.computed(function () {
            //return self.selectedHead().chipCapacity
            //    + self.selectedBody().chipCapacity
            //    + self.selectedArm().chipCapacity
            //    + self.selectedLeg().chipCapacity;
            //少数の挙動が怪しい。上だと杖38NXNXIで少数がやけに続いた。とりあえず整数で計算できるよう変更
            return (self.selectedHead().chipCapacity * 10
                + self.selectedBody().chipCapacity * 10
                + self.selectedArm().chipCapacity * 10
                + self.selectedLeg().chipCapacity * 10) / 10;
        });

        this.capacity = ko.computed(function () {
            return asmsim.data.weightCapacityRealvalue[self.selectedLeg().weightCapacity];
        });
    }

})(asmsim, new asmsim.datacontext());