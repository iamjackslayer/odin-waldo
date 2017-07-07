$(document).ready(function(){

	var canvas = $('#canvas');
	$('img').hide();
	canvas.hide();

	// countdown from 3 to 0
	var timer = 3;
	var count = $("<h1></h1>");
	count.css({
		'display':'block',
		'margin':'auto',
		'font-size':'500px'
	});
	$('#box').css({'text-align':'center'})
	$("#box").append(count);
	var startingClock = setInterval(function(){
		count.text(timer);
		timer -= 1;
		if(timer < 0){
			$('img').show();
			count.hide();
			canvas.show();
			clearInterval(startingClock);

			// start to count up
			countUpInterval = setInterval(countUp,10);
		};
	},1000);
	canvas.css({
		'border':'1px red solid'
	});
	var c = canvas[0].getContext('2d');
	console.log(canvas[0].width,canvas[0].height);

	// count up ,period = 10ms
	var countUpInterval;
	var countUpClock = 0.00;
	function countUp(){
		countUpClock += 0.01;
	}


	// create a square when canvas clicked 

	canvas.on('click',function(e){
		c.clearRect(0,0,1023,442);

		var x = e.offsetX;
		var y = e.offsetY;
		check(x,y);
		console.log("("+x+","+y+")");
		console.log(e);
		c.rect(x-20,y-20,40,40);
		c.strokeStyle = "black";
		c.stroke();
	});
	// modal input focus
	$('#pop').on('shown.bs.modal', function () {
	  $('#user_name').focus();
	});
	function check(x,y){
		if(520<x && x<562 && 120<y && y<180){
			$('#comment').addClass('alert-success');
			$('#comment').removeClass('alert-danger');
			$('#comment h1').text("It's me!");

			// stop countUpClock
			clearInterval(countUpInterval);
			//pass duration value to the form
			$('#hidden-tag').val(countUpClock.toFixed(2));
			// show modal
			setTimeout(function(){
				$('#pop').modal('show');
				// modal title
				$('.modal-title').text("Hi, I am Waldo. You found me in "+countUpClock.toFixed(2)+" seconds. What's your name?");
			},600);

		}else{
			$('#comment').removeClass('alert-success');
			$('#comment').addClass('alert-danger');
			comment();
		}
	}

	function comment(){
		var comments = [
			"Nope, nope, nope.",
			"Sigh....",
			"Shake my head....",
			"A big NO!",
			"Hell no.",
			"Open your eyes bigly. BIGLY. Your BIG and UGLY eyes.",
			"F@#K%^G#B%TCH!",
			"$ON%0F%#$B!T^H",
			"I am not Waldo.",
			"Wally or Waldo, but not me."
		];
		var comment = comments[Math.floor(Math.random()*comments.length)];
		$('#comment h1').text(comment);
	}
});


