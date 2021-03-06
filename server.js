const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const postRoutes = require("./routes/postRoutes");
const productRoutes = require("./routes/productRoutes");
const statusRoutes = require("./routes/statsRoutes");
dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Backend is running successfully....");
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/event", eventRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/stats", statusRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode  on port ${PORT}`
  )
);
