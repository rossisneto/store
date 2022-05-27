const express = require('express')
const router = express.Router()
const expressLayouts = require('express-ejs-layouts')

router.get('/', (req,res)=>{
    res.render('produtos/index')
})

router.get('/camisetas', (req,res)=>{
    //res.end("Servidor ativo - Produtos(camisetas) -  Router implantado")
    res.render('produtos/camisetas')
})

router.get('/sapatos', (req,res)=>{
    //operações para atender a solicitação do cliente
    res.render('produtos/sapatos')
})

module.exports = router
