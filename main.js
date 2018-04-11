var tryButton = document.getElementById('try');
tryButton.addEventListener('click', AddPara);

function AddPara(){
	var newp = document.createElement("para");
	newp.id = "new";
	var now = new Date();
	if (now.getMonth() == 12 && now.getDate() == 25){
		var t = document.createTextNode("It is Xmas!");
	}else{
		var t = document.createTextNode("It is not Xmas");
	}
	newp.appendChild(t);
	document.body.appendChild(newp);
	//alert(newp.id);
}

var clickButton = document.getElementById('delete');
clickButton.addEventListener('click', RemoveImage);

function RemoveImage(){
	document.getElementById('homer').style.display = 'none';

//function isItChristmas(){
//		var now = new Date();
//		return (now.getMonth() == 12 && now.getDate() == 25);
//	}
}