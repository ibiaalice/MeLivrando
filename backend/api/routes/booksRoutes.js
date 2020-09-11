const app = require('../../config/serverConfig');

module.exports = function(application){
    application.get('books/mock', function(req, resp){

    });

    application.get('book/:id', function(req, resp){

    });

    application.post('book/', function(req, resp){

    });

    application.put('book/', function(req, resp){

    });

    application.delete('book/', function(req, resp){

    });
}