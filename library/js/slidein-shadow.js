( function( $ ) {

	'use strict';

	// Define global HUI object if it doesn't exist.
	if ( 'object' !== typeof window.HUI ) {
		window.HUI = {};
	}

	HUI.slideinBoxShadow = function( el ) {

		const slidein = $( el );

		const layout = slidein.find( '.hustle-layout' );
		const width  = layout.width();
		const height = layout.height();
		const offset = layout.offset();

		const offsetTop = offset.top - $( window ).scrollTop();
		const offsetLeft = offset.left - $( window ).scrollLeft();

		let shadowBox = '<div class="hustle-slidein-shadow"></div>';

		if ( ! slidein.is( '.hustle-slidein' ) ) {
			return;
		}

		function init() {

			if ( layout.length ) {

				// Create box
				if ( ! slidein.find( '.hustle-slidein-shadow' ).length ) {
					slidein.append( shadowBox );
				}

				// Box CSS
				shadowBox = slidein.find( '.hustle-slidein-shadow' );
				shadowBox.css({
					'width': width + 'px',
					'height': height + 'px',
					'pointer-events': 'none',
					'position': 'absolute',
					'z-index': '-1',
					'top': offsetTop + 'px',
					'left': offsetLeft + 'px',
					'box-shadow': '20px 16px 20px 50px #bc005b' // TEST
				});
			}
		}

		init();

		return this;

	};

}( jQuery ) );
