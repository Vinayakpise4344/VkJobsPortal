import mongoose from "mongoose";

const connectionDB = async()=>{
    try{
     await mongoose.connect(process.env.mongo_url)
     console.log('mongodb connect sucessful')
    }catch(error){
     console.log(error)
    }
}
export default connectionDB;
