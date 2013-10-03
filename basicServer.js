var connect = require("connect");

 // Very basic connect with request logging
 // navigate to localhost:3000 - you'll see the GET error
 // but you'll see requests logged on the server

 connect()
 .use(connect.logger())
 .listen(3000);


