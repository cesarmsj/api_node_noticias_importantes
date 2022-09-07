const { TagsServices } = require('../services') 
const tagsServices = new TagsServices()

class TagController {
    
    static async pegaTodasTags(req, res){
        try {
            const todasTags = await tagsServices.pegaTodosOsRegistros()
            return res.status(200).json(todasTags)
        } catch(error) {
            return res.status(500).json(error.message)
        }  
    }

    static async pegaUmaTag(req, res) {
        const { id } = req.params

        try {
            const umaTag = await tagsServices.pegaUmRegistro(id)
            return res.status(200).json(umaTag)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaTag(req, res) {
        const novaTag = req.body
        
        try {
            const novaTagCriada = await tagsServices.criaRegistro(novaTag)
            return res.status(200).json(novaTagCriada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTag(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await tagsServices.atualizaRegistro(novasInfos, id)
            const tagAtualizada = await database.Tags.findOne( { where: { id: Number(id) }})
            return res.status(200).json(tagAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaTag(req, res) {
        const { id } = req.params
        try {
            await tagsServices.apagaRegistro(id)
            return res.status(200).json({ mensagem: `tag com id: ${id} deletada`})
        } catch ( error ) {
            return res.status(500).josn(error.message)
        }
    }

    static async restauraTag(req, res) {
        const { id } = req.params
        try {
          await tagsServices.restauraRegistro(id)
          return res.status(200).json({ mensagem: `id ${id} restaurado`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = TagController