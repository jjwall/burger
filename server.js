/*var express = require("express");
var methodOverride = require("method-override")
var bodyParser = require("body-parser");
//var path = require("path");

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function() {
  console.log("Server listening on PORT: " + PORT);
});*/

// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var icecreams = [
  {name: 'vanilla', price: 10, awesomeness: 3},
  {name: 'chocolate', price: 4, awesomeness: 8},
  {name: 'banana', price: 1, awesomeness: 1},
  {name: 'greentea', price: 5, awesomeness: 7},
  {name: 'jawbreakers', price: 6, awesomeness: 2}
];
    

// Routes
app.get("/icecream/:name", function(req, res) {
  var flavor = req.params.name;
  
    if (flavor === "vanilla") {
      res.render("index", icecreams[0]);
    }
    else if (flavor === "chocolate") {
      res.render("index", icecreams[1]);
    }
    else if (flavor === "banana") {
      res.render("index", icecreams[2]);
    }
    else if (flavor === "greentea") {
      res.render("index", icecreams[3]);
    }
    else if (flavor === "jawbreakers") {
      res.render("index", icecreams[4]);
    }
});

/*app.get("/weekend", function(req, res) {
  res.render("index", lunches[1]);
});

app.get("/lunches", function(req, res) {
  res.render("all-lunches", {
    foods: lunches,
    eater: "david"
  });
});*/

// Initiate the listener.
app.listen(port);