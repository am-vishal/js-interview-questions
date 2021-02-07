// If you declare variable (var keyword)  inside the block statement, the variable will leak outside.
  var bodyWeight = 50;
  if (bodyWeight > 49) {
    var water = 1.4;
    console.log(`For body weight of ${bodyWeight}kg, you should drink water atleast ${water}litre`);
  }
  console.log(water);
