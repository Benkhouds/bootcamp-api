import mongoose from 'mongoose'



const bootcampSchema = new mongoose.Schema({
  
  name: {
     type:String,
     required:[true, 'Please provide a name for your bootcamp'],
     unique:true
  },
  description:{
    type:String,
    required:[true , 'Please a description']
  },
  rating:{
   type:Number,
   min:0,
   max:5,
   required: [true , 'Plesae provide your bootcamp rating']
  },
  price:{
   type:Number,
   required:[true, 'Please provide a price']
  }

},{timestamps:true});


export default mongoose.model('Bootcamp', bootcampSchema);