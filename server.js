const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the my application')
})

app.use(bodyParser.json());

// MongoDB connection
// mongoose
//   .connect("mongodb://localhost:27017/SellVegie", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

app.listen(process.env.PORT, () => console.log(`Server running on port ${PORT}`));