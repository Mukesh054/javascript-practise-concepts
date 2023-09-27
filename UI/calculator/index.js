document.querySelectorAll(".button-group > span").forEach((element) => {
  element.addEventListener("click", function (e) {
    const { classList, innerText } = e.target;

    if (classList.contains("num")) addNums(innerText);
    if (classList.contains("opr")) addOpr(innerText);
    if (classList.contains("calc")) calc();
    if (classList.contains("delete")) del();
    if (classList.contains("clear")) clear();
  });
});

const calcArea = document.querySelector("textarea");
const oprList = ["+", "-", "*", "/", "%", "."];

function addNums(text) {
  const { value } = calcArea;

  const flag = value.length === 0 && text === ".";

  if (!flag) {
    calcArea.value += text;
  }
}

function addOpr(text) {
  const { value } = calcArea;
  const lastChar = value[value.length - 1];

  if (lastChar !== text) {
    if (value.length > 0) {
      calcArea.value += text;
    }
  }

  if (oprList.includes(lastChar)) {
    calcArea.value = value.substr(0, value.length - 1) + text;
  }
}

function del() {
  const { value } = calcArea;
  if (value.length > 0) {
    calcArea.value = value.substr(0, value.length - 1);
  }
}

function clear() {
  calcArea.value = "";
}

const calc = () => {
  const { value } = calcArea;
  const result = eval(value);

  if (!isNaN(result)) {
    calcArea.value = result;
  } else {
    alert("Wrong expression, Please check your input");
  }
};
