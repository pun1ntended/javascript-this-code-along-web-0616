const app = "I don't do much."
function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log(`Your ${this.name} includes: ${this.ingredients.join(", ")}. Yum!`)
  }
}

function serve(customer) {
  console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
}
var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
};

function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

var sally = new Customer("Sally", "4");
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);
