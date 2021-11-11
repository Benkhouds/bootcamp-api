
import Bootcamp from '../models/Bootcamp.js'
import ErrorResponse from '../utils/errorResponse.js'

export default class BootcampService{
   
   
   static async getAllBootcamps(query, sortBy){
        return Bootcamp.find(query).sort(sortBy).lean();
   }

   static async createBootcamp({name, rating, description, price}){
        //validate the fields
         return  Bootcamp.create({name, rating, description, price})
       
   }
   static async getBootcampById(id){
      const bootcamp = await Bootcamp.findById(id);
      if(!bootcamp){
          throw ErrorResponse.notFound("No bootcamp found with the given id")
      }else{
       return bootcamp
      }
      
   }

   static async editBootcamp(id, body){
      let bootcamp = await Bootcamp.findById(id);
      if(!bootcamp){
         throw ErrorResponse.notFound("No bootcamp found with the given id")
      }

       return Bootcamp.findByIdAndUpdate(id,body , {
       new: true,
       runValidators: true,
      });
   }

   static async deleteBootcamp(id){
    let bootcamp = await Bootcamp.findById(id);

    if (!bootcamp) {
        throw ErrorResponse.notFound('no bootcamp found with the given id')
    }
     await bootcamp.remove();

   }



 



}