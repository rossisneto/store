const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    //res.end("Servidor ativo - Router implantado")
    res.render('index')
})



module.exports = router