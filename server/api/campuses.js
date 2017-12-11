// /api/campuses
const express = require('express');
const router = new express.Router();
const db = require('../db')
const models = require('../db/models');
const Campus = models.Campus;
const Student = models.Student;

//get all campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(allCampuses => res.json(allCampuses))
    .catch(next)
})

//post a new Campus
router.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then((newCampus) => res.json(newCampus))
    .catch(next)
})

//get single campus by ID
router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(foundCampus => res.json(foundCampus))
    .catch(next)
})

//update a single campus by ID
router.put('/:campusId', (req, res, next) => {
  Campus.update(
    {
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      description: req.body.description
    },
    { where: { id: req.params.campusId } }
  )
    .then((res) => {
      return Campus.findById(req.params.campusId)
    })
    .then(campus => {
      res.status(201).send(campus)
    })
    .catch(next)
})

//delete a single Campus by ID
router.delete('/:campusId', (req, res, next) => {
  Campus.destroy(
    { where: { id: req.params.campusId }}
  )
    .then(() => res.sendStatus(204))
    .catch(next)
})


//get all students in a campus
router.get('/:campusId/students', (req, res, next) =>{
  Student.findAll({
    where: {
      campusId: req.params.campusId
    }
  })
    .then((students) => res.status(200).send(students))
    .catch(next)
})


module.exports = router;
