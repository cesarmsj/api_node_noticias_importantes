const { Router } = require('express')
const FonteController = require('../controllers/FonteController')

const router = Router()

router.get('/niveis', FonteController.pegaTodasAsFontes)
router.get('/niveis/:id', FonteController.pegaUmaFonte)
router.post('/niveis', FonteController.criaFonte)
router.put('/niveis/:id', FonteController.atualizaFonte)
router.delete('/niveis/:id', FonteController.apagaFonte)

module.exports = router