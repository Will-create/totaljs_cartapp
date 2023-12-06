// in /schemas/cart.js
NEWSCHEMA('Cart', function(schema) {

    schema.action('read', {
        input: '*id:string',
        action: function($) {

            if (!$.user) {
                $.invalid(401);
                return;
            }

            $.callback([]);
        }
    });
    //
    schema.action('insert', {
        input: '*items:[{*id:String,*price:Number,*total:Number,*count:Number,date:Date}]',
        action: function($, model){
        
            var obj = {};
            obj.id = $.user.cartid || UID(); // current user cart id or new UID
            obj.count = model.items.length; 
            obj.total = 0;
            obj.price = 0;

            for (var k of model.items) 
                obj.total += obj.price += k.price;

            // apply discount
            if (CONF.discount) 
                obj.total = obj.price - (obj.price * 10) / 100;


            // stringify items
            obj.items = JSON.stringify(model.items);

            NOSQL('cart').insert(obj).callback(function(err, response) {
                if (err) {
                    $.invalid(err);
                } else
                    $.success();
            });// end NOSQL
            
        }//end action
    });
    
    schema.action('update', {
        input: '*id:string, *amount:number',
        action: function($, model){
        
            NOSQL('users').update($.body).where('id', $.params.id).callback(function(err, response) {
                if (err) {
                    errorHandler(err, res);
                    return;
                } else
                    $.success();
            });
            
        }//end action
    });
    
    schema.action('remove', {
        input: '*id:string',
        action: function($, model){
        
            NOSQL('cart').remove().where('id', $.params.id).callback(function(err, response) {
                if (err) {
                    $.invalid(err);
                } else
                    $.success();
            });
            
        }//end action
    });
});

