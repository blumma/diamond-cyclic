// database_connection_url can point to a local MongoDB, or to Heroku based MongoDB
// Example for local MongoDB URL: "mongodb://localhost:27017/node-mongo-registration-login-api"
// Example for Heroku based MongoDB: "mongodb+srv://root:root@cluster0-wqaum.mongodb.net/test?retryWrites=true&w=majority"

const mongoose = require('mongoose');

const database_connection_url = process.env.DB_CONNECTION_URL || 'mongodb://localhost:27017/node-mongo-registration-login-api';

// mongoose.connect(database_connection_url, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.Promise = global.Promise;


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(database_connection_url, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    console.log('MongoDB Error');
    process.exit(1);
  }
}

module.exports = {
    Account: require('../src/models/account.model'),
    TreeTestStudy: require('../src/models/tree-test-study.model'),
    TreeTestTest: require('../src/models/tree-test-test.model'),
    CardSortStudy: require('../src/models/card-sort-study.model'),
    CardSortTest: require('../src/models/card-sort-test.model'),
    connectDB,
    database_connection_url
};
