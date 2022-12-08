const express = require('express');
const { Todo } = require('../models');
const router= express.Router();

// 기본주소 localhost:PORT/

// GET localhost:PORT/todos - show all todoㄴ (Read)
router.get('/', async (req, res) => {
  // Todo.findAll().then((data) => {
  //   console.log(data);
  //   res.send(data);
  // });
  
  try {
  let todos = await Todo.findAll();
  console.log(data);
  res.send(data);
  } catch (err) {
    res.send(err);
  }
  
  // POST localhost:PORT/todo - create todo 
});

module.exports = router;
