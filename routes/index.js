var express = require('express');
const ActorModels = require('../models/ActorModels');
var router = express.Router();

/* GET home page. */
router.get('/', async(req,res)=>{
  
  var actors = await ActorModels.find();
  // res.send(books);
  res.render('actor_list', {actors: actors});
});

router.get('/drop',async(req, res) =>{
  await ActorModels.deleteMany()
  .then(console.log('delete all successfully'))
  res.redirect('/');
});

router.get('/detail/:id', async(req,res)=>{
  var actors = await ActorModels.findById(req.params.id);
  res.render('actor_detail', {actors: actors});
});

router.get('/delete/:id',async(req, res) =>{
  var id = req.params.id;
  var actors = ActorModels.findById(id);
  await ActorModels.deleteOne(actors)
  .then(()=> console.log('Actor deleted successfully'))
  .catch((err) => console.log('Error deleting',err));
  // await StudentModel.findByIdAndDelete(id);
  res.redirect('/');
});

router.get('/add/')

router.get('/edit/:id')

module.exports = router;
