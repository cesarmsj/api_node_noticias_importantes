const Services = require('./Services')
const database = require('../models')

class FontesServices extends Services {

    constructor(){
        super('Fontes')
    }

}

module.exports = FontesServices