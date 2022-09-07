const database = require('../models')

class TagController {
    
    static async pegaTodasTags(req, res){
        try {
            const todasTags = await database.Tags.findAll()
            return res.status(200).json(todasTags)
        } catch(error) {
            return res.status(500).json(error.message)
        }  
    }

    static async pegaUmaTag(req, res) {
        const { id } = req.params

        try {
            const umaTag = await database.Tags.findOne( { 
                where: { id: Number(id) }
            } )
            return res.status(200).json(umaTag)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaTag(req, res) {
        const novaTag = req.body
        
        try {
            const novaTagCriada = await database.Tags.create(novaTag)
            return res.status(200).json(novaTagCriada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTag(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Tags.update(novasInfos, { where: { id: Number(id) }})
            const tagAtualizada = await database.Tags.findOne( { where: { id: Number(id) }})
            return res.status(200).json(tagAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaTag(req, res) {
        const { id } = req.params
        try {
            await database.Tags.destroy({where: { id: number(id) }})
            return res.status(200).json({ mensagem: `tag com id: ${id} deletada`})
        } catch ( error ) {
            return res.status(500).josn(error.message)
        }
    }

    static async restauraTag(req, res) {
        const { id } = req.params
        try {
          await database.Tags.restore( {where: { id: Number(id) } } )
          return res.status(200).json({ mensagem: `id ${id} restaurado`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = TagController