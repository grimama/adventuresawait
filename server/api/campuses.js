// /api/campuses
const express = require('express');
const router = new express.Router();
const db = require('../db')
const models = require('../db/models');
const Campus = models.Campus;

//get all campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(allCampuses => res.json(allCampuses))
    .catch(next)
})

//Post a new Campus
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





module.exports = router;



// // update campus info
// .put((req, res, next) => {
//   Campus.update(
//     {
//       name: req.body.name,
//       image: req.body.image
//     },
//     { where: { id: req.params.campusId } }
//   )
//     .then((res) => {
//       return Campus.findById(req.params.campusId)
//     })
//     .then(campus => {
//       res.status(201).send(campus)
//     })
//     .catch(next)
// })

// // delete campus
// .delete((req, res, next) => {
//   Campus.destroy(
//     { where: { id: req.params.campusId }, individualHooks: true }
//   )
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })
