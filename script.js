var HamburgerObj = {
  SIZE_SMALL: [50, 20],
  SIZE_BIG: [100, 40],
  STUFFING_CHEESE: [10, 20],
  STUFFING_SALATE: [20, 5],
  TOPPING_POTETOES: [15, 10],
  TOPPING_SAUCE: [15, 0],
  TOPPING_MAYO: [20, 5]
};

function Hamburger(size, stuffing){
  this.size = size;
  this.stuffing = stuffing;
  var topping = [];

  this.addTopping = function(toppingItem){  
    topping.push(toppingItem);
  };

  this.calculateCalories = function(){
    var toppingSum = 0;
    for (var i = 0; i < topping.length; i++){
    toppingSum += topping[i][1];
    }
    return this.size[1] + this.stuffing[1] + toppingSum;
  };

  this.calculatePrice = function(){
    var toppingCal = 0;
    for (var i = 0; i < topping.length; i++){
    toppingCal += topping[i][0];
    }
    return size[0] + stuffing[0] + toppingCal;
  };
}

var hamburger = new Hamburger(HamburgerObj.SIZE_SMALL, HamburgerObj.STUFFING_CHEESE);
console.log(hamburger);
console.log(hamburger.addTopping(HamburgerObj.TOPPING_MAYO));
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());
hamburger.addTopping(HamburgerObj.TOPPING_SAUCE);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());// var ham = Hamburger.addTopping;


// // маленький гамбургер с начинкой из сыра
// var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// // добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // спросим сколько там калорий
// console.log(“Calories: “ + hamburger.calculateCalories());
// // сколько стоит
// console.log("Price: “ + hamburger.calculatePrice());
// // я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// // А сколько теперь стоит?
// console.log("Price with sauce: “ + hamburger.calculatePrice());