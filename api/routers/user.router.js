import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router();

router.get('/reset', userController.reset);
router.get('/init', userController.init);
router.get('/:id', userController.find);

router.post('/', userController.create);


export default router;