$(document).ready(function () {
	$("#biobutton").on("click", function(){
		$(".info").hide();
		$("#bio").show();
	});
	$("#musicbutton").on("click", function(){
		$(".info").hide();
		$("#music").show();
	});
	$("#codebutton").on("click", function(){
		$(".info").hide();
		$("#code").show();
	});
})