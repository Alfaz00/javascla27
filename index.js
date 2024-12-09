// two arrays

// const array1 =[1,3,5,2,11,9,18,20];

// const array2 =[22,23,11,0,3,99,7,5,4];

// const combinedArray = [...array1, ...array2];

// console.log(combinedArray);



// ( get index 1-7)

// const newArray =[1,3,5,2,11,9,18,20,22,23,11,0,3,99,7,5,4]

// const slicedArray = newArray.slice(1,8);

// console.log(slicedArray);


//  array filter

const slicedArray =[3,5,2,11,9,18,20];

const evenNumbers = slicedArray.filter(number => number % 2===0);

console.log(evenNumbers);