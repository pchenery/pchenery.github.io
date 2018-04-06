var tryButton = document.getElementById('try');
tryButton.addEventListener('click', AddButton);

function AddButton(){
	var btn = document.createElement("BUTTON");
	btn.id = "new";
	var t = document.createTextNode("Click Me");
	btn.appendChild(t);
	document.body.appendChild(btn);
}

var clickButton = document.getElementById('delete');
clickButton.addEventListener('click', RemoveImage);

function RemoveImage(){
	document.getElementById('homer').style.display = 'none';
}