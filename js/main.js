//============Scroll Nav=============//
(jQuery)(document).ready(function(){
	$("a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
});

//============Background Animate=============//
var images = ["images/bg-one.jpg", "images/bg-two.jpg", "images/bg-three.jpg"];
var i = 0;
setInterval(function(){
	$(".bg-video").animate("linear", 500, function() {
		if (i >= images.length) {
			i = 0;
		}
		else 
			$(".bg-video").css("background-image", "url("+images[i++]+")").animate({opacity: 1});
	});
}, 5000);

//============Fixed Nav================//
(jQuery)(function() {
    $(window).scroll(function(){
        var distanceTop = 775;
        if  ($(window).scrollTop() > distanceTop)
            $('#fixed-nav').animate({'top':'0px'},800);
        else
            $('#fixed-nav').stop(true).animate({'top':'-77px'},300);
    });
    $('#fixed-nav .close').bind('click',function(){
        $(this).parent().remove();
    });
});

//============Menu Mobile==============//
(jQuery)(document).ready(function() {
    $("#fixed-nav button").click(function(){
        $("#fixed-nav nav").slideToggle(500).addClass(".show");
    });
});