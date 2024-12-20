import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();
const SecretKey = process.env.SecretKey;

const authenticate = (req,res,next) =>{
const cookies =  req.headers.cookie;
console.log(cookies);
const cookie=cookies.split(';')
for(let cooki of cookie){
   const[name,token] = cooki.trim().split('=');
   if(name=='authToken'){
    const verified = jwt.verify(token,SecretKey)
    console.log(verified);
    console.log(verified.UserName);
    req.UserName = verified.UserName
    req.Role = verified.Role
    
    break;
    

   }
}
next();
}

export{authenticate}