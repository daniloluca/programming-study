// let and const (to stop the Hoisting)
	// let
		let a = 0;

		if(a == 0){
			let b = 1;
		}

		console.log(b); // > Error 'b' is not defined

	// const
		let someNum = 5;
		const MAX_NUMBER = 2;

		function isGreaterThanMax(num){
			const SOME_NUMBER = num;
			return SOME_NUMBER > MAX_NUMBER;
		}

		console.log(isGreaterThanMax(someNum)); // > true
		console.log(SOME_NUMBER); // > Error 'SOME_NUMBER' is not defined

// Default Paramater Values
	function People(name = 'Default', info = {}){
		this.name = name;
		this.age = info.age;
		this.cpf = info.cpf;
	}

	People('Danilo'); // With no 'info' paramater it should produce an error without the Default Parameter Values

// Named Parameters
	function setPageThread(name, {popular, expires, activeClass} = {}){

		console.log('Name: ', name);
		console.log('Popular: ', popular);
		console.log('Expires: ', expires);
		console.log('Active: ', activeClass);
	}

	// > Name: New Version out Soon!
	// > Popular: true
	// > Expires: 10000
	// > Active: is-page-thread
	setPageThread("New Version out Soon!", {
		popular: true,
		expires: 10000,
		activeClass: "is-page-thread"
	});

// Spread Operator
	let array = [1, 2, 3];

	function func(a, b, c){
		console.log(a, b, c);
	}

	func(...array); // > 1, 2, 3

// Rest Parameters
	function func(...args){
		args.forEach(function(arg){
			console.log(arg);
		});
	}

	func(1, 2); // > 1 2
	func(1, 2, 3, 4); // > 1 2 3 4

// Arrow Functions
	function People() {
		return {
			setName: (name) => this.name = name, // can access this from parent scope
			getName: () => this.name, // can access this from parent scope
			setAge: function(age){
				this.age = age; // cant access this from parent scope
			},
			getAge: function(){
				return this.age; // cant access this from parent scope
			}
		}
	}

	let people = new People();

	people.setName('Danilo');
	console.log(people.getName()); // > Danilo

	people.setAge(21); // > cant access 'age' from undefined
	people.getAge(); // > undefined

// Object Initializer Shorthand
	let name = 'Sam';
	let age = 45;
	let friends = ['Brook', 'Tyler'];

	let user = {name, age, friends};

	console.log(user); // > { name: 'Sam', age: 45, friends: [ 'Brook', 'Tyler' ] }
	console.log(user.name); // > Sam
	console.log(user.age); // > 45
	console.log(user.friends); // > ['Brook', 'Tyler']

// Object Destructuring
	function buildUser(first, last){
		return {
			first,
			last,
			fullName: `${first} ${last}`
		};
	}

	// "Multiple Assignment"
	let {first, last, fullName} = buildUser('Sam', 'Williams'); // Example

	console.log(first); // > Sam
	console.log(last); // > Williams
	console.log(fullName); // > Sam Williams

// Method Initializer Shorthand
	function buildUser(first, last, postCount){
		let fullName = first + ' ' + last;
		const ACTIVE_POST_COUNT = 10;

		return {
			first,
			last,
			fullName,
			isActive(){ // Shorter notation than isActive: function(){ ...
				return postCount >= ACTIVE_POST_COUNT;
			}
		}
	}

// String Interpolation
	function buildUser(first, last){
		let fullName = `${first} ${last}`;
		let text = `His first
		name is ${first} and

		the last is ${last}.
		`;
		// ...
		return {fullName, text};
	}

	let {fullName, text} = buildUser('Danilo', 'Lucas');

	console.log(fullName); // > Danilo Lucas
	console.log(text); // > His first
					   // > name is Danilo and
					   // >
					   // > the last is Lucas.
					   // >

