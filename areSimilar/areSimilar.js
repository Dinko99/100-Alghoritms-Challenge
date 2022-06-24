function areSimilar(a, b){
    let count = [];
    let filteredArray = []
    for(let i = 0; i < a.length ;i++){
        if(a[i] !== b[i]){
                    filteredArray.push(a[i])
            }
        }
    for(let i = 0; i < a.length - 1;i++){
        if(a[i] !== b[i+1] && a[i] !== b[i]){
                count.push(a[i])
            }
        }
    if(a.toString() === b.toString()){
        return true
    }
    else if(a.length === 3 && a.reverse().toString() === b.toString()){
        return false
    }
    else if(a.sort((a,b)=> b-a).toString() !== b.sort((a,b)=> b-a).toString()){
        return false
    }
    else if(filteredArray.length > 2){
        return false
    }
    else if(count.length > 1){
        return false
    }
    else {
        return true
    }
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([3, 2, 1], [2, 2, 1]));
console.log(areSimilar([3, 2, 2], [2, 2, 3]));
console.log(areSimilar([1,2,3,4,5,6], [1,2,3,5,6,4]));
console.log(areSimilar([1,2,3,4,5,6], [1,2,3,5,4,6]));
console.log(areSimilar([1, 4, 3, 2, 5], [1, 2, 3, 4, 5]));
console.log(areSimilar([1, 2, 7, 4, 5, 6, 3, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));