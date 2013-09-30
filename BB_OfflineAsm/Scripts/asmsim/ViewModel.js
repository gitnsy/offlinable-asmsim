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

        this.assultMainWeapons = ko.observableArray(datacontext.getAssultMainWeaponList());
        this.assultSubWeapons = ko.observableArray(datacontext.getAssultSubWeaponList());
        this.assultAsistWeapons = ko.observableArray(datacontext.getAssultAssistWeaponList());
        this.assultSpWeapons = ko.observableArray(datacontext.getAssultSpWeaponList());

        this.heavyMainWeapons = ko.observableArray(datacontext.getHeavyMainWeaponList());
        this.heavySubWeapons = ko.observableArray(datacontext.getHeavySubWeaponList());
        this.heavyAsistWeapons = ko.observableArray(datacontext.getHeavyAssistWeaponList());
        this.heavySpWeapons = ko.observableArray(datacontext.getHeavySpWeaponList());

        this.sniperMainWeapons = ko.observableArray(datacontext.getSniperMainWeaponList());
        this.sniperSubWeapons = ko.observableArray(datacontext.getSniperSubWeaponList());
        this.sniperAsistWeapons = ko.observableArray(datacontext.getSniperAssistWeaponList());
        this.sniperSpWeapons = ko.observableArray(datacontext.getSniperSpWeaponList());

        this.supportMainWeapons = ko.observableArray(datacontext.getSupportMainWeaponList());
        this.supportSubWeapons = ko.observableArray(datacontext.getSupportSubWeaponList());
        this.supportAsistWeapons = ko.observableArray(datacontext.getSupportAssistWeaponList());
        this.supportSpWeapons = ko.observableArray(datacontext.getSupportSpWeaponList());
        
        //user's selected
        this.selectedHead = ko.observable(datacontext.getHeadList()[0]);
        this.selectedBody = ko.observable(datacontext.getHeadList()[0]);
        this.selectedArm = ko.observable(datacontext.getHeadList()[0]);
        this.selectedLeg = ko.observable(datacontext.getHeadList()[0]);

        this.totalWeight = ko.computed(function () {
            return self.selectedHead().weight
                + self.selectedBody().weight
                + self.selectedArm().weight
                + self.selectedLeg().weight;
        });

        this.assultWeight = ko.computed(function () {
            return self.totalWeight() + 100;
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
        })
    }

})(asmsim, new asmsim.datacontext());