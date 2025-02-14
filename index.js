require('dotenv').config
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/leetcode' , (req,res)=>{
    res.send("apoorv1110")
})

app.get('/login' , (req,res) =>{
    res.send('<h1>user logged in successfull<h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})