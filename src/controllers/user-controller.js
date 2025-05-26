const {StatusCodes} = require('http-status-codes');

const {UserService}=require('../services');
const {ErrorResponse,SuccessResponse}=require('../utils/common');




async function SignUp(req,res){
    try{
        const response= await UserService.SignUp({
           email: req.body.email,
           password:req.body.password
           
        }); 
        SuccessResponse.data=response;
        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);
        } 
        catch(error){
            ErrorResponse.error=error;
    return res
    .status(error.statusCode)
     .json(ErrorResponse);
}
}  
async function Signin(req,res){
    try{
        const response= await UserService.SignIn({
           email: req.body.email,
           password:req.body.password
           
        }); 
        SuccessResponse.data=response;
        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);
        } 
        catch(error){
            ErrorResponse.error=error;
    return res
    .status(error.statusCode)
    .json(ErrorResponse);
}
}  
module.exports={SignUp,Signin};