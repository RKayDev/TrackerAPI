import express from 'express';
import taskController from '../controllers/task.controller.js';

const router = express.Router();

router.get('/reset', taskController.reset);
router.get('/init', taskController.init);
router.get('/user/:id', taskController.findAllByUserId);
router.get('/:id', taskController.find);

router.post('/', taskController.create);


export default router;