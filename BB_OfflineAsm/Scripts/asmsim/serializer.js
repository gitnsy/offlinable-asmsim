/// <reference path="ViewModel.js" />
var asmsim = asmsim || {};
(function (asmsim) {
    asmsim.serializer = {
        //vm:変換するViewModel
        toUrl: function (vm) {
            var getChip = function (a) {
                return a.selected();
            }
            , mapChip = function myfunction(a) {
                return a.bland + "_" + a.rank;
            };

            return "h:" + vm.selectedHead().bland + "_" + vm.selectedHead().rank + ","
                    + "b:" + vm.selectedBody().bland + "_" + vm.selectedBody().rank + ","
                    + "a:" + vm.selectedArm().bland + "_" + vm.selectedArm().rank + ","
                    + "l:" + vm.selectedLeg().bland + "_" + vm.selectedLeg().rank + ","
                    + "am:" + vm.selectedAssaultMain().bland + "_" + vm.selectedAssaultMain().rank + ","
                    + "as:" + vm.selectedAssaultSub().bland + "_" + vm.selectedAssaultSub().rank + ","
                    + "aa:" + vm.selectedAssaultAssist().bland + "_" + vm.selectedAssaultAssist().rank + ","
                    + "ax:" + vm.selectedAssaultSp().bland + "_" + vm.selectedAssaultSp().rank + ","
                    + "hm:" + vm.selectedHeavyMain().bland + "_" + vm.selectedHeavyMain().rank + ","
                    + "hs:" + vm.selectedHeavySub().bland + "_" + vm.selectedHeavySub().rank + ","
                    + "ha:" + vm.selectedHeavyAssist().bland + "_" + vm.selectedHeavyAssist().rank + ","
                    + "hx:" + vm.selectedHeavySp().bland + "_" + vm.selectedHeavySp().rank + ","
                    + "sm:" + vm.selectedSupportMain().bland + "_" + vm.selectedSupportMain().rank + ","
                    + "ss:" + vm.selectedSupportSub().bland + "_" + vm.selectedSupportSub().rank + ","
                    + "sa:" + vm.selectedSupportAssist().bland + "_" + vm.selectedSupportAssist().rank + ","
                    + "sx:" + vm.selectedSupportSp().bland + "_" + vm.selectedSupportSp().rank + ","
                    + "nm:" + vm.selectedSniperMain().bland + "_" + vm.selectedSniperMain().rank + ","
                    + "ns:" + vm.selectedSniperSub().bland + "_" + vm.selectedSniperSub().rank + ","
                    + "na:" + vm.selectedSniperAssist().bland + "_" + vm.selectedSniperAssist().rank + ","
                    + "nx:" + vm.selectedSniperSp().bland + "_" + vm.selectedSniperSp().rank + ","
                    + "ce:" + vm.enhanceChipList().filter(getChip).map(mapChip).toString().replace(",", ".") + ","
                    + "ca:" + vm.actionChipList().filter(getChip).map(mapChip).toString().replace(",", ".") + ","
                    + "cm:" + vm.advanceChipList().filter(getChip).map(mapChip).toString().replace(",", ".");
            //1.2.32"+ "ca:5.6.7"+ "cm:9.8.5"
        },

        //URL用文字列からシリアライズソースオブジェクトにデシリアライズ
        //これで生成したオブジェクトをVMにぶつけてデシリアライズだが、無駄に冗長かもしれない。
        //e.g. url = "a:foo_1,b:bar_s,c:foobar_q"
        fromURL: function (url) {
            var s = {};
            url.split(",").forEach(function (a) {
                var sepPos = a.indexOf(":"), underPos = a.indexOf("_");
                s[a.substring(0, sepPos)] = {};
                s[a.substring(0, sepPos)].bland = a.substring(sepPos + 1, underPos);
                s[a.substring(0, sepPos)].rank = a.substr(underPos + 1);
            });

            return s;
        }
    };
})(asmsim);