$(document).ready(function() {
    function open_browser(){
        let winWidth = window.innerWidth;
        // console.log(winWidth);
        if ( winWidth <= 980 ){
            $('.inner .logo img').attr("src", "imgs/mini-logo.png");
            $('.inner .logo img').css("width", "auto");
            $('.inner .toggle').css("display", "block");
        } else if (winWidth <= 560) {
            $('.inner .logo img').css("display", "none");
            $('.inner .logo img').css("width", "auto");
            $('.inner .toggle').css("display", "block");
        } else {
            $('.inner .logo img').attr("src", "imgs/top-logo.png");
            $('.inner .logo img').css("width", "120px");
            $('.inner .toggle').css("display", "none");
        }
    }

    open_browser();

    $(window).resize(function(){
        open_browser();
    });

    /* Vegas */
    $('.visual .visual-bg').vegas({
        delay: 10000,
        timer: false,
        slides: [
            { src: './imgs/white-wolf-3.jpg' },
            {
                video: {
                    src: [
                        './video/White-wolf.mp4',
                    ],
                    loop: true,
                    mute: true
                }
            }
        ]
    });

    $('.store .slider').vegas({
        delay: 5000,
        timer: false,
        transition: 'slideLeft2',
        slides: [
            { src: './imgs/store-1.jpg' },
            { src: './imgs/store-2.jpg' },
            { src: './imgs/store-3.jpg' },
            { src: './imgs/store-4.jpg' }
        ]
    });

    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
        // console.log("st: " + scrollTop);
        let winWidth = window.innerWidth;

        /* 메뉴바 배경 */
        if ( scrollTop > 280 ){
            $('header').addClass('on');
        } else {
            $('header').removeClass('on');
        }

        /* CHANNEL 애니메이션 */
        if ( scrollTop > 300 ){
            $('.channel').addClass('active');
        } else {
            $('.channel').removeClass('active');
        }
                
        /* MAGAZINE 애니메이션 */
        if ( scrollTop > 2300 ){
            $('.con-list li').addClass('active');
        } else {
            $('.con-list li').removeClass('active');
        }
        
    });
    
    $('.toggle').click(function(){
        $('header .inner nav').toggleClass('on');
    });

    /* 모바일 버전에서 메뉴 클릭 시 메뉴박스 닫음 */
    $('.gnb li a').click(function(){
        $('header .inner nav').removeClass('on');
    });

    /* MAGAZINE 폰트 색상 변경 */
    $('.con-list li:even').on({
        "mouseover": function(){
            $('.con-list .con-list-a:even').addClass('on');
        },
        "mouseout": function(){
            $('.con-list .con-list-a:even').removeClass('on');
        }
    });

    $('.con-list li:odd').on({
        "mouseover": function(){
            $('.con-list .con-list-a:odd').addClass('on');
        },
        "mouseout": function(){
            $('.con-list .con-list-a:odd').removeClass('on');
        }
    });

});
