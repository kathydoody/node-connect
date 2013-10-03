var connect = require("connect"),
    connectJade = require("connect-jade");

connect()
    .use(connectJade({
        root: __dirname + "/views",
        defaults: {
            title: "My Awesome App"
        }
    }))
    .use(function(req, res){
        res.render("index", {heading: "hey Welcome to my Awesome App"});
    }).listen(3000);