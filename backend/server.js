const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors({
   origin: [
    'https://rd-station-monorepo.vercel.app',
    'http://localhost:3000'
  ]
}));
app.use(express.json());

const getProducts = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data).products;
};

app.get("/", (req, res) => {
  res.json({ message: "RD Station API is running" });
});

app.get("/api/products", (req, res) => {
  const products = getProducts();
  res.json(products);
});

const port = process.env.PORT || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 API running on http://localhost:${port}/api/products`);
});
