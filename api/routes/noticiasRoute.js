const { Router } = require('express')
const NoticiaContoller = require('../controllers/NoticiaContoller')

const router = Router()

router.get('/noticias', NoticiaContoller.pegaTodosOsNiveis)
router.get('/noticias/:id', NoticiaContoller.pegaUmNivel)
router.post('/noticias', NoticiaContoller.criaNivel)
router.put('/noticias/:id', NoticiaContoller.atualizaNivel)
router.delete('/noticias/:id', NoticiaContoller.apagaNivel)

module.exports = router