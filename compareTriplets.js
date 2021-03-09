function compareTriplets(a, b) {
    const aliceArray = a;
    const bobArray = b;
    let aliceTotal = 0; 
    let bobTotal = 0;
    
    // both arrays have length of 3 so aliceArray.length 
    // or bobArray.length will both work
    for (let i = 0; i < aliceArray.length; i++) {
        if (aliceArray[i] > bobArray[i]) {
            aliceTotal++; // alice gets a point
        } else if (aliceArray[i] < bobArray[i]) {
            bobTotal++; // bob gets a point
        } else {
            continue; // they both get zero points so skip
        }
    }
    return [aliceTotal, bobTotal];
}
compareTriplets([1,0,0,0],[2,3,4,5])
//Output: [0,4]
