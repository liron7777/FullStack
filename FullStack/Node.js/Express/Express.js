const 
    express = require('express'),
    app = express()

app.get('/:text',function(req,res){
    res.send(`<h1>${req.params.text}</h1>`)
})

app.use((req,res,next)=>{
    console.log('1')
    next()
})

app.use((req,res,next)=>{
    console.log('2')
    next()
})


app.listen(8080)