const express = require('express')
const UserServices = require('./../services/userServices')

const router = express.Router()
const service = new UserServices();

router.get('/', (req,res)=>{
  const users = service.findAll();
  res.json(users)
})


router.get('/:id',(req,res,next)=>{
  try {
  const {id} = req.params
  res.json({
    id:id,
    name:'Juan Manue',
    lastName:'Quijano'
  })
  } catch (error) {
    next(error)
  }

})


router.post('/',(req,res)=>{
  const body = req.body;
  const newUser=service.save(body);

  res.status(201).json(newUser)
})


router.put('/:id',(req,res)=>{
  const {id} = req.params
  const body = req.body;


  res.json({
    message:'Updated',
    data:body,
    id,
  })
})

module.exports = router;
