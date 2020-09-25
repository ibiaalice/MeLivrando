const User = require('../models/users.js');
const {exists} = require('../models/users.js');


module.exports.insert = async function(req, resp){
    try{
        var user = new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password, 
        });
        await user.save();
        resp.status(200).send(user.inspect());
    }catch(error){

    }
}

module.exports.find = async function(req, resp){
    const id = req.params.id;

    try{
        var user = await User.findById(id);
        resp.status(302).send(user.inspect());
    }catch(error){

    }
}

module.exports.findAll =  async function(req, resp){
    try{
        const users =  await User.find({});
        resp.status(200).send(users);
    }catch(error){
        resp.status(500).send('deu ruim');
    }
}

module.exports.update = function(req, resp){

}

module.exports.delete = async function(req, resp){
    try{
        const id = req.params.id; 
        const user = await User.findByIdAndRemove(id);
        console.log(user.inspect())
        resp.status(200).send(user.inspect());
    }catch(error){
        resp.status(500).send({ 'msg':'erro em buscar usuarios'})
    }
}