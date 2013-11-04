asmsim.data = asmsim.data || {};
(function (data) {
    function Chip(name, cost, bland, rank) {
        this.name = name;
        this.bland = bland;
        this.cost = cost;
        this.rank = rank;
    }

    data.advanceChip = [new Chip("被弾方向表示", 1,"shotdir", 1)
, new Chip("被ロックオン方向表示", 2,"lockalert",1)
, new Chip("被索敵警告", 3,"searchalert",1)
, new Chip("転倒耐性", 1,"fallres",1)
, new Chip("転倒耐性II", 3, "fallres", 1)
, new Chip("被弾時カメラ制御", 1, "camadj", 1)
, new Chip("被弾時カメラ制御II", 3, "camadj", 2)
, new Chip("透過ロックオン維持", 1, "keeplock", 1)
, new Chip("透過ロックオン維持II", 2, "keeplock", 2)
, new Chip("アンチブレイク", 1, "abreke", 1)
, new Chip("アンチブレイクII", 2, "abreke", 2)
, new Chip("自動体勢制御", 1, "autostand", 1)
, new Chip("リペアポッド適性", 1, "repair", 1)
, new Chip("リペアポッド適性II", 3, "repair", 2)
, new Chip("投てき適性", 2, "throw", 1)
, new Chip("投てき適性II", 4, "throw", 1)
, new Chip("高機能索敵", 3, "advsearch", 1)
, new Chip("設置物探知", 2, "trap", 1)
, new Chip("設置物探知II", 4, "trap", 2)
, new Chip("移動中射撃補正", 2, "adjatmove", 1)
, new Chip("移動中射撃補正II", 4, "adjatmove", 2)
, new Chip("高感度索敵", 1, "highsearch", 1)
, new Chip("高感度索敵II", 2, "highsearch", 2)
, new Chip("搭乗兵器適性", 1, "license", 1)
, new Chip("搭乗兵器適性II", 2, "license", 1)
, new Chip("高速充填", 2, "sppedcharge", 1)
, new Chip("高速充填II", 4, "sppedcharge", 2)
, new Chip("索敵継続延長", 1, "longsearch", 1)
, new Chip("水中移動適正", 1, "swim", 1)
, new Chip("高速精密射撃", 1, "speedadj", 1)
, new Chip("フェイタルアタック", 1, "fatal", 1)
, new Chip("大破防止", 1, "awreck", 1)
, new Chip("プリサイスショット", 2, "pricice", 1)];

    data.enhanceChip = [new Chip("装甲", 1,"armor",1)
, new Chip("装甲II", 2, "armor", 2)
, new Chip("装甲III", 3, "armor", 3)
, new Chip("射撃補正", 1, "shotadj", 1)
, new Chip("射撃補正II", 3, "shotadj", 2)
, new Chip("射撃補正III", 5, "shotadj", 3)
, new Chip("索敵", 1,"search", 1)
, new Chip("索敵II", 2, "search", 2)
, new Chip("索敵III", 3, "search", 3)
, new Chip("ロックオン", 1, "lock", 1)
, new Chip("ロックオンII", 2, "lock", 2)
, new Chip("ロックオンIII", 3, "lock", 3)
, new Chip("ブースター", 1, "boost", 1)
, new Chip("ブースターII", 3, "boost", 2)
, new Chip("ブースターIII", 5, "boost", 3)
, new Chip("SP供給率", 1, "sp", 1)
, new Chip("SP供給率II", 3, "sp", 2)
, new Chip("SP供給率III", 5, "sp", 3)
, new Chip("エリア移動", 1, "area", 1)
, new Chip("エリア移動II", 2, "area", 2)
, new Chip("エリア移動III", 3, "area", 3)
, new Chip("反動吸収", 1, "recoil", 1)
, new Chip("反動吸収II", 2, "recoil", 2)
, new Chip("反動吸収III", 3, "recoil", 3)
, new Chip("リロード", 1, "reload", 1)
, new Chip("リロードII", 3, "reload", 2)
, new Chip("リロードIII", 5, "reload", 3)
, new Chip("武器変更", 1, "weponchange", 1)
, new Chip("武器変更II", 3, "weponchange", 2)
, new Chip("武器変更III", 5, "weponchange", 3)
, new Chip("歩行/通常移動", 1, "walk", 1)
, new Chip("歩行/通常移動II", 2, "walk", 2)
, new Chip("歩行/通常移動III", 3, "walk", 3)
, new Chip("ダッシュ/高速移動", 1, "dash", 1)
, new Chip("ダッシュ/高速移動II", 3, "dash", 2)
, new Chip("ダッシュ/高速移動III", 5, "dash", 3)
, new Chip("重量耐性", 1, "weightcap", 1)
, new Chip("重量耐性II", 3, "weightcap", 2)
, new Chip("重量耐性III", 5, "weightcap", 3)
, new Chip("セットボーナス強化", 1, "sb", 1)
, new Chip("ブースター回復", 2, "reboost", 1)
, new Chip("地形ダメージ軽減", 1, "antiland", 1)
, new Chip("地形ダメージ軽減II", 3, "antiland", 2)
, new Chip("近距離ロックズーム", 1, "lockzoom", 1)
, new Chip("近距離ロックズームII", 2, "lockzoom", 2)
, new Chip("精密照準ズーム", 1, "preczoom", 1)
, new Chip("精密照準ズームII", 2, "preczoom", 1)
, new Chip("実弾速射", 2, "rapidbullet", 1)
, new Chip("実弾速射II", 4, "rapidbullet", 2)
, new Chip("爆発範囲拡大", 2, "extexprange", 1)
, new Chip("爆発範囲拡大II", 4, "extexprange", 2)
, new Chip("ニュード威力上昇", 2, "enhnewd", 1)
, new Chip("ニュード威力上昇II", 4, "enhnewd", 2)
, new Chip("近接攻撃強化", 2, "enhmelee", 1)
, new Chip("近接攻撃強化II", 4, "enhmelee", 2)
, new Chip("対実弾防御", 1, "antibullet", 1)
, new Chip("対実弾防御II", 2, "antibullet", 2)
, new Chip("対実弾防御III", 4, "antibullet", 3)
, new Chip("対爆発防御", 1, "antiexpl", 1)
, new Chip("対爆発防御II", 2, "antiexpl", 2)
, new Chip("対爆発防御III", 4, "antiexpl", 3)
, new Chip("対ニュード防御", 1, "antinewd", 1)
, new Chip("対ニュード防御II", 2, "antinewd", 2)
, new Chip("対ニュード防御III", 3, "antinewd", 3)
, new Chip("対近接防御", 1, "antimelee", 1)
, new Chip("対近接防御II", 2, "antimelee", 2)
, new Chip("対近接防御III", 3, "antimelee", 3)];

    data.actionChip = [new Chip("しゃがみ", 1, "act", "squat"),
    new Chip("しゃがみII", 2, "act", "squat2"),
    new Chip("クイックターン", 1, "act", "qt1"),
    new Chip("タックル", 1, "act", "tac"),
    new Chip("タックルII", 2, "act", "tac2"),
    new Chip("ニーキック", 1, "act", "kneek"),
    new Chip("ニーキックII", 2, "act", "kneek2"),
    new Chip("スピンローキック", 1, "act", "spinlk"),
    new Chip("スピンローキックII", 2, "act", "spinlk2"),
    new Chip("ガード", 1, "act", "guard"),
    new Chip("ガードII", 2, "act", "guard2"),
    new Chip("クイックフォール", 1, "act", "qfall"),
    new Chip("クイックフォールII", 2, "act", "qfall2"),
    new Chip("ロングタックル", 1, "d2", "ltac"),
    new Chip("ロングタックルII", 2, "d2", "ltac2"),
    new Chip("ジャンプキック", 2, "d2", "jk"),
    new Chip("ジャンプキックII", 3, "d2", "jk2"),
    new Chip("スライディング", 1, "d2", "sli"),
    new Chip("スライディングII", 2, "d2", "sli2"),
    new Chip("クイックステップ", 4, "d2", "qste"),
    new Chip("ニースタンプ", 1, "j2", "kneest"),
    new Chip("ニースタンプII", 2, "j2", "kneest2"),
    new Chip("クイッジャンプ", 1, "j2", "qj")];

})(asmsim.data);