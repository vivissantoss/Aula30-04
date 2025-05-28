const express = require('express')

const app = express()

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (request, response)=>{
    let resul = []
    let n1 = 0
    let n2 = 1

    for(let i = 0 ; i<=20; i++){
        resul.push(n1)
        let resultado = n1 + n2;
        n1 = n2;
        n2 = resultado;
    }
    response.render('home', {valores: resul})
})
app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});
