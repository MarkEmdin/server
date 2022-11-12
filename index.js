const express = require('express')
const cors = require('cors')
const userRouter = require("./routes/user.routes")
const adsRouter = require("./routes/ads.routes")
const logger = require("./logger")
const {error} = require("winston");

const PORT  = process.env.PORT||8080
// const corsOptions ={
//     origin: '*' ,
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

const app = express ();
app.use(express.json());
app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// app.options('*', cors())
app.use('/api/users', userRouter);
app.use('/api/ads', adsRouter);

// logger.error("error");
// logger.warn("warn");
// logger.info("info");
try {
    app.listen(PORT,()=>logger.info(`server started on port ${PORT}`))
} catch (error){
    logger.error(error);
}

