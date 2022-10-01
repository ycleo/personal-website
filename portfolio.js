var fileName = document.location.href.match(/[^\/]+$/)[0];

$( function() {
    $( '.sidebar-container' ).load( 'sidebar.html', function() {

        $( 'a[href="' + fileName + '"] div').addClass( 'nav-selected' );

        $( '.mobile-menu' ).on( 'click', function() {
            $( '.sidebar-nav-container' ).toggle();
        });
    });
} );