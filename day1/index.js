
//LeetCode Link
//https://leetcode.com/problems/palindrome-number/description/

/**
 * @param {number} x
 * @return {boolean}
 */

//Brute Force Approach
// var isPalindrome = function(x) {
//     //convert this no to a string
//     // we know string is an array of characters so we can loop on each character then check each character whether they are matching or not
//     const stringNo = x.toString();
//     let a= 0;
//     let b= stringNo.length-1;
//     while(a<b){
//         if(stringNo[a] != stringNo[b]){
//             return false;
//         }
//         a++;
//         b--;
//     }
//     return true;
// };

// Optimise Solution
var isPalindrome = function(x) {
    if(x < 0) return false;
    let temp = x;
    let reversed = 0;
    while(temp != 0){
        let digit = temp % 10;
        reversed = reversed * 10 + digit;
        temp = ~~(temp/10);
    }
    console.log(reversed);
    return (reversed == x);
}

//There is another solution which we can try istead to checking from start to end digit we can traverse till half then the solution may be optimise better