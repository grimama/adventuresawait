const express = require('express');
const router = express.Router();
const db = require('../db')
// const models = require('../../db/models');


router.get('/', (req, res) => res.send({hello: 'Home'}));

router.get('/:campusName', (req, res) => res.send(req.params.campusName));



module.exports = router;
