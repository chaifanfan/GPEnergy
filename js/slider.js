$( function(){
	var imgField=$('.pic-list');
	var imgList=$('.pic-list>li');
	var controlField=$('.control-list');
	var controlList=$('.control-list>li');
	var btnPrev=$('.slider-prev');
	var btnNext=$('.slider-next');
	var turnPage=3;
	var intervalT=2000;
	var turnTime=300;
	var N=0;
	var P=1;

	var goFun=null;
	var hoverFun=null;
	var triggerFun=null;
	var delayFun=null
	var controlListW=controlList.outerWidth(true);
	var turnPages=Math.ceil(controlList.size()/turnPage);
	//初始图片区域高度与标题区域宽度
	imgField.height(imgList.size()*imgList.height());
	controlField.width(controlList.size()*controlListW);
	
	//初始自动切换
	GO();
	
	//自动切换
	function GO() {
		imgField.stop().animate({marginTop:-N*(imgList.height())},turnT);
		controlList.eq(N).addClass('hover').siblings().removeClass('hover');
		if(N%turnPage==0) {
			controlField.stop().animate({
				marginLeft:-N*navListW+'px'
			},turnTime);
		}
		N++;
		//console.log(N)
		N= N>=imgList.size()?0:N;
		P=Math.ceil(N/turnPage);
		goFun=setTimeout(GO,intervalT);
	}

	//停止切换
	function STOP() {
		clearTimeout(goFun);
	}

	//标题划过移出
	controlList.hover( function() {
		clearTimeout(delayFun);
		STOP();
		N=controlList.index(this);
		imgField.stop().animate({
			marginTop:-N*(imgList.height())
		},turnTime);
		$(this).addClass('hover').siblings().removeClass('hover');
	}, function() {
		N++;
		delayFun=setTimeout(GO,intervalT)
	});
	
	//图片划过移出
	imgList.hover( function() {
		N=imgList.index(this);
		controlList.eq(N).trigger('mouseover');
	}, function() {
		controlList.eq(N).trigger('mouseleave');
	});
	
	//左切换
	btnPrev.click( function() {
		if(P==1) {
			controlField.animate({marginLeft:-turnPage*controlListW*(turnPages-1)+'px'},turnTime);
			P=turnPages;
		} else {
			STOP();
			P--;
			controlField.animate({marginLeft:-turnPage*controlListW*(P-1)+'px'},turnTime);
		}
		controlList.eq((P-1)*turnPage).trigger('mouseover');
		GO();
	});
	
	//右切换
	btnNext.click( function() {
		if(P==turnPages) {
			controlField.animate({marginLeft:0},turnTime);
			P=1;
		} else {
			STOP();
			P++;
			controlField.animate({
				marginLeft:-turnPage*controlListW*P+'px'
			});
		}
		controlList.eq((P-1)*turnPage).trigger('mouseover');
		GO();
	});
	
});