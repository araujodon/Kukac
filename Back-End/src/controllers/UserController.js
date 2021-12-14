const express = require ('express')
const routes = express.Router()
const CalcService = require ('../services/CalcService.js')
const calcService = new CalcService()

routes.post('/calcular',async (req, res) =>{
    const body = req.body
    return res.send(calcService.Calc(body)).json();
 
})


module.exports = routes