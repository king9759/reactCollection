var express = require('express'),
    router  = express.Router(),
    Todo    = require('../models/todos')
router.get('/',function(req,res,next){
  Todo.find({})
  .then(todos => res.send(todos))//we get json data from the database which we send back to the api caller
  .catch(err => next(err));//next(err) is the error handler created in app.js
});
router.post('/new',function(req,res,next){
  Todo.create(req.body)
  .then(todo => res.status(201).send(todo))
  .catch(err => next(err));
});
router.delete("/:id",function(req,res){
  Todo.findByIdAndRemove(req.params.id)
  .then(todo => res.send(todo))
  .catch(err => next(err));
});
module.exports = router;
