
function ajaxCall(){
  var loc=document.getElementById("cityInfo").value;
  var weather = new XMLHttpRequest();
      weather.open("GET","http://api.openweathermap.org/data/2.5/weather?q=" + loc + "&appid=002c514b7cc57302b542830301bf1422",false);
      weather.send(null);
  var r=JSON.parse(weather.response);
  var des= r.weather[0].description;
  var tC=(Math.floor(r.main.temp-273.15))+ "\u00B0" + "C";
  var tF=(Math.floor((r.main.temp * (9/5))- 459.67))+ "\u00B0" + "F";
  var hU=r.main.humidity;
  var city=r.name;
  var sRise=r.sys.sunrise;
  var sSet=r.sys.sunset;
  var dT=r.dt;
  //time for day or night background//
  var diff=dT-sRise;
  var temp=document.getElementById("t");
          temp.innerHTML=tF;
          temp.addEventListener("click",function(){
          if(temp.innerHTML==tF){
			  return temp.innerHTML=tC;
			  }else 
			  {return temp.innerHTML=tF;};
          });
  document.getElementById("w").innerHTML=des;
  document.getElementById("hU").innerHTML="Humidity: " + hU +"%";
  document.getElementById("city").innerHTML=city;

function check(){
  if(diff<=0){
		document.getElementById("weatherApp").style.background="#000";
		moon.style.visibility="visible";
		sun.style.visibility="hidden";
		cloud.style.visibility="hidden";
		rain.style.visibility="hidden";
		bolt.style.visibility="hidden";
	};
  if(diff>0){
		document.getElementById("weatherApp").style.background="#249";
		moon.style.visibility="hidden";
		sun.style.visibility="visible";
		cloud.style.visibility="hidden";
		rain.style.visibility="hidden";
		bolt.style.visibility="hidden";
  }
  if(des=="broken clouds"||des=="scattered clouds"||des=="overcast clouds"||des=="few clouds"){
		cloud.style.visibility="visible";
		cloud.style.margin="3%";
  }
  if(des=="light rain"||des=="mist"||des=="rain"||des=="light intensity drizzle"||des=="heavy intensity rain"||des=="moderate rain"||des=="heavy intensity drizzle"){
	  sun.style.visibility="hidden";
	  cloud.style.visibility="visible";
	  rain.style.visibility="visible";
  }
  if(des=="thunderstorm"){
    sun.style.visibility="hidden";
    cloud.style.visibility="visible";
    rain.style.visibility="visible";
    bolt.style.visibility="visible";
  }
}
check();
}
//closure of ajaxCall();

 
document.getElementById("getWeather").addEventListener("click",function(){
	ajaxCall();
	document.getElementById("cityInfo").value='';
})