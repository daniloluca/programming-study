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
	// Sample 1
	function countDownTimer(target, options = {}){
		let defaults = {
			time: 7200,
			delay: 100,
			direction: 'right'
		}

		let settings = Object.assign({}, defaults, options); // the first parameter of Object.assign is the final merge object, if you put an object in there it will be overwrited.
		//...
	}

	// Sample 2
	let a = 1;
	let b = 2;
	let c = 3;

	let obj1 = {a, c};
	let obj2 = {b};

	let result = Object.assign({}, obj1, obj2);

	console.log(result); // > {a: 1, b: 2, c: 3}

	// Sample 3
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
	// Sample 1
	let users = ['Sam', 'Tyler', 'Brook'];

	let [a, b, c] = users;

	console.log(a, b, c); // > Sam Tyler Brook

	// Sample 2
	let users = ['Sam', 'Tyler', 'Brook'];

	let [a, , c] = users;

	console.log(a, c); // > Sam Brook

	// Sample 3 - Combining rest parameters
	let users = ['Sam', 'Tyler', 'Brook'];

	let [first, ...rest];

	console.log(first, rest); // > Sam ['Tyler', 'Brook']

	// Sample 4
	function activeUsers(){
		let users = ['Sam', 'Tyler', 'Brook'];
		return users;
	}

	let [a, b, c] = activeUsers();
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

	let admin = users.find(user => user.admin); // Returns first object for which user.admin is true

	console.log(admin); // > {'login': 'Brook', 'admin': true}
