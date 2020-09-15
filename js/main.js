$(document).ready(function () {

    let newLeft;

    let slider = document.getElementsByClassName('slide');
    console.log(slider);

    for (let i = 0; i < slider.length; i++) {
        console.log(slider[i].classList);
        console.log(i);
        if (slider[i].classList.contains('active')) {
            newLeft = ((100 / 7) * i);
            $('.scrollbar__line').animate({ left: newLeft + '%' }, 1000)
        }
    }

    function timer() {
        idTimer = setTimeout(function tick() {
            if (newLeft != (100 - (100 / 7))) {
                $('.main__more').animate({ opacity: 0.05 }, 1000);
                $('.main__more').animate({ opacity: 0.4 }, 1000);
                $('.scrollbar__line').animate({ left: '85.8%' }, 2000);
            }
            if (newLeft != 0) {
                $('.main__more').animate({ opacity: 0.05 }, 1000);
                $('.main__more').animate({ opacity: 0.4 }, 1000);
                $('.scrollbar__line').animate({ left: '0%' }, 2000);
            }
            $('.main__more').animate({ opacity: 0.05 }, 1000);
            $('.main__more').animate({ opacity: 0.4 }, 1000);
            $('.scrollbar__line').animate({ left: newLeft + '%' }, 1000);
            idTimer = setTimeout(tick, 36000);
        }, 30000);
    };
    timer();

    $('.fp-next').on('click', function () {
        clearTimeout(idTimer);
        timer();
        console.log(newLeft);
        if (newLeft >= (6 * (100 / 7))) {
            newLeft = 0;
            $('.scrollbar__line').animate({ left: newLeft + '%' }, 1000)
            console.log(newLeft);
        } else {
            newLeft += (100 / 7);
            $('.scrollbar__line').animate({ left: newLeft + '%' }, 1000)
            console.log(newLeft);
        }
    });

    $('.fp-prev').on('click', function () {
        clearTimeout(idTimer);
        timer();
        console.log(newLeft);
        if (newLeft <= 3) {
            newLeft = (6 * (100 / 7));
            $('.scrollbar__line').animate({ left: newLeft + '%' }, 1000)
            console.log(newLeft);
        } else {
            newLeft -= (100 / 7);
            $('.scrollbar__line').animate({ left: newLeft + '%' }, 1000)
            console.log(newLeft);
        }
    });

    $('.header__logo').on('click', function () {
        clearTimeout(idTimer);
        timer();
        newLeft = 0;
        $('.scrollbar__line').animate({ left: newLeft + '%' }, 1000);
    });

    $('.contacts').on('click', function () {
        clearTimeout(idTimer);
        timer();
        newLeft = (6*(100/7));
        $('.scrollbar__line').animate({ left: newLeft + '%' }, 1000);
    });

});