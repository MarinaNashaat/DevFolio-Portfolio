$(document).ready(function () {
    let homeOffset = $("#home").offset().top;
    let aboutOffset = $("#about").offset().top;
    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop();
        if (windowScroll > homeOffset) {
            $("#header").css("backgroundColor", "rgba(0, 0, 0, 0.9)")
        }
        else {
            $("#header").css("backgroundColor", "transparent")
        }

        if (windowScroll > (aboutOffset - 100)) {
            $("#btnUp").fadeIn(1000);
        }
        else {
            $("#btnUp").fadeOut(1000);

        }

        $(".nav-item > a[href^='#']").each(function () {
            let navLinkHref = $(this).attr("href");
            let sectionOffset = $(navLinkHref).offset().top;
            let sectionHeight = $(navLinkHref).outerHeight(true);
            let overAllOffset = sectionOffset + sectionHeight;
            if (windowScroll >= sectionOffset - 100 && windowScroll < overAllOffset) {
                $(this).addClass("active")
            }
            else {
                $(this).removeClass("active");
            }
        })
    });
    $("#btnUp").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 2000)

    });
    /* //////smooth scroll on click //////// */
    $(".nav-item > a[href^='#']").click(function () {
        let navLinkHref = $(this).attr("href");
        let sectionOffset = $(navLinkHref).offset().top;
        $("html, body").animate({ scrollTop: sectionOffset }, { queue: false, duration: 2000 });
        $(this).addClass("active");
        $(this).parent().siblings().find('a').removeClass('active')
    })
    /* //////////type animation////////// */
    let typed = new Typed("#typed", {

        strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
    });


    /* ////counter section///// */
    $(".counter").counterUp({
        delay: 5,
        time: 2000
    })

    /* /////////loader page/////////// */
    $("#loader").fadeOut(1000, function () {
        $("body").css("overflow-y", "auto")
    });

});