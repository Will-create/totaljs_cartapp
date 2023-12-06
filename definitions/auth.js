var user = { id: 'IZ1bLY1cm61f', name: 'John Doe', sa: true };
AUTH(function($) {
    // very simple authorization middleware
    var cart = $.cookie(CONF.cart_cookie); // get cart id from client cookie

    if (!cart) {
        $.invalid();
        return;
    }

    user.cartid = cart;
    $.success(user); 
});