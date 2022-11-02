// task 1
//________________________________
//________________________________
const GArr = [1, 2, 3, 4];

//_____________________________
// concat
const arrCon = [5, 6, 7, 8];

const conArr = GArr.concat(arrCon); // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(conArr);
//_____________________________

//_____________________________
// every
const isAllNum = GArr.every((elm) => typeof elm == 'number'); // true
// console.log(isAllNum);
//_____________________________

//______________________________
// fill
const GArrC = [...GArr];
const filledArr = GArrC.fill(0, 1, 3); // [1, 0, 0, 4] (main arr edited)
// console.log(filledArr);
//______________________________

//______________________________
// filter
const dirtyArr = ['name', 1, 3, 2, 4, false];
const filterdArr = dirtyArr.filter((elm) => typeof elm == 'number'); // [1, 3, 2, 4]
// console.log(filterdArr);
//______________________________

//______________________________
// find
const found = GArr.find((elm) => elm < 3); // 1
// console.log(found);
//______________________________

//______________________________
// findIndex
const foundIndex = GArr.findIndex((elm) => elm > 3); // 3
// console.log(foundIndex);
//______________________________

//______________________________
// forEach
GArr.forEach((elm) => {
  const temp = [];
  for (let i = 1; i < elm; i++) {
    temp.push(i);
  }
  //makes a simple pattarn
  //   console.log(temp.join(' '));
});
//_______________________________

//_______________________________
// from
const modArray = Array.from(GArr, (elm) => elm + 2); //[3, 4, 5, 6]
// console.log(modArray);
//_______________________________

//_______________________________
// includes
const isInclude = GArr.includes(3, 1); // true
// console.log(isInclude);
//--------------------------------

//________________________________
// isArray
const obj = {};
const isArray = Array.isArray(obj); // fasle
// console.log(isArray);
//________________________________

//________________________________
// join
const joinedArr = GArr.join('<'); // 1<2<3<4
// console.log(joinedArr);
//________________________________

//________________________________
// map
const newArr = GArr.map((elm) => {
  if (elm < 2) return elm + 1;
  else return elm - 1;
});
//[2, 1, 2, 3]
// console.log(newArr);
//________________________________

const copyArr = [...GArr];
//_________________________________
// pop
const x = copyArr.pop(); // x = 4, copyArr = [1, 2, 3]
// console.log(x, copyArr);
//_________________________________

//_________________________________
// push
copyArr.push(4); // copyArr = [1, 2, 3, 4]
// console.log(copyArr)
//_________________________________

//_________________________________
// reverse
copyArr.reverse(); // copyArr = [4, 3, 2, 1]
// console.log(copyArr);
//_________________________________

//_________________________________
//shift
const sr = copyArr.shift(); // copyArr == [3, 2, 1], sr == 1
// console.log(sr, conArr);
//_________________________________

//_________________________________
// slice
const sliced = GArr.slice(1, 3); // [2, 3]
// console.log(sliced);
//_________________________________

//_________________________________
// some
const isAnyNum = GArr.some((elm) => elm === 5); // false
// console.log(isAnyNum);
//_________________________________

//_________________________________
//sort
const unsorted = [3, 5, 1, 6, 4, 2];
unsorted.sort();
// console.log(unsorted);
//__________________________________

//__________________________________
// unshift
copyArr.unshift(4); // [4, 3, 2, 1]
// console.log(copyArr);

//__________________________________
//splice
copyArr.splice(1, 2, 0, 0); // [4, 0, 0, 1]
// console.log(copyArr);
//__________________________________

//________________________________
//________________________________
//task 2
//__________________________________
//contate with spread operator
const conArr1 = [1, 2, 3, 4, 5];
const conArr2 = [6, 7, 8, 9, 10];

const concatedArr = [...conArr1, ...conArr2];
console.log(concatedArr);
//__________________________________
