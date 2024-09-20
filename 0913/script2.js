// 함수
// function 함수이름(){
//   함수실행코드
// }

// let name = "홍길동";

// function msg(){
//   let message = '안녕하세요';
//   name = "유재석"
//   console.log(name +' ' + message);
// }

// msg();

// // 함수 선언문
// function add(num1, num2){
//   return num1 + num2;
// }
// console.log(add(10, 20));

// //함수 표현식(변수안에 익명함수를 만들어 넣어주는 형식)
// let mul = function(num1, num2){
//   return num1*num2;
// }
// console.log(mul(10,20));



// let age = 20;

// let msg;

// if(age >= 20){
//   msg = function(){
//     console.log("안녕하세요")
//   }
// }else{
//   msg = function(){
//     console.log('안녕')
//   }
// }

// msg();

// 콜백 함수
function yesOrNo(yes, no){
  if(confirm('예아니오 선택'))
   yes();
  else
   no();
}

function ok(){
  console.log('오케이')
}

function cancel(){
  console.log('노')
}

// yesOrNo(ok, cancel);

// 화살표 함수(람다?)
let sum = (num1, num2) => {
  return num1 + num2;
}

let sum2 = function(num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 20));

//객체(object) - 파이썬(딕서너리), 자바(map)
const user ={
  name : '홍길동',
  age : 20,
  'math score' : 90
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user['math score'])

user.name = '유재석';
console.log(user);

let str = 'name'
console.log(user[str]);


str = 'lang';
let study = {
  [str] : 'java'
}

console.log(study);

function mkObject(name, age){
  return{
    name : name,
    age : age
  }
}

function mkObject(name, age){
  return{
    name,
    age
  }
}

let hong = mkObject('홍길동', 20);
console.log(hong);

console.log('name' in hong);

for(let key in hong){
  console.log(key, hong[key]);
}
