const Services = require('./Services')
const database = require('../models')

class NoticiasServices extends Services {

    constructor(){
        super('Noticias')
    }

    async atribuitTags(idNoticia, tags){

        return database.sequelize.transaction(async transacao => {

            await tags.forEach(tag => {

                let tagNoticia = {
                    noticiaId: idNoticia,
                    tagId: tag
                };
              
                database['TagsNoticias'].create({tagNoticia}, { transaction: transacao})

         }) }, { transaction: transacao});
    }

}

module.exports = NoticiasServices