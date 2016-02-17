/*

 Version: 1.0.1
  Author: Axion Media Lab
 Website: http://sleeknav.com/
    Docs: https://github.com/axionmedialab/sleeknav
    Repo: https://github.com/axionmedialab/sleeknav
  Issues: https://github.com/axionmedialab/sleeknav/issues
*/

(function ( $ ) {

	$.fn.sleeknav = function( options ) {

		var defaults = {
			navPosition: 'fixed'
	    };

		var settings = $.extend( {}, defaults, options );

		var sleekul = this.html();
		this.children('ul').remove();
		this.prepend('<div class="sleekburger"><a href="#"></a></div><div class="sleeknav"><div class="sleek-overlay"><div class="sleek-background"></div><div class="sleek-overlay-outer"><div class="sleek-overlay-inner"></div></div></div></div>');

		this.addClass('sleek');

		var $sleek = $('.sleek'),
			$sleekNav = $('.sleeknav'),
			$sleekNavOuter = $sleekNav.find('.sleek-overlay-outer'),
			$sleekNavInner = $sleekNav.find('.sleek-overlay-inner'),
			$sleekBurger = $('.sleekburger');

		$sleekNavInner.html(sleekul);

		switch ( settings.navPosition ) {
		    case 'fixed':
		        this.addClass('sleek-fixed');
		        break;

		    case 'relative':
		        this.addClass('sleek-relative');
		        break;

		    default:
		        this.addClass('sleek-fixed');
		}

		//take all parents and append them above their children
		var parent;
		$sleek.find('ul ul').each(function() {
			//store contents of parent li
			parent = $(this).parent('li').html();
			//prepend ul with its parent link
			$(this).prepend('<li class="menu-parent">' + parent + '</li>');
			//remove ul from contents of parent li
			$(this).children('li').first().children('ul').remove();
		});

		//if fixed positioning add padding to sleeknavs container
		var $sleekFixed = $('.sleek-fixed');
		if ($sleekFixed.length > 0) {
			var sleekHeight = parseInt($sleekFixed.outerHeight());
			var sleekPadding = parseInt($sleekFixed.parent().css('padding-top'));
			$sleekFixed.parent().css('padding-top', sleekPadding + sleekHeight);
		}

		//controlling functions
		var flag;
		$sleekBurger.find('a').click(function(e) {
			e.preventDefault();
			$sleekNav.find('ul ul').slideUp(300);
			$sleekNav.find('ul li a').removeClass('faded');
			$sleekBurger.toggleClass('sleek-close');
			$sleekNav.fadeToggle();
			$sleekNavOuter.height($sleekNavInner.height());
		});
		$sleekNav.find('ul li a').click(function(e) {
			//if this has children
			if ($(this).parent().children('ul').length > 0) {
				//has children
				e.preventDefault();
				if (!$(this).parent().children('ul').is(':visible')) {
					//children are not visible
					$(this).parent().children('ul').slideDown(300);
					$(this).parent().siblings().children('ul').slideUp(300);
					$(this).closest('ul').children('li').children('a').addClass('faded');
					flag = 0;
					setInterval(function() {
						flag++;
						$sleekNavOuter.height($sleekNavInner.height());
						if (flag == 30) {
							return;
						}
					}, 10);
					return;
				}
				if ($(this).parent().children('ul').is(':visible')) {
					//children are currently visible
					$(this).parent().children('ul').slideUp(300);
					$(this).closest('ul').children('li').children('a').removeClass('faded');
					flag = 0;
					setInterval(function() {
						flag++;
						$sleekNavOuter.height($sleekNavInner.height());
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