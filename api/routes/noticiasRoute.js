const { Router } = require('express')
const NoticiaContoller = require('../controllers/NoticiaController')

const router = Router()

router.get('/noticias', NoticiaContoller.pegaTodasNoticias)
router.get('/noticias/:id', NoticiaContoller.pegaUmaNoticia)
router.post('/noticias', NoticiaContoller.criaNoticia)
router.put('/noticias/:id', NoticiaContoller.atualizaNoticia)
router.delete('/noticias/:id', NoticiaContoller.apagaNoticia)
router.post('/noticias/:id/restaura', NoticiaContoller.restauraNoticia)

module.exports = router