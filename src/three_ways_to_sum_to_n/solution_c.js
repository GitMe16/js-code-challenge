// Problem 1 C
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

var sum_to_n = function(n) {
    // your code here
    let bottom = 1, top = n, sum = 0;
    while (n - bottom > 0) {
        sum += bottom + n;
        bottom++;
        n--;
    }
    if (n - bottom === 0) {
        sum += n;
    }
    return sum;
};