const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('El Bot Sigue Encendido.');
});
 
module.exports = () => {
    server.listen(3000, () => {
        console.log('Servidor Listo.');
    });
    return true;
}