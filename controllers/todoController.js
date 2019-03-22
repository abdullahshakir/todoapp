var bodyParser = require('body-parser');

var data = [{item:'do html'},{item:'do css'},{item:'do javascript'},{item:'do bootstrap'}];

var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){
    //view
    app.get('/todo',function(req,res){
        res.render('todo',{todos:data});
    });
    //create
    app.post('/todo',urlencodedParser,function(req,res){
        data.push(req.body);
        res.json(data);
    });
    //delete
    app.delete('/todo:item',function(req,res){
        var item = req.params.item;
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
            //filters item on base of this return true or false if true it will be kept in filtered array
        });
    });
    app.put('/todo',function(req,res){

    });
};