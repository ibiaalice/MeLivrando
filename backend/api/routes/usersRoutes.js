const app = require("../../config/serverConfig");

module.exports = function(application){
    application.get('/users/mock', function(req, resp){
        resp.status(200).json([{}, {}, {}])
    });

    application.get('/user/:id', function(req, resp){
        application.api.controllers.usersCtrl.find(application, req, resp);
    });

    application.post('/user/:id', function(req, resp){
        application.api.controllers.usersCtrl.insert(application, req, resp);
    });

    application.put('/user/:id', function(req, resp){
        application.api.controllers.usersCtrl.update(application, req, resp);
    })

    application.delete('/user/:id', function(req, resp){
        application.api.controllers.usersCtrl.delete(application, req, resp);
    });

    application.get('/users', function(req, resp){
        application.api.controllers.usersCtrl.findAll(application, req, resp);
    })


}