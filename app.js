const express = require('express')
const app = express()

app.use(express.json())
app.use(require('./router/auth'))

app.get('/',(req,res)=>{
    res.send("hello from home")
})

app.listen(5000)