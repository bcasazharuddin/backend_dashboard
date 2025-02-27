const express = require('express');
const mongoose  = require('mongoose')
const cors = require('cors');
const formRouter = require('./routes/formRoutes')
const operatorRouter = require('./routes/operatorRoutes')
const contactRouter = require('./routes/contactUsRoutes')
const enquiryRouter = require('./routes/enquiryRoutes')
const app = express()
app.use(cors({
    origin: '*'
  }));
app.use(express.json());
app.use(express.urlencoded({extended : true}))

const MONGO_URL = "mongodb+srv://bcasazharuddin:Azhar123@cluster0.83q26.mongodb.net/gleamingCollection?retryWrites=true&w=majority&appName=Cluster0"
// const MONGO_URL = "mongodb://localhost:27017/gleamingCollection"
mongoose.connect(MONGO_URL,{
    useNewUrlParser : true
}).then(()=>{
    console.log("Mongodb is connectd...")
}).catch((err)=>{
    console.log("Mongodb is not connected...")
})


app.use('/form',formRouter);
app.use('/Operator',operatorRouter);
app.use('/contact',contactRouter);
app.use('/enquiry',enquiryRouter);
app.listen(3000,()=>{
    console.log("Server is started on Port 3000");
})