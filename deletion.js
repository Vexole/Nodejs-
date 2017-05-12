var originalArray = ['A', 'B', 'C', 'D', 'E','F', 'G'];
var finalArray = [];
var nameDelete = ['B', 'C', 'G'];
var status = false;

function deleteName(deleteName){
	for(var i=0; i<originalArray.length; i++){
		for(var j=0; j<deleteName.length; j++){
			if(originalArray[i] != deleteName[j]){
				for(var k=0; k<deleteName.length; k++){
					if(originalArray[i] == deleteName[k]){
						status = true;
					}
				}
				if(!status){
					if(!finalArray.includes(originalArray[i])){
						finalArray.push(originalArray[i]);
					}
				}
				status = false;
				
			}
		}
	}
	console.log(finalArray);
}

deleteName(nameDelete);