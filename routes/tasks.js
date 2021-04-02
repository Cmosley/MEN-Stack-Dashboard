const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/tasks')


/* GET users listing. */
router.get('/',taskCtrl.index)
router.get('/new', taskCtrl.new);
router.post('/', taskCtrl.create);
router.get('/:id', taskCtrl.show) 
router.put('/:id', taskCtrl.update)
router.delete('/:id', taskCtrl.delete)
router.delete('/', taskCtrl.deleteAll)


module.exports = router;