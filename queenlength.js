var length = 0;

function calculate(x1, y1, x2, y2){
	var diffx = x2 - x1;
	var diffy = y2 - y1;

	if(diffy == diffx){
		length = diffx;
	}else{
		if(diffx > diffy){
			length = diffy + (diffx-diffy);
		} else{
			length = diffx + (diffy-diffx);
		}
	}

	console.log(length);
}

calculate(1,1,6,3);