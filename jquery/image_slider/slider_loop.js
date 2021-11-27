$(document).ready(function () {
    var index = 1;
    var autoControl;

    moveSlider(index);
    autoSlider(index);

    $('.slider_panel').append($('.slider_image').first().clone());
    $('.slider_panel').prepend($('.slider_image').eq(-2).clone());
    
    

    $('.animation_canvas').hover(function () {
        clearInterval()
    }, function () {

    })

    $('.control_button').click(function () {
        index = $(this).index();
        moveSlider(index);
    });

    $('.arrow_prev').click(function () {
        if(index > 1) {
            index--;
            moveSlider(index);
        } else {
            $('.slider_panel').css('left', -3600);
            index = 5;
            moveSlider(index);
        }
    });
    $('.arrow_next').click(function () {
        if(index < 5) {
            index++;
            moveSlider(index);
        } else {
            $('.slider_panel').css('left', 0);
            index = 1;
            moveSlider(index);
        }
    });

    //이미지 슬라이드 구현
    function moveSlider(index) {
        $('.slider_panel').animate({
            left: -(index*600)
        }, 'slow');
        $('.control_button').removeClass('active');
        $('.control_button').eq(index-1).addClass('active');
    }

    function autoSlider(index) {
        autoControl = 
    }
});