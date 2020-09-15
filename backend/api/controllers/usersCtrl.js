


module.exports.insert = function(application, req, resp){
    var data = req.body;
    console.log(data);
    // resp.send('insert okay');
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
    resp.send('update okay');
    usersDAO.update(req, resp);
}

module.exports.find = function(application, req, resp){
    var connection = application.config.dbConnection;
    var usersDAO = new application.api.models.usersDAO(connection);
    console.log(req.body)

    usersDAO.find(req, resp);
}

module.exports.delete = function(application, req, resp){
    // var connection = application.config.dbConnection;
    // var usersDAO = new application.api.models.usersDAO(connection);
    console.log(req.body)
    resp.send('delete okay');
    usersDAO.delete(req, resp);
}