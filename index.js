var arr = [1,2,3,1,4,5,2,5]
for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
        if (arr[i] == arr[j]) {
            console.log(arr[i]);
        }
    }
}