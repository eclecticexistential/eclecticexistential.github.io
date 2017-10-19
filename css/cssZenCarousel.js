//CSS carousel for mainzengarden//

var L = document.getElementById("left");
var R = document.getElementById("right");
var zenArray=["zengarden.css"];

function fillArray(){
	var counter = 1;
	while(counter<5){
		zenArray.push("zengarden"+counter+".css");
		counter++
	}
}

fillArray()
 // carousel //

function changeStyle(n){
	var x = $("#change-me").attr("href");
	var y = $.inArray(x,zenArray);
	var z = y+n;
	if(z>zenArray.length-1){z=0};
	if(z<0){z=zenArray.length-1};
	$("#change-me").attr("href",zenArray[z]);
}

L.addEventListener("click",function(){
	changeStyle(-1);
});


R.addEventListener("click",function(){
	changeStyle(1);
});