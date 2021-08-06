$(function () {

    $(".navbar .collapse ul li a ,.homepage .arrowToExtraTasty").click(function (e) {
        if ($(this).data('scroll') != null) {
            e.preventDefault();
            $("html,body").animate({
                scrollTop: $("#" + $(this).data('scroll')).offset().top
            }, 1000)
        } else {

            e.returnValue = true;

        }

    })

    let scrollBtn = $("#scroll_up");
    $(window).scroll(function () {
        $(this).scrollTop() >= 700 ? scrollBtn.show() : scrollBtn.hide();
    });


    // Click On Button To Scroll Top
    scrollBtn.click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
    });

});