//Obtain user inputs
	var info = document.getElementById("output");
	var buttonBMI = document.getElementById("BMIBtn");

function checkWeight(){
	var height=document.getElementById("height").value;
	var heightunits=document.getElementById("heightunits").value;
	var weight=document.getElementById("weight").value;
	var weightunits=document.getElementById("weightunits").value;
	//Convert to metric
	if (heightunits=="meters"){
		height/=0.0254;
	}
	if (weightunits=="kg"){
		weight/=0.4536;
	}
	computeBMI(height,weight);
}


function computeBMI(height,weight){
        //Perform calculation
        var BMI=(weight/Math.pow(height,2))*703;
		var output =  BMI.toFixed(2);
        //Display result of calculation
        info.innerHTML=output;
		checkGender(output);
}

function checkGender(output){
		var male = document.getElementById('male').checked;
        var female = document.getElementById('female').checked;

        if(male == true) {
          if (output<20.5)
             {return document.getElementById("comment").innerHTML = "Underweight"};
          if (output>=20.5 && output<=27)
            {return document.getElementById("comment").innerHTML = "Normal Weight"};
          if (output>=27 && output<=32)
            {return document.getElementById("comment").innerHTML = "Obese"};
          if (output>32)
            {return document.getElementById("comment").innerHTML = "Overweight"};
      }
        if(female == true) {
          if (output<18.5)
            {return document.getElementById("comment").innerHTML = "Underweight"};
        if (output>=18.5 && output<=25)
            {return document.getElementById("comment").innerHTML = "Normal Weight"};
        if (output>=25 && output<=30)
            {return document.getElementById("comment").innerHTML = "Obese"};
        if (output>30)
            {return document.getElementById("comment").innerHTML = "Overweight"};
    }
      else if ((female === false) && (male === false))
        document.getElementById("output").innerHTML="?"
        alert("What's your gender?")
}

buttonBMI.addEventListener("click",function(){
	checkWeight();
})
