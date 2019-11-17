const express = require ('express');
const app = express();
const router = express.Router();

const mainVideo = __dirname + '/../../model/mainVideos.json';
const sideVideos = __dirname + '/../../model/videos.json';
const helper = require(__dirname + '/../../helper/helper.js');

let sideVideoData = require(sideVideos);
let mainVideoData = require(mainVideo);

router.post('/', function(req, res){
    let title = req.body.title
    let description = req.body.description

    const id = helper.getNewId() 

    const newVideo = {
        id: id,
        image: 'http://localhost:5000/Upload-video-preview.jpg',
        title: req.body.title,
        channel: 'Trendy Hipster'
      };

        sideVideoData.push(newVideo);
        helper.writeJSONFile(sideVideos,sideVideoData);


    const newMainVideo = {
        id: id,
        title: req.body.title,
        channel: 'Trendy Hipster',
        image: 'http://localhost:5000/Upload-video-preview.jpg',
        description: req.body.description,
        views: 0,
        likes: 0,
        duration: 0,
        video: '',
        timestamp: 0,
        comments: []
    };

        mainVideoData.push(newMainVideo);
        helper.writeJSONFile(mainVideo,mainVideoData);
})

router.get('/', function(req, res){  
    res.json(sideVideoData);
                    
})

router.get('/:id', function(req, res){  

    const checker = (video) => video.id === req.params.id; // 
    const found = mainVideoData.some(checker); // 

    if(found) { 
        res.json(mainVideoData.filter(mainVideo => mainVideo.id === req.params.id))
    } else
    console.log('This video is not found...');
})

module.exports = router