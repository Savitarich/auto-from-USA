$(function(){
	$('.carousel__row').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		responsive: [
			{
			  breakpoint: 841,
			  settings: {
				  slidesToShow: 2,
			  }
			},
			{
				breakpoint: 411,
				settings: {
					slidesToShow: 1,
				}
			  },
		]
	});
});