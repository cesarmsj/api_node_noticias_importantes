const bodyParser = require('body-parser')
const noticias = require('./noticiasRoute')
const fontes = require('./fontesRoute')
const tags = require('./tagsRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        noticias,
        fontes,
        tags
    )
}