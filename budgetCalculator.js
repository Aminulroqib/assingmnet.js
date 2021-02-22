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


