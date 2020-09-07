 /**
  * Preciso escolher um banco de dados 
  */

  function UsersDAO(connection){
      this._connection = connection();
  }

  UsersDAO.prototype.insert = function(req, resp){
      print('insert');
  }

  UsersDAO.prototype.listAll = function(req, resp){
      print('listAll');
  }

  UsersDAO.prototype.delete = function(req, resp){
      print('delete');
  }

  UsersDAO.prototype.find = function(req, resp){
      print('find');
  }

  UsersDAO.prototype.update = function(req, resp){
      print('update');
  }

  
  module.exports = function(){
      return UsersDAO;
  }