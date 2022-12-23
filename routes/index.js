const express = require('express');
const router = express.Router();

const messagesTable = [];

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.render('index', {
    exoplanetsTable: [
      'Trappist-1-d',
      'Trappist-1-e',
      'Trappist-1-f',
      'Trappist-1-g'
    ]
  });
});

/* GET forum. */
// eslint-disable-next-line no-unused-vars
router.get('/forum', (req, res, next) => {
  res.render('indexForum', { messagesTable });
});

/* POST add forum. */
// eslint-disable-next-line no-unused-vars
router.post('/forum/add', (req, res, next) => {
  console.log('POST ADD FORUM');
  messagesTable.push({ message: req.body.message, author: req.body.author });
  res.redirect('/forum');
});

module.exports = router;
