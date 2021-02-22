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