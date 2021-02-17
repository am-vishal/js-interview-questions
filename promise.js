let prom = new Promise((res, rej) => {
  let num = 1 + 1
  if (num == 2) {
    res('Success')
  } else {
    rej("Failed")
  }
})
prom.then((message) => {
  console.log("this is then " + message);
}).catch((message) => {
  console.error("this is cathch " + message)
})
