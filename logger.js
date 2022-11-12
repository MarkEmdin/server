const {createLogger, transports, format} = require('winston');

const customFormat = format.combine(format.timestamp(),format.printf((info)=>
{
    let logResult = info.timestamp + " - "+ info.level.padEnd(7)+" - " + info.message;
    return logResult;
}) )

const logger = createLogger({
    format: customFormat,
    transports:[
        new transports.Console(),
        new transports.File({filename:'app.log'})
    ]
});

module.exports = logger;