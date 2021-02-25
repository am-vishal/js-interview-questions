//Example:1
const arr = ["a", "b", "c"];
const iterator = arr.values();
let entry
while (!(entry = iterator.next()).done) {
    console.log(entry.value);
}

//Example:2
const arr = ["a", "b", "c"];
for(let i = 0;i < arr.length;i++){
   console.log(arr[i]);
}

//Example:3
const arr = ["a", "b", "c"];
for(let elements of arr){
   console.log(elements);
}

//Example:4
const arr = ["a", "b", "c"];
arr.forEach(ele => console.log(ele));

//Example:5
const arr = ["a", "b", "c"];
let index = 0;
while (index < arr.length) { 
    console.log(arr[index]); 
    index++; 
}

//Example:6
const arr = ["1", "2", "3"];
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < arr.length);

