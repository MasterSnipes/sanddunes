var keyamt;
var moneyamt;
var finalamt;
function calculation() {
	keyamt = document.getElementById('keys');
	moneyamt = document.getElementById('money');
	if(keyamt.value != 0 && moneyamt.value != 0){
		console.log('Error!');
		document.getElementById('finalamt').innerHTML = "Error, input only one value!";
	} else if(keyamt.value != 0) {
		finalamt = Math.round((keyamt.value*2.5)/0.03);
		document.getElementById('finalamt').innerHTML = finalamt + " Sand Dunes";
	} else if(moneyamt.value != 0){
		finalamt = Math.round(moneyamt.value/0.03);
		document.getElementById('finalamt').innerHTML = finalamt + " Sand Dunes";
	}
}