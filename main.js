'use strict';

const db = require('./server/db')
const {Campuses, Students} = require('./server/db/models/index.js')
const app = require('./server')
const PORT = 1775;

//{force: true}
db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
.then(() => {
  console.log('db synced')
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
});
