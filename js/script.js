// Accordium
const accordiumBtnAll = document.querySelectorAll(".accordium");

function handleClick(event) {
  const currentEl = event.currentTarget;
  const titleEl = currentEl.parentElement;
  const sectionEl = titleEl.parentElement;
  const childElements = sectionEl.querySelector(".hide_show_container");
  const iconDown = titleEl.querySelector(".fa-angle-down");
  const iconUp = titleEl.querySelector(".fa-angle-up");

  childElements.classList.toggle("hidden-box");
  childElements.classList.toggle("open-box");

  iconDown.classList.toggle("hidden-icon");
  iconUp.classList.toggle("hidden-icon");
}

accordiumBtnAll.forEach((accordiumBtn) => {
  accordiumBtn.addEventListener("click", handleClick);
});

// loanSection.addEventListener("click", handleClick);

// E Singature
// Get the canvas and buttons elements
const canvas = document.getElementById("signature-pad");
const clearButton = document.getElementById("clear-button");
const saveButton = document.getElementById("save-button");

// Set up the canvas
const ctx = canvas.getContext("2d");
ctx.lineWidth = 2;
ctx.strokeStyle = "#000";

// Variables to track the signature status
let drawing = false;
let lastX = 0;
let lastY = 0;

// Event listeners for mouse/touch interactions
canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  [lastX, lastY] = [
    e.clientX - canvas.getBoundingClientRect().left,
    e.clientY - canvas.getBoundingClientRect().top,
  ];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mouseout", () => (drawing = false));

// Function to draw on the canvas
function draw(e) {
  if (!drawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(
    e.clientX - canvas.getBoundingClientRect().left,
    e.clientY - canvas.getBoundingClientRect().top
  );
  ctx.stroke();
  [lastX, lastY] = [
    e.clientX - canvas.getBoundingClientRect().left,
    e.clientY - canvas.getBoundingClientRect().top,
  ];
}

// Clear button event listener
clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save button event listener (for demo, you can save the image as a data URL)
saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  const signatureDataURL = canvas.toDataURL(); // Get the signature as a data URL
  console.log(signatureDataURL); // For demo purposes, you can send this data to your server or store it as needed.
});
