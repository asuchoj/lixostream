const express = require('express');
const router = express.Router();
const controller = require('../controlles/tasks');

router.get('', controller.getTasks);
router.post('', controller.addTasks);
router.put('', controller.editTask);
router.delete('', controller.deleteTask);
router.patch('', controller.changeTaskStatus);

module.exports = router;