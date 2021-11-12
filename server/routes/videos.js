const express = require("express");
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
  res.send(req.params.id);
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
    res.json(videos.find((video) => video.id === req.params.id));
  } else {
    res.json({ error: `ID ${req.params.id} not found` });
  }
});

// still need to do the POST/videos

// router.post("/", (req, res) => {
//   console.log(req.body);
//   create a variable and make an object and return it like above? too much code?
// });

module.exports = router;
