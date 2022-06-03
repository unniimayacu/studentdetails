// const express = require ('express');


// const app= express()

//  const dataservice =require("./services/dataservice")

//  app.use(express.json())

// app.get("/", (req, res) => {
//   res.send("GET REQUEST!!!");
// });

// app.post ("/",(req, res)=>{
//     res.send("POST REQUEST!!!")
// })

// app.delete("/", (req, res) => {
//   res.send("DELETE REQUEST!!!");
// });
// app.put("/", (req, res) => {
//   res.send("PUT REQUEST!!!");
// });

// app.post('/register', (req,res)=>{
//     console.log(req.body.email)
//     const result=dataservice.register(req.body.email,req.body.password,req.body.uname,req.body.age,req.body.guardianname,req.body.place)
//     res.status(result.statusCode).json(result)
  
// } )
// app.post('/studentlogin', (req,res)=>{
//     console.log(req.body)
//     const result=dataservice.login(req.body.email,req.body.password)
//     res.status(result.statusCode).json(result)
  
// } )






// app.listen(4000,()=>{
//     console.log("server started at 4000")
// })