var connect = require("connect");

// user or app specific functions take request and must respond or pass
// teh request to the next layer.

// test via curl:
//      $ curl http://localhost:3000
//      This was not a POST request
//
//      $ curl -X POST http://localhost:3000
//      This was a POST request
//
// or use chrome's Postman plugin

connect().
    use(function(req, res, next){
        if(req.method === 'POST') {
            res.end("This was a POST request");
        } else {
            next();
        }
    })
    .use(function(req, res){
        res.end("This was not a POST request");
    }).listen(3000);

