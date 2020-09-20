const app = require("../../config/serverConfig");

module.exports = function(application){
    application.get('/users/', function(req, resp){ //lista todos 
        application.api.controllers.usersCtrl.listAll(application, req, resp);
    });

    application.get('/user/:id', function(req, resp){ //se ele ta logado, token, id, nome de user
        application.api.controllers.usersCtrl.find(application, req, resp);
    });

    application.post('/register/', function(req, resp){ // registrar 
        application.api.controllers.usersCtrl.insert(application, req, resp);
    });

    application.put('/user/:id', function(req, resp){ //modifica 
        application.api.controllers.usersCtrl.update(application, req, resp);
    })

    application.delete('/user/:id', function(req, resp){ //deleta
        application.api.controllers.usersCtrl.delete(application, req, resp);
    });

}