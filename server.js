const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware defined
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname, '/client/public/index.html'), function(err){
    if (err) {
      res.status(500).send(err)
    }
  })
})

//Start the server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`)
});