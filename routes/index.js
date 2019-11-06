const express = require('express');
const router = express.Router();

const { signup } = require('../controllers/index');
const { commenters } = require('../controllers/post');

router.post('/signup', function(req, res, next) {
  const response = signup(req.body)

  res.json({
    response
  });
});

router.get('/commenters', async function(req, res, next) {
  const response = await commenters();

  res.json({
    response
  });
});

module.exports = router;
