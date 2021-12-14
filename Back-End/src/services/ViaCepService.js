const axios = require('axios')

const api = axios.create({
    baseURL: 'http://viacep.com.br/ws/'
});
module.exports = class ViaCepService{
    endereco(cep){
        const url ='http://viacep.com.br/ws/'+cep+'/json'
        const {data} = axios(url)
        return {data}
    }
}