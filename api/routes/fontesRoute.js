const { Router } = require('express')
const FonteController = require('../controllers/FonteController')

const router = Router()

router.get('/fontes', FonteController.pegaTodasFontes)
router.get('/fontes/:id', FonteController.pegaUmaFonte)
router.post('/fontes', FonteController.criaFonte)
router.put('/fontes/:id', FonteController.atualizaFonte)
router.delete('/fontes/:id', FonteController.apagaFonte)
router.post('/fontes/:id/restaura', FonteController.restauraFonte)

module.exports = router