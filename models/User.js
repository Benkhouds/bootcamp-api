import mongoose from 'mongoose'



const userSchema = new mongoose.Schema({
  firstName: {
    type:String,
    required:true
  },
  lastName: {
     type:String,
     required:true
  },
  username:{
    type:String,
    unique:true
  },
  email:{
    type:String,
    unique:true
  },

},{timestamps:true});


export default mongoose.model('User', userSchema);