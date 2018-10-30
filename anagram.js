//input 2 strings
function anagram(w1, w2) {
    if(w1.length !== w2.length) {
        return false;
    }
    let arr1 = w1.split('');
    let arr2 = w2.split('');
    let fc1 = {};
    let fc2 = {};
    for(val of arr1) {
        fc1[val] = (fc1[val] || 0) + 1;
    }
    for(val of arr2) {
        fc2[val] = (fc2[val] || 0) + 1;
    }
    for(key in fc1) {
        if(!(key in fc2)) {
            return false;
        }
        if(fc1[key] !== fc2[key]) {
            return false;
        }
    }
    return true;
}
//output