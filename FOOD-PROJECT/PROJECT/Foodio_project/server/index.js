import express, { json } from 'express'
import dotenv from 'dotenv'
import { Route } from './Routes/adminRoutes.js';
import cors from 'cors'
import UserData from './Routes/UserData.js';

dotenv.config();
const app = express();

app.use(cors({
    origin:'http://127.0.0.1:3000',
    credentials:true
}

))

app.use(json())
const port=process.env.port;


app.use('/',Route)
app.use('/userData',UserData)

app.listen(port,()=>{
    console.log(`server listening in the port ${port}`);
    
})