module.exports = function(app) {
    var Order   = require('../app/model/order');

   app.get('/', function(req, res) {
 
    res.json({ message: 'hooray! welcome to our api!' });   

   });
    app.get('/recent/orders', function(req, res) {

Order.find({},function(err,data){

res.json(data);
    //res.json({ message: 'hooray! welcome to our api!' });   


});




    });
        app.get('/recent/orders/:id', function(req, res) {

        	var data= req.params.id
        	Order.findOne({'OrdID':"AjM3NDEwNg=="},function(err,datas){

res.send(datas);
    //res.json({ message: 'hooray! welcome to our api!' });   


});



});






  
};



