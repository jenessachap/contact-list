let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
require('dotenv').config();
const contactRoute = require('./contact.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.use('/contact', contactRoute)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
    res.status(404).send('Error 404!')
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
