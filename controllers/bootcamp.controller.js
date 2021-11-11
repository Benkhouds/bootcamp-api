

import BootcampService from '../services/bootcampService.js'
import {ErrorResponse, parseQuery} from '../utils/index.js'


export default class BootcampController{
   
   static async getAllBootcamps(req, res, next){
        
        const {query , sortBy} = parseQuery(req.query);
        try{
           const bootcamps = await BootcampService.getAllBootcamps(JSON.parse(query), sortBy);
           res.status(200).json({success:true , data:{bootcamps, total_results:bootcamps.length}});
        }
        catch(err){
           next(err);
        }
   }

   static async createBootcamp(req, res, next){
      const {name, rating, description , price} = req.body;
      if(!name || !rating || !description || !price){
         return next(ErrorResponse.badRequest('All the fields are required'));
      } 
      try{
         const bootcamp = await BootcampService.createBootcamp({name,rating, description, price});
         res.status(201).json({success:true, data:{bootcamp}});
      }catch(err){
         next(err)
      }
   }


   static async getBootcampById(req, res, next){
       try{
          const bootcamp = await BootcampService.getBootcampById(req.params.id);
          res.status(200).json({success:true , data:{bootcamp}})
       }catch(err){
          next(err)
       }
   }

   static async editBootcamp(req, res, next){
       try{
          const {name, rating , description, price} = req.body ;
         const bootcamp = await BootcampService.editBootcamp(req.params.id, {name, rating , description, price})
         res.status(201).json({success:true, data:{bootcamp}})
       }catch(err){
          next(err)
       }
   }

   static async deleteBootcamp(req, res, next){
       try{
           await BootcampService.deleteBootcamp(req.params.id)
           res.status(200).json({success:true, data:{}})
       }catch(err){
           next(err)
       }
   }


}