// Object.assign
	// Example 1
		function countDownTimer(target, options = {}){
			let defaults = {
				time: 7200,
				delay: 100,
				direction: 'right'
			}

			let settings = Object.assign({}, defaults, options); // the first parameter of Object.assign is the final merge object, if you put an object in there it will be overwrited.
			//...
		}

	// Example 2
		let a = 1;
		let b = 2;
		let c = 3;

		let obj1 = {a, c};
		let obj2 = {b};

		let result = Object.assign({}, obj1, obj2);

		console.log(result); // > {a: 1, b: 2, c: 3}

	// Example 3
		let a = 1;
		let b = 2;
		let c = 3;
		let d = 4;
		let e = 5;

		let array = [
			{a, e},
			{c, d},
			{b}
		];

		let result = Object.assign({}, ...array);

		console.log(result); // > { a: 1, e: 5, c: 3, d: 4, b: 2 }

// Array Destructuring
	// Example 1
		let users = ['Sam', 'Tyler', 'Brook'];

		let [a, b, c] = users;

		console.log(a, b, c); // > Sam Tyler Brook

	// Example 2
		let users = ['Sam', 'Tyler', 'Brook'];

		let [a, , c] = users;

		console.log(a, c); // > Sam Brook

	// Example 3 - Combining rest parameters
		let users = ['Sam', 'Tyler', 'Brook'];

		let [first, ...rest];

		console.log(first, rest); // > Sam ['Tyler', 'Brook']

	// Example 4
		function activeUsers(){
			let users = ['Sam', 'Tyler', 'Brook'];
			return users;
		}

		let [a, b, c] = activeUsers();1
		console.log(a, b, c); // > Sam Tyler Brook

// for...of
	let names = ['Sam', 'Tyler', 'Brook'];

	for(let name of names){
		console.log(name); // > Sam > Tyler > Brook
	}

// Array.find
	let users = [
		{login: 'Sam', admin: false},
		{login: 'Brook', admin: true},
		{login: 'Tyler', admin: true}
	];

	let admin = users.find(user => user.admin); // Returns the first object where user.admin is true

	console.log(admin); // > {'login': 'Brook', 'admin': true}

// Map
	// Simple Example
		let user1 = {name: 'Sam'};
		let user2 = {name: 'Tyler'};

		let totalReplies = new Map();
		totalReplies.set(user1, 5);
		totalReplies.set(user2, 42);

		console.log(totalReplies.get(user1)); // > 5
		console.log(totalReplies.get(user2)); // > 42

	// Using Map with for...of
		let mapSettings = new Map();

		mapSettings.set('user', 'Sam');
		mapSettings.set('topic', 'ES2015');
		mapSettings.set('replies', ["Can't wait!", 'So Cool']);

		// > user = Sam
		// > topic = ES2015
		// > replies = Can't wait!,So Cool
		for(let [key, value] of mapSettings){
			console.log(`${key} = ${value}`);
		}

// WeakMap
	let user = {};
	let comment = {};

	let mapSettings = new WeakMap();
	mapSettings.set(user, 'user');
	mapSettings.set(comment, 'comment');

	console.log(mapSettings.get(user)); // > user
	console.log(mapSettings.get(comment)); // > comment

	mapSettings.set('title', 'ES2015'); // > invalid value used as weak map key

	// Features
		// WeakMap just accept objects as keys
		// WeakMap is a more memory efficient type of Map
		// WeakMap don't prevent the garbage collector from collecting objects currently used as keys, but that are no longer referenced anywhere else in the system.

// Sets
	// Example 1
		let tags = new Set();

		tags.add('Javascript');
		tags.add('Programming');
		tags.add({version: '2015'}); // Both primitive values and objects are allowed
		tags.add('Web');
		tags.add('Web'); // Duplicate entries are ignored

		console.log('Total items ', tags.size); // > Total items 4
	// Example 2
		let tags = new Set();

		tags.add('JavaScript');
		tags.add('Programming');
		tags.add({version: '2015'});
		tags.add('Web');

		// > JavaScript
		// > Programming
		// > {version:'2015'}
		// > Web
		for(let tag of tags){
			console.log(tag);
		}

		// Extracting elements from Set via destructuring
		let [a, b, c, d] = tags;
		console.log(a, b, c, d); // > JavaScript Programming {version:'2015'} Web

