import express from 'express' 
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/booking.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOption = {
    origin:true,
    Credential:true
}

//database connection
mongoose.set("strictQuery", false) // Disable strict mode for queries
const connect = async()=>{
    try{

        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true, //The useNewUrlParser option is set to true to avoid deprecation warnings related to the MongoDB driver. Similarly, useUnifiedTopology is set to true to use the new Server Discovery and Monitoring engine.
        });
            
    } catch (err){
        console.log('MongoDB database connection failed');
    }
}

//middleware
app.use(express.json())
app.use(cors(corsOption))
app.use(cookieParser())
app.use("/api/v1/auth",authRoute)
app.use("/api/v1/tours",tourRoute)
app.use("/api/v1/users",userRoute)
app.use("/api/v1/review",reviewRoute)
app.use("/api/v1/booking",bookingRoute)

app.listen(port, ()=>{
    connect();
    console.log('server listening on port', port)
})