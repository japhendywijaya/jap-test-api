require('dotenv').config()
const httpServer = require('http').createServer(require('../app'))
const port = process.env.PORT || 3000


httpServer.listen(port, () => console.log(`Server listening on port ${port}\n\n`))
