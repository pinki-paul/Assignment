const mongoose = require("mongoose");

const myCurrency = new mongoose.Schema({
    name: {
        type: String,
       
    },
    last: {
        type: Number,
       
    },
    buy: {
        type: Number,
       
    },
    sell: {
        type: Number,
       
    },
    volume: {
        type: Number,
       
    },
    base_unit: {
        type: String,
       
    }
});

const MycurrencyData = new mongoose.model("Currency Record", myCurrency);



module.exports = MycurrencyData;