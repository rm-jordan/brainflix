const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();
const fs = require("fs");
const videoData = require("../data/video-details.json");
const uniqid = require("uniqid");
// remember fs

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

router.get("/:id", (req, res) => {
  const foundVideo = videoData.some((video) => video.id === req.params.id);
  if (foundVideo) {
    res.json(videoData.find((video) => video.id === req.params.id));
  } else {
    res.json({ error: `ID ${req.params.id} not found` });
  }
});

router.post("/", (req, res) => {
  console.log("posting video");
  const getVideo = {
    id: uniqid(),
    title: req.body.title,
    channel: "Kitten!!",
    image: "http://localhost:8080/images/kitty.jpeg",
    description: req.body.description,
    views: "0",
    likes: "0",
    duration: "6:20",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: new Date().getTime(),
    comments: [],
  };

  const videoRead = JSON.parse(fs.readFileSync("./data/video-details.json"));
  console.log(videoRead);
  videoRead.push(getVideo);
  fs.writeFileSync("./data/video-details.json", JSON.stringify(videoRead));

  res.json({ message: "file written successfully" });
});

module.exports = router;
