require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./connectDB");
const Book= require('./models/Books');


const app = express();
const PORT = process.env.PORT || 8000;
  
connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());























app.get("/api/books", async (req, res) => {
try{
   const data = await Book.find({});
   res.json(data);
}
catch(error){
   
}

   res.json("Hello mate!");
});

app.get("*", (req, res) => {
   res.sendStatus("404");
});

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});