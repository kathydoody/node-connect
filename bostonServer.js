
var connect = require("connect");

// using connect to parse cookies and manage sessions.  CookieParser  filter will
// parse the cookie and must be in place to use the session filter.

// navigate to localhost:3000/boston/{anything} and a session cookie
// named {anything} will be displayed at localhost:3000 until it expires.

connect()
    .use(connect.cookieParser())
    .use(connect.session({secret: 'the special message text', cookie:{ maxAge: 30000}}))
    .use(function(req, res){
        var mySession = req.session,
            myUrl = req.url.split("/");

        if (myUrl[1] == "boston" && myUrl[2]){
            mySession.name = myUrl[2];
            res.end("name saved: " + myUrl[2]);
        } else if (mySession.name){
            res.write("session-stored name: "+mySession.name);
            res.end(" will be stored for : "+ (mySession.cookie.maxAge / 1000) + " seconds");
        } else {
            res.end("no stored session name; go to /boston/{name} to save a name");
        }
    }).listen(3000);