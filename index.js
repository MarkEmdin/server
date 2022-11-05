const express = require('express')
const userRouter = require("./routes/user.routes")
const adsRouter = require("./routes/ads.routes")
const logger = require("./logger")
const {error} = require("winston");

const PORT  = process.env.PORT||8080

const app = express ()
app.use(express.json())
app.use('/api/users', userRouter)
app.use('/api/ads', adsRouter)

// logger.error("error");
// logger.warn("warn");
// logger.info("info");
try {
    app.listen(PORT,()=>logger.info(`server started on port ${PORT}`))
} catch (error){
    logger.error(error);
}

