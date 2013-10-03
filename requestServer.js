var connect = require("connect");

// takes request object, breaks out all the pieces and
// spits them back

// test with:
// $ curl -X POST -d "name=Kathy D" "http://localhost:3000/public/publicTest.html?data=xyz"
//


connect()
    .use(connect.query())  // returns req query params
    .use(connect.bodyParser())  // returns req.body
    .use(connect.cookieParser()) // required to use session filter
    .use(connect.session({ secret: "12345"})) // creates a req.session
    .use(function (req,res){
        res.write("req.url: "+ req.url + "\n\n");
        res.write("req.method: "+ req.method + "\n\n");
        res.write("req.headers: "+ JSON.stringify(req.headers)+ "\n\n");
        res.write("req.query: "+ JSON.stringify(req.query)+ "\n\n");
        res.write("req.body: "+ JSON.stringify(req.body)+ "\n\n");
        res.write("req.cookies: "+ JSON.stringify(req.cookies)+ "\n\n");
        res.write("req session: "+ JSON.stringify(req.session)+ "\n\n");
        res.end();


    }).listen(3000);
