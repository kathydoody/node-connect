var connect = require("connect");

// basic server that sets up route using static
// provider.

// navigate to localhost:3000/publicTest.html
// app will route to the /public dir and look for
// requested page

connect()
    .use(connect.static(__dirname + "/public"))
    .listen(3000);