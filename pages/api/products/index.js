import dbConnect from "../../../util/mongo";
import Product from "../../../models/Products";

export default async function handler(req, res) {
  dbConnect();

  if (req.method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (req.method === "POST") {
    try {
      const query = req.body;
      const product = await Product.create(query);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
