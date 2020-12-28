const 
    path = require('path'),
    express = require('express'),
    app = express()
    
let 
   fs = require('fs')
   uniqid = require('uniqid')
   messages = JSON.parse(fs.readFileSync('Data.json')) || [];

app.use(express.json()) 
app.use('/static', express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/Chat.html'));
});1

app.get('/messages',(req,res)=>{
    console.log(messages);
})

app.post('/messages',(req,res)=>{
    new_value = {name: req.body.name , message: req.body.message , id: uniqid()}
    messages.push(new_value)
    fs.writeFileSync('Data.json',JSON.stringify(messages))
    res.send(messages)
})

app.delete('/messages',(req,res)=>{
    messages = []
    fs.writeFileSync('Data.json',JSON.stringify(messages))
    res.send(messages)
})

app.delete(`/messages/:id`,(req,res)=>{
    console.log('yesss!',req.params.id);
    // console.log(req.body.message);
    // console.log(messages[1].message);
    // messages.map((message_item)=>{console.log(message_item.message)})
    // console.log(req.body.message);
    console.log('dhdd');
    // messages.filter(message_item => console.log(message_item.message === req.body.message));
    // console.log(result);
})

app.listen(8080);


