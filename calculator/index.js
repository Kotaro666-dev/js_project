// Display
let result = document.querySelector("#result");

// Action
let ac = document.querySelector("#ac");
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let multi = document.querySelector("#multi");
let divide = document.querySelector("#divide");
let remainder = document.querySelector("#remainder");
let plus_minus = document.querySelector("#plus-minus");
let equal = document.querySelector("#equal");

// number
let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");

let sum = result.textContent - "0";
// let sum;

ac.addEventListener("click", () => {
  sum = 0;
  temp = 0;
  result.textContent = sum;
  //   counter = 0;
});

zero.addEventListener("click", () => {
  if (sum === 0) {
    sum = 0;
    result.textContent = sum;
  } else {
    sum *= 10;
    sum += 0;
    result.textContent = sum;
  }
});

one.addEventListener("click", () => {
  if (sum === 0) {
    sum = 1;
    result.textContent = sum;
  } else {
    sum *= 10;
    sum += 1;
    result.textContent = sum;
  }
});

two.addEventListener("click", () => {
  if (sum === 0) {
    sum = 2;
    result.textContent = sum;
  } else {
    sum *= 10;
    sum += 2;
    result.textContent = sum;
  }
});

three.addEventListener("click", () => {
  if (sum === 0) {
    sum = 3;
    result.textContent = sum;
  } else {
    sum *= 10;
    sum += 3;
    result.textContent = sum;
  }
});

four.addEventListener("click", () => {
  if (sum === 0) {
    sum = 4;
    result.textContent = sum;
  } else {
    sum *= 10;
    sum += 4;
    result.textContent = sum;
  }
});

five.addEventListener("click", () => {
  if (sum === 0) {
    sum = 5;
    result.textContent = sum;
  } else {
    sum *= 10;
    sum += 5;
    result.textContent = sum;
  }
});

six.addEventListener("click", () => {
  if (sum === 0) {
    sum = 6;
    result.textContent = sum;
  } else {
    sum *= 10;
    sum += 6;
    result.textContent = sum;
  }
});

seven.addEventListener("click", () => {
  if (sum === 0) {
    sum = 7;
    result.textContent = sum;
  } else {
    sum *= 10;
    sum += 7;
    result.textContent = sum;
  }
});

eight.addEventListener("click", () => {
  if (sum === 0) {
    sum = 8;
    result.textContent = sum;
  } else {
    sum *= 10;
    sum += 8;
    result.textContent = sum;
  }
});

nine.addEventListener("click", () => {
  if (sum === 0) {
    sum = 9;
    result.textContent = sum;
  } else {
    sum *= 10;
    sum += 9;
    result.textContent = sum;
  }
});

let temp;
let mark;
// let counter = 0;

/* Calculating option */
add.addEventListener("click", () => {
  mark = "+";
  temp = sum;
  result.textContent = temp;
  sum = 0;
});

subtract.addEventListener("click", () => {
  mark = "-";
  temp = sum;
  sum = 0;
  result.textContent = temp;
});

multi.addEventListener("click", () => {
  mark = "*";
  temp = sum;
  sum = 0;
  result.textContent = temp;
});

divide.addEventListener("click", () => {
  mark = "/";
  temp = sum;
  sum = 0;
  result.textContent = temp;
});

remainder.addEventListener("click", () => {
  sum /= 100;
  result.textContent = sum;
});

plus_minus.addEventListener("click", () => {
  if (sum >= 0) {
    sum *= -1;
  } else {
    sum *= -1;
  }
  result.textContent = sum;
});

equal.addEventListener("click", () => {
  if (mark === "+") {
    temp += sum;
    sum = temp;
    result.textContent = sum;
  } else if (mark === "-") {
    temp -= sum;
    sum = temp;
    result.textContent = sum;
  } else if (mark === "*") {
    temp *= sum;
    sum = temp;
    result.textContent = sum;
  } else if (mark === "/") {
    temp /= sum;
    sum = temp;
    result.textContent = sum;
  }

  if (sum > 999999999) {
    alert(
      "Your calculation reached to maximum of my brain. Sorry for inconvenience."
    );
    sum = 0;
    temp = 0;
    result.textContent = sum;
  }

  //   counter = 0;
});
