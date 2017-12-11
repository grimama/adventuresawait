const db = require('./server/db');
const Campus = require('./server/db/models/campus');
const Student = require('./server/db/models/student');
const Channel = require('./server/db/models/channel');

const campus = [
  { name: 'UCF', imageUrl: 'https://static1.squarespace.com/static/58bb4a9959cc68b96960fd04/t/5992fd051e5b6c0b277e1d40/1502805290618/', description: 'University of Central Florida' },
  { name: 'FSU', imageUrl: 'http://www.denverpost.com/wp-content/uploads/2016/11/medal_of_freedom_008.jpg?w=620', description: 'Florida State University' }
];

const id = () => Math.round(Math.random() * (campus.length - 1)) + 1;

const student = [
  { campusId: id(), firstName: 'Rob', lastName: 'Smitt', email: 'rob@mail.com', gpa: 3.5 },
  { campusId: id(), firstName: 'John', lastName: 'Hand', email: 'john@mail.com', gpa: 3.5 },
  { campusId: id(), firstName: 'Joyce', lastName: 'Grimm', email: 'joyce@mail.com', gpa: 3.5 }
];

const seed = () =>
  Promise.all(campus.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(student.map(student =>
    Student.create(student))
  )
);

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
