Hamburger.SIZE_SMALL = [50, 20];
Hamburger.SIZE_BIG = [100, 40];
Hamburger.STUFFING_CHEESE = [10, 20];
Hamburger.STUFFING_SALATE = [20, 5];
Hamburger.TOPPING_POTETOES = [15, 10];
Hamburger.TOPPING_SAUCE = [15, 0];
Hamburger.TOPPING_MAYO = [20, 5];

function Hamburger(size, stuffing){
  
  this.objHamburger = {
    size: size,
    stuffing: stuffing
  };

  var topping = [];

  this.addTopping = function(toppingItem){  
    topping.push(toppingItem);
  };

  this.calculateCalories = function(){
      var toppingSum = topping.reduce(function(sum, current) {
        return (topping.length === 1) ? +current.slice(1) : sum + +current.slice(1);
      }, 0);
    return size[1] + stuffing[1] + toppingSum;
  };

  this.calculatePrice = function(){
    var toppingCal = topping.reduce(function(sum, current) {    
        return (topping.length === 1) ? +current[0] : sum + +current[0];   
    }, 0);
    return size[0] + stuffing[0] + toppingCal;
  };
}

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log(hamburger);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());


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
