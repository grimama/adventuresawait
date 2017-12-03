const express = require('express');
const router = express.Router();
const db = require('../db')


router.get('/', (req, res) => res.send({student: 'student'}));

router.get('/:studentId', (req, res) => res.send({student: 'student'}));








module.exports = router;
