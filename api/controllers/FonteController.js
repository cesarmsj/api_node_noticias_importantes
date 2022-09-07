const { FontesServices } = require('../services')
const fontesServices = new FontesServices()

class FonteController {
    
    static async pegaTodasFontes(req, res){
        try {
            const todasFontes = await fontesServices.pegaTodosOsRegistros()
            return res.status(200).json(todasFontes)
        } catch(error) {
            return res.status(500).json(error.message)
        }  
    }

    static async pegaUmaFonte(req, res) {
        const { id } = req.params

        try {
            const umaFonte = await fontesServices.pegaUmRegistro(id)
            return res.status(200).json(umaFonte)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaFonte(req, res) {
        const novaNoticia = req.body
        
        try {
            const novaNoticiaCriada = await fontesServices.criaRegistro(novaNoticia)
            return res.status(200).json(novaNoticiaCriada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaFonte(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await fontesServices.atualizaRegistro(novasInfos, id)
            const fonteAtualizada = await fontesServices.pegaUmRegistro(id)
            return res.status(200).json(fonteAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaFonte(req, res) {
        const { id } = req.params
        try {
            await fontesServices.apagaRegistro(id)
            return res.status(200).json({ mensagem: `id ${id} deletado`})
        } catch ( error ) {
            return res.status(500).josn(error.message)
        }
    }

    static async restauraFonte(req, res) {
        const { id } = req.params
        try {
          await fontesServices.restauraRegistro(id)
          return res.status(200).json({ mensagem: `id ${id} restaurado`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = FonteController