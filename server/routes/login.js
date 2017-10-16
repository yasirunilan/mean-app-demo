var mongojs = require('mongojs');
var db = mongojs('mongodb://yasiru:root@ds131384.mlab.com:31384/mean-demo', ['tasks']);
const express = require('express');
const router = express.Router();

/* GET login listing. */
router.get('/', function(req, res) {
  res.send('index works');
});

// Get all posts
router.get('/posts', function(req, res) {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(posts) {
      res.status(200).json(posts.data);
    })
    .catch(function(error) {
      res.status(500).send(error)
    });
});

module.exports = router;
