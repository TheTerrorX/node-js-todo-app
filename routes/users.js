import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/users', (req, res, next) => {
  res.render('user');
});

export default router;

