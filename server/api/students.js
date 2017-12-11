// 'api/students

const express = require('express');
const router = express.Router();
const db = require('../db')
const models = require('../db/models')
const Student = models.Student
const Campus = models.Campus

//get All students
router.get('/', (req, res, next) => {
  Student.findAll()
    .then(allStudents => res.json(allStudents))
    .catch(next)
});

//Post a new Student
router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then((newStudent) => res.json(newStudent))
    .catch(next)
})

//get one student by ID
router.get('/:studentId', (req, res, next) => {
  Student.findOne({
    where: { id: +req.params.studentId }
  })
    .then(foundStudent => res.json(foundStudent))
    .catch(next)
});

//update one student by ID
router.put('/:studentId', (req, res, next)=>{
  Student.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      campusId: req.body.campusId
    },
    { where: { id: req.params.studentId } },
    { returning: true }
  )
    .then(() => Student.findById(req.params.studentId))
    .then(student => {
      res.status(201).send(student)
    })
  })

router.delete('/:studentId', (req, res, next)=>{
  Student.destroy(
    { where: { id: req.params.studentId } }
  )
    .then(() => res.sendStatus(204))
    .catch(next)
})


module.exports = router;
