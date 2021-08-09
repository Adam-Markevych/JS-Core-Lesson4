
let mas1 = [`html`,`css`,`html`,`js`];
let mas2 = [`html`,`css`,`js`,`html`,`js`,`python`,`js`,`scss`];

function removeDuplicates(arr) {
    let obj = {};
    let out = [];
    for (let i = 0; i < arr.length; i++) {
      let str = arr[i];
      obj[str] = true; 
    }
       for (i in obj) {
         out.push(i);
      }
      console.log(out);
  }
const arr1 = removeDuplicates(mas1);
const arr2 = removeDuplicates(mas2);