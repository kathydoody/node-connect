var connect = require("connect");


// Constructs the response object's individual headers

// test:
// HTML: http://localhost:3000 (in browser )
// Plain text: $ curl http://localhost:3000
// JSON: curl -H "accept:application/json" http://localhost:3000

connect()
    .use(function (req, res){
        var accept = req.headers.accept.split(","),
            body, type;
        console.log(accept);

        if (accept.indexOf("application/json") > -1){
            type = "application/json";
            body = JSON.stringify({message: "hi everyone"});
        } else if (accept.indexOf("text/html") > -1){
            type = "text/html";
            body = "<H1>hi everyone in HTML</H1>";
        } else {
            type = "text/plain";
            body = "hi everyone in plain text!";
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", type);
        res.end(body);

    }).listen(3000);


// there is the writeHead() method that could be used if you don't need to set headers
// individually

/*var body = 'Hi everyone';
response.writeHead(200, {
    'Content-Length' : body.length,
    'Content-Type' : 'text/plain'
});*/
