const logger = require("./logger");
const Pool = require('pg').Pool
const pool = new Pool({
    user:"postgres",
    password:'root',
    host:'localhost',
    port:"5433",
    database:"postgres"
})
pool.connect(err => {
    if (err) {
        logger.error('connection error bd', err.stack)
    } else {
        logger.info('bd connected')
    }
})
module.exports = pool