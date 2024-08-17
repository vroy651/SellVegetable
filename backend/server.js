require("dotenv").config({ path: "./env" });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const DB_NAME = require("./constants.js");
const connectDB = require("./db/server.js");
const app = express();

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// // Import routes
// const userRoutes = require("./routes/userRoutes");
// const vendorRoutes = require("./routes/vendorRoutes");
// const customerRoutes = require("./routes/customerRoutes");
// const productRoutes = require("./routes/productRoutes");
// const orderRoutes = require("./routes/orderRoutes");

// // Use routes
// app.use("/api/users", userRoutes);
// app.use("/api/vendors", vendorRoutes);
// app.use("/api/customers", customerRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);

// // Middleware
// app.use(bodyParser.json());

// MongoDB connection
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", () => {
//       console.log("MongoDB connection error");
//       throw new Error("MongoDB connection error");
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App on listening on port ${process.env.PORT}`);
//     });
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// })();

// mongoose
//   .connect("mongodb://127.0.0.1:27017/sellVegie", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// // Import routes
// const userRoutes = require("./routes/userRoutes");
// const vendorRoutes = require("./routes/vendorRoutes");
// const customerRoutes = require("./routes/customerRoutes");
// const productRoutes = require("./routes/productRoutes");
// const orderRoutes = require("./routes/orderRoutes");

// // Use routes
// app.use("/api/users", userRoutes);
// app.use("/api/vendors", vendorRoutes);
// app.use("/api/customers", customerRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);

// Start the server
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
