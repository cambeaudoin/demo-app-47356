// Load the Cloudant library. 
var Cloudant = require('cloudant');
var options = require('./config/options');

var login = {
  username: options.config.username,
  password: options.config.password,
  host: options.config.host,
  port: options.config.port,
  url: options.config.url
};
 
// Initialize the library with my account. 
var cloudant = Cloudant({account:login.username, password:login.password});
 
cloudant.db.list(function(err, allDbs) {
  console.log('All my databases: %s', allDbs.join(', '))
});

// Remove any existing database called "alice". 
cloudant.db.destroy('alice', function(err) {
 
  // Create a new "alice" database. 
  cloudant.db.create('alice', function() {
 
    // Specify the database we are going to use (alice)... 
    var alice = cloudant.db.use('alice')
 
    // ...and insert a document in it. 
    alice.insert({ crazy: true }, 'rabbit', function(err, body, header) {
      if (err) {
        return console.log('[alice.insert] ', err.message);
      }
 
      console.log('You have inserted the rabbit.');
      console.log(body);
    });
  });
});