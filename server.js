const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/kahvedb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const productSchema = new mongoose.Schema({
  category: String,
  title: String,
  description: String,
  image: String,
  price: String,
});

const Product = mongoose.model("Product", productSchema);

// Kategoriye göre ürünleri listeleyen endpoint
app.get("/api/products/:category", async (req, res) => {
  const category = req.params.category.toLowerCase();

  try {
    const products = await Product.find({ category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
