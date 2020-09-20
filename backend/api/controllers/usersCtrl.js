


module.exports.insert = function(application, req, resp){

    var connection = application.config.dbConnection;
    var usersDAO = new application.api.models.usersDAO(connection);

    usersDAO.insert(req, resp);
}

module.exports.listAll = function(application, req, resp){
    var data = req.body
    var connection = application.config.dbConnection;
    var usersDAO = new application.api.models.usersDAO(connection);

    usersDAO.listAll(req, resp);
}

module.exports.update = function(application, req, resp){
    //var connection = application.config.dbConnection;
    //var usersDAO = new application.api.models.usersDAO(connection);
    console.log(req.body)
    resp.send({'name': 'alguma coisa aqui ', 'email':'alguma@coisa.com', 'password':'1978439727' });



    //usersDAO.update(req, resp);
}

module.exports.find = function(application, req, resp){
    var connection = application.config.dbConnection;
    var usersDAO = new application.api.models.usersDAO(connection);

    usersDAO.find(req, resp);
}

module.exports.delete = function(application, req, resp){
    // var connection = application.config.dbConnection;
    // var usersDAO = new application.api.models.usersDAO(connection);
    console.log(req.body)
    resp.send('delete okay');
    usersDAO.delete(req, resp);
}