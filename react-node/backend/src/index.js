//importando express
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//comecando chamar do servidor os dados
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//metodos http => get,post,put,delete
//tipos de parameretros
//query params: req.query(filtros,ordenacao,paginacao, ...)
//route params: request.params (indendificar um recurso na alteracao ou remocao)
//body: request.body(dados para criacao ou alteracao de um registro)

//mongoDB (nao-relacional)
mongoose.connect('mongodb+srv://conraderp:conrado123@cluster0-gkbhe.mongodb.net/test?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true, 
});



app.listen(3333);