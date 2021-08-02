$(function()  {


        
    $(function() {
        $('.hamburger').click(function() {
            $(this).toggleClass('active');
     
            if ($(this).hasClass('active')) {
                $('.globalMenuSp').addClass('active');
                $('.header-nav').addClass('inactive');
                $('.header-logo').addClass('inactive');
            } else {
                $('.globalMenuSp').removeClass('active');
                $('.header-nav').removeClass('inactive');
                $('.header-logo').removeClass('inactive');
            }
        });
    });
    
        
    
     

        $(function(){
            // 設定
            var interval =5000; // 切り替わりの間隔（ミリ秒）
            var fade_speed = 2000;// フェード処理の早さ（ミリ秒）
            $(".top-image img").hide();
            $(".top-image img:first").addClass("active").show();
            
            var changeImage = function(){
                    var $active = $(".top-image img.active");
                    var $next = $active.next("img").length?$active.next("img"):$(".top-image img:first");
               
                    $active.fadeOut(fade_speed).removeClass("active");
                    $next.fadeIn(fade_speed).addClass("active");
            }
            
            
            setInterval(changeImage,interval);
            }());

            var _window = $(window),
            _header = $('.header'),
            headerChange = $('.header-change'),
            heroBottom;
        
        _window.on('scroll',function(){		
            heroBottom = $('.top-wrapper').height();
            if(_window.scrollTop() > heroBottom){
                headerChange.addClass('show');  
            }
            else{
                headerChange.removeClass('show');
            }
        });
        
        _window.trigger('scroll');
        

        $(function(){
            let $window = $(window),
                $load = $('#load_animation'),
                $load_in = $load.find('svg');
        
            //ロゴとLoadingGIFをフェードイン
            $load_in.delay(50).fadeIn('slow');
        
            //ウィンドウに対してloadイベントを設定
            //全ての要素をロードが終わったら，HideLoadingScreen()を実行する
            $window.on('load',function(){
                HideLoadingScreen();
            })
            
            //５秒後に強制的にHideLoadingScreen()を実行
            setTimeout(function(){
                HideLoadingScreen();
            },5000);
        
            //ロード画面を非表示にする関数
            function HideLoadingScreen(){
                $load.delay(1500).fadeOut("slow");
            }
        }); 
// ハンバーガーメニュー
    
$('a[href^="#top"]').click(function(){
    $('.globalMenuSp').removeClass('active');
    $('.hamburger').removeClass('active');
    $('.header-logo').removeClass('inactive');
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});

$('a[href^="#services"]').click(function(){
    $('.globalMenuSp').removeClass('active');
    $('.hamburger').removeClass('active');
    $('.header-logo').removeClass('inactive');
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});

$('a[href^="#about"]').click(function(){
    $('.globalMenuSp').removeClass('active');
    $('.hamburger').removeClass('active');
    $('.header-logo').removeClass('inactive');
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});

$('a[href^="#works"]').click(function(){
    $('.globalMenuSp').removeClass('active');
    $('.hamburger').removeClass('active');
    $('.header-logo').removeClass('inactive');
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});

$('a[href^="#recruit"]').click(function(){
    $('.globalMenuSp').removeClass('active');
    $('.hamburger').removeClass('active');
    $('.header-logo').removeClass('inactive');
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});

$('a[href^="#contact"]').click(function(){
    $('.globalMenuSp').removeClass('active');
    $('.hamburger').removeClass('active');
    $('.header-logo').removeClass('inactive');
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});


});