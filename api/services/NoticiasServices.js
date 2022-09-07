const Services = require('./Services')
const database = require('../models')

class NoticiasServices extends Services {

    constructor(){
        super('Noticias')
    }

}

module.exports = NoticiasServices