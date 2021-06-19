const express = require('express')
const helpers = require('./users_model')

const router = express.Router()

router.get('/', (req, res, next) => {
  helpers.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(next); 
});


module.exports = router
