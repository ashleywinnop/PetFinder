const path = require ('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const PORT = process.env.PORT || 3000; 

app.use(bodyParser.urlencoded ({ extended: true }));
app.use(bodyParser.json());

require('./app/routes/apiRoutes')(app);
require('./app/routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log('Making is happening on PORT: ' + PORT);
});