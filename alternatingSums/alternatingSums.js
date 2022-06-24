function alternatingSums(arr){
    const teamOne = []
    const teamTwo = []
    for(let i = 0; i < arr.length; i++){
        i === 0 || i % 2 === 0 ? teamOne.push(arr[i]) : teamTwo.push(arr[i])
    }
    return [teamOne.reduce((acc, cur)=> acc+cur), teamTwo.reduce((acc, cur)=> acc+cur)]
}

console.log(alternatingSums([50,60,60,45,70]));