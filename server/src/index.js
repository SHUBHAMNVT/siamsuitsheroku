const express = require("express")
const dotenv = require("dotenv")
const authRoute = require("./routes/authentication")
require("./mongoose/mongoose")
const cors = require("cors")
const path =require("path")




const app = express()
// const port = process.env.port || ;
dotenv.config();
// var corsOptions =  {
//   origin: ["https://siamsuits369.herokuapp.com"],
//   methods: "GET,POST,PUT,DELETE",
//   credentials: true,
// }
app.use(cors())
app.use(express.json());



if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build' ));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.get("/", async(req, res)=>{
  res.send("Welcome")
})

app.use("/auth", authRoute)


app.listen(process.env.PORT || 4545 , (req, res)=>{
  console.log("app is listening on port "+process.env.PORT )
})