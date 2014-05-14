// This is the code for our basic HTTP server (SERVER MODULE)

var http = require("http"); // requries the http module that ships w/ Node.js. Then assigns result of require to local variable
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Yo FOO!");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;

// onRequest is our callback, fired when request is received (when you open http://localhost:8888/).




// Have database.query directly returns a result to us
        /*
        var result = database.query("SELECT * FROM hugetable"); // queries a database for lots of rows
        console.log("Hello World");
        */
// First do the database query, THEN (only when finished)... write to the console

// Node.js uses EVENT-DRIVEN ASYNCHRONOUS CALLBACKS (by utilizing an event loop)


        /*
        database.query("SELECT * FROM hugetable", function(rows){
            var result = rows;
        });
        console.log("Hello World");
        */

// *** Performs the query and sends to the database
// But don't wait for it to finish. Instead, when the results of the query are sent, then execute the anonymous function
// AND immediately execute the next line, console.log, and enter the event loop

// Single-thread Event Loop
// Once node has completed a task, the callback for it is fired. But there can only be one callback firing at the same time.
// Until that callback has finished executing, all other callbacks have to wait in line.
// In addition to that, there is no guarantee on the order in which the callbacks will fire.
// You don't have to worry about code accessing the same data structures at the same time.
// In a web application, your main response time cost is usually the sum of time it takes to execute all your database queries.
// With node, you can execute all your queries at once, reducing the response time to the duration it takes to execute the slowest query.

