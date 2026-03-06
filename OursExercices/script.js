const bears = [
	{
	name: 'Winnie',
	hunger: 10
	},
	{ 
		name: 'Baloo',
		hunger: 6
	},
	{ 
		name: 'Yogi',
		hunger: 9
	},
	{ 
		name: 'Paddington',
		hunger: 2
	},
	{ 
		name: 'Chicago',
		hunger: 9
	}
];

function averageHunger() {
    let totalHunger = 0;
for (let i=0; i<bears.length ; i++) {
    totalHunger += bears[i].hunger;
    
} 
console.log(totalHunger / bears.length);
}
averageHunger(bears);