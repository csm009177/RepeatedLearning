function test(name, number, price) {
   const privName = name;
   const privNumber = number;
   const privPrice = price;

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
      this.privNumber = newNumber;
    },   
    setPrice : function(newPrice) {
      this.privPrice = newPrice;
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