
exports.install = function() {
    ROUTE('GET /*', home);
}

async function home() {
    var self = this;

    if (!self.user.cartid) 
        self.cookie(CONF.cart_cookie, GUID(25), '3 days');

    self.view('index');
}
