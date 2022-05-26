if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()

//Importando routers
const indexRouter = require('./routes/index')
const produtosRouter = require('./routes/produtos')

//Habilitando as rotas
app.use(express.static('public'))
app.use('/', indexRouter)
app.use('/produtos', produtosRouter)

//Iniciando o servidor
app.listen(process.env.PORT, console.log("servidor iniciado"))