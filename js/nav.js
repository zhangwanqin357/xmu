$(function(){
	// 导航栏hover效果
	$("#navbar>li>a").hover(function(){
		$(this).css("color","#e1b15c");
		$(this).parent().find(".fly").stop(true).slideDown().delay(1000).slideUp(400);

	},function(){
		$(this).css("color","#fff");
		$(this).parent().find(".fly").stop(true,true).slideUp(400);	
	});
	// 二级菜单hover
	$("#navbar .fly").hover(function(){
		$(this).stop(true).slideDown(400);
	},function(){
		$(this).stop(true).slideUp(400);
	});
});


// banner
$(function(){
	var $alinks = $("#bannerTag>a");
	var len = $alinks.length;
	var index = 0;
	var timer = null;
	// 点击小圆点切换
	$("#bannerTag a").click(function(){
		$(this).addClass("active")
				.siblings().removeClass("active");
		var num = $("#bannerTag a").index(this);
		$("#bannerImg li").eq(num).fadeIn(1000)
							.siblings("li").fadeOut(1000);
		index = num;
	});


	timer = setInterval(function(){
				showImg(index);
				index++;
				if (index == len) {
					index = 0;
				}
			},4000);

});

function showImg(index){
	var $aobj = $("#bannerTag");
	var $alist = $aobj.find("a");
	var $lilinks = $("#bannerImg");
	var $lilist = $lilinks.find("li");
	$alist.eq(index).addClass("active")
			.siblings().removeClass("active");
	$lilist.eq(index).fadeIn(1000)
			.siblings().fadeOut(1000);
}