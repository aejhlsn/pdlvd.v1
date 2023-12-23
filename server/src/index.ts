import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//importing routes 
import { UserRouter } from './routes/user' 

const App = express();

App.use(express.json());
App.use(cors());


//routes 

App.use("/user", UserRouter);


mongoose.connect("mongodb+srv://aejhlinazaii:Puds_BlvdV1@puds-blvd-v1.51vyqit.mongodb.net/puds-blvd-v1")

App.listen(3001, () => console.log("SERVER IS STARTING"));