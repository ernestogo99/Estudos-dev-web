//importanto o mongoose
var mongoose = require("mongoose");

//conexão sendo criada
var mongodb_uri = "mongodb://127.0.0.1:27017/devweb";

mongoose.connect(mongodb_uri, { useNewUrlParser: true });

//armazenar a conexão numa varialvel
var db = mongoose.connection;

//listeners
db.on("connected", () => {
  console.log(`mongoose connected to ${mongodb_uri}`);
});

db.on("disconnected", () => {
  console.log(`mongoose disconnected to ${mongodb_uri}`);
});

db.on("error", (error) => {
  console.log(`mongoose error: ${error}`);
});
