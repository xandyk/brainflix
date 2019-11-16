const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json);

app.get('/', function(req, res){
     console.log("send me a job")
})

app.use('/videos', require('./routes/api/videos'))

const PORT = process.env.PORT || 5000
app.listen(PORT, (req,res) => {
    console.log(`Server is listening on port ${PORT}`)
});

