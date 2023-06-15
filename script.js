const ans = document.querySelector(".input");
// ans.value=0
const percentage = (equation) => {
  // console.log('hello')
  // console.log(equation)
  let num;
  let sym = "";
  if (!(['+','-','x','/'].includes(equation+'%')) && /\d/.test(equation)) {
    console.log("if");
    num = Number(equation.replace("%", ""));
    ans.value = num / 100;
  } else if('+' || '-' in equation) {
    console.log("else");
    let sep = [...equation];
    sep.pop()
    let str = "";
    let temp = "";
    for (let i = sep.length - 1; i > 0; i--) {
      if (["x", "/", "+", "-"].includes(sep[i])) {
        sym=sep[i]
        sep.pop()
        break;
      }
      temp = str;
      str = "";
      str = sep[i] + temp;
      sep.pop()
    }
    console.log(str);
    console.log(sep);
    const per=eval(sep.join(''))
    console.log(per)
    ans.value=(`${per}${sym}${(per/100)*Number(str)}`)
  }
};

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (ans.value === "Math error") {
      ans.value = "";
    }

    if (button.innerHTML === "AC") {
      ans.value = 0;
    } else if (button.innerHTML === "+/-") {
      if (ans.value < 0) {
        ans.value *= -1;
      } else {
        ans.value *= -1;
      }
    } else if (button.innerHTML === "x") {
      ans.value = `${ans.value}x`;
    } else if (button.innerHTML === "/") {
      ans.value = `${ans.value}/`;
    } else if (button.innerHTML === "+") {
      ans.value = `${ans.value}+`;
    } else if (button.innerHTML === "-") {
      ans.value = `${ans.value}-`;
    } else if (button.innerHTML === "+") {
      ans.value = `${ans.value}+`;
    } else if (button.innerHTML === ".") {
      ans.value = `${ans.value}.`;
    } else if (button.innerHTML === "=") {
      evaluate(ans.value);
    } else if (button.innerHTML === "%") {
      percentage(`${ans.value}%`);
    } else {
      if (ans.value === "0") {
        ans.value = "";
      }
      ans.value = `${ans.value}${button.innerHTML}`;
    }
  });
});

function evaluate(equ) {
  // eval(equ)?ans.value=eval(equ):ans.value='Math error'
  // console.log(ans.value)
  if (equ.includes("x")) {
    equ = equ.replace("x", "*");
  }
  try {
    ans.value = eval(equ);
  } catch {
    ans.value = "Math error";
  }
}

ans.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    console.log("Yes");
    evaluate(ans.value);
  }
});

const clock = document.querySelector(".timer");

setInterval(() => {
  clock.innerHTML = new Date().toLocaleTimeString();
}, 1000);
