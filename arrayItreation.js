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
