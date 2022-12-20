
//creates a fibonacci sequence containing n progressive sequence numbers iteratively
function fibs(n) {
    if(n <= 1) return 0

    let arr = [0, 1]

    for (let i = 1; i <= n - 2; i++) {
        const element = arr[i];
        arr.push(arr[i - 1] + arr[i]);
        console.log(`arr: ${arr} length: ${arr.length}`);        
    }
    return arr;
}

