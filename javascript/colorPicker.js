var colorA = 0;
var colorB = 0;
var colorC = 0;

//init when slider is changed//

function changeSlide(area,num,box){
    var ready = document.getElementById(area),
      eff = document.getElementById(box),
      newValue = document.getElementById(num);

  ready.onchange = function(){
    var z = this.value;
    newValue.innerHTML = z;
      if(ready==a){
      var mo = "rgb"+ "(" + z +",0,0)";
      eff.style.background=color=mo;
		if(z==0 && colorB==0){
			colorA=1;
			}
        alter(z,0,0)
      }
      if(ready==b){
      var mo = "rgb"+ "(0," + z +",0)";
      eff.style.background=color=mo;
		if(z==0){
			colorB=2;
		}
        alter(0,z,0)
      }
      if(ready==c){
      var mo = "rgb"+ "(0,0," + z +")";
      eff.style.background=color=mo;
		if(z==0){
			colorC=3;
		}
        alter(0,0,z)
      }
   }
}

//update colors accordingly//

var array = [];
var noScope=document.getElementById("purple");
var nextScope=document.getElementById("brown");
var watScope=document.getElementById("turquoise");
var fullScope=document.getElementById("all");

function alter(m,n,o){
 
	if(m>=1){
    array[0]=m;
	}
    if(n>=1){
    array[1]=n;
    }
      if(o>=1){
    array[2]=o;
	}
	
	var a1=array[0],
		a2=array[1],
		a3=array[2];
	
	if(a1!=0 && a3!=0){
		var purpSee = "rgb("+a1+",0,"+a3+")";
		noScope.style.background=color=purpSee;
	}
	
	if(a1!=0 && a2!=0){
		var brownSee = "rgb("+a1+","+a2+",0)";
		nextScope.style.background=color=brownSee;
	}
	
	if(a2!=0 && a3!=0){
		var turqSee = "rgb(0,"+a2+","+a3+")";
		watScope.style.background=color=turqSee;
	}
	
	if(a1!=0 && a2!=0 && a3!=0){
		var allSee ="rgb("+a1+","+a2+","+a3+")";
		fullScope.style.background=color=allSee;
	}
	
	
	findOut();
}

//reset colors when not in use//

function findOut(){
	if(colorA!=0 || colorB!=0 || colorC!=0){
		fullScope.style.background=color="#000";
	}
	if(colorA==1){
			array[0]=0;
			colorA=0;
			closePurple();
			closeBrown();
		}
	if(colorB==2){
			closeTurquoise();
			closeBrown();
			array[1]=0;
			colorB=0;
		}
	if(colorC==3){
			closePurple();
			closeTurquoise();
			array[2]=0;
			colorC=0;
		}
}

function closePurple(){
	noScope.style.background=color="#000";
}

function closeBrown(){
	nextScope.style.background=color="#000";
}

function closeTurquoise(){
	watScope.style.background=color="#000";
}

changeSlide("a","range","red");
changeSlide("b","range1","green");
changeSlide("c","range2","blue");
