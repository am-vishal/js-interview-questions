const numRotation = 4;
const sampleArray = [1,2,3,4,5];
function rotLeft(arr, rotations) {
  const rotatedArray = [...arr]; 
for(let i =0; i<rotations;i++){
 const frontItem = rotatedArray.shift();
  rotatedArray.push(frontItem)
}
  return rotatedArray;
}
console.log(rotLeft(sampleArray,numRotation));

//Output: [5,1,2,3,4]
