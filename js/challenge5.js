console.log("i'm here")
var imgs = $("img");
var msg = "Hover over an image below.";
imgs.each( function( ){
	imgs.mouseover(function() {
	 	$('#image').css("backgroundImage",'url(' +this.src+')');
	 	$('#image').html(this.alt);
	 })
	imgs.mousegone(function() {
		$('#image').css("backgroundImage",'url()');
	 	$('#image').html(msg);
	 })

	 imgs.focus(function() {
		$('#image').css("backgroundImage",'url(' +this.src+')');
		$('#image').html(this.alt);
		console.log("i'm here");
	 })

	 imgs.blur(function() {
		$('#image').css("backgroundImage",'url()');
	 	$('#image').html(msg);
	 })
});