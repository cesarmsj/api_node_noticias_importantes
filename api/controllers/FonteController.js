const database = require('../models')

class FonteController {
    
    static async pegaTodasNoticias(req, res){
        try {
            const todasFontes = await database.Fontes.findAll()
            return res.status(200).json(todasFontes)
        } catch(error) {
            return res.status(500).json(error.message)
        }  
    }

    static async pegaUmaFonte(req, res) {
        const { id } = req.params

        try {
            const umaFonte = await database.Fontes.findOne( { 
                where: { id: Number(id) }
            } )
            return res.status(200).json(umaFonte)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaFonte(req, res) {
        const novaNoticia = req.body
        
        try {
            const novaNoticiaCriada = await database.Fontes.create(novaNoticia)
            return res.status(200).json(novaNoticiaCriada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaNoticia(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Fontes.update(novasInfos, { where: { id: Number(id) }})
            const noticiaAtualizada = await database.Fontes.findOne( { where: { id: Number(id) }})
            return res.status(200).json(noticiaAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaNoticia(req, res) {
        const { id } = req.params
        try {
            await database.Fontes.destroy({where: { id: number(id) }})
            return res.status(200).json({ mensagem: `id ${id} deletado`})
        } catch ( error ) {
            return res.status(500).josn(error.message)
        }

    }
}

module.exports = FonteController