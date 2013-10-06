asmsim.data = asmsim.data || {};
(function (data) {

    data.dashRealvalue = { "A": 10, "B": 20 };
    data.weightCapacityRealvalue = {
        "A+": 6650,
        "A": 6350,
        "A-": 6150,
        "B+": 5900,
        "B": 5750,
        "B-": 5600,
        "C+": 5250,
        "C": 5150,
        "C-": 5000,
        "D+": 4750,
        "D": 4550,
        "D-": 4250,
        "E+": 4000,
        "E": 3800
    };

    $(".plugin_include tr td").each(function(ele){
        if($(this).index() > 2 && $(this).select("td").index() < 3){
            $(this).select("td").each(function(){console.log($(this).text())})
        }
    })

    $(".plugin_include tr:gt(1)").find("td:lt(2)").each(function () { console.log($(this).text()) })

    $(".plugin_include").each(function () {
        $(this).find("tr:gt(1)").each(function () {
            console.log({ name: $(this).find("td:eq(0)").text(), weight: $(this).find("td:eq(1)").text()})
        })
    })

})(asmsim.data);