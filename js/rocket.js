var timer = null;
var countdownNumber = 10;


var changeState = function (state){

	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;


	//countdown
	if(state == 2){

		timer = setInterval (function(){
			document.getElementById('countdown').innerHTML = countdownNumber;
			countdownNumber = countdownNumber - 1;

			if(countdownNumber <= 0)
			{

				
				changeState(3);
			};
		}, 500)
		 

	}else if(state == 3){

		var succes = setTimeout(function ()
			{
				var randomNumber = Math.round(Math.random()*10);

				console.log('randomNumber:', randomNumber)

			if(randomNumber > 5){
				//succes
				changeState(4);
			}else{
				//failure
				changeState(5);

			}


			},2000	);



	}
}