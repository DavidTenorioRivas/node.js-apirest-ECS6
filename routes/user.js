/**
 * Created by user on 31/03/2017.
 */
module.exports=(app,userEntity)=>{
    app.get('/user', function(req, res) {
        userEntity.getUser().then((userResolve)=>{
            res.status(200).send(userResolve);
        });
    });
    app.post('/user', function(req, res) {
        console.log(req.body.name+"-"+req.body.lastname+"-"+req.body.gender);
        userEntity.postUser(req.body.name, req.body.lastname, req.body.gender).then((userResolve)=>{
            res.status(200).send(userResolve);
        });
    });
    app.post('/user1', function(req, res) {
        console.log(req.body.name);
        userEntity.postUs(req.body.name).then((userResolve)=>{
            res.status(200).send(userResolve);
        });
    });

};
