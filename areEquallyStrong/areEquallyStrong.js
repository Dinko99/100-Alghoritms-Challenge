function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight){
    const you = [yourLeft, yourRight].sort((a,b) => b-a)
    const friend = [friendsLeft, friendsRight].sort((a,b) => b-a)
    return you[0] === friend[0] && you[1] === friend[1]
}

console.log(areEquallyStrong(10,15,15,10));
console.log(areEquallyStrong(15,10,15,10));
console.log(areEquallyStrong(15,10,15,9));
console.log(areEquallyStrong(9,16,15,10));