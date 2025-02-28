const generatedCode = document.getElementById("generated-code");
const copyBtn = document.getElementById("copy-btn");
const copiedText = document.getElementById("copied-text");
const copyIcon = document.getElementById("copy-icon");
const rangeNumber = document.getElementById("range-number");
const rangeBar = document.getElementById("range-bar");
const checkbox1 = document.getElementById("checkbox-1");
const checkbox2 = document.getElementById("checkbox-2");
const checkbox3 = document.getElementById("checkbox-3");
const checkbox4 = document.getElementById("checkbox-4");
const strenghtText = document.getElementById("strenght-text");
const tooWeek = document.getElementById("too-week");
const week = document.getElementById("week");
const medium = document.getElementById("medium");
const strong = document.getElementById("strong");
const generateBtn = document.getElementById("generate-btn");
const arrow = document.getElementById("arrow");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lovercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&";

// Rangebar

rangeBar.addEventListener("input", function () {
  const value = rangeBar.value;
  rangeNumber.textContent = value;
  const percentage = (value / rangeBar.max) * 100;

  rangeBar.style.setProperty("--range-value", `${percentage}%`);
});

//  Checkbox Status

let checkbox1Status = false;
let checkbox2Status = false;
let checkbox3Status = false;
let checkbox4Status = false;

checkbox1.addEventListener("click", function () {
  checkbox1Status = !checkbox1Status;
  console.log(checkbox1Status);
});

checkbox2.addEventListener("click", function () {
  checkbox2Status = !checkbox2Status;
  console.log(checkbox2Status);
});

checkbox3.addEventListener("click", function () {
  checkbox3Status = !checkbox3Status;
  console.log(checkbox3Status);
});

checkbox4.addEventListener("click", function () {
  checkbox4Status = !checkbox4Status;
  console.log(checkbox4Status);
});

// Strenght status

// Too week

strenghtText.style.visibility = "unset";
strenghtText.textContent = "TOO WEEK!";
tooWeek.style.backgroundColor = "hsl(0, 91%, 63%)";
tooWeek.style.border = "none";

// Week

strenghtText.style.visibility = "unset";
strenghtText.textContent = "WEEK";
tooWeek.style.backgroundColor = "hsl(13, 95%, 66%)";
tooWeek.style.border = "none";
week.style.backgroundColor = "hsl(13, 95%, 66%)";
week.style.border = "none";

// Medium

strenghtText.style.visibility = "unset";
strenghtText.textContent = "MEDIUM";
tooWeek.style.backgroundColor = "hsl(42, 91%, 68%)";
tooWeek.style.border = "none";
week.style.backgroundColor = "hsl(42, 91%, 68%)";
week.style.border = "none";
medium.style.backgroundColor = "hsl(42, 91%, 68%)";
medium.style.border = "none";

// Strong

strenghtText.style.visibility = "unset";
strenghtText.textContent = "STRONG";
tooWeek.style.backgroundColor = "hsl(127, 100%, 82%)";
tooWeek.style.border = "none";
week.style.backgroundColor = "hsl(127, 100%, 82%)";
week.style.border = "none";
medium.style.backgroundColor = "hsl(127, 100%, 82%)";
medium.style.border = "none";
strong.style.backgroundColor = "hsl(127, 100%, 82%)";
strong.style.border = "none";

// Arrow hover effect

generateBtn.addEventListener("mouseover", function () {
  arrow.src = "assets/images/icon-arrow-right.png";
});

generateBtn.addEventListener("mouseout", function () {
  arrow.src = "assets/images/icon-arrow-right.svg";
});

// Icon hover effect

copyBtn.addEventListener("mouseover", function () {
  copyIcon.src = "assets/images/icon-copy.png";
});

copyBtn.addEventListener("mouseout", function () {
  copyIcon.src = "assets/images/icon-copy.svg";
});

// Click event

copyBtn.addEventListener("click", function () {
  copiedText.style.display = "unset";
  strenghtText.style.visibility = "hidden";
  tooWeek.style.backgroundColor = "unset";
  tooWeek.style.border = "2px solid hsl(252, 11%, 91%)";
  week.style.backgroundColor = "unset";
  week.style.border = "2px solid hsl(252, 11%, 91%)";
  medium.style.backgroundColor = "unset";
  medium.style.border = "2px solid hsl(252, 11%, 91%)";
  strong.style.backgroundColor = "unset";
  strong.style.border = "2px solid hsl(252, 11%, 91%)";
});

// Generate BTN action

generateBtn.addEventListener("click", function () {
  copiedText.style.display = "none";
});
