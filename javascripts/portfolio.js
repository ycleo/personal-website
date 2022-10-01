var page = document.location.href.match(/[^\/]+$/)[0];

$( function() { 
	$( '.sidebar-container' ).load( 'sidebar.html', function() { // load the sidebar html
		// update selected nav
		$( 'a[href="' + page + '"] div').addClass( 'nav-selected' );

		$( '.mobile-menu' ).on( 'click', function() { // on click for mobile menu bars icon
			// toggle the navigation
			$( '.sidebar-nav-container' ).toggle();
		} );
	} );
} );