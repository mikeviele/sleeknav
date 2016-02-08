/*

 Version: 1.0.1
  Author: Axion Media Lab
 Website: http://sleeknav.github.io
    Docs: http://sleeknav.github.io/sleek
    Repo: http://github.com/sleeknav
  Issues: http://github.com/sleeknav/issues
*/

jQuery(function( $ ) {
	var $sleek  = $(.sleek'),
	    $sleekFixed = $('.sleek-fixed');
	    sleekUL_HTML = $sleek.html(),
	    $burgerOverlayInner = $( '<div class="sleek-overlay-inner" />' ).html( sleekUL_HTML ),
	    $burger = $('<div class="sleekburger"><a href="#"></a></div><div class="sleeknav"><div class="sleek-overlay"><div class="sleek-background"></div><div class="sleek-overlay-outer"></div></div></div>'),
	    flag;

	$sleek.find('ul').remove();
	$sleek.prepend( $burger );
	
	$burger.find('.sleek-overlay-outer').append( $burgerOverlayInner );

	// Take all parents and append them above their children.
	// @todo: This selector could be more efficient.
	$sleek.find('ul ul').each( function() {
		
	    var $this = $(this),
	    //prepend ul with its parent link
	    $parent_li = $('<li class="menu-parent">').html( $this.parent('li').html() );
		
	    $this.prepend( $parent_li );
	    //remove ul from contents of parent li
	    $this.children('li').first().children('ul').remove();
	});
	
	// If fixed positioning add padding to sleeknavs container.
	// @todo: If this selector is used in combination with the .sleek class could narrow selection.
	if ( $sleekFixed.length > 0 ) {
		var sleekHeight = parseInt($sleekFixed.outerHeight());
		var sleekPadding = parseInt($sleekFixed.parent().css('padding-top'));
		$sleekFixed.parent().css('padding-top', sleekPadding + sleekHeight);
	}
	
	// Event Binding Functions
	
	// @todo All theses selectors could be cleaned up.
	$('.sleekburger a').click(function(e) {
		e.preventDefault();
		$('.sleeknav ul ul').slideUp(300);
		$('.sleeknav ul li a').css('color', 'rgba(255, 255, 255, 1)');
		$('.sleekburger').toggleClass('sleek-close');
		$('.sleeknav').fadeToggle();
		$('.sleeknav .sleek-overlay-outer').height($('.sleek-overlay-outer .sleek-overlay-inner').height());
	});
	$('.sleeknav ul li a').click(function(e) {
		var $this = $(this),
		    $parent = $this.parent();
		
		//if this has children
		if ( $parent.children('ul').length > 0 ) {
			//has children
			e.preventDefault();
			if (! $parent.children('ul').is(':visible')) {
				//children are not visible
				$parent.children('ul').slideDown(300);
				$parent.siblings().children('ul').slideUp(300);
				$this.closest('ul').children('li').children('a').css('color', 'rgba(255, 255, 255, 0.2)');
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
			if ($parent.children('ul').is(':visible')) {
				//children are currently visible
				$parent.children('ul').slideUp(300);
				$this.closest('ul').children('li').children('a').css('color', 'rgba(255, 255, 255, 1)');
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
