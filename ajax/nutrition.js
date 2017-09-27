var x=document.getElementById("submit");

x.addEventListener("click",function(){
	var food=document.getElementById('area').value;
	$.ajax({ 
		url: "https://api.nutritionix.com/v1_1/search/"+food+"?fields=item_name,brand_name,nf_calories&appId=e3ffb58f&appKey=f9051e6f4fc5cf9724526dcf292a7e28",
		success: function(data){
					var r=( JSON.stringify(data, null, '    '));
					var obj = JSON.parse(r);
					var s=obj.hits[0].fields.item_name;
					var b=obj.hits[0].fields.brand_name;
					var c=obj.hits[0].fields.nf_calories;
						document.getElementById("s").innerHTML= "Item requested: " + s;
						document.getElementById("b").innerHTML= "Brand: " +b;
						document.getElementById("c").innerHTML= "Calories per serving: " + c;
					var s1=obj.hits[1].fields.item_name;
					var b1=obj.hits[1].fields.brand_name;
					var c1=obj.hits[1].fields.nf_calories;
						document.getElementById("s1").innerHTML= "Item requested: " + s1;
						document.getElementById("b1").innerHTML= "Brand: " +b1;
						document.getElementById("c1").innerHTML= "Calories per serving: " + c1;
					var s2=obj.hits[2].fields.item_name;
					var b2=obj.hits[2].fields.brand_name;
					var c2=obj.hits[2].fields.nf_calories;
						document.getElementById("s2").innerHTML= "Item requested: " + s2;
						document.getElementById("b2").innerHTML= "Brand: " +b2;
						document.getElementById("c2").innerHTML= "Calories per serving: " + c2;
			}
		});
});