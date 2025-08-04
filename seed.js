const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/kahvedb")
  .then(() => {
    console.log("MongoDB connected for seeding");
    seed();
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

const productSchema = new mongoose.Schema({
  category: String,
  title: String,
  description: String,
  image: String,
  price: String,
});

const Product = mongoose.model("Product", productSchema);

const products = [
  {
    category: "baslangiclar",
    title: "Mozzarella Sticks",
    description: "Kızartılmış mozzarella çubukları, yanında marinara sos ile.",
    image: "/images/MozarellaSticks.jpeg",
    price: "400₺",
  },
  {
    category: "baslangiclar",
    title: "Patates Tabagı",
    description: "Kızarmış patates, cheddar sos ve baharat karışımı.",
    image: "/images/patatestabagi.jpeg",
    price: "500₺",
  },
  {
    category: "kahvaltilar",
    title: "Serpme Kahvaltı",
    description: "Peynir, zeytin, yumurta, bal, reçel, çay...",
    image: "/images/serpme.jpg",
    price: "195₺",
  },
];

async function seed() {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    mongoose.disconnect();
  }
}
