$(document).ready(function () {
    var tmp = parseInt($("#test_obj").css('top'));
    console.log(tmp)
    console.log(parseInt("-3"))
    console.log($("#test_obj").css('top'))
    console.log(Number($("#test_obj").css('top')))

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var obj_position = scrollTop + tmp + "px";

        $("#test_obj").stop().animate({
            "top": obj_position
        }, 500);

    }).scroll();
});