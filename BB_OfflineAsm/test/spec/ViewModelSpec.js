/// <reference path="../lib/jasmine-1.3.0/jasmine.js" />
/// <reference path="/Scripts/asmsim/ViewModel.js" />

describe("ViewModelテスト", function () {
    it("デシリアライズ", function () {
        expect().toEqual(false);
    });

    //xdescribeで一時的に無効化
    xdescribe("ViewModel各プロパティテスト", function () {
        var vm = new asmsim.viewModel({});

        describe("observable", function () {
            it("filterArmWeight()", function () {
                expect(vm.filterArmWeight()).toEqual(0);
            });

            it("filterBodyWeight()", function () {
                expect(vm.filterBodyWeight()).toEqual(0);
            });

            it("filterHeadWeight()", function () {
                expect(vm.filterHeadWeight()).toEqual(0);
            });

            it("filterLegWeight()", function () {
                expect(vm.filterLegWeight()).toEqual(0);
            });

            it("exParams()", function () {
                expect(vm.exParams()).toEqual();
            });

            it("selectedAssaultAssist()", function () {
                expect(vm.selectedAssaultAssist()).toEqual();
            });

            it("selectedAssaultMain()", function () {
                expect(vm.selectedAssaultMain()).toEqual();
            });

            it("selectedAssaultSp()", function () {
                expect(vm.selectedAssaultSp()).toEqual();
            });

            it("selectedAssaultSub()", function () {
                expect(vm.selectedAssaultSub()).toEqual();
            });

            it("selectedHeavyAssist()", function () {
                expect(vm.selectedHeavyAssist()).toEqual();
            });

            it("selectedHeavyMain()", function () {
                expect(vm.selectedHeavyMain()).toEqual();
            });

            it("selectedHeavySp()", function () {
                expect(vm.selectedHeavySp()).toEqual();
            });

            it("selectedHeavySub()", function () {
                expect(vm.selectedHeavySub()).toEqual();
            });

            it("selectedSniperAssist()", function () {
                expect(vm.selectedSniperAssist()).toEqual();
            });

            it("selectedSniperMain()", function () {
                expect(vm.selectedSniperMain()).toEqual();
            });

            it("selectedSniperSp()", function () {
                expect(vm.selectedSniperSp()).toEqual();
            });

            it("selectedSniperSub()", function () {
                expect(vm.selectedSniperSub()).toEqual();
            });

            it("selectedSupportAssist()", function () {
                expect(vm.selectedSupportAssist()).toEqual();
            });

            it("selectedSupportMain()", function () {
                expect(vm.selectedSupportMain()).toEqual();
            });

            it("selectedSupportSp()", function () {
                expect(vm.selectedSupportSp()).toEqual();
            });

            it("selectedSupportSub()", function () {
                expect(vm.selectedSupportSub()).toEqual();
            });

            it("addBoltonArmWeight()", function () {
                expect(vm.addBoltonArmWeight()).toEqual();
            });

            it("selectedArm()", function () {
                expect(vm.selectedArm()).toEqual();
            });

            it("selectedBody()", function () {
                expect(vm.selectedBody()).toEqual();
            });

            it("selectedBoltOnArm()", function () {
                expect(vm.selectedBoltOnArm()).toEqual();
            });

            it("selectedHead()", function () {
                expect(vm.selectedHead()).toEqual();
            });

            it("selectedLeg()", function () {
                expect(vm.selectedLeg()).toEqual();
            });

        });
        describe("observableArray", function () {
            it("armFilters()", function () {
                expect(vm.armFilters()).toEqual();
            });

            it("bodyFilters()", function () {
                expect(vm.bodyFilters()).toEqual();
            });

            it("headFilters()", function () {
                expect(vm.headFilters()).toEqual();
            });

            it("legFilters()", function () {
                expect(vm.legFilters()).toEqual();
            });

            it("actionChipList()", function () {
                expect(vm.actionChipList()).toEqual();
            });

            it("advanceChipList()", function () {
                expect(vm.advanceChipList()).toEqual();
            });

            it("enhanceChipList()", function () {
                expect(vm.enhanceChipList()).toEqual();
            });

            it("armList()", function () {
                expect(vm.armList()).toEqual();
            });

            it("assaultAssistWeapons()", function () {
                expect(vm.assaultAssistWeapons()).toEqual();
            });

            it("assaultMainWeapons()", function () {
                expect(vm.assaultMainWeapons()).toEqual();
            });

            it("assaultSpWeapons()", function () {
                expect(vm.assaultSpWeapons()).toEqual();
            });

            it("assaultSubWeapons()", function () {
                expect(vm.assaultSubWeapons()).toEqual();
            });

            it("bodyList()", function () {
                expect(vm.bodyList()).toEqual();
            });

            it("headList()", function () {
                expect(vm.headList()).toEqual();
            });

            it("heavyAssistWeapons()", function () {
                expect(vm.heavyAssistWeapons()).toEqual();
            });

            it("heavyMainWeapons()", function () {
                expect(vm.heavyMainWeapons()).toEqual();
            });

            it("heavySpWeapons()", function () {
                expect(vm.heavySpWeapons()).toEqual();
            });

            it("heavySubWeapons()", function () {
                expect(vm.heavySubWeapons()).toEqual();
            });

            it("legList()", function () {
                expect(vm.legList()).toEqual();
            });

            it("sniperAssistWeapons()", function () {
                expect(vm.sniperAssistWeapons()).toEqual();
            });

            it("sniperMainWeapons()", function () {
                expect(vm.sniperMainWeapons()).toEqual();
            });

            it("sniperSpWeapons()", function () {
                expect(vm.sniperSpWeapons()).toEqual();
            });

            it("sniperSubWeapons()", function () {
                expect(vm.sniperSubWeapons()).toEqual();
            });

            it("supportAssistWeapons()", function () {
                expect(vm.supportAssistWeapons()).toEqual();
            });

            it("supportMainWeapons()", function () {
                expect(vm.supportMainWeapons()).toEqual();
            });

            it("supportSpWeapons()", function () {
                expect(vm.supportSpWeapons()).toEqual();
            });

            it("supportSubWeapons()", function () {
                expect(vm.supportSubWeapons()).toEqual();
            });

            it("boltonArmList()", function () {
                expect(vm.boltonArmList()).toEqual();
            });

        });
        describe("computed", function () {
            it("armorAvarage()", function () {
                expect(vm.armorAvarage()).toEqual();
            });

            it("assaultWeight()", function () {
                expect(vm.assaultWeight()).toEqual();
            });

            it("capacity()", function () {
                expect(vm.capacity()).toEqual();
            });

            it("filterdArm()", function () {
                expect(vm.filterdArm()).toEqual();
            });

            it("filterdBody()", function () {
                expect(vm.filterdBody()).toEqual();
            });

            it("filterdHead()", function () {
                expect(vm.filterdHead()).toEqual();
            });

            it("filterdLeg()", function () {
                expect(vm.filterdLeg()).toEqual();
            });

            it("heavyWeight()", function () {
                expect(vm.heavyWeight()).toEqual();
            });

            it("setBonus()", function () {
                expect(vm.setBonus()).toEqual();
            });

            it("sniperWeight()", function () {
                expect(vm.sniperWeight()).toEqual();
            });

            it("supportWeight()", function () {
                expect(vm.supportWeight()).toEqual();
            });

            it("totalChipCapacity()", function () {
                expect(vm.totalChipCapacity()).toEqual();
            });

            it("totalChipCost()", function () {
                expect(vm.totalChipCost()).toEqual();
            });

            it("totalWeight()", function () {
                expect(vm.totalWeight()).toEqual();
            });

        });
    });

});