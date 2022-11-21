const express= require('express')
const controllers= require('../controllers/controllers')
const router= express.Router()

router.get('/',controllers.homepath)
router.get('/alltasks',controllers.getalltasks)
router.post('/alltasks',controllers.postuser)
// router.get('/alltasks/:id',controllers.getbyid)
router.get('/alltasks/:id',controllers.deletetask)
module.exports=router 