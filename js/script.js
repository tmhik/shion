$(function() {
    $("div.panel").hide();
    $(".menu").click(function() {
        $(this).toggleClass("menuOpen").next().slideToggle();
    });
})

$(window).on('load', function() {
    var url = $(location).attr('href'); //ロード後少し時間を置く
    setTimeout(function(){
        if(url.indexOf("?id=") != -1){
            var id = url.split("?id=");
            var $target = $('#' + id[id.length - 1]);
            if($target.length){
                var pos = $target.offset().top;
                $("html, body").animate({scrollTop:pos}, 600);
            }
        }
    },100);
});