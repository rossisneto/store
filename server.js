if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

//Importando routers
const indexRouter = require('./routes/index')
const produtosRouter = require('./routes/produtos')
const servicosRouter = require('./routes/servicos')

//Habilitando as rotas
app.use('/', indexRouter)
app.use('/produtos', produtosRouter)
app.use('/servicos', servicosRouter)

//Configuração do APP
app.set('view engine', 'ejs')
app.set('views',__dirname +'/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)

//Arquivs estáticos
app.use(express.static('public'))
app.use('/css', express.static(__dirname+'public/css'))
app.use('/img', express.static(__dirname+'public/img'))
app.use('/js', express.static(__dirname+'public/js'))

//Iniciando o servidor
app.listen(process.env.PORT, console.log("servidor iniciado"))