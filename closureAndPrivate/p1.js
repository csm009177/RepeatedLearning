function test(name, number, price) {
  let privName = name;
  let privNumber = number;
  let privPrice = price;

  return {
    getName : function() {
      return privName;
    },
    getNumber : function() {
      return privNumber;
    },
    getPrice : function() {
      return privPrice;
    },
    setNumber : function(newNumber) {
      privNumber = newNumber;
    },   
    setPrice : function(newPrice) {
      privPrice = newPrice;
    },   
  }
}

const cake = test("케잌", 8, 1500);
console.log(cake.getName());   // 케잌
console.log(cake.getNumber()); // 8
console.log(cake.getPrice());  // 1500
cake.setNumber(10)             
console.log(cake.getNumber());   // 10
cake.setPrice(15000)             
console.log(cake.getPrice());  // 15000