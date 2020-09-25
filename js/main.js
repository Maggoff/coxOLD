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
            let time = 0;

            if (newLeft != (100 - (100 / 7))) {
                $('.main__more').animate({ opacity: 0.05 }, 1000);
                $('.main__more').animate({ opacity: 0.4 }, 1000);
                $('.scrollbar__line').animate({ left: '85.8%' }, 2000);
                time += 2000;
            }
            if (newLeft != 0) {
                $('.main__more').animate({ opacity: 0.05 }, 1000);
                $('.main__more').animate({ opacity: 0.4 }, 1000);
                $('.scrollbar__line').animate({ left: '0%' }, 2000);
                time += 2000;
            }
            $('.main__more').animate({ opacity: 0.05 }, 1000);
            $('.main__more').animate({ opacity: 0.4 }, 1000);
            $('.scrollbar__line').animate({ left: newLeft + '%' }, 2000);
            idTimer = setTimeout(tick, 32000 + time);
        }, 30000);
    };
    timer();

    let disableClick = false;

    $('.fp-next').on('click', function () {
        clearTimeout(idTimer);
        timer();
        console.log(newLeft);

        if (disableClick === false) {
            disableClick = true;
            if (newLeft >= (6 * (100 / 7))) {
                newLeft = 0;
                $('.scrollbar__line').animate({ left: newLeft + '%' }, 1000, function () {
                    disableClick = false;
                });
                console.log(newLeft);
            } else {
                newLeft += (100 / 7);
                $('.scrollbar__line').animate({ left: newLeft + '%' }, 1000, function () {
                    disableClick = false;
                });
                console.log(newLeft);
            }
        }
    });

    $('.fp-prev').on('click', function () {
        clearTimeout(idTimer);
        timer();
        console.log(newLeft);

        if (disableClick === false) {
            disableClick = true;
            if (newLeft <= 3) {
                newLeft = (6 * (100 / 7));
                $('.scrollbar__line').animate({ left: newLeft + '%' }, 1000, function () {
                    disableClick = false;
                });
                console.log(newLeft);
            } else {
                newLeft -= (100 / 7);
                $('.scrollbar__line').animate({ left: newLeft + '%' }, 1000, function () {
                    disableClick = false;
                });
                console.log(newLeft);
            }
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
        newLeft = (6 * (100 / 7));
        $('.scrollbar__line').animate({ left: newLeft + '%' }, 1000);
    });

    let form = document.getElementById('form');
    console.log(form.innerHTML)

    $('#btn').on('click', function () {
        $(form).finish().animate({ opacity: 0 }, 200, function () {
            form.innerHTML = '<input type="text" class="how__form__text" placeholder="Tell us"><a href="#" class="how__form__btn hover">Next step 22</a>';
        })
        $(form).animate({opacity: 1}, 200);
    })

});