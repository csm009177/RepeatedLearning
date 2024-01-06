function Pokemon(name, type) {
  let privateName = name;
  let privateType = type;

  return {
    getName : function() {
      return privateName;
    },
    getType : function() {
      return privateType;
    },
    setType : function(newType){
      privateType = newType;
    }
  };
}

const pikachu = Pokemon("피카츄", "전기");
console.log(pikachu.getName()); // 피카츄
console.log(pikachu.getType()); // 전기
pikachu.setType("노말")
console.log(pikachu.getType()); // 노말

