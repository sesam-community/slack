var server = require('./server');
var userGroups = require('./userGroups');
var router = require('./router');
var users = require('./users');
var WebClient = require('@slack/client').WebClient;
//var Router = require('node-simple-router');
//var router = Router();

var userlist;
var token= '***REMOVED***';
var web = new WebClient(token);

//Håndtere flere metoder fra users
var handle = {};
handle['/users'] = users.user;
handle['/invite'] = users.inviteUser;
handle['/setprofile'] = users.setProfile;

handle['/userGroups'] = userGroups.getUsergroups;
handle['/updateUsergroup'] = userGroups.updateUsergroup;
handle['/createChannel'] = userGroups.createChannel;

server.start(router.route, handle);
