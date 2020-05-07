const express  = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000
const {mogoUrl} = require('./keys')


require('./models/User');
require('./models/Truck');

const requireToken = require('./middleware/requireToken')
const authRoutes = require('./routes/authRoutes')
// const authRoutesTruck = require('./routes/authRoutesTruck')
app.use(bodyParser.json())
app.use(authRoutes)
// app.use(authRoutesTruck)

mongoose.connect(mogoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("MongoDB Successfully Connected")
})

mongoose.connection.on('error',(err)=>{
    console.log("this is error",err)
})

// app.get('/truck',requireToken,(req,res)=>{
//     res.send({contact:req.truck.contact})
// })

app.get('/',requireToken,(req,res)=>{
    res.send({name:req.user.name})
})

app.listen(PORT,()=>{
    console.log("server running "+PORT)
})