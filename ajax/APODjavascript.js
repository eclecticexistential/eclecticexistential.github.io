

var url = "https://api.nasa.gov/planetary/apod?api_key=UB0smoKvw5r3io2IQ61TEikHiSWxwofDKvAXHiK5";

$.ajax({
  url: url,
  //added to prevent lag on load and improve UX//
   beforeSend: function () {
        $('#copyright').html('Loading...').css('font-size','2em');
    },
  success: function(result){
	  $("#copyright").css('font-size','0.75em');
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
  }
  $("#reqObject").text(url);
  $("#returnObject").text(JSON.stringify(result, null, 4));  
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
});