const express = require("express");
const cors = require("cors");
const {MongoClient, ServerApiVersion} = require("mongodb");

require("dotenv").config();


const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${
    process.env.DB_USER
}:${
    process.env.DB_PASSWORD
}@cluster0.votqctt.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

async function run() {
    try {
        await client.connect();

    } finally {}
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Welcome To Transport Management");
});

app.listen(port, () => {
    console.log("listening port", port);
});
