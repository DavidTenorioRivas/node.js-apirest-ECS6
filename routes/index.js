/**
 * Created by user on 31/03/2017.
 */
module.exports=(app)=>{
    app.get('/', function(req, res) {
        res.render('index');
    });
    app.post('/', function(req, res) {
        res.render('index');
    });
};


