var user = { id: 'IZ1bLY1cm61f', name: 'John Doe', sa: true };
AUTH(function($) {
    // vary simple authorization middleware
    var cart = $.cookie(CONF.cart_cookie); // get cart id from client cookie

    if (cart)
        user.cartid = cart;

    $.success(user); 
});