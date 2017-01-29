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

// Search button
function searchTerm() {
	var link = "https://www.amazon.com/s?field-keywords=";
	var searchVal = $('.searchBar').val();
	var searchAlter = "";
	for (var i = 0; i < searchVal.length; i++) {
		if (searchVal[i] == " ") {
			searchAlter += "+";
		} else {
			searchAlter += searchVal[i];
		}
	}
	link = link + searchAlter;
	$('.holmes').attr('href', link);
	console.log("keyed up")
};

$('.holmes').on('click', searchTerm);

// Keypress search button
$(".searchBar").on("keyup", function(event) {
	if (event.keyCode == 13) {
		$('.holmes')[0].click();
	}
})