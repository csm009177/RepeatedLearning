class Minam {
  static sayHello():string {
    return "hello kongukjae";
  }
}
class Chunam {
  sayHello() :string{
    return "bye kongukjae";
  }
}

// Minam 클래스의 static 메서드 사용 예시
console.log(Minam.sayHello()); //hello kongukjae

// Chunam  클래스의 인스턴스 생성 및 메서드 사용 예시
const chunamInstance = new Chunam();
console.log(chunamInstance.sayHello()); // bye kongukjae