const mongooes = require("mongoose");

const Connection = mongooes.connect(
  "mongodb+srv://Devesh26:2T-K-uVH56*tmf9@cluster0.tbzsaga.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = Connection;
