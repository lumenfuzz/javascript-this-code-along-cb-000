const app = "I don't do much."

function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
}

var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles",
  name: "peanut butter and jelly",
  serve: function() {
    console.log("here's your " + this.name + ", enjoy!");
  }
}

function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  this.serve = function() {
    console.log("here's your " + this.name + ", enjoy!");
  }
}

var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"rectangle");
// add name to the blt before serving
blt.name = "BLT";
