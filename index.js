//importar informações dos arquivos da pasta config
var server = require('./config/server');
var bancodedados = require('./config/bancodedados');

var app = server.app;
var porta = server.porta;
var conexao = bancodedados.conexao;
var documentos = bancodedados.documentos;

//outras coisas
app.get('/', (req, res)=>{
    conexao();

    new documentos({
        mensagem:'teste 0909',
        nome:'teste nome',
        cargo:'teste cargo'
    }).save()
    res.send('não deu');
});

app.listen(porta);