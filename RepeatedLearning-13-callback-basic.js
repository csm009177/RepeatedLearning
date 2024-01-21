const stringExample = "참깨빵 위에 순쇠고기 패티 두장 특별한 소스 양상추 치즈 피클 양파까지";

function splitString (stringParams) {
  // split의 매개변수는 띄워쓰기로 처리되어 있습니다
  let result = stringParams.split('');
  return result;
}

function appendString(stringArray, callback) {
  let body = " ";
  // body는 단순 지역변수이며, 콜백함수에서 '전달"받아서 사용합니다.
  // 이것을 인자를 전달한다고 표현합니다
  // 여기서 지역변수 body는 클로저가 아닙니다
  // 호출되고 나서부터는 메모리 상에서 사라집니다
  // 눈에 보이지 않는 개념으로 다분히 추상적인 개념입니다
  stringArray.forEach((element) => {
    body = body + element; 
    // 위 보다는 아래가 보다 깔끔한 처리입니다
    // body += elemnt;
  });
  callback(body);
};

console.log(appendString(splitString(stringExample), (body) => {
  console.log(body);
  console.log(body.length);
}));
