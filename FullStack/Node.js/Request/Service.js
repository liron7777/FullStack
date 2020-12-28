const 
    express = require('express'),
    app = express(),
    users_router = require('./Router/Users')
    
app.set('json spaces',2)
app.use(express.json())
app.use("/users",users_router)

app.listen(3000)