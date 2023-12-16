//https://leetcode.com/problems/longest-common-prefix/

// How to solve this question
//what are the things we can do 
var longestCommonPrefix = function(strs) {
    strs.sort();
    let ans = "";
    for(let i=0; i< Math.min(strs[0].length,strs[strs.length-1].length); i++){
        if(strs[0][i] != strs[strs.length-1][i]){
            return ans;
        }
        ans = ans+strs[0][i];
    }
    return ans;
};