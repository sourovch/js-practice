const GArr = [1, 2, 3, 4];
const GObj = {
  name: 'sourov',
  course: 'ReactJs',
  batch: 1,
  mentor: 'Kazi Tajnur Islam',
};
// Task 1
//________________________________
// simple for loop
for (let i = 0; i < GArr.length; i++) {
  // iterating GArr
  const arrValue = GArr[i];
  //   console.log(`index: ${i}, value: ${arrValue});
}

const keys = Object.keys(GObj);

for (let i = 0; i < keys.length; i++) {
  //iterating GObj
  const key = keys[i];
  //   console.log(`key: ${key}, value: ${GObj[key]}`);
}
//_________________________________

// Task 2
//_________________________________
// for-of loop
for (let value of GArr) {
  //   console.log(value);
}
//__________________________________

// Task 3
//__________________________________
for (let key in GObj) {
  //   console.log(`key: ${key}, value: ${GObj[key]}`);
}
//__________________________________
