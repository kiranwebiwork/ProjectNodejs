const express = require('express');
const app = express();
const port = 5000;
const intial = require("./routes/routing");

app.use(intial);
app.get('/blog', (req, res) => {
  res.send('Hello World!')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
