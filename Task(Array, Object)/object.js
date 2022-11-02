// Task1
const GObj = {
  a: 1,
  b: 2,
  c: true,
  name: 'sourov',
};

//___________________________
// entries
const keyValueArr = Object.entries(GObj);

// print all key value
keyValueArr.forEach(([key, value]) => {
  //   console.log(`key:${key} value: ${value}`);
});
//___________________________

//___________________________
// hasOwn
const hasName = Object.hasOwn(GObj, 'name'); // true
const hasRoll = Object.hasOwn(GObj, 'roll'); //flase
// console.log(hasName);
// console.log(hasRoll);
//___________________________

//___________________________
// keys
const keys = Object.keys(GObj); // [a, b, c, name]
// console.log(keys);
//___________________________

//___________________________
// values
const values = Object.values(GObj); // [1, 2, true, 'sourov']
// console.log(values);

// Task 2
//_____________________________
// marging two obj with spred
const obj1 = {
  name: 'sourov',
  course: 'ReactJs',
};

const obj2 = {
  batch: 1,
  mentor: 'Kazi Tajnur Islam',
};

const margedObj = { ...obj1, ...obj2 };
// console.log(margedObj);
//______________________________
