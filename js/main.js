$(document).ready(function(){
	$(".input-group-btn").click(function(e){
		e.preventDefault();
		$(".searchBox").animate({"padding-top": "40px"},"1000","swing");
		$("#mainLogo").css({"width": "30%", "height": "30%"});
		$("#mainLogo").animate({"padding-left": "470px"},"600");
		//$("#mainLogo").detach().appendTo("#appender");
		});
});