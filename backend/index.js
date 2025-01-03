import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/userrou.js";
import companyRoute from "./routes/companyrou.js";
import jobRoute from "./routes/jobrou.js";
import applicationRoute from "./routes/applicant.js";
import connectionDB from "./utils/db.js";
import path from "path"
dotenv.config({})
const app = express();
const __dirname = path.resolve()
  //middleware
app.use(express.json());
app.use(express.urlencoded({extened:true}));
app.use(cookieParser());

connectionDB();
const corsOptions = {
    origin:"http://localhost:5174",
    credentials:true
}
app.use(cors(corsOptions));

// app.get("/Home",(req,res)=>{
//   return res.status(200).json({
//     message:"Iam calling",
//     success:true
//   })
// })
// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
});
const port = process.env.port;
app.listen(port,()=>{
  
    console.log(`running well at port ${port} `)
})