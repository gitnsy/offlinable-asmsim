/// <reference path="../lib/jasmine-1.3.0/jasmine.js" />
/// <reference path="/Scripts/asmsim/ViewModel.js" />
/// <reference path="/Scripts/asmsim/serializer.js" />

describe("シリアライザテスト", function () {
    //テストスタブ
    var s = {
        selectedHead: function () { return { bland: "head", rank: 1 }; },
        selectedBody: function () { return { bland: "body", rank: 2 }; },
        selectedArm: function () { return { bland: "arm", rank: 3 }; },
        selectedLeg: function () { return { bland: "leg", rank: 4 }; },
        selectedAssaultMain: function () { return { bland: "AsMain", rank: 5 }; },
        selectedAssaultSub: function () { return { bland: "AsSub", rank: 6 }; },
        selectedAssaultAssist: function () { return { bland: "AsAssist", rank: 7 }; },
        selectedAssaultSp: function () { return { bland: "AsSp", rank: 8 }; },
        selectedHeavyMain: function () { return { bland: "HeMain", rank: 9 }; },
        selectedHeavySub: function () { return { bland: "HeSub", rank: 10 }; },
        selectedHeavyAssist: function () { return { bland: "HeAssist", rank: 11 }; },
        selectedHeavySp: function () { return { bland: "HeSp", rank: 12 }; },
        selectedSupportMain: function () { return { bland: "SuMain", rank: 13 }; },
        selectedSupportSub: function () { return { bland: "SuSub", rank: 14 }; },
        selectedSupportAssist: function () { return { bland: "SuAssist", rank: 15 }; },
        selectedSupportSp: function () { return { bland: "SuSp", rank: 16 }; },
        selectedSniperMain: function () { return { bland: "SnMain", rank: 17 }; },
        selectedSniperSub: function () { return { bland: "SnSub", rank: 18 }; },
        selectedSniperAssist: function () { return { bland: "SnAssist", rank: 19 }; },
        selectedSniperSp: function () { return { bland: "SnSp", rank: 20 }; },
        enhanceChipList: function () {
            return [
                { selected: function () { return false; }, bland: "bad", rank: -1 },
                { selected: function () { return true; }, bland: "ec", rank: 21 },
                { selected: function () { return true; }, bland: "ec", rank: 22 },
                { selected: function () { return false; }, bland: "bad", rank: -2 },
                { selected: function () { return true; }, bland: "ec", rank: 27 }
            ];
        },
        actionChipList: function () {
            return [
                { selected: function () { return false; }, bland: "bad", rank: -1 },
                { selected: function () { return true; }, bland: "ac", rank: 23 },
                { selected: function () { return true; }, bland: "ac", rank: 24 },
                { selected: function () { return false; }, bland: "bad", rank: -2 },
                { selected: function () { return true; }, bland: "ac", rank: 28 }

            ];
        },
        advanceChipList: function () {
            return [
                { selected: function () { return false; }, bland: "bad", rank: -1 },
                { selected: function () { return true; }, bland: "ad", rank: 25 },
                { selected: function () { return true; }, bland: "ad", rank: 26 },
                { selected: function () { return false; }, bland: "bad", rank: -2 },
                { selected: function () { return true; }, bland: "ad", rank: 29 }
            ];
        }
    };

    it("ViewModelの情報をURL用の情報に変換", function () {
        //順番はどうでもいい仕様にするからテストそこ考慮してもいいかも
        expect(asmsim.serializer.toUrl(s))
            .toEqual("h:head_1,b:body_2,a:arm_3,l:leg_4,"
            + "am:AsMain_5,as:AsSub_6,aa:AsAssist_7,ax:AsSp_8,"
            + "hm:HeMain_9,hs:HeSub_10,ha:HeAssist_11,hx:HeSp_12,"
            + "sm:SuMain_13,ss:SuSub_14,sa:SuAssist_15,sx:SuSp_16,"
            + "nm:SnMain_17,ns:SnSub_18,na:SnAssist_19,nx:SnSp_20,"
            + "ce:ec_21.ec_22.ec_27,ca:ac_23.ac_24.ac_28,cm:ad_25.ad_26.ad_29");
    });

    it("URL用の情報にViewModelに変換", function () {
        vm.apply({ a: { bland: "Cooger", rank: 2 } });
    });
});