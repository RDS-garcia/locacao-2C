//Chamada das dependencias
const express = require('express');
const http = require('http');

//Inicializar Aplicação Express
const app = express();
const server = http.createServer(app);

//Conexões com BD e Escutar Servidor
const inicializar = async () => {

    //Escutar o Servidor
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`Servidor Rodando na Porta ${PORT}`);
    });
};

//Chamada da função
inicializar();

//exportar os modulos para reutilizar em outro arquivo
module.exports = {app, server};