/** 
 * 아래 세개의 함수는 그저 문자열을 리턴할 뿐이다
 * 변수와 '결과물'로서는 다른점이 전혀 없지만, 함수를 사용하면
 * 매개변수가 적절하게 작성되어있지 않은 한,
 * 세개의 함수 리턴을 수정할 방법은 없다
 * 이러한 함수를 '순수함수' 라고 한다
 * 불변(변하지 않는, immutable)한 값을 리턴하는 함수이다
*/

let zeroMemoryLoader = "포켓몬";
zeroMemoryLoader = "피카츄";

/**
 * 위의 변수 zeroMemoryLoader는 불변이 아니다 (mutable)
 * 즉, 변수의 값을 변경할 수 있다. 변수 선언 zeroMemoryLoader도 작성법을 어기지 않는다면, 언제든지 변할 수 있다는 뜻이 된다
 */

function firstLoader() {
  return "파이리";
}

function secondLoader() {
  return "리자드";
}

function threeLoader() {
  return "리자몽";
}

function evolutionContainer() {
  const first = firstLoader();
  const second = secondLoader();
  const third = threeLoader();
  return `${first} -> ${second} -> ${third}`;
}

const finalEvolution = evolutionContainer();
console.log(finalEvolution);

/**
 * 해당 예제는 순수함수 세개를 조합하는 간단한 예제이지만,
 * 이것이 HTML, CSS, Javascript를 loading(적재)하는 방식과 동일하다
 * 따라서 webpack과 같은 번들러가 적절하게 동작하기 위해서는 위와 같은 '절차'를 따라야 한다
 */