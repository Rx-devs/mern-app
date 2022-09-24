const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();
// connect mongodb
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extented: false}));



app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);






//app.get('/api/goals', (req,res)=>{
////    res.send('Get goals');
////    res.json({message:'Get goals'});
//    res.status(200).json({message:'Get goals'});
//})



app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})