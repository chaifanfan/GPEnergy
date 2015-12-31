    $(function() {
        var oSlide = $('.block-slider');
        var aLi = $('.pic-list li');
        var aPage = $('.control-list li a');
        var iLen = aLi.length;
        var iNow = 0;
        var oTimer = null;
        aPage.each(function(index){
            $(this).mouseover(function(){
                slideRun(index)
            })
        })

        function slideRun(index){
            iNow = index;
            aPage.removeClass('active');
            aPage.find('img').attr('src','images/icoon-gray.png');
            aPage.eq(index).addClass('active');
            aPage.eq(index).find('img').attr('src','images/icoon-white.png');

            aLi.eq(index).siblings().find('img').stop().animate({
                opacity:0
            },600)
            aLi.eq(index).find('img').stop().animate({
                opacity:1
            },600)
        }

        autoRun();
        function autoRun(){
            oTimer = setInterval(function(){
                iNow++;
                if(iNow>iLen-1){
                    iNow=0;
                }                   
                slideRun(iNow);
            },2000)
        }

        oSlide.hover(function(){
            //move on
            clearInterval(oTimer);
        },function(){
            //move off
            autoRun();
        })


        //--------------------------------------------newsslider-----------------------------------------------
        var oNewsSlider = $('.block-newsslider a');
        var aNewsLi = $('.newsslider-list li');
        var aNewsPage = $('.newslider-pager li');
        var iNewsLen = aNewsLi.length;
        var iNewsNow = 0;
        var oNewsTimer = null;
        aNewsPage.each(function(index){
            $(this).mouseover(function(){
                newsslideRun(index)
            })
        })

        function newsslideRun(index){
            iNewsNow = index;
            aNewsPage.removeClass('active');
            aNewsPage.eq(index).addClass('active');

            aNewsLi.eq(index).siblings().stop().animate({
                opacity:0
            },600)
            aNewsLi.eq(index).stop().animate({
                opacity:1
            },600)
        }

        newsautoRun();
        function newsautoRun(){
            oNewsTimer = setInterval(function(){
                iNewsNow++;
                if(iNewsNow>iNewsLen-1){
                    iNewsNow=0;
                }                   
                newsslideRun(iNewsNow);
            },2000)
        }

        oNewsSlider.hover(function(){
            //move on
            clearInterval(oNewsTimer);
        },function(){
            //move off
            newsautoRun();
        })

    });