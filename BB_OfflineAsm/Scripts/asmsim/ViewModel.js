/// <reference path="../_reference.js" />
/// <reference path="datacontext.js" />
var asmsim;
(function (asmsim,datacontext) {
    asmsim.viewModel = function ViewModel() {
        var self = this;

        this.headList = ko.observableArray(datacontext.getHeadList());
        this.bodyList = ko.observableArray(datacontext.getBodyList());
        this.armList = ko.observableArray(datacontext.getArmList());
        this.legList = ko.observableArray(datacontext.getLegList());
        this.mainWeapons = ko.observableArray(datacontext.getMainWeaponList());
        this.subWeapons = ko.observableArray(datacontext.getSubWeaponList());
        this.asistWeapons = ko.observableArray(datacontext.getAssistWeaponList());
        this.spWeapons = ko.observableArray(datacontext.getSpWeaponList());

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
    }

})(asmsim = asmsim || {}, new asmsim.datacontext());

applicationCache.onerror = function (e) {
    console.log("appcache error");
    console.log(e);
    appcachError = e;
}