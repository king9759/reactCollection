// Defining global variables
var express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    cors        = require('cors'),
    morgan      = require('morgan'),
    todoRoutes  = require('./routes/todo'),
    bodyParser  = require('body-parser');

  // Start the databasae server
  mongoose.connect('mongodb://localhost:27017/todos',function(err){
    if(err){
      console.log(err);
    }else{
      console.log("DB connected");
    }
  });
// Important functions to be used globally
  mongoose.Promise = Promise;
  mongoose.set('debug',true);
  app.use(morgan('tiny'));//Tiny is nothing just a string
  app.use(cors());//Cors and morgan together allows API requests from other localhosts other than 3001\
  app.use(bodyParser.json());
  app.use('/api/todos',todoRoutes);
  // This is a 404 error function
  app.use(function(req, res, next){
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  app.use(function(err, req, res, next){
    res.status(err.status || 500);
    // This line sends error to receiver if any
    res.send({
      message:err.message,
      error: err
    });
  })

  // This starts the server
  app.listen('3001',function(err){
    if(err){
      console.log(err);
    }else{
      console.log("Good to GO!");
    }
  });
