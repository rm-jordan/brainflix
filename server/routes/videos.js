const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();
// const fs = require("fs");
const app = express();
const videoData = require("../data/video-details.json");

// The API must have the following end-points:

//     GET /videos that responds with an array of videos.
//     GET /videos/:id that responds with an object containing the details of the video with an id of :id.
//     POST /videos that will add a new video to the video list. A unique id must be generated for each video added.

// Get all videos <---works
//need to map through this <--works

router.get("/", (req, res) => {
  res.json(
    videoData.map((video) => {
      return {
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
      };
    })
  );
});
// above shows in json format

// GET videos/:id
router.get("/:id", (req, res) => {
  // create a variable like the example foundVideo?
  // read up on possible array prototypes
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  // remember from example === not ==
  const foundVideo = videoData.some((video) => video.id === req.params.id);
  //if statement for an error message?!?!
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  // <-- If no values satisfy the testing function, undefined is returned.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // find or filter it? <-- filter = new Array
  if (foundVideo) {
    res.json(videoData.find((video) => video.id === req.params.id));
  } else {
    res.json({ error: `ID ${req.params.id} not found` });
  }
});

// still need to do the POST/videos

router.post("/", (req, res) => {
  const getVideo = {
    id: req.body.id,
    title: req.body.title,
    channel: req.body.channel,
    image: req.body.image,
    description: req.body.description,
    views: "0",
    likes: "0",
    duration: "6:20",
    video: "https://project-2-api.herokuapp.com/stream",
    // need to update the timestamp
    timestamp: new Date().getTime(),
    comments: [],
  };

  console.log("showing getVideo", getVideo);
  videoData.push(getVideo); // <---
  //need to write this into a file

  res.json(getVideo(req.body));
});

module.exports = router;
