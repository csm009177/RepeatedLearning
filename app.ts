function app(param1:number, param2:number):number{
  return param1 + param2;
}

function goApp(callback:number):string{
  return `result is ${ callback}`
}

const a:string =goApp(app(2,3))
console.log(a)