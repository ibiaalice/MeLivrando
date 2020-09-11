
function BooksDAO(connection){
    this._connection = connection();
}

BooksDAO.prototype.insert = function(req, resp){
    resp.send('insert route');
}

BooksDAO.prototype.listAll = function(req, resp){
    resp.send('listAll route');
}

BooksDAO.prototype.find = function(req, resp){
    resp.send('find route');
}

BooksDAO.prototype.update = function(req, resp){
    resp.send('update route');
}

BooksDAO.prototype.delete = function(req, resp){
    resp.send('delete route');
}


module.exports = function(){
    return BooksDAO;
}