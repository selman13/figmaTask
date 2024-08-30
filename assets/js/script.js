var swiper1 = new Swiper('#swiper1', {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 20, 
    navigation: {
        nextEl: '#next1',
        prevEl: '#prev1',
    },
    on: {
        slideChange: function () {
            var slides = swiper1.slides;
            var activeIndex = swiper1.activeIndex;
            
            
            if (activeIndex >= slides.length - 4) {
                document.querySelector('#next1').style.display = 'none';
            } else {
                document.querySelector('#next1').style.display = 'flex';
            }

            if (activeIndex === 0) {
                document.querySelector('#prev1').style.display = 'none';
            } else {
                document.querySelector('#prev1').style.display = 'flex';
            }
        },
    },
});

var swiper2 = new Swiper('#swiper2', {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 20, 
    navigation: {
        nextEl: '#next2',
        prevEl: '#prev2',
    },
    on: {
        slideChange: function () {
            var slides = swiper2.slides;
            var activeIndex = swiper2.activeIndex;
            
            
            if (activeIndex >= slides.length - 4) {
                document.querySelector('#next2').style.display = 'none';
            } else {
                document.querySelector('#next2').style.display = 'flex';
            }

            if (activeIndex === 0) {
                document.querySelector('#prev2').style.display = 'none';
            } else {
                document.querySelector('#prev2').style.display = 'flex';
            }
        },
    },
});
