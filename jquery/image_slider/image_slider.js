$(document).ready(function () {
        
    // var index=Math.round(Math.random()*4);
    var index = 0;
    var autoControl;
    var sw = false;

    moveSlider(index);
    autoSlider(index);

    $('.control_button').click(function () {
        index = $(this).index();
        moveSlider(index);
    });

    $('.arrow_prev').click(function () {
        index--;
        moveSlider(index);
    });

    $('.arrow_next').click(function () {
        index++;
        moveSlider(index);
    });

    $('.animation_canvas').hover(function () {
        clearInterval(autoControl);
    }, function () {
        autoSlider();
    });

    // 이미지 슬라이드 구현
    function moveSlider (index) {
        if(index < 4 && index > 0) {
            $('arrow_prev').fadeIn(500);
            $('arrow_next').fadeIn(500);
        } 
        if(index >= 4) {
            index = 4;
            $('arrow_next').fadeOut(500);
            $('arrow_prev').fadeIn(500);
        }
        if (index <= 0){
            index = 0;
            $('.arrow_prev').fadeOut(500);
            $('.arrow_next').fadeIn(500);
        }

        $('.slider_panel').animate({
            left: -(index*600)
        }, 'slow');
        $('.control_button').removeClass('active');
        $('.control_button').eq(index).addClass('active');
        $('.slider_text').hide();
        $('.slider_text').eq(index).fadeIn('slow'); 
    }

    // 자동으로 이미지 슬라이드
    function autoSlider () {
        autoControl = setInterval(function () {
            if(index < 4 && sw == false) {
                $('.arrow_next').trigger('click');
            } else {
                sw = true;
            }
            if(index > 0 && sw == true) {
                $('.arrow_prev').trigger('click');
            } else {
                sw = false;
            }
        }, 2000)
    }
});