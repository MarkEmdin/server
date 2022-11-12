const db = require('../db')
const logger = require("../logger")

class AdsController{
    async createAds(req,res){
        const user_id = req.query.id;
        const{title,picture_url,location,telephone,description} = req.body
        const sqlString = "INSERT INTO ads (user_id,title,picture_url,location,telephone,description) values($1,$2,$3,$4,$5,$6) RETURNING *";
        await db.query(sqlString,[user_id,title,picture_url,location,telephone,description],(err,response) => {
            if (err) {
                logger.error(`Ошибка при создании товара для пользователя по user_id`)
                res.json(`Ошибка при создании товара для пользователя по user_id`);
            } else {
                logger.info(`создали товар для пользователя по user_id`);
                res.json(response.rows[0]);
            }
        });
    }
    async getAdsByUser(req,res){
        const user_id = req.query.id
        await db.query("SELECT * FROM ads where user_id=$1",[user_id],(err,response) => {
            if (err) {
                logger.error(`Ошибка при получение товара для пользователя по user_id`)
                res.json(`Ошибка при получение товара для пользователя по user_id`);
            } else {
                logger.info(`получен весь товар для пользователя по user_id`);
                res.json(response.rows);
            }
        })
    }

    async getAd(req,res){
        const id = req.params.id || 0;
        await db.query("SELECT * FROM ads where id=$1",[id],(err,response) => {
            if (err) {
                logger.error(`Ошибка при получение товара по id`)
                res.json(`Ошибка при получение товара по id`);
            } else {
                logger.info(`получен товар по id`);
                res.json(response.rows);
            }
        })
    }

    async getAds(req,res){
        //const limit = req.query.limit || 50;
        await db.query("SELECT * FROM ads",(err,response) => {
            if (err) {
                logger.error(`Ошибка при получение всех товаров`)
                res.json(`Ошибка при получение всех товаров`);
            } else {
                logger.info(`получен весь товар`);
                res.set('Access-Control-Allow-Origin', '*');
                res.json(response.rows);
            }
        })
    }
}

module.exports =new AdsController();