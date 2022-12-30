//* Accessories slider
$('.accessories__slider').slick({
	infinite: true,
	slidesToShow: 7,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1360,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 960,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 520,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 360,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});