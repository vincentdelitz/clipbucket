/*function player_height(){var b=$(".video-js").width(),c=b*(9/16);return $(".video-js").css("height",c+"px"),c}$(window).on("resize",function(){player_height()}),$(document).ready(function(){player_height(),$(".vjs-cb-logo-cont").attr("style","display: block !important"),$(".vjs-cb-logo-cont").css({"float":"right",width:"3.5em",height:"2.5em",margin:"7px 0 0 0",cursor:"pointer"}),$(".vjs-cb-no-logo").css({height:"0.1px",margin:"7px 0 0 0"})});*/
function new_player_height (argument) {
	var w = $(".video-js").width();
	var h = w*(9/16);
	console.log(h);
	console.log(w);
	$(".video-js").css("height",h+"px");
}
//new_player_height();
$(window).load(function(){
	new_player_height();
});
$(document).ready(function() {
	new_player_height();	
});
$(window).resize(function(event) {
	new_player_height();
});