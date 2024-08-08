let num = 42;
let firstName = "Katya";
const isProgrammer = false;

num = 10; // Так можно
// isProgrammer = false; // Так нельзя

/* Можно
let $ = "test";
let $num = 1;
let num$ = true;

let _ = "test1";
let _num = 2;
let num_ = true;

let first_name = "Elena"; // Можно, но не нужно
let firstName = "Akakiy"; // Так лучше
*/

/* Нельзя
let 1num = 11

let my-num = 'Oleg'

let const
*/

//alert(firstNames); // Дефолтное модальное окно
// debugger // Стоп слово

/* Операторы
console.log(num + 10);
console.log(num - 10);
console.log(num * 10);
console.log(num / 10);

const fullName = firstName + " Orlova";
console.log(fullName);
*/

const result$ = document.getElementById("result");
const input1$ = document.getElementById("input1");
const input2$ = document.getElementById("input2");
const plus$ = document.getElementById("plus");
const minus$ = document.getElementById("minus");
const multiplication$ = document.getElementById("multiplication");
const division$ = document.getElementById("division");
const submit$ = document.getElementById("submit");

let action;
let sum;

console.log(input1$.value);
console.log(input2$.value);

function PrintResult(res) {
  if (res < 0) {
    result$.style.color = "red";
  } else {
    result$.style.color = "green";
  }
}

function operationForResult(inp1, inp2, actionValue) {
  const inp1$ = Number(inp1.value);
  const inp2$ = Number(inp2.value);
  console.log(inp1$);
  console.log(inp2$);

  if (actionValue == "+") {
    return inp1$ + inp2$;
  } else if (actionValue == "-") {
    return inp1$ - inp2$;
  } else if (actionValue == "*") {
    return inp1$ * inp2$;
  } else if (actionValue == "/") {
    console.log(action);
    return inp1$ / inp2$;
  } else {
    return null;
  }
}

plus$.onclick = function () {
  console.log("Click plus");
  action = "+";
};

minus$.onclick = function () {
  console.log("Click minus");
  action = "-";
};

multiplication$.onclick = function () {
  console.log("multiplication");
  action = "*";
};

division$.onclick = function () {
  console.log("Click division");
  action = "/";
};

submit$.onclick = function () {
  console.log("Click result");

  result$.textContent = operationForResult(input1$, input2$, action);
  PrintResult(result$.textContent);
};
