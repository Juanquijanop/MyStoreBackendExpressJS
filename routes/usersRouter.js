const express = require('express')
const {faker, FakerError} = require('@faker-js/faker')

const router = express.Router()

router.get('/', (req,res)=>{
  const users = []
  const {size} = req.query
  const limit = size || 5

  for (let index = 0; index < limit; index++) {
    users.push({
      name:faker.name.firstName(),
      lastName:faker.name.lastName(),

    })

  }

  res.json(users)
})


router.get('/:id',(req,res)=>{
  const {id} = req.params
  res.json({
    id:id,
    name:'Juan Manue',
    lastName:'Quijano'
  })
})


router.post('/',(req,res)=>{
  const body = req.body;

  res.json({
    message:'Created',
    body
  })
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