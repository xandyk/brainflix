const express = require ('express');
const app = express();
const router = express.Router();

const mainVideo = __dirname + '/../../model/mainVideos.json';
const sideVideos = __dirname + '/../../model/videos.json';

let sideVideoData = require(sideVideos);
let mainVideoData = require(mainVideo);

router.get('/', function(req, res){
    console.log("hi")
    res.json(sideVideoData);
                    
})

module.exports = router