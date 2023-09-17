
const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/Currencydata", { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("Connection Successfully Done")
}).catch((err) => {
    console.log("No Connection");
});

