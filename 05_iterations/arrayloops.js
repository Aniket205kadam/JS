/* High Order Array Loops */

// ["", "", ""]
// [{}, {}, {}]

// for of

const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello world!";

for (const greet of greetings) {
    //don't want to print the space 
    if (greet === ' ') {
        continue;
    }
    // console.log(`Each char is ${greet}`);
}

// Maps
//maps prevent the order
const map = new Map();
        //key  values
map.set('IN', "India");
map.set('USA', "United States America");
map.set('Fr', "France");
map.set('IN', "India"); // map is unique, so the second entry is not inserted

// console.log(map);
// console.log(map.get('Fr'));
// console.log(map.get('IN'));

// for (const key of map) {
//     console.log(key[1]);
// }

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}

const games = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// error
// for (const game of games) {
//     console.log(game);
// }

// error
// for (const [key, value] of games) {
//     console.log(`${key} :- ${value}`);
// }

const superheroes = [
    {
        name: 'Iron Man',
        alias: 'Tony Stark',
        powers: ['flight', 'super strength', 'energy blasts'],
        weaknesses: ['vulnerability to magnets', 'ego'],
        gadgets: ['repulsor ray', 'jetpack', 'AI assistant'],
        vehicle: 'Iron Legion drone',
        team: 'Avengers',
        archNemesis: 'Ultron'
    },
    {
        name: 'Captain America',
        alias: 'Steve Rogers',
        powers: ['super strength', 'agility', 'shield'],
        weaknesses: ['vulnerability to magic', 'overprotectiveness'],
        gadgets: ['shield', ' combat knife'],
        vehicle: 'S.H.I.E.L.D. motorcycle',
        team: 'Avengers',
        archNemesis: 'Red Skull'
    },
    {
        name: 'Black Widow',
        alias: 'Natasha Romanoff',
        powers: ['peak human physical condition', 'martial arts expertise', ' espionage training'],
        weaknesses: ['vulnerability to emotional manipulation', ' troubled past'],
        gadgets: ['wrist-mounted grappling hook', 'exploding widow bites'],
        vehicle: 'S.H.I.E.L.D. helicopter',
        team: 'Avengers',
        archNemesis: 'Taskmaster'
    },
    {
        name: 'Thor',
        alias: 'Thor Odinson',
        powers: ['super strength', 'weather control', 'hammer'],
        weaknesses: ['vulnerability to magic', 'arrogance'],
        gadgets: ['Mjolnir', 'weather control'],
        vehicle: 'Bifrost Bridge',
        team: 'Avengers',
        archNemesis: 'Loki'
    },
    {
        name: 'Spider-Man',
        alias: 'Peter Parker',
        powers: ['super strength', 'agility', 'web-slinging'],
        weaknesses: ['vulnerability to Venom', 'personal life struggles'],
        gadgets: ['web shooters', 'spider-sense'],
        vehicle: 'Spider-Mobile',
        team: 'Avengers',
        archNemesis: 'Green Goblin'
    },
    {
        name: 'Wonder Woman',
        alias: 'Diana Prince',
        powers: ['super strength', 'speed', 'agility', 'magic lasso'],
        weaknesses: ['vulnerability to magic', 'naivety'],
        gadgets: ['Lasso of Truth', 'invisible jet'],
        vehicle: 'Invisible Jet',
        team: 'Justice League',
        archNemesis: 'Ares'
    },
    {
        name: 'Batman',
        alias: 'Bruce Wayne',
        powers: ['peak human physical condition', 'martial arts expertise', ' detective skills'],
        weaknesses: ['vulnerability to emotional manipulation', 'obsessiveness'],
        gadgets: ['Batarangs', 'grappling hook', 'Batmobile'],
        vehicle: 'Batmobile',
        team: 'Justice League',
        archNemesis: 'Joker'
    }
  ];

  let count = 1;

  for (const hero of superheroes) {
    console.log(hero.name);
  }