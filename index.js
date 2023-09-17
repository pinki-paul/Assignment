const express = require("express");
const app = express();
require("./db/conn");
const currency = require("./modules/currency");

const port = process.env.PORT || 8000;

app.use(express.json());

app.post("/currencies", async(req,res)=>{  
    try {
        const user = new currency(req.body);

        const createUser = await user.save(); 
        res.status(201).send(createUser);
        console.log(createUser);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }

})

app.listen(port, ()=>{
    console.log(`Server is running on the port ${port}`);
})
    