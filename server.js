const { urlencoded } = require('express');
const express = require('express');
const logger = require('./middlerware/logger');
const mysql = require("./db/db")
var exphbs  = require('express-handlebars');
const app = express();
const port = 5000;
// const bodyParser = require('body-parser')
const intial = require("./routes/routing");
app.use(intial);

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// app.engine('handlebars', exphbs({defaultLayout:"main"}));
// app.set('view engine', 'handlebars');

app.use(logger);

// app.use('/api/blog' , require('./routes/routing'))
app.use('/api' , intial)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

module.exports=app
