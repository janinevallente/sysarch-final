// User Schema/Table. All of the user information is defined here

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
	
	//name column
	name: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength: 3 
	},

	// email address column
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		//minlength: 10
	},	

	// password column
	password: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		//minlength: 5
	}

});

// assign this model to the mongoose models
const User = mongoose.model('User', userSchema);

// export this model
module.exports = User;
