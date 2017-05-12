var originalArray = [1,2,3,4,5,6];
var finalArray = [];
var k = 0;

function rotation(rotate){
	for(var i=rotate; i<originalArray.length; i++){
		//finalArray.push(originalArray[i]);
		finalArray[k] = originalArray[i];
		k++;
	}

	for(var j=0; j<rotate; j++){
		finalArray.push(originalArray[j]);
	}

	process.stdout.write(`${finalArray}`);
}

rotation(3);