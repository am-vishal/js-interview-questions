 let arr =  [41,1,2,3,4,'musk',1,2];
  let commonElement = arr.sort(); 
  var results = [];

  for (let i = 0; i <= commonElement.length - 1; i++) {
    if (commonElement[i+1] == commonElement[i]) {
      results.push(commonElement[i]);
    }
  }
console.log(results);

//Output: [1, 2]
