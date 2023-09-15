//create server
const express = require("express");
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT;
const cors = require("cors");
app.use(cors({ origin: true }));
app.use(express.json());

//database extablished
require("./config/database").connect()
app.use(express.json());

//user authentication routes
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute)
//Artist Routes
const artistRoutes = require("./routes/artists");
app.use("/api/artists/", artistRoutes)
//Album routes
const albumRoutes = require("./routes/albums");
app.use("/api/albums/", albumRoutes)

//songs Routes
const songsRoutes = require("./routes/songs");
app.use("/api/songs/", songsRoutes)

// Activate server
app.listen(PORT, () => {
    console.log("Server Run at ", PORT);
})

app.get("/", (req, res) => {
    res.send("<h1>Music App</h1>")
})