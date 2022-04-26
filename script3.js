window.pass = 1890;
window.redirectURL = 'https://codepen.io/mgsmith2/puzzle3';


$(document).ready(function() {
	start();
});


function start(){
	window.tries = 0;
	
	$(".key").click(function(){
		var n = $(this).html();
		$('.screen').append( n );
		window.tries++;
		updateFlasher();
		validate();
	});
}

function updateFlasher(){
	if (window.tries <=3){
		var dis = window.tries * 55;
		$('.flasher').css({
			'left' : dis + 'px'
		});
	}
	else{
		$('.flasher').css({
			'left' : '20px',
			'display' : 'none'
		});
	}
}

function validate(){
	if (window.tries >= 4){
		checkWin();
		$('.screen').html('');
		window.tries = 0;
		$('.flasher').css({
			'display' : 'block'
		});
	}
	else{
		
	}
}

function checkWin(){
	var w = $('.screen').html();
	if (w == window.pass){
		$('.success').show().delay(5000).queue(function(n) {
			$('.success').hide(); n();
		});
		var u = window.redirectURL;
		$(location).attr('href', u );
	}
	else{
		$('.error').show().delay(1000).queue(function(n) {
			$('.error').hide(); n();
		});
	}
}