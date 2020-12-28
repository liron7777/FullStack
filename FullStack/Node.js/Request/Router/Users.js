const 
    express = require('express'),
    router = express.Router(),

    users = require('../Data/Users.json'),
    posts = require('../Data/Posts.json')

router.get('/',(req,res)=>
   {res.send(users)})
    
router.get('/:id',(req,res)=>{ 
    const user_id = parseInt(req.params.id)
    let test = users.find(user => user.id === user_id)
    res.send(test)})
    
router.get('/:id/posts',(req,res)=>{ 
    const user_id = parseInt(req.params.id)
    let test = posts.find(post => post.id === user_id)
    res.send(test)})
    
module.exports = router