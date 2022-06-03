

const express=require('express')
// const mongoose = require('mongoose')
// const morgan = require('morgan')
// const bodyParser = require('body-parser')



// mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true.useunifiedTopology: } )



const app= express();
app.use(express.json());

app.use("/api/auth" , require("./routes/auth") ) 


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log("Main Server running @ ", PORT)
);
process.on("unhandledRejection", (err, Promise) => {
  console.log("Logged Error", err);
  server.close(() => process.exit(1));
});