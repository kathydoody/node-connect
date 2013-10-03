node-connect
============

Set of node servers I created to understand how the connect framework can be used.

To run these make sure you've got node installed,  then use npm to install connect and connect-jade.

The different server files are:

basicServer.js  :  The most simple implementation of connect with server logging
publicServer.js :  A simple server that sets up a static provider to the route you specify
bostonServer.js :  An example of how to set up sessions and manage timeouts
customServer.js :  Start of a server that uses req, res and next - setting up custom layers of action
requestServer.js:  An example of how to grab all the parts of a request.
responseServer.js: An example of how to set individul headers and send a response.
jadeServer.js   :  The most basic implementation of using jade-connect templating
