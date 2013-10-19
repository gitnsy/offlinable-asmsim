/// <reference path="../_reference.js" />
/// <reference path="datacontext.js" />
var asmsim = asmsim || {};
(function (asmsim, datacontext) {
    asmsim.viewModel = function ViewModel() {
        var self = this
        , filters = {
            eq: function (a, b) {
                return a === b;
            },
            mt: function (a, b) {
                return a <= b;
            },
            lt: function (a, b) {
                return a >= b;
            }
        }
        , partsRank = ["S", "A+", "A", "B-", "B+", "B", "C-", "C+", "C", "D-", "D+", "D", "E-", "E-", "E-"]
        ;
        function Filter(name, routine) {
            this.name = name;
            this.filterRoutine = routine;
        }

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

        this.boltonArmList = ko.observable(datacontext.boltOnArms());

        this.advanceChipList = ko.observableArray(datacontext.advanceChip().map(function (a) { a.selected = ko.observable(false); return a; }));
        this.enhanceChipList = ko.observableArray(datacontext.enhanceChip().map(function (a) { a.selected = ko.observable(false); return a; }));
        this.actionChipList = ko.observableArray(datacontext.actionChip().map(function (a) { a.selected = ko.observable(false); return a; }));

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
        
        this.selectedBoltOnArm = ko.observable(self.boltonArmList()[0]);
        this.addBoltonArmWeight = ko.observable(false);

        this.filterHeadWeight = ko.observable();
        this.filterBodyWeight = ko.observable();
        this.filterArmWeight = ko.observable();
        this.filterLegWeight = ko.observable();

        this.exParams = ko.observable(0);

        //computed
        this.filterdHead = ko.computed(function () {
            return self.filterHeadWeight() == null || self.filterHeadWeight() == false || isNaN(+self.filterHeadWeight())
                ? self.headList()
                : self.headList().filter(function (a) { return +self.filterHeadWeight() >= a.weight; });
        });
        this.filterdBody = ko.computed(function () {
            return self.filterBodyWeight() == null || self.filterBodyWeight() == false || isNaN(+self.filterBodyWeight())
                ? self.bodyList()
                : self.bodyList().filter(function (a) { return +self.filterBodyWeight() >= a.weight; });
        });
        this.filterdArm = ko.computed(function () {
            return self.filterArmWeight() == null || self.filterArmWeight() == false || isNaN(+self.filterArmWeight())
                ? self.armList()
                : self.armList().filter(function (a) { return +self.filterArmWeight() >= a.weight; });
        });
        this.filterdLeg = ko.computed(function () {
            return self.filterLegWeight() == null || self.filterLegWeight() == false || isNaN(+self.filterLegWeight())
                ? self.legList()
                : self.legList().filter(function (a) { return +self.filterLegWeight() >= a.weight; });
        });

        this.setBonus = ko.computed(function () {
            var sb = (self.selectedHead().bland === self.selectedBody().bland
                && self.selectedHead().bland === self.selectedArm().bland
                && self.selectedHead().bland === self.selectedLeg().bland)
            ? asmsim.data.setbonus[self.selectedHead().bland] : {};

            self.exParams(sb.adjustRoutine || 0);
            return sb.description || "";
        });

        this.totalWeight = ko.computed(function () {
            return self.selectedHead().weight
                + self.selectedBody().weight
                + self.selectedArm().weight
                + self.selectedLeg().weight
                + (self.addBoltonArmWeight() ? self.selectedBoltOnArm().weight : 0)
            ;
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
            return ((asmsim.data.armorRealValue[self.selectedHead().armor]
                + asmsim.data.armorRealValue[self.selectedBody().armor]
                + asmsim.data.armorRealValue[self.selectedArm().armor]
            + asmsim.data.armorRealValue[self.selectedLeg().armor] )/4*100) +"%";
        });

        this.totalChipCapacity = ko.computed(function () {
            return (self.selectedHead().chipCapacity * 10
                + self.selectedBody().chipCapacity * 10
                + self.selectedArm().chipCapacity * 10
                + self.selectedLeg().chipCapacity * 10) / 10;
        });

        this.totalChipCost = ko.computed(function () {
            var result = 0;
            self.actionChipList().filter(function (a) { return a.selected() }).forEach(function (a) {
                result += a.cost;
            })
            self.enhanceChipList().filter(function (a) { return a.selected() }).forEach(function (a) {
                result += a.cost;
            })
            self.advanceChipList().filter(function (a) { return a.selected() }).forEach(function (a) {
                result += a.cost;
            })
            return result;
        });

        this.capacity = ko.computed(function () {
            return asmsim.data.weightCapacityRealvalue[self.selectedLeg().weightCapacity]
                + self.exParams();
        });
    }

})(asmsim, new asmsim.datacontext());