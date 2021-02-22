
//assignment-kilometerToMeter
function kilometerToMeter(km){
    var meter = km * 1000; //[as 1km = 1000m]
    return meter;
}

var nanaKmToM = kilometerToMeter (111);
console.log(nanaKmToM);
var naniKmToM = kilometerToMeter (310);
console.log(naniKmToM);

//assignment-budgetCalculator

function budgetCaculator(watch, phone, laptop){
    var product1 = watch * 50;
    var product2 = phone * 100;
    var product3 = laptop * 500;
    var result = product1 + product2 + product3;
    return result;

}

var total = budgetCaculator(4, 5, 6);
console.log(total);

var total1 = budgetCaculator(12, 10, 8);
console.log(total1);

//assignment-hotelCost

var days = 71;
var hotelCost = 0;

if(days <= 10){
    hotelCost = days * 100;
} else if(days <= 20){
    var first10 = 10 * 100;
    var remaining = days - 10;
    var second10 = remaining * 80;
    hotelCost = first10 + second10;
}else{
    var first10 = 10 * 100;
    var second10 = 10 * 80;
    var remaining = days - 20;
    var moreDays = remaining * 50
    hotelCost = first10 + second10 + moreDays;
}

console.log(hotelCost);

//assignment-megaFriend

var Friend = ['kabul', 'babul', 'shumit', 'abidul', 'shihabuddin']
var megaFriend = Friend[0];

for(i=0; i < Friend.length; i++){
    var element = Friend[i];
} if(element > Friend){
    megaFriend = element;
}
console.log(megaFriend);