const express = require('express')
const app = express()
const url = process.env.PORT || 5000

app.use(express.json())
app.use(require('./router/auth'))

app.get('/',(req,res)=>{
    res.send("hello from home")
})

app.listen(url)