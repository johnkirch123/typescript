// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
};

let favoriteActivities: string[];
favoriteActivities = ['Sports', '1'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
