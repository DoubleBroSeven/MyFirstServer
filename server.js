const express = require("express");
const app = express();
const playlist = require("./playlist");

const PORT = 3000;

app.get("/", (req, res)=> {
  res.send("You've Reached the Playlist API");
})

app.get("/playlist", (req, res)=>{
  res.json(playlist)
})

app.get("/playlist/:index", (req, res) => {
  const { index } = req.params
  if (index < 0 || index >= playlist.length) {
    res.send('This song does not exist in our system. Sorry!')
  } else {
    res.json(playlist[index]);
  }
});


app.listen(PORT, () =>{
  console.log(`App is listening to ${PORT}`)
})



