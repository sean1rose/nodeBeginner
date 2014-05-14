/**
 * Created by rexrose on 5/14/14.
 */

// import the server.js module, save it to local variable, start the server by calling the function in that module
var server = require("./server");
var router = require("./router");
server.start(router.route);