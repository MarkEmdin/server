const db = require('../db');
const logger = require("../logger");
const {response} = require("express");

class UsersController {
    async createUsers(req,res){
        const{tg_id,name,city} = req.body
        //const sqlStringUser = 'SELECT * FROM users where tg_id=$1 RETURNING *'
        const sqlStringUser = 'SELECT * FROM users where tg_id = $1'
        const user = await db.query(sqlStringUser,[tg_id]);
        if(user.rows.length == 0){
            const sqlString = "INSERT INTO users (tg_id,name,city) values($1,$2,$3) RETURNING *";
            await db.query(sqlString,[tg_id,name,city],(err, response) => {
                if (err) {
                    logger.error("Ошибка с бд при создание нового пользователя")
                    res.json("Ошибка с бд при создание нового пользователя",err.message);
                } else {
                    logger.info(`Создали нового пользавателя`);
                    res.json(`Создали нового пользавателя`);
                }
            });
        }else{
            logger.info(`пользователь уже существует`);
            res.json(`пользователь уже существует`);
        }


    }

    async getUsers(req,res){
        await db.query('SELECT * FROM users',(err,response) => {
            if (err) {
                logger.error("Ошибка  при получение всех пользователей")
                res.json("Ошибка при получение всех пользователей");
            } else {
                logger.info(`Получили всех пользователей`);
                res.json(response.rows);
            }
        });
    }

    async getOneUsers(req,res){
        const id = req.params.id;
        await db.query('SELECT * FROM users where id=$1',[id],(err,response) => {
            if (err) {
                logger.error(`Ошибка при получение пользователя по id`)
                res.json(`Ошибка при получение пользователя по id`);
            } else {
                logger.info(`получен пользователь`);
                res.json(response.rows[0]);
            }
        })
    }

    async updateUsers(req,res){
        const id = req.params.id;
        const{name,city} = req.body
        const sqlString = "UPDATE users set name=$2,city=$3 where id=$1 RETURNING *";
        await db.query(sqlString,[id,name,city],(err,response) => {
            if (err) {
                logger.error(`Ошибка при обновление пользователя по id`)
                res.json(`Ошибка при обновление пользователя по id`);
            } else {
                logger.info(`обновили пользователя по id`);
                res.json(response.rows[0]);
            }
        });
    }

    async deleteUsers(req,res){
        const id = req.params.id;
        await db.query('DELETE FROM users where id=$1',[id],(err,response) => {
            if (err) {
                logger.error(`Ошибка при удаление пользователя по id`)
                res.json(`Ошибка при удаление пользователя по id`);
            } else {
                logger.info(`удалили пользователя`);
                res.json(`удалили пользователя`);
            }
        })

    }
}

module.exports = new UsersController();