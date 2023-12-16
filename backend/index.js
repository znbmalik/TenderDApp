// To connect with your mongoDB database
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sabz');
// mongoose.connect('mongodb://localhost:27017/', {
// 	dbName: 'MyDB',
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// }, err => err ? console.log(err) : 
// 	console.log('Connected to yourDB-name database'));

// Schema for users of app
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
const User = mongoose.model('proposal', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by 
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});

app.get("/get-users", async (req, res) => {
	try {
	  const users = await User.find().select('date name email');
	  res.send(users);
	} catch (error) {
	  console.error("Error fetching user data:", error);
	  res.status(500).send("Internal Server Error");
	}
  });
  

app.post("/register", async (req, resp) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
app.listen(5000);
