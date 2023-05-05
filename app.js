const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => {
  res.send("Backend Started!");
});

mongoose
  .connect('mongodb+srv://dtltechservice:admin123@scotch-bonnet.mal4yea.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('DB Connected!'))
  .catch((err)=> console.log(err));

require("./routes/products.route.js")(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });