/**
 * Created by t_boyas on 5/5/16.
 */
var isPalindrome = function(x) {

    var t = x;
    var isNegative = x < 0? true: false,
        divider = 10,
        result = 0,
        reminder;

    if(x < 10 && x >0){
        return true;
    }else if(x < 0){
        return false;
    }


    if (isNegative) {
        x = x * (-1);
    }


    while (x !== 0) {
        reminder = x % 10;
        result = result * 10 + reminder;

        x = Math.floor(x / 10);
    }

    if (result >= 2147483648) {
        return false;
    }

    var _result= isNegative? result * (-1) : result;

    if(t == _result){
        return true;
    }else{
        return false;
    }

};

var x = isPalindrome(11);
console.log(x);