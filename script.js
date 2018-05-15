var database = [
	{
		username: "James",
		password: "1234"
	},
	{
		username: "Jimmy",
		password: "1235"
	},
	{
		username: "Shanice",
		password: "12"
	}
];

var newsfeed = [
	{
		username: "James",
		timeline: "I will be a developer!"
	},
	{
		username: "Shanice",
		timeline: "I love Primetime!"
	},
	{
		username: "RobnWings",
		timeline: "Everything taste better with Soutside Sauce"
	}
];

function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
		if(database[i].username === username && database[i].password === password){
			return true;	
		} 
	}
	return false;
}
function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert ("Sorry, wrong username and password!");
	}
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);