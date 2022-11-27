require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const customerRoute = require("./Routes/customers");

app.use(customerRoute);

app.listen(port, () => {
  console.log("Example app listening on port ", port);
});
