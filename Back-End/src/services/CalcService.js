const ViaCepService = require('./ViaCepService')
const api = new ViaCepService()
const User = require('../models/User')
module.exports = class CalcService{

    Calc(user){
        if (!user.nome)
            var nome = 'Sem nome informado.';
        else
            var nome = user.nome
        const url = user.cep+'/json'
        console.log(api.baseURL+url)
        
        var endereco = api.endereco(user.cep)

        var rendaPerCapita = user.rendaMensal/user.numDependentes

        return new User(nome, endereco, rendaPerCapita);
    }
}
