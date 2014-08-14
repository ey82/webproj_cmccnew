$(document).ready(function(){
	$(".navbar li a").mouseover(function(){
		$(".navbar li a").removeClass();
		$(this).addClass('active');
		$(".subnav").hide("normal");
		var posX = $(this).offset().left - 10;
		var posY = $(this).offset().top + 35;
		var subNum = $(this).attr("rel");
		var subnav = $(".subnav[name=" +subNum+ "]");
		if((subnav.width() + posX) > 980){
			subnav.css({"left": 1060 - subnav.width(), "top": posY});
		}else{
			subnav.css({"left": posX, "top": posY});
		}
		subnav.show("normal");
	});
});