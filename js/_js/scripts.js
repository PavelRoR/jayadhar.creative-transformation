//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend jquery.fancybox.min.js


    /* Работа формы */
    $(function () {
        var check = $('.check', this),
            email = $('.email', this),
            message = $('.alert_message', this),
            button = $('.button_mail', this);
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert_message', this),
                reNone = /.+/,
                email = $('.email', this),
                button = $('.button_mail', this);
            if (!email.val().match(reNone)) {
                email.css({
                    'borderColor': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {
                // button.text('Отправляем...');
                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
            }
        });
        email.click(function () {
            // email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#000",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#000",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
    });
    $(function () {
        $("[data-fancybox]").fancybox({
            buttons: [
                'slideShow',
                'share',
                'zoom',
                'fullScreen',
                // 'download',
                'close'
            ],
            speed: 330,
            loop: true,
            opacity: "auto",
            // autoScale: true,
            mouseWheel: true,
            transitionEffect: 'slide'
        });
    });
    $(function () {
        $(".video_wrapper_revs .video_rev_img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe  src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>');
        });
    });
    
    $(function () {
        $('#video_revs').on('slide.bs.carousel', function () {
            $('.video_wrapper_revs').each(function(){
                var l =$(this).attr('data-img');
                $(this).html('<img class="video_rev_img" src="'+l+'" alt="Видео отзыв">');
            });
            $(".video_wrapper_revs .video_rev_img").click(function () {
                var a = $(this).parent().attr("data-youtube");
                $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>');
            });
          });
    });

    /*Конец документа*/
