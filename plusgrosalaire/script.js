// const people = [
// 	{ 
// 		name: 'Alice',
// 		salary: 23
// 	},
// 	{ 
// 		name: 'Bob',
// 		salary: 30
// 	},
// 	{ 
// 		name: 'Charlie',
// 		salary: 29
// 	},
// 	{ 
// 		name: 'David',
// 		salary: 20
// 	},
// 	{ 
// 		name: 'Eva',
// 		salary: 35
// 	},
// 	{ 
// 		name: 'Frank',
// 		salary: 30
// 	},
// ];
const people = [
	{ 
		name: 'Alice',
		salary: 23
	},
	{ 
		name: 'Bob',
		salary: 30
	},
	{ 
		name: 'Charlie',
		salary: 29
	},
	{ 
		name: 'David',
		salary: 20
	},
	{ 
		name: 'Eva',
		salary: 12
	},
	{ 
		name: 'Frank',
		salary: 30
	},
]
let result = [];
function highestSalary(people) {
	let maxPerson = people[0];
for (let i=0; i<people.length; i++) {
	if (people[i].salary > maxPerson.salary) {
		maxPerson = people[i];

	} } 
for (let i=0; i<people.length; i++) {
	if (people[i].salary === maxPerson.salary) {
		 result.push(people[i]);

	} } console.log(result);
} 
 


highestSalary(people);