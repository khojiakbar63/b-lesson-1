const express = require("express");

const app = express();
const products = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
  {
    id: 4,
    name: "Product 4",
  },
];
app.get("/", (req, res) => {
  res.status(202).send("My First API");
});

// All products
app.get("/products", (req, res) => {
  res.status(202).json({
    success: true,
    statusCode: 200,
    data: products,
  });
});

// Get By ID
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  //   res.status(202).send(`Product id:  ${productId}`);

  if (!productId) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: 'Product ID is required!',
    });
  }

  const product = products.find((product) => product.id == +productId);

  if (!product) {
    return res.status(404).json({
      success: false,
      statusCode: 404,
      message: 'Product ID is not found!',
    });
  }

  res.status(200).json({
    success: true,
    statusCode: 200,
    data: product,
  });
});


const port = 6400;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
