const Services = require('./Services')
const database = require('../models')

class TagsServices extends Services {

    constructor(){
        super('Tags')
    }

}

module.exports = TagsServices