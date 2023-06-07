// get required dependencies/packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// router to be used
const userRouter = require('./routes/users');

// app passthrough
const app = express();

// get dotenv configuration
require('dotenv').config();

//assign server port and give connection string
const PORT  = process.env.PORT;
const connectionString = process.env.ATLAS_URI;

// assign functionality to the app
app.use(cors(
	{origin: true, credentials: true}
));
app.use(express.json());

// connect to mongoDB
mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log("Successfully connected to MongoDB!"))
	.catch((error) => console.error("Connection to DB has failed. " + error.message));

// specify what router to use
app.use('/users', userRouter);

// let express run on the specified ports
app.listen(PORT, () => {
	console.log(`Express is running on port: ${PORT}`);
});





