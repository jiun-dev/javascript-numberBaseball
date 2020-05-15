const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");

let numbers = [];
for (let n = 0; n <= 9; n += 1) {
  numbers.push(n);
}
let answer = [];

for (let n = 0; n <= 3; n += 1) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);

let count = 0;
check.addEventListener("click", () => {
  const value = input.value; // 문자열
  if (value && value.length === 4) {
    if (answer.join("") === value) {
      logs.appendChild(document.createTextNode("HR")); // div안에 무언가를 추가할 때 appendChild div에 텍스트를 추가할 때 createTextNode
    } else {
      console.log("다르다");
      let strike = 0;
      let ball = 0;
      for (const [aIndex, aNumber] of answer.entries()) {
        for (const [iIndex, iString] of input.value.split("").entries()) {
          if (aNumber === Number(iString)) {
            if (aIndex === iIndex) {
              strike += 1;
            } else {
              ball += 1;
            }
          }
        }
      }
      const message = document.createTextNode(
        `${input.value}: ${strike} strike ${ball} ball`
      );
      logs.appendChild(message);
      logs.appendChild(document.createElement("br")); // 줄바꿈
      if (count > 10) {
        logs.appendChild(
          document.createTextNode(`game over: ${answer.join("")}`)
        );
      } else {
        count++;
      }
    }
  }
});
