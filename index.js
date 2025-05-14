const express = require('express')

const app = express()

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (request,response) => {
    //response.send('Testando!!!');
    response.render('home', {nome : "Vitória"});
});

app.get('/tabuada/:numero', (request, response) => {
    let resultado = [];
    const numero = request.params['numero'];
    for(let cont = 1;cont <11;cont++){
       // resultado.push(cont * 5);
       resultado.push(cont * numero)
        response.render('tabuada', {valores : resultado});
    }
});

app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});
