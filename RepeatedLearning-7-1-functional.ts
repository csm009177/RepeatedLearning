// 사칙연산 함수 정의
function add (a:number, b:number): number{
  return a+b;
}
function subtract (a:number, b:number): number{
  return a -b;
}
function multiply (a:number, b:number): number{
  return a*b;
}
function divide (a:number, b:number): number{
  if(b===0){
    throw new Error("0으로 나눌 수 없습니다")
  }
  return a/b;
}

// 연산 결과물 출력하는 함수
/**
 * @param a number
 * @param b number
 * @returns void
 * @description 사칙연산 결과를 출력합니다
 * 
 * 함수 리턴을 정적으로 명시해주는 typescript의 문법중에 void 라는 단어는 직역하면 '회피하디' 라는 뜻이며 함수의 리턴값이 없다는 것을 명시적으로 표현하기 위해 사용합니다
 */

function printOperations(a:number, b:number):void {
  const results = [
    {operation : '덧샘',   result: add(a,b)},
    {operation : '뺄샘',   result: subtract(a,b)},
    {operation : '곱셈',   result: multiply(a,b)},
    {operation : '나눗셈', result: divide(a,b)},
  ];
  console.table(results);
}

//함수 사용 예
printOperations(10,5); // 10과 5를 사용한 사칙연산 결과 출력