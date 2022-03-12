//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const homeStartingContent =
	'Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.'
const aboutContent =
	'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
const contactContent =
	'Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.'

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

// 1 - Create route inside server. Specify route.
// 2 - Specify the root route '/' we want to target.
app.get('/', function (req, res) {
	// 3 - res method, result send back from the server to the user who is requesting this page.
	// 4 - use the 'render' express give us
	// 5 - specify page inside qutation marks 'home'
	// 6 - if we want to pass in a variable,
	// we would add a coma, and then we pass over a javascript object
	// javascript objects are key value pairs
	// insidee a set of curly braces
	// you need to providee a key(Sclüssel) and a value(Wert)
	// the Schlüssel is going to be the variable that you are gonna tap into home.ejs
	// and the Wert, is whatever it is that you want to pass over, that comes from this current page app.js
	//
	res.render('home', {})
})

app.listen(3000, function () {
	console.log('Server started on port 3000')
})
