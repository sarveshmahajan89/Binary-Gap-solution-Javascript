// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // Implement your solution here
    const binaryNum = (N >>> 0).toString(2);
    let gap = 0, maxGap = 0;
    for (let i = 0; i <= binaryNum.length; i++ ) {
        if (binaryNum.charAt(i) == '1') {
            for (let j = i+1; j <= binaryNum.length; j++ ) {
                let updateNum = binaryNum.slice(j, binaryNum.length);
                if (updateNum.indexOf('1') >= 0) {
                      if (binaryNum.charAt(j) == '0') {
                      gap = gap + 1;
                  }
                  else {
                      maxGap = gap > maxGap ? gap : maxGap;
                      gap = 0;
                  }
                }
            }
        
        }
        return maxGap;
    }
}
