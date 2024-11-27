require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDatabase = require("./db/connect");
const errorHandlerMiddleware = require("./middleware/error");

app.use(cors());
app.use(express.static("./public"));

// import routes
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const paymentRoute = require("./routes/payments");
const adminRoute = require("./routes/admin");
const brandRoute = require("./routes/brands");
const categoryRoute = require("./routes/category");
const { webhook } = require("./controllers/payments");
const { verifyToken, adminOnly } = require("./middleware/auth");

app.post("/webhook", express.raw({ type: "application/json" }), webhook);
app.use(express.json());

//using routes
app.get("/", (req, res) => {
  res.json({
    project: "Shoekart API",
    description:
      "This is an API for an shoes E-commerce application. It provides endpoints for managing products, orders, and users.",
    author: {
      name: "Sumil Suthar",
      portfolio: "http://sumilsuthar.me/",
    },
    version: "1.0.0",
  });
});
app.use("/payment", verifyToken, paymentRoute);
app.use("/user", userRoute);
app.use("/api/product", productRoute);
app.use("/cart", verifyToken, cartRoute);
app.use("/admin", adminOnly, adminRoute);
app.use("/api/v1/brands", adminOnly, brandRoute);
app.use("/api/v1/category", adminOnly, categoryRoute);

app.get("*", (req, res) => {
  //  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  res.json("404 Not Found");
});

// Middleware for Errors
app.use(errorHandlerMiddleware);

const port = 5000;
const StartServer = async () => {
  try {
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    // const MONGO_URI = "mongodb://localhost:27017/shoekart";
    const MONGO_URI = process.env.MONGO_URI;

    await connectDatabase(MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

StartServer();
