/**
 * jQuery plugn template
 * @author   dhb(dhb@meitu.com)
 * @date     2015-12-23
 * @datetime 2015-12-23T11:03:52+0800
 * @param       {object}    $ 		jQuery
 * @return      {null}      null
 */
;(function( $ ){

	var Slider, sliderPrivateMethod;

	Slider = (function(){

		/**
		 * 构造函数
		 * @author   dhb(dhb@meitu.com)
		 * @date     2015-12-23
		 * @datetime 2015-12-23T11:12:00+0800
         * @param       {object|string}   	element 	DOM object or selector
         * @param       {object}         	options 	settings
		 */
		function Slider(element, options){
			this.el = $(element);
			this.ops = $.extend({}, $.fn.slider.defaults, options);
			this.init();
		}

		Slider.prototype = {
			init : function(){
				var _this = this;

				_this.$lis = _this.el.find("li");

				_this.liLength = _this.$lis.length;

				_this.curIndex = 0;

				if(_this.ops.autoplay){
					_this.play();
				}
			},
			play : function(){
				var _this = this;
				_this.timer = setInterval(function(){
					_this.next();
				},_this.ops.delay);
			},
			pause : function(){
				clearInterval(this.timer);
			},
			next : function(){
				var index = (this.curIndex+1)%this.liLength;
				this.moveTo(index);
			},
			prev : function(){
				var index = (this.curIndex+this.liLength-1)%this.liLength;
				this.moveTo(index);
			},
			moveTo : function(index){
				if(index<0||index>=this.liLength) return false;

				this.curIndex = index;
				// ...... 滑动到index页
			},
			// ......  更多函数
		};

		return Slider;
	})();

	/**
	 * plugn 私有函数对象
	 * @type {Object}
	 */
	sliderPrivateMethod = {

	};

    /**
     * 将 plugn 扩展到 $.fn
     * @author   dhb(dhb@meitu.com)
     * @date     2015-12-23
     * @datetime 2015-12-23T11:20:43+0800
     * @param    {object|string}    options    setting options
     * @param    {array}            paramArray 调用参数
     * @return   {object}          	return self
     */
	$.fn.slider = function(options, paramArray){
		return this.each(function(){
			var $this = $(this),
				instance = $this.data($.fn.slider.info.name);

			if( !instance ){
				instance = new Slider($this, options);
				$this.data($.fn.slider.info.name,instance);
			}

			typeof options === "string" && typeof instance[options] === "function" && instance[options].apply(instance,paramArray);
		
		});
	};

	/**
     * plugn infomation
     * @type {Object}
     */
	$.fn.slider.info = {
		"version" : "v1.1",
		"name" : "slider"
	}

    /**
     * plugn default settings
     * @type {Object}
     */
	$.fn.slider.defaults = {
		// default settings
		autoplay : true,
		delay : 3000,
		speed : 500
	}

})(jQuery);