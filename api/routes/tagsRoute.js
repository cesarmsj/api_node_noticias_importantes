const { Router } = require('express')
const TagController = require('../controllers/TagController')

const router = Router()

router.get('/tags', TagController.pegaTodasAsFontes)
router.get('/tags/:id', TagController.pegaUmaFonte)
router.post('/tags', TagController.criaFonte)
router.put('/tags/:id', TagController.atualizaFonte)
router.delete('/tags/:id', TagController.apagaFonte)

module.exports = router