module.exports = app => {
    const productController = require("../controller/products.controller.js");
  
    app.post("/products", productController.createProduct);
    app.get("/products", productController.getProducts);
    app.get("/products/:id", productController.getProduct);
    app.put("/products/:id", productController.updateProduct);
    app.delete("/products/:id", productController.deleteProduct);
};