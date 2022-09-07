const { Router } = require('express')
const TagController = require('../controllers/TagController')

const router = Router()

router.get('/tags', TagController.pegaTodasTags)
router.get('/tags/:id', TagController.pegaUmaTag)
router.post('/tags', TagController.criaTag)
router.put('/tags/:id', TagController.atualizaTag)
router.delete('/tags/:id', TagController.apagaTag)
router.post('/tags/:id/restaura', TagController.restauraTag)

module.exports = router