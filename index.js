const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.models.js");
const app = express();
const productRoute = require("./routes/product.route.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello From Node API Server Updated");
});

mongoose
  .connect(
    "mongodb+srv://somarhnn:Somar.980@backenddb.0nqox.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected To database!");
    app.listen(9000, () => {
      console.log("Server is running on port 9000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
