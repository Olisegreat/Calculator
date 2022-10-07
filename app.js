const switchMode = document.querySelector(".switch");
const page = document.querySelector(".page");
const icon = document.querySelector(".icon");
const screencol = document.querySelector(".screen");
const fullCalc = document.querySelector(".calculator");
const btn = document.querySelectorAll(".btn");
const equals = document.querySelector(".equals");
const btncont = document.querySelector(".buttons");
const screen = document.querySelector(".screen-p");
let firstInput;
let secondInput;
let thirdInput;
let operator;

function roundUp(screenShow) {
  if (screenShow.textContent.length > 7) {
    console.log("hmm");
    console.log(screenShow.textContent);
    let screenNum = Number(screenShow.textContent).toPrecision(7)
    screenShow.textContent = screenNum
    console.log(screenNum);
  }
}

switchMode.addEventListener("click", () => {
  if (icon.classList.contains("fa-sun")) {
    switchMode.innerHTML = `<p>Dark Mode <i class="fa-solid fa-moon icon"></i></p>`;
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    switchMode.innerHTML = `<p>Light Mode <i class="fa-solid fa-sun icon"></i></p>`;
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
  fullCalc.classList.toggle("dark-calc");
  page.classList.toggle("page-dark");
  screencol.classList.toggle("screen-dark");

  for (let index = 0; index < btn.length; index++) {
    const element = btn[index];

    element.classList.toggle("dark-btn");
  }
});

fullCalc.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    let key = event.target.value;
    let action = event.target.dataset.action; 
    if (action == undefined) {
      if (screen.textContent == "0") {
        firstInput = key;
        screen.textContent = firstInput;

        
      } else {
        firstInput += key;
        screen.textContent = firstInput;
        
      }
    } else {
      if (action == "clear") {
        screen.textContent = "0";
      }

      if (action == "backspace") {
        let currentOutput = screen.textContent;
        let newOutput = currentOutput.slice(0, -1);

        screen.textContent = newOutput;
        
      
        if (newOutput < 1) {
          screen.textContent = "0";
        }
      }
      if (action == "percentage") {
        secondInput = Number(screen.textContent)/100
        screen.textContent = secondInput;

        roundUp(screen)
      }
      if (action == "square-root") {
        secondInput = Math.sqrt(Number(screen.textContent))
        screen.textContent = secondInput;

        roundUp(screen)
        
      }
      if (action == "addition") {
        secondInput = Number(screen.textContent);
        screen.textContent = "0";
        operator = "+";

        roundUp(screen)
      }
      if (action == "substraction") {
          secondInput = Number(screen.textContent);
        screen.textContent = "0";
        operator = "-";

        roundUp(screen)
      }
      if (action == "division") {
          secondInput = Number(screen.textContent);
        screen.textContent = "0";
        operator = "/";

        roundUp(screen)
      }
      if (action == "multiply") {
          secondInput = Number(screen.textContent);
        screen.textContent = "0";
        operator = "*";

        roundUp(screen)
      }

      if (action == "equals" && operator == "+") {
        thirdInput = Number(screen.textContent);

        screen.textContent = secondInput + thirdInput;

      
        roundUp(screen)
      }
      if (action == "equals" && operator == "-") {
        thirdInput = Number(screen.textContent);

        screen.textContent = secondInput - thirdInput;

        roundUp(screen)
      }
      if (action == "equals" && operator == "/") {
        thirdInput = Number(screen.textContent);

        screen.textContent = secondInput / thirdInput;
        roundUp(screen)
        if (screen.textContent.length == 10 ) {
            screen.textContent = Math.round(screen.textContent)
          
        }

      }
      if (action == "equals" && operator == "*") {
        thirdInput = Number(screen.textContent);

        screen.textContent = secondInput * thirdInput;
        roundUp(screen)
      }
    }
  }
});
