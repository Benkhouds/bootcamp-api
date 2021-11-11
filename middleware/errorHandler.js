

import ErrorResponse from '../utils/errorResponse.js'

export default function errorHandler(err, req, res, next){
  console.log(err.message)
  if(err.code === 11000){
    err = ErrorResponse.badRequest('The bootcamp name already exists'); 
  }
  if(err.name === "CastError"){
     err = ErrorResponse.badRequest('Cast Error');
  }
  if(err.name === "ValidationError"){
    err = ErrorResponse.badRequest('Validation error');
  }

  if(err instanceof ErrorResponse){
    res.status(err.statusCode).json({success:false, message:err.message})
    return
  }
   res.status(500).json({success:false, message:'Something went wrong'})

}