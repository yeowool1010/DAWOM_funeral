$(document).ready(function () {
    var tmp = parseInt($("#move-nav").css('top'));
    console.log(tmp)
    console.log(parseInt("-3"))
    console.log($("#move-nav").css('top'))
    console.log(Number($("#move-nav").css('top')))

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var obj_position = scrollTop + tmp + "px";

        if(scrollTop >= 650) {
            $("#move-nav").show(350)
            $("#move-nav").css("display", "flex");

            $("#move-nav").stop().animate({
                "top": obj_position
            }, 500);
        } else {
            $("#move-nav").hide(350)
        }
    }).scroll();
});