/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const cat = {
   species: 'cat',
   name: 'Mars',
   hands: undefined,
   gender: 'male',
   legs: '4',
   saying: 'mmeeoww',
}
const dog = {
   species: 'dog',
   name: 'Lord',
   hands: undefined,
   gender: 'male',
   legs: '4',
   saying: 'woof-wooff!',
}
const man = {
   species: 'human',
   name: 'Ron',
   hands: 2,
   legs: 2,
   gender: 'male',
   saying: 'Ahoj!',
}
const women = {
   species: 'human',
   name: 'Hermione',
   hands: 2,
   legs: 2,
   gender: 'female',
   saying: 'Hello',
}

const creatures = [cat, dog, man, women];
const key = ["species", "name", "hands", "legs", "gender", "saying"]
// ======== OUTPUT ========
print(cat.species + ';' + cat.name + ';' + cat.hands + ';' + cat.gender + ';' + cat.legs + ';' + cat.saying);
print(dog.species + ';' + dog.name + ';' + dog.hands + ';' + dog.gender + ';' + dog.legs + ';' + dog.saying);
print(man.species + ';' + man.name + ';' + man.hands + ';' + man.legs + ';' + man.gender + ';' + man.legs + ';' + man.saying);
print(women.species + ';' + women.name + ';' + women.hands + ';' + women.legs + ';' + women.gender + ';' + women.legs + ';' + women.saying);
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


