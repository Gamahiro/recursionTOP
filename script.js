
//creates a fibonacci sequence containing n progressive sequence numbers iteratively
function fibs(n) {
    if(n <= 1) return [0]

    let arr = [0, 1]

    for (let i = 1; i <= n - 2; i++) {
        const element = arr[i];
        arr.push(arr[i - 1] + arr[i]);
        console.log(`arr: ${arr} length: ${arr.length}`);        
    }
    return arr;
}
//creates a fibonacci sequence containing n progressive sequence numbers recursively
function fibsRec(n) {
    if(n === 1) return [0, 1];

    let sq = fibsRec(n - 1);
    sq.push(sq[sq.length - 1] + sq[sq.length - 2])
    return sq;
}

//sorts an array in ascending order recursively
function mergeSort(arr) {
    if (arr.length < 2) return arr;

    let middle = Math.abs(arr.length - arr.length / 2);
    let end = arr.length;

    let arr2 = arr.splice(middle, end);

    
    return merge(mergeSort(arr), mergeSort(arr2));

}

function merge(left, right) {

    const newArr = [];
    let iLeft = 0;
    let iRight = 0;


while(iLeft < left.length && iRight < right.length) {
    
        if(left[iLeft] < right[iRight]) {
            newArr.push(left[iLeft]);
            iLeft++;
        } else {
            newArr.push(right[iRight]);
            iRight++;
        }
}

while(iLeft < left.length) {
    newArr.push(left[iLeft]);
    iLeft++;
}
while(iRight < right.length) {
    newArr.push(right[iRight]);
    iRight++;
}
return newArr;
}