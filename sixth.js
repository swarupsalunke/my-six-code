function findZeroSumSubarrays(arr) {
    let result = [];
    let prefixSumMap = new Map();
    let prefixSum = 0;

    
    prefixSumMap.set(0, [-1]);

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        if (prefixSumMap.has(prefixSum)) {
            for (let startIndex of prefixSumMap.get(prefixSum)) {
                result.push([startIndex + 1, i]);
            }
        }

       
        if (!prefixSumMap.has(prefixSum)) {
            prefixSumMap.set(prefixSum, []);
        }
        prefixSumMap.get(prefixSum).push(i);
    }

    return result;
}


let arr = [1, 2, -3, 3, -1, 2];
console.log(findZeroSumSubarrays(arr)); 

