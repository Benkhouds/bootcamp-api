
import mongoose from 'mongoose'

const connectDB = async()=>{      
   try{
      await  mongoose.connect(process.env.MONGODB_URI)
     console.log('database connection succeeded');    
   }catch(err){
      console.log("mongodb connection failed");
      console.log(err)
      process.exit(1)
   }  
}


export default connectDB ; 