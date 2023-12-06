// in /controllers/cart.js

// general cart routes with websocket implementation
exports.install = function() {
    
    // SHOPPING CART REST API implementation
    ROUTE('API  /api/   -cart_query                *Cart    --> query');
    ROUTE('API  /api/   -cart_read/{id}            *Cart    --> read');
    ROUTE('API  /api/   +cart_insert/              *Cart    --> insert');
    ROUTE('API  /api/   +cart_update/{id}          *Cart    --> update');
    ROUTE('API  /api/   -cart_remove/{id}          *Cart    --> remove');

    // Websocket implementation
    ROUTE('API  @api   -cart_query                 *Cart --> query');
    ROUTE('API  @api   -cart_read/{id}             *Cart --> read');
    ROUTE('API  @api   +cart_insert                *Cart --> insert');
    ROUTE('API  @api   +cart_update/{id}           *Cart --> update');
    ROUTE('API  @api   -cart_remove/{id}           *Cart --> remove');
    
    // IMPORTANT: socket route
    ROUTE('SOCKET / @api');
};


