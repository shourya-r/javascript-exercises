const repeatString = function(string, numRepeat) {
    let ans = "";
    if(numRepeat<0){
        return "ERROR";
    }
    for(let i = 0; i<numRepeat; i++){
        ans+=string;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
