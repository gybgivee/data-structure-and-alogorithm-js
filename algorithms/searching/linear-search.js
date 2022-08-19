/* linear : O(n)

*/
var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

console.log(beasts.indexOf('Godzilla'));//using linear return index

//using linear return index
console.log(beasts.findIndex(function(item){
  return item === 'Godzilla';
}));
//using linear return item
console.log(beasts.find(function(item){
  return item === 'Godzilla';
}));
//using linear return boolean
console.log(beasts.includes('Godzilla'));

