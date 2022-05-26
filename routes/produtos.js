const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.end("Servidor ativo - Produtos -  Router implantado")
})

router.get('/camisetas', (req,res)=>{
    res.end("Servidor ativo - Produtos(camisetas) -  Router implantado")
})

router.get('/sapatos', (req,res)=>{
    res.end("Servidor ativo - Produtos(SAPATOS) -  Router implantado")
})

module.exports = router