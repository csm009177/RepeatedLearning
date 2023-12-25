class Minam {
  static sayHello() {
    return "hello kongukjae";
  }
}

class Chunam {
  sayHello() {
    return "bye kongukjae";
  }
}

// Minam 클래스의 static 메서드 사용 예시
console.log(Minam.sayHello()); //hello kongukjae

// Chunam 클래스의 인스턴스 생성 및 메서드 사용 예시
// new 라는 키워드를 통해서 chunamInstance 라는 인스턴스(객체)를 생성
// chunamInstance 인스턴스에는 sayHello 메서드가 있으므로 사용이 가능하다
// 하지만 위 Minam 클래스의 sayHello는 new 키워드 없는, 즉 인스턴스를 따로 생성하지 않아도 사용이 가능하다.
// 일반적인 인스턴스 생성은 다분히 동적인 방식이라고 할 수 있다
const chunamInstance = new Chunam();
console.log(chunamInstance.sayHello()); // bye kongukjae