// WeakSet
	let weakTags = new WeakSet();

	weakTags.add('JavaScript'); // > TypeError: Invalid value used in weak set
	weakTags.add({name: 'JavaScript'});
	let iOS = {name: 'iOS'};
	weakTags.add(iOS);

	weakTags.has(iOS); // > true
	weakTags.delete(iOS); // > true

	// Features
		// Only objects can be added
		// WeakSets don't prevent the garbage collector from collecting entries that are no longer used in other parts of the system
		// WeakSets are not iterable! (you can't use it in a for...of)
		// WeakSets can be used to create special groups from existing objects withou mutating them. Favoring immutable objects allows for much simpler code with no unexpected side effects.

// Classes
	// Already written

// Modules I
	// Example 1
		// flash-message.js
			export default function(message) { // "default" let you export an anonymous function withou specifing a name
				alert(message);
			}

		// app.js
			import flashMessage from './flash-message'; // "flashMessage" could be whatever name because the export of flash-message.js is using default

	// Example 2
		// flash-message.js
			// to export multiple function os classes you need to remove the "default" and specify the name of the functions
			export function alertMessage(message) {
				alert(message);
			}
			// same here
			export function logMessage(message) {
				console.log(message);
			}

		// app.js
			// when you are importing functions or classes from a file that have multiple exports (that means there is no default function),
			// you need to specify the name of the function you are importing. This name has to be the same name as the function in the flash-message.js
			import { alertMessage, logMessage } from './flash-message'; // yes, you can import one or more functions of classes using { ... }

			alertMessage('Hello from alert');
			logMessage('Hello from log');

	// Example 3
		// flash-message.js
			export function alertMessage(message) {
				alert(message);
			}

			export function logMessage(message) {
				console.log(message);
			}

		// app.js
			import * as flash from './flash-message'; // all the functions in the file can be assign to an object using this sintax (import * as [var] from [file])

			// and can be used as an method of the object
			flash.alertMessage('Hello from alert');
			flash.logMessage('Hello from log');

	// Example 4
		// flash-message.js
			// all the functions can be declared normaly (without the "export")
			function alertMessage(message) {
				alert(message);
			}

			function logMessage(message) {
				console.log(message);
			}

			// then you can export them all at the same time like this
			export { alertMessage, logMessage };

		// app.js
			import { alertMessage, logMessage } fom './flash-message';

			alertMessage('Hello from alert');
			logMessage('Hello from log');

// Modules II
	// Exporting/Importing Constants
		// Example 1 - exporting
			// constants.js
				export const MAX_USERS = 3;
				export const MAX_REPLIES = 3;

				// or

				const MAX_USERS = 3;
				const MAX_REPLIES = 3;

				export { MAX_USERS, MAX_REPLIES };

		// Example 2 - importing
			// load-profile.js
				import {MAX_REPLIES, MAX_USERS } from './constants';

				function loadProfiles(userName) {
					if(userName.length > MAX_USERS) {
						// ...
					}

					if(someElement > MAX_REPLIES) {
						// ...
					}
				}

		// Example 3 - importing
			// list-replies.js
				import { MAX_REPLIES } from './constants';

				function listReplies(replies = []) {
					if(replies.length > MAX_REPLIES) {
						// ...
					}
				}

			// display-watchers.js
				import { MAX_USERS } from './constants';

				function displayWatchers(watchers = []) {
					if(watchers.length > MAX_USERS) {
						// ...
					}
				}

	// Exporting Class
		// Example 1
			// flash-message.js
				export default class FlashMessage { // "default" allows this class to be set to any variable name once it's imported
					constructor(message) {
						this.message = message;
					}

					renderAlert() {
						alert(`${this.message} from alert`);
					}

					renderLog() {
						console.log(`${this.message} from log`);
					}
				}

			// app.js
				import FlashMessage from './flash-message'; // Importing a class, so F is capitalized

				let flash = new FlashMessage("Hello");
				flash.renderAlert();
				flash.renderLog();

		// Example 2
			// flash-message.js
				class FlashMessage { // Plain old JavaScript class declaration
					constructor(message) {
						this.message = message;
					}

					renderAlert() {
						alert(`${this.message} from alert`);
					}

					renderLog() {
						console.log(`${this.message} from log`);
					}
				}

				export { FlashMessage }; // Exports class to the outside world

			// app.js
				import { FlashMessage } from './flash-message'; // the name of the variable must match with the name of the class because the class is not been exported using "default"

				let flash = new FlashMessage("Hello");
				flash.renderAlert();
				flash.renderLog();

