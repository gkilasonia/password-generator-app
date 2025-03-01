const generatedCodeContainer = document.getElementById(
  "generated-code-container"
);
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
const checkmark1 = document.getElementById("checkmark-1");
const checkmark2 = document.getElementById("checkmark-2");
const checkmark3 = document.getElementById("checkmark-3");
const checkmark4 = document.getElementById("checkmark-4");
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

let codePool = "";

function generateCode() {
  // Build string based on checkbox status

  if (checkbox1.checked === true) {
    codePool += uppercaseLetters;
  }
  if (checkbox2.checked === true) {
    codePool += lovercaseLetters;
  }
  if (checkbox3.checked === true) {
    codePool += numbers;
  }
  if (checkbox4.checked === true) {
    codePool += symbols;
  }

  // generate the code based on the lenght of the range bar and the string built above randomly choosing characters from the string
  let randomNumber = 0;
  let code = "";
  for (let i = 0; i < rangeBar.value; i++) {
    randomNumber = Math.floor(Math.random() * codePool.length);
    code += codePool[randomNumber];
    generatedCode.textContent = code;
    console.log(`Random number: ${randomNumber}`);
    console.log(`Generated code: ${code}`);
  }

  console.log(`Generated code in function: ${codePool}`);
  return codePool;
}

// Rangebar

rangeBar.addEventListener("input", function () {
  const value = rangeBar.value;
  rangeNumber.textContent = value;
  const percentage = (value / rangeBar.max) * 100;
  rangeBar.style.setProperty("--range-value", `${percentage}%`);
  copiedText.style.display = "none"; // Hide text "Copied"
});

//  Checkbox Status

checkbox1.addEventListener("click", function () {
  if (checkbox1.checked === false) {
    checkmark1.style.display = "none";
  } else {
    checkmark1.style.display = "unset";
  }
  copiedText.style.display = "none"; // Hide text "Copied"
});

checkbox2.addEventListener("click", function () {
  if (checkbox2.checked === false) {
    checkmark2.style.display = "none";
  } else {
    checkmark2.style.display = "unset";
  }
  copiedText.style.display = "none"; // Hide text "Copied"
});

checkbox3.addEventListener("click", function () {
  if (checkbox3.checked === false) {
    checkmark3.style.display = "none";
  } else {
    checkmark3.style.display = "unset";
  }
  copiedText.style.display = "none"; // Hide text "Copied"
});

checkbox4.addEventListener("click", function () {
  if (checkbox4.checked === false) {
    checkmark4.style.display = "none";
  } else {
    checkmark4.style.display = "unset";
  }
  copiedText.style.display = "none"; // Hide text "Copied"
});

// Strenght status

function checkStrenght() {
  if (
    checkbox1.checked === true &&
    checkbox2.checked === true &&
    checkbox3.checked === true &&
    checkbox4.checked === true &&
    rangeBar.value >= 14
  ) {
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
  } else if (
    checkbox1.checked === true ||
    checkbox2.checked === true ||
    checkbox3.checked === true ||
    checkbox4.checked === true ||
    rangeBar.value >= 10
  ) {
    // Medium

    strenghtText.style.visibility = "unset";
    strenghtText.textContent = "MEDIUM";
    tooWeek.style.backgroundColor = "hsl(42, 91%, 68%)";
    tooWeek.style.border = "none";
    week.style.backgroundColor = "hsl(42, 91%, 68%)";
    week.style.border = "none";
    medium.style.backgroundColor = "hsl(42, 91%, 68%)";
    medium.style.border = "none";
  } else if (
    checkbox1.checked === true ||
    checkbox2.checked === true ||
    checkbox3.checked === true ||
    checkbox4.checked === true ||
    rangeBar.value >= 6
  ) {
    // Week

    strenghtText.style.visibility = "unset";
    strenghtText.textContent = "WEEK";
    tooWeek.style.backgroundColor = "hsl(13, 95%, 66%)";
    tooWeek.style.border = "none";
    week.style.backgroundColor = "hsl(13, 95%, 66%)";
    week.style.border = "none";
  } else if (
    checkbox1.checked === false &&
    checkbox2.checked === false &&
    checkbox3.checked === false &&
    checkbox4.checked === false &&
    rangeBar.value >= 6
  ) {
    // Too week

    strenghtText.style.visibility = "unset";
    strenghtText.textContent = "TOO WEEK!";
    tooWeek.style.backgroundColor = "hsl(0, 91%, 63%)";
    tooWeek.style.border = "none";
  } else {
    strenghtText.style.visibility = "hidden"; // Hide strenght text
  }
}

// Arrow hover effect

generateBtn.addEventListener("mouseover", function () {
  arrow.src = "assets/images/icon-arrow-right.png";
});

generateBtn.addEventListener("mouseout", function () {
  arrow.src = "assets/images/icon-arrow-right.svg";
});

// Icon hover effect

generatedCodeContainer.addEventListener("mouseover", function () {
  copyIcon.src = "assets/images/icon-copy.png";
});

generatedCodeContainer.addEventListener("mouseout", function () {
  copyIcon.src = "assets/images/icon-copy.svg";
});

// Click event

copyBtn.addEventListener("click", function () {
  rangeBar.value = 8; // Reset range bar value
  rangeNumber.textContent = 8; // Reset range number value
  rangeBar.style.setProperty("--range-value", "50%"); // Reset range bar value
  checkbox1.checked = false; // Uncheck all checkboxes
  checkbox2.checked = false; // Uncheck all checkboxes
  checkbox3.checked = false; // Uncheck all checkboxes
  checkbox4.checked = false; // Uncheck all checkboxes
  // write logic for reseting strenght level
  // write logic for copping text to clipboard
  // write logic for setting generated code to default value
  copiedText.style.display = "unset"; // Show text "Copied"
  generatedCode.style.opacity = "0.25";
  generatedCode.style.transition = "opacity 0.5s";
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
  generateCode();
  checkStrenght();
  generatedCode.style.opacity = "unset";
  generatedCode.style.transition = "opacity 0.5s";
  copiedText.style.display = "none"; // Hide text "Copied"
});
