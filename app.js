const express = require('express')
const app = express()
const url = process.env.PORT || 5000
// const cors = require("cors")

app.use(express.json())
app.use(require('./router/auth'))
// app.use(cors({
//     origin: "https://calm-licorice-9e4677.netlify.app",
// }))

app.get('/',(req,res)=>{
    res.send("hello from home")
})

app.listen(url)