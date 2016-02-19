// Smooth Scroll to div
$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $(id).offset().top;
    $('body, html').animate({scrollTop: pos});
});

// Back to Top Button
$(document).ready(function() {
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			$('.go-top').click(function(event) {
				event.preventDefault();

				$('html, body').animate({scrollTop: 0}, 300);
			})
		});
