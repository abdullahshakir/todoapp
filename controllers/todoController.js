module.exports = function(app){
    //view
    app.get('/todo',function(req,res){
        res.render('todo');
    });
    //create
    app.post('/todo',function(req,res){

    });
    //delete
    app.delete('/todo',function(req,res){

    });
    app.put('/todo',function(req,res){

    });
};