import mongoose from 'mongoose'



const ratingSchema = new mongoose.Schema({
  User: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  value: {
     type:Number,
     min: 0,
     max:5,
     required:[true, 'Please provide a name for your bootcamp'],
  },
  description:{
    type:String,
  }

},{timestamps:true});


export default mongoose.model('Rating', ratingSchema);