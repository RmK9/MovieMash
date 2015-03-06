$(document).ready(function(){

	var height = $(window).height() * 0.15;
	$(".searchBox").css({"padding-top": height});
	
	//Search bar onClick Event function
	$(".input-group-btn").click(function(e){
		e.preventDefault();
		
		$(".searchBox").animate({"padding-top": "40px"},"1000","swing");
		$("#mainLogo").css({"width": "30%", "height": "30%"});
		//$("#mainLogo").delay(1000).animate({"padding-left": "470px"},"600");
		//$("#mainLogo").detach().appendTo("#appender").delay(2000);
		
		});
});
