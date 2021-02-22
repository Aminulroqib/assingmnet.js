function getArraySum(number){
    var sum = 0;
    for(var i = 0; i < number.length; i++){
        var element = number[i];
        sum = sum + element;
    }
    return sum;
}
 var number = [23, 31, 45, 67, 38, 45, 24];
 var result = getArraySum[number]
console.log(result);