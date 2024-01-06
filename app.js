import express from "express";
import userRouter from './routes/routes.js';
import taskRouter from './routes/taskRoute.js';
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";



export const app = express();

config({
    path:"./data/config.env",
});


//middleware 
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true,

})
);


//using routes
app.use("/api/v1/user",userRouter);
app.use("/api/v1/task",taskRouter);

app.get("/",(req,res)=>{
    res.send("nice work");
});
//Error handling connect with errorMiddleware.js  file
app.use(errorMiddleware);





