// 'api/students

const express = require('express');
const router = express.Router();
const db = require('../db')
const models = require('../db/models')
const Students = models.Students


router.get('/', (req, res) => {
  console.log(Students)
  Students.findAll()
  .then(students => {
    res.json(students)
  })
});

router.get('/:studentId', (req, res) => {
  Students.findOne({
    where: {id: req.params.studentId}
  })
  .then(foundStudent => {
    res.json(foundStudent)
  })
});








module.exports = router;
