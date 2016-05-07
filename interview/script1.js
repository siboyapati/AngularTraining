/**
 * Created by t_boyas on 5/4/16.
 */
var arr = ["tom","tim","brad","pit",'kate','kate','kate','tim','tim','tom'];


var strMap = {};
var rankedArr =[];

function sortString(arr){

    arr.forEach(function(val){
        if(strMap[val] == null){
            strMap[val] = 1;
        }else{
            strMap[val]++;
        }
    })

    for(var key in strMap){
        rankedArr.push({ value:key, count :strMap[key] })
    }


    console.log('unsorted array', rankedArr);
    debugger;

    rankedArr.sort(function(a,b){
        return b.count - a.count;
    })

    console.log('sorted array', rankedArr);



}

