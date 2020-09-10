 /**
  * Preciso escolher um banco de dados 
  */

  function UsersDAO(connection){
      this._connection = connection();
  }

  UsersDAO.prototype.insert = function(req, resp){
      console.log('insert');
      
  }

  UsersDAO.prototype.listAll = function(req, resp){
      console.log('listAll');
      resp.send('listAll okay');
  }

  UsersDAO.prototype.delete = function(req, resp){
      console.log('delete');
          resp.send('delete okay');

  }

  UsersDAO.prototype.find = function(req, resp){
      console.log('find');
      resp.send('find okay');

  }

  UsersDAO.prototype.update = function(req, resp){
      console.log('update');
      resp.send('update okay');

  }

  
  module.exports = function(){
      return UsersDAO;
  }