var mongoose = require('mongoose');

//conectar com o bd atlas
var conexao = ()=>{
    var caminho = mongoose.connect('mongodb+srv://mongodbuser:180904@cluster0.fdcse.mongodb.net/mongoatlas?retryWrites=true&w=majority');
}

var schema = mongoose.Schema;

var depoimentos = new schema({
    mensagem:String,
    nome:String,
    cargo:String
});

var documentos = mongoose.model('depoimentos', depoimentos);

module.exports = {conexao,documentos};