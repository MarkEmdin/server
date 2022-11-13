const logger = require("./logger");
const Pool = require('pg').Pool
const pool = new Pool({
    user:"masterUsername",
    password:'root2749405',
    host:'rds-postgresql-mybot.cnotjgtzcbve.eu-central-1.rds.amazonaws.com',
    port:"5432",
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

// user:"postgres",
//     password:'root',
//     host:'localhost',