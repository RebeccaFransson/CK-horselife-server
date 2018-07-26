/**
 * Old way of using classes
 */
const dbCred = require('./db-cred')
const mongoose = require('mongoose');

  function Database() {
    this.modelName = 'BlogPosts'
    this.db = this.connect();
    //this.model = this.defineSchema();
    //Bind connection to error event (to get notification of connection errors)
    this.db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    this.db.once('open', function() {
      console.log("mongodb connection open");
    });
    //this.createModel();
    //console.log(this.db)

  }
  // class methods
  Database.prototype.connect = function() {
      //Read the db username and password from file not on github
      mongoose.connect('mongodb://'+dbCred.username+':'+dbCred.password+'@ds245971.mlab.com:45971/ck-horselife', { useNewUrlParser: true });
    
      //Get the default connection
      return mongoose.connection;
  };
  
  // export the class
  module.exports = Database;