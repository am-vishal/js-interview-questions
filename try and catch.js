let existingVariable = "I'm alive !";
try {
  console.log("existingVariable exists and contains : " + existingVariable);
  console.log("UndeclaredVariable exists and contains : " + UndeclaredVariable);
}
catch (ex) {
  if (ex instanceof ReferenceError) {
    console.log("Not good but I caught exception : " + ex);
  }
}
console.log("Looks like my script didn't crash :)");

//Output: 
//existingVariable exists and contains : I'm alive !
//Not good but I caught exception : ReferenceError: UndeclaredVariable is not defined
//Looks like my script didn't crash :)
