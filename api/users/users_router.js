const express = require('express')
const helpers = require('./users_model')

const router = express.Router()

router.get('/users', (req, res, next) => {
  helpers.getUsers()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(next); 
});

router.post('/users', (req, res, next) => { 
  helpers.createUser(req.body)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(next);
});

module.exports = router