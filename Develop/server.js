const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const apiRoutes = require('./routes/routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use('/api', apiRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutdb', { useNewUrlParser: true});

mongoose.connection.on('error', (err) => console.log(`error in mogoose connection: ${err.message}`));

mongoose.connection.once('open', () => {
    console.log ('mongoose connected!');
    app.listen(PORT, (err) => console.log(`http://localhost/${PORT}`))
})