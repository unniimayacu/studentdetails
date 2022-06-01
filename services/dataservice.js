
const jwt= require("jsonwebtoken")

users={
   "anna@gmail.com":{email:"anna@gmail.com",uname:"anna",password:"anna1234",age:"15",guardianname:"george", place:"perumbavoor",},
   "anu@gmail.com":{email:"anu@gmail.com",uname:"anu",password:"anus1234", age:"13", guardianname:"rajeev", place:"kalady",},
   "aju@gmail.com":{email:"aju@gmail.com",uname:"arjun",password:"arju1234", age:"17", guardianname:"sunny", place:"angamaly",}
}
 
const register = (email, password, uname, age, guardianname, place) => {
  let db = users;

  if (email in db) {
    return {
      statusCode: 401,
      status: false,
      message: "account is already exist.. please login...",
    };
  } else {
    db[email] = {
      email,
      password,
      uname,
      age,
      guardianname,
      place,
    };
    return {
      statusCode: 200,
      status: true,
      message: "account is successfully created",
    };
  }
}

const login=(email,password)=>{
    let db= users
 
 if(email in db){
     if(password==db[email]["password"]){

       
   
    const token= jwt.sign({
         currentEmail:email
    },  'secretsetkey' )

        return{
            statusCode:200,
            status:true,
            message:"account is successfully login...",
             token
        }
     }
     else{
         return{
             statusCode:401,
             status:false,
             message:"invalid password"
         }
     }
 }
 else{
     return{
         statusCode:401,
         status:false,
         message:"invalid student"
     }
 }
}



module.exports={
    register,
    login
}