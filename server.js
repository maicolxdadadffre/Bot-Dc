const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('Hay Que Culiar');
});
 
module.exports = () => {
    server.listen(8080, () => {
        console.log('Ya Me Vesti XD');
    });
    return true;
}