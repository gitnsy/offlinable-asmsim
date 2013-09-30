//VMインスタンスやappcacheのエラーを感知など、デバッグのためのコードを保存する

applicationCache.onerror = function (e) {
    console.log("appcache error");
    console.log(e);
    appcachError = e;
}

$(document).ready(function () {
    vm = new asmsim.viewModel();
    ko.applyBindings(vm)
});
