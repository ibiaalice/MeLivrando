var objectId = require('mongodb').ObjectID;

function UsersDAO(connection){
    this._connection = connection();
}

UsersDAO.prototype.insert = function(req, resp){
  var user = req.body;

  this._connection.open(function(err, dbUser){
      dbUser.collection('users', function(err, collection){
          collection.insert(user, function(err, result){
              if(err) resp.status(400).json({'msg': 'nao foi possivel adicionar usuario'});
              else resp.json({'msg': 'cliente adicionado com sucesso'});
              dbUser.close();
          });
      });
  });
}

  UsersDAO.prototype.listAll = function(req, resp){
      this._connection.open(function(err, dbUser){
          try{
              dbUser.collection('users', function(err, collection){
                  if(err) return resp.status(400).json({'msg': 'nao foi possivel listar usuarios'});
                  
                  else{

                    collection.find().toArray(function(err, result){
                        if(err) resp.status(400).json({'msg':'nao foi possivel consultar lista de usuarios'});
                        else{
                            resp.status(200).json(result);
                        }

                        dbUser.close();
                    });

                  }
              })
          }catch(err){
              console.log(err);
              resp.status(400).json({'msg' : 'erro ao listar todos os usuarios'});
          }
      });
}

//   UsersDAO.prototype.delete = function(req, resp){
//       console.log('delete');
//           resp.send('delete okay');

//   }


UsersDAO.prototype.find = function(req, resp){
    var id = req.params.id;
    // var obj = objectId(id);
    // console.log(obj);
    console.log(id);
    var params = {user : {_id: id}};

    this._connection.open(function(err, dbUser){
        dbUser.collection('users', function(err, collection){
            if(err) throw err;
            else{
                collection.find(params).toArray(function(err, result){
                    if(err){ 
                        resp.status(400).json({'msg':'nao foi possivel encontrar usuario'});
                    }
                    else {
                        console.log(result);
                        resp.status(200).json(result)
                    };

                    dbUser.close();
                }
                );
            }
        });
    });
}

//   UsersDAO.prototype.update = function(req, resp){
//       console.log('update');
//       resp.send('update okay');

//   }

  
module.exports = function(){
    return UsersDAO;
}