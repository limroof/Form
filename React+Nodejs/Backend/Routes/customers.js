const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonValidator = require("../models/customerModel");
const cors = require("cors");
let customers = [];

// AUTHENTICATION
router.use(
  cors({
    origin: "*",
  })
);
router.use(auth);
// ******************** POST ROUTE ******************************
router.post("/customers", bodyParser.json()); // Check if body is JSON
router.post("/customers", checkSchema); // Check if the received object respect the model
router.post("/customers", (req, res, next) => {
  console.log(req.body);
  addUser(req, res, next);
});
// ******************** END: POST ROUTE **************************

// ******************** GET ROUTE ********************************

router.get("/customers", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  next();
});

router.get("/customers", (req, res, next) => {
  res.status(200).send(JSON.stringify(customers));
});
// ******************** END: GET ********************************

// ******************** MAIN FUNCTIONS **************************
function auth(req, res, next) {
  req.query.admin === "true"
    ? next()
    : res.status(401).send("401 unauthorized");
}

let addUser = (req, res) => {
  // generate a unique id to customer before adding it
  let newCustomer = {
    _id: Math.floor(Math.random() * 100) + Date.now(),
    ...req.body,
  };

  customers.push(newCustomer);
  res.status(201).send(newCustomer);
};

function checkSchema(req, res, next) {
  jsonValidator(req.body)
    ? next()
    : res
        .status(400)
        .send(
          "Bad Request: Cannot process the request because the body structure of json was not the expected"
        );
}
// ******************** END: MAIN FUNCTIONS *********************

module.exports = router;
