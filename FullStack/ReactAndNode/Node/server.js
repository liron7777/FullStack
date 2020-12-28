const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:true})) 
// app.use('/static', express.static('public'))

app.get('/api/hello',(req,res)=>{res.send({express: 'hello from express'})})

app.post('/api/world',(req,res)=>{
    console.log(req.body)
    res.send('test liron')
    })

app.listen(port,()=>{console.log('list on port')})