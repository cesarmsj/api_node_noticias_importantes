const { NoticiasServices } = require('../services')
const noticiasServices = new NoticiasServices()

class NoticiaController {
    
    static async pegaTodasNoticias(req, res){
        try {
            const todasNoticias = await noticiasServices.pegaTodosOsRegistros()
            return res.status(200).json(todasNoticias)
        } catch(error) {
            return res.status(500).json(error.message)
        }  
    }

    static async pegaUmaNoticia(req, res) {
        const { id } = req.params

        try {
            const umaNoticia = await noticiasServices.pegaUmRegistro(id)
            return res.status(200).json(umaNoticia)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaNoticia(req, res) {
        const novaNoticia = req.body
        
        try {
            const { tags, ...novaNoticia } = req.body

            const novaNoticiaCriada = await noticiasServices.criaRegistro(novaNoticia)

            if (tags && tags.length > 0) {
                await noticiasServices.atribuirTags(novaNoticiaCriada.id, tags)
            }

            return res.status(200).json(novaNoticiaCriada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaNoticia(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await noticiasServices.atualizaRegistro(novasInfos, id)
            const noticiaAtualizada = await noticiasServices.pegaUmRegistro(id)
            return res.status(200).json(noticiaAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaNoticia(req, res) {
        const { id } = req.params
        try {
            await noticiasServices.apagaRegistro(id)
            return res.status(200).json({ mensagem: `id ${id} deletado`})
        } catch ( error ) {
            return res.status(500).josn(error.message)
        }
    }

    static async restauraNoticia(req, res) {
        const { id } = req.params
        try {
          await noticiasServices.restauraRegistro(id)
          return res.status(200).json({ mensagem: `id ${id} restaurado`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = NoticiaController