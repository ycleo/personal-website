
$(document).ready(function() {
	$(".sidebar-container").load("sidebar.html", function() {
		$( '.mobile-menu' ).click(function() {
			$( '.sidebar-nav-container' ).toggle();
		} );
	}); 
});



