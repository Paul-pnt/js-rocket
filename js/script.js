<<<<<<< HEAD
<<<<<<< HEAD

setTimeout(function () { 
	location.href = 'rocket.html';},2000)

var doCoolStuff = function () {
	var currentClassName = 	document.getElementById('cool').className;

	if (currentClassName == 'cool')
	{

	 	document.getElementById('cool').className =  'cool red';
	}else{

		 document.getElementById('cool').className =  'cool';
	}



}


=======
>>>>>>> parent of 76cb93e (made rocket)
=======
>>>>>>> parent of 76cb93e (made rocket)
var sayMyName = function(name){

	alert('my name is: ' + name);
}


var car = {
		make: 'VW',
		type: 'polo',
		color: 'blue',
		isTurnedOn: false,
		numberOfWheels: 4,
		seats: ['seat1','seat2','seat3','seat4'],
		turnOn: function (){

			this.isTurnedOn = true;
			},
		fly: function(){

			alert('fly');
		},

		switchCar: function (isOn){
			console.log('turn car '+ isOn);
			if (isOn == true) {
				this.isTurnedOn = true;
			}
			else{
				this.isTurnedOn = false;
			}
		}

}

console.log('hello there friends!');