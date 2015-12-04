$(document).ready(function(){
    var $btn = $('.title-button');
    var $ja = $('.ja');

    $btn.click(function(){
        var _this = $(this);
        if(_this.siblings('.detail').css('display')=='none'){
            $btn.each(function(item) {
                $(this).siblings('.detail').slideUp();
                $(this).parents('.item').find('h2').removeClass('titleopenstyle');
            });
            _this.parents('.item').find('h2').addClass('titleopenstyle');
            $(this).siblings('.detail').slideDown();
        }
        else{
            $(this).siblings('.detail').slideUp();
            _this.parents('.item').find('h2').removeClass('titleopenstyle');
        }
    });

    $ja.click(function() {
        var _this = $(this);
        var _detail=_this.parents().parents('.detail');
        _detail.slideUp();
        _detail.siblings('.title-button').find('h2').removeClass('titleopenstyle');
    });
});