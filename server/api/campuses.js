// /api/campuses
const express = require('express');
const router = new express.Router();
const db = require('../db')
const models = require('../db/models');
const Campuses = models.Campuses;


router.get('/', (req, res, next) => {
  Campuses.findAll()
  .then(campuses =>
    res.json(campuses))
})

router.get('/:campusId', (req, res) => {
  Campuses.findOne({
    where: {id: req.params.campusId}
  })
  .then(foundCampus => {
    res.json(foundCampus)
  })
})



module.exports = router;
