/**
 * Created by t_boyas on 5/5/16.
 */
//5.Longest Palindromic Substring
//Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.

///**
// * @param {string} s
// * @return {string}
// */
//var longestPalindrome = function(s) {
//
//};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    var hash ={};


    for(var index=0;index < s.length;inde++){
        if(hash[s[index]]){

        }else{
            hash[s[index]] = index;
        }

    }


    var index =0;
    var len = s.length;
    midNum = Math.floor(len/2);
    while(index <= len && index <= midNum ){
        if(s.charAt(index) !== s.charAt(len-1)){
            return false;
        }
        index++;

        len--;
    }
    return true;
};

var polin= longestPalindrome('nivin');
console.log(polin);