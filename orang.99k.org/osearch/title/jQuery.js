


$(document).ready(function(){
	$("img#redheart").hide();
	$("img#glow").hide();
	$("a#dela2").hide();
	$("div#like").hide();
	$("div#GO").hide();
	$("div#GO2").hide();
	$("div#gillainte").hide();
	$("div#google2").hide();
	$("div#GO").fadeIn(3000);
	$("div#googlesearch2").hide();
	
	
	
	
	
	
	$("div#GILLA").hover(function(){
		$("img#redheart").fadeIn(600);
		$("a#dela2").fadeIn(600);
		$("img#glow").fadeIn(600);
      	$("img#heart").fadeOut(600);
	}, 
	function(){
		$("img#redheart").fadeOut(600);
		$("img#glow").fadeOut(600);
      	$("img#heart").fadeIn(600);
      	$("a#dela2").fadeOut(600);
	});
	
	
	
	
	
	$("div#gillainte").hover(function(){
		$("img#x2").fadeIn(300);
      	$("img#x1").fadeOut(600);
	}, 
	function(){
		$("img#x1").fadeIn(300);
      	$("img#x2").fadeOut(600);
	});
	


	$("a#googlecom").hover(function(){
		$("div#google2").fadeIn(400);
      	$("div#google1").fadeOut(300);
	}, 
	function(){
		$("div#google1").fadeIn(400);
      	$("div#google2").fadeOut(300);
	});
	
	
	
	
	
	$("div#pf").hover(function(){
		$('div#GO2').fadeIn(300);
	}, 
	function(){
		$('div#GO2').fadeOut(300);
	});
	
	
	
	
	
	$("div#GO3").hover(function(){
		$('div#GO2').fadeIn(300);
	}, 
	function(){
		$('div#GO2').fadeOut(300);
	});
	
	
	
	
	$("div#GILLA").click(function() {
		$("div#GILLA").hide();
		$("img#heart").hide();
		$("img#redheart").hide();
		$("a#dela2").hide();
		$("img#glow").hide();
		$("img#x2").hide();
      	$("img#heart").hide();
		$("div#like").fadeIn(300);	
		$("div#gillainte").fadeIn(300);
	});




	$("div#gillainte").click(function() {
		$("div#GILLA").fadeIn(300);
		$("div#like").fadeOut(100);
		$("div#gillainte").fadeOut(100);
	});





	$("#text").hide();
	jQuery.displayHiddenText = function(){
		$('#text').fadeIn(300);
	};
	$("#gicons a").hover(function(){
		$.displayHiddenText();
	});
	$("#q").trigger('focus');
});

