const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  res.send('列出全部 Todo')
  next()
})

app.get('/new', (req, res, next) => {
  res.send('新增 Todo 頁面')
  next()
})
 
app.get('/:id', (req, res, next) => {
  res.send('顯示一筆 Todo')
  next()
})

app.post('/', (req, res, next) => {
  res.send('新增一筆  Todo')
  next()
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})