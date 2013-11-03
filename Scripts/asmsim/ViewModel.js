/// <reference path="../_reference.js" />
/// <reference path="datacontext.js" />
/// <reference path="serializer.js" />


var asmsim = asmsim || {};
(function (asmsim) {
    var partsTable = [
        "S",
        "A+", "A", "A-",
        "B+", "B", "B-",
        "C+", "C", "C-",
        "D+", "D", "D-",
        "E+", "E", "E-"];

    function Filter(comparator) {
        var self = this;

        this.sourceProvider = function (a, s) { return a[s] };
        this.sourceProp = ko.observable();
        this.targetProvider = ko.observable();
        this.target = ko.observable();
        this.comparator = ko.observable(comparator);

        this.result = ko.computed(function () {
            return function (s) {
                return self.comparator()(self.sourceProvider(s, self.sourceProp())
                    , self.target())
            };
        });
    }

    asmsim.viewModel = function ViewModel(datacontext) {
        var self = this,
            serializer = asmsim.serializer;

        this.partsRank = partsTable;
        this.headProps = [
            { name: "装甲", prop: "armor" },
            { name: "射撃補正", prop: "shotAdjust" },
            { name: "索敵", prop: "search" },
            { name: "ロックオン", prop: "lockon" }
        ];
        this.bodyProps = [
            { name: "装甲", prop: "armor" },
            { name: "ブースト", prop: "boosterGen" },
            { name: "SP", prop: "spGen" },
            { name: "エリア移動", prop: "areaChange" }
        ];
        this.armProps = [
            { name: "装甲", prop: "armor" },
            { name: "反動吸収", prop: "recoil" },
            { name: "リロード", prop: "reload" },
            { name: "武器切替", prop: "weaponChange" },
        ];
        this.legProps = [
            { name: "装甲", prop: "armor" },
            { name: "歩行", prop: "walk" },
            { name: "ダッシュ", prop: "dash" },
            { name: "重量耐性", prop: "weightCapacity" }
        ];

        this.filters = [{ name: "(none)", routine: function (s, o) { return true } },
            { name: "等しい", routine: function (s, o) { return partsTable.indexOf(s) === partsTable.indexOf(o) } },
            { name: "以上", routine: function (s, o) { return partsTable.indexOf(s) <= partsTable.indexOf(o) } },
            { name: "以下", routine: function (s, o) { return partsTable.indexOf(s) >= partsTable.indexOf(o) } }
        ];

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

        this.saveUrl = ko.observable();

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

        this.headFilters = ko.observableArray([new Filter(self.filters[0].routine)]);
        this.bodyFilters = ko.observableArray([new Filter(self.filters[0].routine)]);
        this.armFilters = ko.observableArray([new Filter(self.filters[0].routine)]);
        this.legFilters = ko.observableArray([new Filter(self.filters[0].routine)]);

        this.exParams = ko.observable(0);

        //computed
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
            + asmsim.data.armorRealValue[self.selectedLeg().armor]) / 4 * 100) + "%";
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


        this.filterdArm = ko.computed(function () {
            return filtering(self.armList(), self.armFilters(), self.filterArmWeight())
        });
        this.filterdHead = ko.computed(function () {
            return filtering(self.headList(), self.headFilters(), self.filterHeadWeight())
        });
        this.filterdBody = ko.computed(function () {
            return filtering(self.bodyList(), self.bodyFilters(), self.filterBodyWeight())
        });
        this.filterdLeg = ko.computed(function () {
            return filtering(self.legList(), self.legFilters(), self.filterLegWeight())
        });

        function filtering(s, filter, weight) {
            s = weight == null || weight == false || isNaN(+weight)
                ? s
                : s.filter(function (a) { return +weight >= a.weight; });
            for (var i = 0; i < filter.length; i++) {
                s = s.filter(filter[i].result());
            }
            return s;
        }

        //ハッシュを現在のアセンブルへのアクセス用へ変更したりする
        this.replaceUrl = function () {
            location.hash = serializer.toUrl(self);
            self.saveUrl(location.href);
        }

        //シリアライズ用オブジェクトを利用して
        this.apply = function (converted) {
            var foo = [
                { prop: "h", source: "headList", target: "selectedHead" },
                { prop: "b", source: "bodyList", target: "selectedBody" },
                { prop: "a", source: "armList", target: "selectedArm" },
                { prop: "l", source: "legList", target: "selectedLeg" },
                { prop: "am", source: "assaultMainWeapons", target: "selectedAssaultMain" },
                { prop: "as", source: "assaultSubWeapons", target: "selectedAssaultSub" },
                { prop: "aa", source: "assaultAssistWeapons", target: "selectedAssaultAssist" },
                { prop: "ax", source: "assaultSpWeapons", target: "selectedAssaultSp" },
                { prop: "hm", source: "heavyMainWeapons", target: "selectedHeavyMain" },
                { prop: "hs", source: "heavySubWeapons", target: "selectedHeavySub" },
                { prop: "ha", source: "heavyAssistWeapons", target: "selectedHeavyAssist" },
                { prop: "hx", source: "heavySpWeapons", target: "selectedHeavySp" },
                { prop: "sm", source: "supportMainWeapons", target: "selectedSupportMain" },
                { prop: "ss", source: "supportSubWeapons", target: "selectedSupportSub" },
                { prop: "sa", source: "supportAssistWeapons", target: "selectedSupportAssist" },
                { prop: "sx", source: "supportSpWeapons", target: "selectedSupportSp" },
                { prop: "nm", source: "sniperMainWeapons", target: "selectedSniperMain" },
                { prop: "ns", source: "sniperSubWeapons", target: "selectedSniperSub" },
                { prop: "na", source: "sniperAssistWeapons", target: "selectedSniperAssist" },
                { prop: "nx", source: "sniperSpWeapons", target: "selectedSniperSp" }
            ]
            , chip = [
                { prop: "ca", target: "actionChipList" },
                { prop: "cm", target: "advanceChipList" },
                { prop: "ce", target: "enhanceChipList"}
            ]
            ;self.actionChipList

            foo.forEach(function myfunction(a) {
                if (converted[a.prop] != null) {
                    self[a.source]().every(function (b, i) {
                        if (b.bland === converted[a.prop].bland && b.rank == converted[a.prop].rank) {
                            self[a.target](self[a.source]()[i]);
                            return false;
                        }
                        return true
                    });
                }
            });

            chip.forEach(function (a) {
                if (converted[a.prop] != null && converted[a.prop].length > 0) {
                    self[a.target]().forEach(function (b) {
                        b.selected(converted[a.prop].some(function (c) {
                            return b.bland === c.bland && b.rank == c.rank
                        }));
                    });
                }   
            });

        }

    }
})(asmsim);