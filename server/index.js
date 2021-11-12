const express = require("express");
const app = express();
const videoRoute = require("./routes/videos");
const PORT = 8080;
const cors = require("cors");
const getVideo = require("./routes/videos");

// something is a bit messed up
app.use(cors());
//static folder access

app.use(express.static("public"));
app.use(express.json());

//route for the videos <---working
// need to mirror axios requests
app.use("/videos", videoRoute);
app.use("/upload", videoRoute); // < same as axios?

// home route, doesn't do much other than return a hello world message
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

//server and port check
app.listen(PORT, () => {
  console.log("app running on port " + PORT);
});
