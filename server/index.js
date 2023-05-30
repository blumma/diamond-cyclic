const app = require('./app');
// const db = require('./_helpers/db');

const appPort = process.env.PORT || 8000;
const adminEmail = process.env.ADMIN_EMAIL || 'admin';
const adminPwd = process.env.ADMIN_PWD || 'admin189m';

// Connect to the database before listening
// db.connectDB().then(() => {
  app.listen(appPort, () => {
    console.log(`Example app listening at http://localhost:${appPort}`);
  });
// });
