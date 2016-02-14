//Mouse over of Magnifying Glass
function MFglass() {
	var sherlock = document.getElementById('sherlock')
	sherlock.style.backgroundColor = "#FA4F0A"
}
function normalGlass() {
	var sherlock = document.getElementById('sherlock')
	sherlock.style.backgroundColor = ""
}
//Button Mouseover
var mouseOn = document.getElementsByClassName('mouseOn')
var appear = document.getElementsByClassName('appear')
$(mouseOn).mouseenter(function() {
	$(this).children().show()
});
$(mouseOn).mouseleave(function() {
	$(appear).hide()
});

//Scroll to Top
$('.goUp').click(function(){
	$(document).scrollTop(0)
});