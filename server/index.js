const express = require("express");
const app = express();
const videoRoute = require("./routes/videos");
const PORT = 3000;
// const cors = require('cors')

// something is a bit messed up
// app.use(cors())
//static folder access

// do I need to do this or can I run it straight from the json file?
// app.use(express.static("public"));

//route for the videos <---working
app.use("/videos", videoRoute);

// home route, doesn't do much other than return a hello world message
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

//server and port check
app.listen(PORT, () => {
  console.log("app running on port " + PORT);
});
