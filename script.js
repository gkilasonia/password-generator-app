const generatedCodeContainer = document.getElementById(
  "generated-code-container"
);
const generatedCode = document.getElementById("generated-code");
const copyBtn = document.getElementById("copy-btn");
const copiedText = document.getElementById("copied-text");
const copyIcon = document.getElementById("copy-icon");
const rangeNumber = document.getElementById("range-number");
const rangeBar = document.getElementById("range-bar");
const checkboxes = [
  {
    checkbox: document.getElementById("checkbox-1"),
    checkmark: document.getElementById("checkmark-1"),
    pool: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  },
  {
    checkbox: document.getElementById("checkbox-2"),
    checkmark: document.getElementById("checkmark-2"),
    pool: "abcdefghijklmnopqrstuvwxyz",
  },
  {
    checkbox: document.getElementById("checkbox-3"),
    checkmark: document.getElementById("checkmark-3"),
    pool: "0123456789",
  },
  {
    checkbox: document.getElementById("checkbox-4"),
    checkmark: document.getElementById("checkmark-4"),
    pool: "!@#$%&",
  },
];
const strengthText = document.getElementById("strenght-text");
const strengthIndicators = {
  tooWeek: document.getElementById("too-week"),
  week: document.getElementById("week"),
  medium: document.getElementById("medium"),
  strong: document.getElementById("strong"),
};
const generateBtn = document.getElementById("generate-btn");
const arrow = document.getElementById("arrow");

function generateCode() {
  let codePool = "";
  let atLeastOneChecked = false;

  checkboxes.forEach(({ checkbox, pool }) => {
    if (checkbox.checked) {
      codePool += pool;
      atLeastOneChecked = true;
    }
  });

  if (!atLeastOneChecked) {
    generatedCode.textContent = "Check at least one option";
    return;
  }

  let code = "";
  for (let i = 0; i < rangeBar.value; i++) {
    const randomNumber = Math.floor(Math.random() * codePool.length);
    code += codePool[randomNumber];
  }
  generatedCode.textContent = code;
}

function updateRangeDisplay() {
  const value = rangeBar.value;
  rangeNumber.textContent = value;
  const percentage = (value / rangeBar.max) * 100;
  rangeBar.style.setProperty("--range-value", `${percentage}%`);
  copiedText.style.display = "none";
}

function updateCheckmark(checkboxData) {
  checkboxData.checkmark.style.display = checkboxData.checkbox.checked
    ? "unset"
    : "none";
  copiedText.style.display = "none";
}

function checkStrength() {
  const checkedCount = checkboxes.filter(
    ({ checkbox }) => checkbox.checked
  ).length;
  const length = parseInt(rangeBar.value);

  let strength = "";
  let color = "";

  if (checkedCount === 4 && length >= 14) {
    strength = "STRONG";
    color = "hsl(127, 100%, 82%)";
  } else if (checkedCount > 0 && length >= 10) {
    strength = "MEDIUM";
    color = "hsl(42, 91%, 68%)";
  } else if (checkedCount > 0 && length >= 6) {
    strength = "WEEK";
    color = "hsl(13, 95%, 66%)";
  } else if (checkedCount > 0 && length < 6) {
    strength = "TOO WEEK!";
    color = "hsl(0, 91%, 63%)";
  } else if (checkedCount === 0) {
    alert("Please select at least one option");
    return;
  } else {
    strengthText.style.visibility = "hidden";
    Object.values(strengthIndicators).forEach((indicator) => {
      indicator.style.backgroundColor = "unset";
      indicator.style.border = "2px solid hsl(252, 11%, 91%)";
    });
    return;
  }

  strengthText.style.visibility = "unset";
  strengthText.textContent = strength;

  const indicatorKeys = Object.keys(strengthIndicators);

  for (let i = 0; i < indicatorKeys.length; i++) {
    if (
      (strength === "STRONG" && i < 4) ||
      (strength === "MEDIUM" && i < 3) ||
      (strength === "WEEK" && i < 2) ||
      (strength === "TOO WEEK!" && i < 1)
    ) {
      strengthIndicators[indicatorKeys[i]].style.backgroundColor = color;
      strengthIndicators[indicatorKeys[i]].style.border = "none";
    } else {
      strengthIndicators[indicatorKeys[i]].style.backgroundColor = "unset";
      strengthIndicators[indicatorKeys[i]].style.border =
        "2px solid hsl(252, 11%, 91%)";
    }
  }
}

async function copyTextToClipboard() {
  try {
    const text = document.getElementById("generated-code").innerText;
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboards", text);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
}

function resetUI() {
  copyTextToClipboard();
  rangeBar.value = 10;
  rangeNumber.textContent = 10;
  rangeBar.style.setProperty("--range-value", "50%");
  checkboxes.forEach(({ checkbox, checkmark }) => {
    checkbox.checked = false;
    checkmark.style.display = "none";
  });
  copiedText.style.display = "unset";
  generatedCode.textContent = "P4$5W0rD!";
  generatedCode.style.opacity = "0.25";
  generatedCode.style.transition = "opacity 0.5s";
  strengthText.style.visibility = "hidden";
  Object.values(strengthIndicators).forEach((indicator) => {
    indicator.style.backgroundColor = "unset";
    indicator.style.border = "2px solid hsl(252, 11%, 91%)";
  });
}

rangeBar.addEventListener("input", updateRangeDisplay);

checkboxes.forEach((checkboxData) => {
  checkboxData.checkbox.addEventListener("click", () =>
    updateCheckmark(checkboxData)
  );
});

generateBtn.addEventListener(
  "mouseover",
  () => (arrow.src = "assets/images/icon-arrow-right.png")
);
generateBtn.addEventListener(
  "mouseout",
  () => (arrow.src = "assets/images/icon-arrow-right.svg")
);

generatedCodeContainer.addEventListener(
  "mouseover",
  () => (copyIcon.src = "assets/images/icon-copy.png")
);
generatedCodeContainer.addEventListener(
  "mouseout",
  () => (copyIcon.src = "assets/images/icon-copy.svg")
);

copyBtn.addEventListener("click", resetUI);

generateBtn.addEventListener("click", () => {
  generateCode();
  checkStrength();
  generatedCode.style.opacity = "unset";
  generatedCode.style.transition = "opacity 0.5s";
  copiedText.style.display = "none";
});
