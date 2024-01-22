/**
 * closure 패턴을 원활하게 사용하기 위해
 * typescript의 강력한 기능인 '인터페이스' 기능을 통해
 * 주요구성과 사용방법을 정의하였다
 */

interface Counter {
  increment(): void;
  decrement(): void;
  getCount() : number;
}

/**
 * 타입설정에 따라 다르지만, 일반적인 형태
 * 함수 counter()는 위 인터페이스를 '따른다' 라고 명시된다
 * 제작자는 Counter 인터페이스가 무엇인지 몰라도,
 * 작성하면서 에러를 통해 인터페이스를 따르지 않았다는 것을 알 수 있다
 */

function counter() : Counter {
  let count : number = 0; // private 변수, 외부에서 접근 불가능
  // 함수형 프로그래밍에서는 외부에서 접근 불가능한 변수를 '클로저'라고 한다
  // 보안측면에서 count 변수는 제작자'만' 접근이 가능하다
  return {
    increment() : void {
      count++;
    },
    decrement() : void {
      count--;
    },
    getCount() : number {
      return count;
    },
  };
}

/**
 * counter() 함수의 반환값은
 * Counter 인터페이스를 따르는 객체이다
 * getCount() 함수는 객체지향의 '캡슐화' 개념을 따르고 있다
 * Class 문법의 static 키워드와 유사하다
 */

const closureCounter = counter();
// 함수를 호출했을 뿐인데 아래의 getCount()는 숫자를 리턴한다
// 전역변수를 사용하지 않고도, 함수를 호추랳ㅆ을 때의 상태를 기억하고 있다
// 전역변수는 그 자체로 메모리 누수(memory leak)의 원인이 된다
// 함수를 호출했을 때의 상태를 기억하는 것은 함수형 프로그래밍의 핵심이다
console.log(closureCounter.getCount()); //? 0
closureCounter.increment();
closureCounter.increment();
closureCounter.increment();
console.log(closureCounter.getCount()); //? 3
closureCounter.decrement();
closureCounter.decrement();
console.log(closureCounter.getCount()); //? 1