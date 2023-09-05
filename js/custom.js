$(function () {
    $('#fullpage').fullpage({
        // responsiveWidth: 768,
        scrollOverflow: true,
        afterLoad: function (el, idx) {
            setTimeout(function () {
                $('.intro').addClass('animation');
            }, 500);
            if (idx >= 2) {
                $('.section').eq(idx - 1).addClass('current').siblings().removeClass('current');
            }
        },
        onLeave: function (index, nextIndex, direction) {
            const page_title = ['INTRO', 'PROJECT 01', 'PROJECT 02', 'PROJECT 03', 'PROJECT 04', 'PROJECT 05', 'PROJECT 06', 'DESIGN', 'CONTACT']
            $('nav ul li').eq(nextIndex - 1).addClass('active').siblings().removeClass('active');
            $('.pagination').text(page_title[nextIndex - 1]);
        },
    });

    $('.contents_btn').on('click', function () {
        $(this).toggleClass('active');
        $('aside').toggleClass('active');
        $('.container').toggleClass('menu_active');

        // $('body').toggleClass('body_fixed');

        // if ($('aside').hasClass('active')) {
        //     $('body').on('scroll touchmove mousewheel', function (event) {
        //         event.preventDefault();
        //         event.stopPropagation();
        //         return false;
        //     });
        // } else {
        //     $('body').off('scroll touchmove mousewheel');
        // }
    });

    var sakura = new Sakura('.petals', {
        fallSpeed: 2,
        delay: 600,
    });

    $.fn.parallax = function (resistance, mouse) {
        $el = $(this);
        TweenLite.to($el, 0.2,
            {
                x: -((mouse.clientX - (window.innerWidth / 2)) / resistance),
                y: -((mouse.clientY - (window.innerHeight / 2)) / resistance)
            });
    };

    $(document).mousemove(function (e) {
        $('.contact .circle').parallax(30, e);
    });

    // resize했을 때 새로고침
    const delay = 300;
    let timer = null;
    $(window).on('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            document.location.reload();
        }, delay);
    });

});