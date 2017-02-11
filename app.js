// Load the Cloudant library. 
var Cloudant = require('cloudant');
var options = require('./config/options');

var login = {
  username: options.storageConfig.username,
  password: options.storageConfig.password,
  host: options.storageConfig.host,
  port: options.storageConfig.port,
  url: options.storageConfig.url
};
 
var me = login.username;
// var me = 'nodejs'; // Set this to your own account 
var password = login.password;
// var password = process.env.cloudant_password;
 
// Initialize the library with my account. 
var cloudant = Cloudant({account:me, password:password});
 
cloudant.db.list(function(err, allDbs) {
  console.log('All my databases: %s', allDbs.join(', '))
});