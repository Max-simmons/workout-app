const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('build'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** ---------- ROUTES ---------- **/
const workoutRouter = require('./routes/workouts.router');


app.use('/api/workouts', workoutRouter);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port', port);
});