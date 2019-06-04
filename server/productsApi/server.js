var express = require('express'),
app = express(),
port = process.env.PORT || 3650,
mongoose = require('mongoose'),
cors = require('cors');
Task = require('./api/models/productModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productsdb'); 

app.use(cors({
    origin: `http://localhost:3000`
  }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/productRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);