const express = require('express');
const app = express();
const PORT= 8081;
const todoRouter = require('./routes/todo')

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/', todoRouter); // 기본주소 localhost:PORT



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});