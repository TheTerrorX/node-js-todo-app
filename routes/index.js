import express from 'express';
const router = express.Router();
import { getIndex, postIndex, deleteTodo, getEditTodo, postEditTodo } from '../controller/index.js';

/* GET home page. */
router.get('/', getIndex);
router.post('/new', postIndex);
router.get('/delete/:id', deleteTodo);
router.get('/edit/:id', getEditTodo);
router.post('/edit/:id', postEditTodo);

export default router;