// Promises
	// When a promise is created it assume the "pending" state, then with the use of the function arguments "resolve" and "reject" it changes to
	// fulfilled for "resolve" and rejected for "reject"
	// Example
	function getPollResultsFromServer(pollName) {
		// ...
		return new Promie(function(resolve, reject) { // Promisse have two arguments that are used as functions to resolve or reject the promisse, making it calling the callback in "then" for resolve and "catch" for reject.
			request.onload = function() {
				if(request.status >= 200 && request.status < 400) {
					resolve(request.response);
				} else {
					reject(new Error(request.status));
				}
			};
			request.onerror = function() {
				reject(new Error("Error Fetching Results"));
			}
		});
		// ...
	}

	function filterResults(results) {	/* ... */	}

	let ui = {
		renderSidebar(filteredResults) { /* ... */ } // method initializer shorthand syntax.
	}

	getPollResultsFromServer("Sass vs. Less")
		.then(filterResults)
		.then(ui.renderSidebar) // Passing function arguments make this code easier to read
		.catch(function(error){
			console.log("Error: ", error); // Still catches all errors from previous calls
		});

// Iterator
	// Example 1 - Making an object iterable.
		let post = {
			title: "New Features in JS",
			replies: 19
		};

		post[Symbol.iterator] = function() {

			let properties = Object.keys(this);
			let count = 0;
			let isDone = false;

			let next = () => {
				if(count >= properties.length) {
					isDone = true;
				}
				return { done: isDone, value: this[properties[count++]] };
			}

			return { next };
		};

		for(let p of posts) {
			console.log(p); // > New Features in JS
											// > 19
		}

	// Example 2 - Iterables with the Spread Operator
		let post = {
			title: "New Features in JS",
			replies: 19
		};

		post[Symbol.iterator] = function() {
			// ...
			return { next };
		}

		let values = [...post];
		console.log(values); // > ['New Features in JS',19]

	// Example 3 - Iterables with Destructuring
		let post = {
			title: "New Features in JS",
			replies: 19
		};

		post[Symbol.iterator] = function() {
			// ...
			return { next };
		};

		let [title, replies] = post;
		console.log(title);		// > New Features in JS
		console.log(replies);	// > 19

// Generators
	// Generator Functions - These are special functions from which we can use the yield keyword to return iterator objects.
	// it uses the * character to define that the function is a Generator Functions
		// Example 1 - Declaration
			function *nameList() {
				yield "Sam";		// { done: false, value: "Sam" }
				yield "Tyler";	// { done: false, value: "Tyler" }
			}

			// the star (*) can have whatever spaces between de key "function" and the name of that function.
			function *nameList() {}
			function* nameList() {}
			function * nameList() {}

		// Example 2 - for...of
			function *nameList() {
				yield "Sam";		// { done: false, value: "Sam" }
				yield "Tyler";	// { done: false, value: "Tyler" }
			}

			// Calling the function returns a generator object
			for(let name of nameList()) {
				console.log(name);	// > Sam
														// > Tyler
			}

			let names = [...nameList()];
			console.log(names); // > ["Sam", "Tyler"]

			let [first, second] = nameList();
			console.log(first, second); // > Sam Tyler

		// Example 3 - Refactoring the code that turn the object "post" iterable by using Generator Functions
			let post = {
				title: "New Features in JS",
				replies: 19
			};

			post[Symbol.iterator] = function *() {

				let properties = Object.key(this);
				for(let p of properties) {
					yield this[p];
				}
			};

			// The code above is the same as:
			/*
				post[Symbol.iterator] = function *() {
					yield this.title;
					yield this.replies;
				}
			*/

			for(let p of post) {
				console.log(p); // > New Features in JS
												// > 19
			}
