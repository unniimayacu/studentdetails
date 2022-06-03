const ErrorResponse = require("../utils/errorResponse");
// const User  = require('../models/userdb')

// const jwt= require('jsonwebtoken');


// user = {
//   "anna@gmail.com": {
//     email: "anna@gmail.com",
//     uname: "anna",
//     password: "anna1234",
//     age: "15",
//     guardianname: "george",
//   },
//   "ann@gmail.com": {
//     email: "ann@gmail.com",
//     uname: "ann",
//     password: "anus1234",
//     age: "13",
//     guardianname: "rajeev",
//   },
//   "aju@gmail.com": {
//     email: "aju@gmail.com",
//     uname: "arjun",
//     password: "arju1234",
//     age: "17",
//     guardianname: "raj",
//   },
// };


exports.register = async (req, res, next) => {
  const {
    user_name,
    user_email,
    password,
    user_age,
    user_guardianname,
   
  } = req.body;

  try {
    const userExisting = {
      where: {
        user_email: user_email,
      },
    };
    if (userExisting) {
      return next(
        new ErrorResponse("User with email address already exists", 205)
      );
    } else {
      const user=  {
        data: {
          user_name: user_name,
          user_email: user_email,
          password: password,
          user_age: user_age,
          user_guardianname: user_guardianname,
       
        },
      };
    }

    res.status(201).json({
      success: true,
      data: "account  successfully created",
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Server error"));
  }
};


