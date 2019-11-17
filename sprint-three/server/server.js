  
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors')


app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))

app.get('/', (req,res) => {
    console.log("Hii")
});

app.use("/videos", require("./routes/api/videos"));

const PORT = process.env.PORT || 5000
app.listen(PORT, (req,res) => [
    console.log(`Server is listening on Port ${PORT}`)
])