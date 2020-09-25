var app = require('./config/serverConfig');


PORT = 8080;
app.listen(PORT, function(){
    console.log('Servidor em execução na porta ' + PORT);
});