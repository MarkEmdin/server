const Router = require('express');
const router = new Router();
const userController = require("../controller/users.controller")

router.post('/',userController.createUsers);
router.get('/',userController.getUsers);
router.get('/:id',userController.getOneUsers);
router.put('/:id',userController.updateUsers);
router.delete('/:id',userController.deleteUsers);

module.exports = router