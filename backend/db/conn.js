const mongoose = require("mongoose");

const DB =
  "mongodb+srv://Moulish:admin@cluster0.chkta7h.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DataBase Connected"))
  .catch((error) => console.log(error.message));
