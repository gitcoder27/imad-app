console.log('Loaded!');
alert("Javascript is here");

//change the text
var element = document.getElementById('content-text');
element.innerHTML = "new paragraph changed by Javascript";

//move the image
var img = document.getElementById('madi');

var margin = 0;
function moveRight() {
	margin = margin + 5;
	img.style.marginLeft = margin + "px";
};

img.onclick = function() {
	var interval = setInterval(moveRight, 50);
};