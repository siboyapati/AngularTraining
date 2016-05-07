/**
 * Created by t_boyas on 5/5/16.
 */

var threeSum = function (nums) {
    var len = nums.length;
    var returnArray = [];

    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            var target = (nums[i] + nums[j]) * -1;
            var _index = nums.indexOf(target);
            if (_index != -1) {
                returnArray.push([nums[i], nums[j], nums[_index]])
            }


        }
    }
    return returnArray;


}

var x = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(x);