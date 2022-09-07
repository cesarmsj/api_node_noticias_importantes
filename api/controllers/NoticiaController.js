const database = require('../models')

class NoticiaController {
    
    static async pegaTodasNoticias(req, res){
        try {
            const todasNoticias = await database.Noticias.findAll()
            return res.status(200).json(todasNoticias)
        } catch(error) {
            return res.status(500).json(error.message)
        }  
    }

    static async pegaUmaNoticia(req, res) {
        const { id } = req.params

        try {
            const umaNoticia = await database.Noticias.findOne( { 
                where: { id: Number(id) }
            } )
            return res.status(200).json(umaNoticia)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaNoticia(req, res) {
        const novaNoticia = req.body
        
        try {
            const novaNoticiaCriada = await database.Noticias.create(novaNoticia)
            return res.status(200).json(novaNoticiaCriada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaNoticia(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Noticias.update(novasInfos, { where: { id: Number(id) }})
            const noticiaAtualizada = await database.Noticias.findOne( { where: { id: Number(id) }})
            return res.status(200).json(noticiaAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaNoticia(req, res) {
        const { id } = req.params
        try {
            await database.Noticias.destroy({where: { id: number(id) }})
            return res.status(200).json({ mensagem: `id ${id} deletado`})
        } catch ( error ) {
            return res.status(500).josn(error.message)
        }
    }

    static async restauraNoticia(req, res) {
        const { id } = req.params
        try {
          await database.Noticias.restore( {where: { id: Number(id) } } )
          return res.status(200).json({ mensagem: `id ${id} restaurado`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = NoticiaController