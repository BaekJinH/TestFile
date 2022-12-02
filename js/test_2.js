$(document).ready(function(){

    // 메인배너 슬라이드
    $('#slide_counter01').prepend('<span class="current_index"></span> / ');
    
    var main_thumb_slider = $('#main_thumb_slider').bxSlider({
        speed: 700,
        auto: true,
        controls: false,
        infiniteLoop : true,
        autoControls:false,
        pagerCustom: true,
        adaptiveHeight : true,
        touchEnabled : (navigator.maxTouchPoints > 0),
        onSliderLoad: function (currentIndex){
            $('#slide_counter01 .current_index').text(currentIndex + 1);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex){
            $('#slide_counter01 .current_index').text(newIndex + 1);
        }
    });

    if ($('#slide_counter01').length) {
        $('#slide_counter01').append(main_thumb_slider.getSlideCount());
    }

    $('.main_thumb_arrow #slider_prev').on('click', function () {
        main_thumb_slider.stopAuto();
        main_thumb_slider.goToPrevSlide();
        return false;
    });

    $('.main_thumb_arrow #slider_next').on('click', function () {
        main_thumb_slider.stopAuto();
        main_thumb_slider.goToNextSlide();
        return false;
    });

    $('.main_thumb_control  #slider_stop').on('click',function(){
        main_thumb_slider.stopAuto();
        return false;
    });

    $('.main_thumb_control #slider_play').on('click',function(){
        main_thumb_slider.startAuto();
        return false;
    });

    $('.main_thumb_control #slider_play').click(function(){
        $('.main_thumb_control #slider_stop').css('display','block');
        $('.main_thumb_control #slider_play').hide();
    });

    $('.main_thumb_control #slider_stop').click(function(){
        $('.main_thumb_control #slider_stop').hide();
        $('.main_thumb_control #slider_play').css('display','block');
    });

    $('.main_thumb_arrow #slider_next').keydown(function (e) {
        if(e.keyCode == 9 && !e.shiftKey ){
            $('#main_thumb_slider div a').focusin(function () {
                main_thumb_slider.goToSlide(0);
                main_thumb_slider.stopAuto();
                $('.main_thumb_control #slider_stop').hide();
                $('.main_thumb_control #slider_play').css('display','block');
                return false;
            });
        }
    });

    // 메인배너 전체보기
    $('#main_thumb_all').on('click',function(){
        $('#main_thumb_popup').show().focus();
        return false;
    });
    $('.main_thumb_popup_close').on('click',function(){
        $('#main_thumb_popup').hide();
        $('#main_thumb_all').focus();
        return false;
    });

    // 탭메뉴 리스트
    $('.Notice_list_area dt a').click(function () {
        $(this).parent('dt').addClass('on').siblings('dt').removeClass('on');
        return false;
    });

    // 언론보도
    var media_slider = $('#media_slider').bxSlider({
        speed: 800,
        auto: false,
        controls: false,
        infiniteLoop : false,
        autoControls:false,
        pagerCustom: true,
        touchEnabled : (navigator.maxTouchPoints > 0)
    });

    $('.media_slider_btn #slider_prev').on('click', function () {
        media_slider.stopAuto();
        media_slider.goToPrevSlide();
        return false;
    });

    $('.media_slider_btn #slider_next').on('click', function () {
        media_slider.stopAuto();
        media_slider.goToNextSlide();
        return false;
    });

    $('.media_slider_btn #slider_next').keydown(function (e) {
        if(e.keyCode == 9 && !e.shiftKey ){
            $('#media_slider div a').focusin(function () {
                media_slider.goToSlide(0);
                media_slider.stopAuto();
                return false;
            });
        }
    });

    // 알림마당 슬라이드
    $('#slide_counter02').prepend('<span class="current_index"></span> / ');

    var notice_thumb_slider = $('#notice_thumb_slider').bxSlider({
        speed: 700,
        auto: true,
        controls: false,
        infiniteLoop : true,
        autoControls:false,
        pagerCustom: true,
        touchEnabled : (navigator.maxTouchPoints > 0),
        onSliderLoad: function (currentIndex){
            $('#slide_counter02 .current_index').text(currentIndex + 1);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex){
            $('#slide_counter02 .current_index').text(newIndex + 1);
        }
    });
    
    if ($('#slide_counter02').length) {
        $('#slide_counter02').append(notice_thumb_slider.getSlideCount());
    }

    $('.notice_thumb_control #slider_prev').on('click', function () {
        notice_thumb_slider.stopAuto();
        notice_thumb_slider.goToPrevSlide();
        return false;
    });

    $('.notice_thumb_control #slider_next').on('click', function () {
        notice_thumb_slider.stopAuto();
        notice_thumb_slider.goToNextSlide();
        return false;
    });

    $('.notice_thumb_control #slider_stop').on('click',function(){
        notice_thumb_slider.stopAuto();
        return false;
    });

    $('.notice_thumb_control #slider_play').on('click',function(){
        notice_thumb_slider.startAuto();
        return false;
    });

    $('.notice_thumb_control #slider_play').click(function(){
        $('.notice_thumb_control #slider_stop').css('display','block');
        $('.notice_thumb_control #slider_play').hide();
    });

    $('.notice_thumb_control #slider_stop').click(function(){
        $('.notice_thumb_control #slider_stop').hide();
        $('.notice_thumb_control #slider_play').css('display','block');
    });

    $('.notice_thumb_control #slider_next').keydown(function (e) {
        if(e.keyCode == 9 && !e.shiftKey ){
            $('#notice_thumb_slider div a').focusin(function () {
                notice_thumb_slider.goToSlide(0);
                notice_thumb_slider.stopAuto();
                $('.notice_thumb_control #slider_stop').hide();
                $('.notice_thumb_control #slider_play').css('display','block');
                return false;
            });
        }
    });
    // 알림마당 전체보기
    $('#notice_thumb_all').on('click',function(){
        $('#notice_popup').show().focus();
        return false;
    });
    $('.notice_popup_close').on('click',function(){
        $('#notice_popup').hide();
        $('#notice_thumb_all').focus();
        return false;
    });

    // 민원리스트
    $('.Minwon_area dt a').click(function () {
        $(this).parent().parent('dl').addClass('on').siblings('dl').removeClass('on');
        var height_ = $(this).parent().siblings('dd').children('ul').height();
        var height__ = height_ + 190;
        var height_m = height_ + 100;
        var $container = $('#container');
        var mobileChk = ($container.width() < 1400) ? true : false;

        if(mobileChk){
            $('.Minwon_area').animate({height:height_m + 'px'},400);
            return false;
        }else{
            $('.Minwon_area').animate({height:height__ + 'px'},400);
            return false;
        }
        //console.log(height__);
    });

    // 문화행사공연 슬라이드
    $('#slide_counter03').prepend('<span class="current_index"></span> 0');

    var event_slider = $('#event_slider').bxSlider({
        maxSlides: 4,
        slideWidth: 356,
        slideMargin: 26,
        moveSlides: 1,
        speed: 500,
        auto: true,
        controls: false,
        infiniteLoop : false,
        autoControls:false,
        pagerCustom: true,
        touchEnabled : (navigator.maxTouchPoints > 0),
        onSliderLoad: function (currentIndex){
            $('#event_slider > div').eq(currentIndex).addClass('active-slide');
            var c_index = currentIndex + 1
            $('#slide_counter03 .current_index').text('0' + c_index);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex){
            var n_index = newIndex + 1
            $('#slide_counter03 .current_index').text('0' + n_index);
        },
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            $('.active-slide').removeClass('active-slide');
            $('#event_slider > div').eq(currentSlideHtmlObject).addClass('active-slide');
        }
    });
    
    if ($('#slide_counter03').length) {
        $('#slide_counter03').append(event_slider.getSlideCount());
    }

    $('.event_slider_btn #slider_prev').on('click', function () {
        event_slider.stopAuto();
        event_slider.goToPrevSlide();
        return false;
    });

    $('.event_slider_btn #slider_next').on('click', function () {
        event_slider.stopAuto();
        event_slider.goToNextSlide();
        return false;
    });

    $('.event_slider_btn #slider_stop').on('click',function(){
        event_slider.stopAuto();
        return false;
    });

    $('.event_slider_btn #slider_play').on('click',function(){
        event_slider.startAuto();
        return false;
    });

    $('.event_slider_btn #slider_play').click(function(){
        $('.event_slider_btn #slider_stop').css('display','block');
        $('.event_slider_btn #slider_play').hide();
    });

    $('.event_slider_btn #slider_stop').click(function(){
        $('.event_slider_btn #slider_stop').hide();
        $('.event_slider_btn #slider_play').css('display','block');
    });

    $('.event_slider_btn #slider_next').keydown(function (e) {
        if(e.keyCode == 9 && !e.shiftKey ){
            $('#event_slider div a').focusin(function () {
                event_slider.goToSlide(0);
                event_slider.stopAuto();
                $('.event_slider_btn #slider_stop').hide();
                $('.event_slider_btn #slider_play').css('display','block');
                return false;
            });
        }
    });

});

