const UserRepository = require("../repositories/user-repositories");
const {StatusCodes}= require('http-status-codes');
const AppError=require('../utils/errors/app-error')
const  Auth=require('../utils/auth')


const userrepository=new UserRepository();

async function Create(data){
    try{
const response= await userrepository.create(data)
return response;
    }
    catch(error){
        throw new AppError(explanation,StatusCodes.BAD_REQUEST );
    }
}

async function signIn(data){
    try{
        const user= await  userrepository.getUserByEmail(data.email);
if(!user){
    throw new AppError('user not found',StatusCodes.NOT_FOUND );}
    const passwordMatch=Auth.checkPassword(data.password,user.password);
    if(!passwordMatch){
        throw new AppError('Invalid password', StatusCodes.BAD_REQUEST);
        console.log(error)
        throw error;
    }

const jwt=Auth.createToken({id:user.id,email:user.email});
return jwt
}
catch(error){
    if(error instanceof AppError) throw error;
    console.log(error);
    throw new AppError('Something went wrong', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}




module.exports={Create,signIn}