/*

 Version: 1.0.0
  Author: Axion Media Lab
 Website: http://sleeknav.github.io
    Docs: http://sleeknav.github.io/sleek
    Repo: http://github.com/sleeknav
  Issues: http://github.com/sleeknav/issues
*/

(function ( $ ) {

	$.fn.sleeknav = function() {

	    var sleekul = this.html();
		this.children('ul').remove();
		this.prepend('<div class="sleekburger"><a href="#"></a></div><div class="sleeknav"><div class="sleek-overlay"><div class="sleek-background"></div><div class="sleek-overlay-outer"><div class="sleek-overlay-inner">' + sleekul + '</div></div></div></div>');
		this.addClass('sleek');

		//take all parents and append them above their children
		var parent;
		$('.sleek ul ul').each(function() {
			//store contents of parent li
			parent = $(this).parent('li').html();
			//prepend ul with its parent link
			$(this).prepend('<li class="menu-parent">' + parent + '</li>');
			//remove ul from contents of parent li
			$(this).children('li').first().children('ul').remove();
		});

		//if fixed positioning add padding to sleeknavs container
		if ($('.sleek-fixed').length > 0) {
			var sleekHeight = parseInt($('.sleek-fixed').outerHeight());
			var sleekPadding = parseInt($('.sleek-fixed').parent().css('padding-top'));
			$('.sleek-fixed').parent().css('padding-top', sleekPadding + sleekHeight);
		}

		//controlling functions
		var flag;
		$('.sleekburger a').click(function(e) {
			e.preventDefault();
			$('.sleeknav ul ul').slideUp(300);
			$('.sleeknav ul li a').css('color', 'rgba(255, 255, 255, 1)');
			$('.sleekburger').toggleClass('sleek-close');
			$('.sleeknav').fadeToggle();
			$('.sleeknav .sleek-overlay-outer').height($('.sleek-overlay-outer .sleek-overlay-inner').height());
		});
		$('.sleeknav ul li a').click(function(e) {
			//if this has children
			if ($(this).parent().children('ul').length > 0) {
				//has children
				e.preventDefault();
				if (!$(this).parent().children('ul').is(':visible')) {
					//children are not visible
					$(this).parent().children('ul').slideDown(300);
					$(this).parent().siblings().children('ul').slideUp(300);
					$(this).closest('ul').children('li').children('a').css('color', 'rgba(255, 255, 255, 0.2)');
					flag = 0;
					setInterval(function() {
						flag++;
						$('.sleeknav .sleek-overlay-outer').height($('.sleeknav .sleek-overlay-inner').height());
						if (flag == 30) {
							return;
						}
					}, 10);
					return;
				}
				if ($(this).parent().children('ul').is(':visible')) {
					//children are currently visible
					$(this).parent().children('ul').slideUp(300);
					$(this).closest('ul').children('li').children('a').css('color', 'rgba(255, 255, 255, 1)');
					flag = 0;
					setInterval(function() {
						flag++;
						$('.sleeknav .sleek-overlay-outer').height($('.sleeknav .sleek-overlay-inner').height());
						if (flag == 30) {
							return;
						}
					}, 10);
					return;
				}
			}
		});


	};

}( jQuery ));

/*
jQuery(document).ready(function($) {

	//take all parents and append them above their children
	var parent;
	$('.sleek ul ul').each(function() {
		//store contents of parent li
		parent = $(this).parent('li').html();
		//prepend ul with its parent link
		$(this).prepend('<li class="menu-parent">' + parent + '</li>');
		//remove ul from contents of parent li
		$(this).children('li').first().children('ul').remove();
	});

	//if fixed positioning add padding to sleeknavs container
	if ($('.sleek-fixed').length > 0) {
		var sleekHeight = parseInt($('.sleek-fixed').outerHeight());
		var sleekPadding = parseInt($('.sleek-fixed').parent().css('padding-top'));
		$('.sleek-fixed').parent().css('padding-top', sleekPadding + sleekHeight);
	}

	//controlling functions
	var flag;
	$('.sleekburger a').click(function(e) {
		e.preventDefault();
		$('.sleeknav ul ul').slideUp(300);
		$('.sleeknav ul li a').css('color', 'rgba(255, 255, 255, 1)');
		$('.sleekburger').toggleClass('sleek-close');
		$('.sleeknav').fadeToggle();
		$('.sleeknav .sleek-overlay-outer').height($('.sleek-overlay-outer .sleek-overlay-inner').height());
	});
	$('.sleeknav ul li a').click(function(e) {
		//if this has children
		if ($(this).parent().children('ul').length > 0) {
			//has children
			e.preventDefault();
			if (!$(this).parent().children('ul').is(':visible')) {
				//children are not visible
				$(this).parent().children('ul').slideDown(300);
				$(this).parent().siblings().children('ul').slideUp(300);
				$(this).closest('ul').children('li').children('a').css('color', 'rgba(255, 255, 255, 0.2)');
				flag = 0;
				setInterval(function() {
					flag++;
					$('.sleeknav .sleek-overlay-outer').height($('.sleeknav .sleek-overlay-inner').height());
					if (flag == 30) {
						return;
					}
				}, 10);
				return;
			}
			if ($(this).parent().children('ul').is(':visible')) {
				//children are currently visible
				$(this).parent().children('ul').slideUp(300);
				$(this).closest('ul').children('li').children('a').css('color', 'rgba(255, 255, 255, 1)');
				flag = 0;
				setInterval(function() {
					flag++;
					$('.sleeknav .sleek-overlay-outer').height($('.sleeknav .sleek-overlay-inner').height());
					if (flag == 30) {
						return;
					}
				}, 10);
				return;
			}
		}
	});
});
*/