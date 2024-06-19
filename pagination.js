 // Selecting DOM elements
 const startBtn = document.querySelector("#startBtn"),
 endBtn = document.querySelector("#endBtn"),
 prevBtn = document.querySelector("#prev"),
 nextBtn = document.querySelector("#next"),
 links = document.querySelectorAll(".link");

// Setting an initial step
let currentStep = 0;

// Function to update the button states
const updateBtn = () => {
if (currentStep === 0) {
   startBtn.disabled = true;
   prevBtn.disabled = true;
} else {
   startBtn.disabled = false;
   prevBtn.disabled = false;
}

if (currentStep === links.length - 1) {
   endBtn.disabled = true;
   nextBtn.disabled = true;
} else {
   endBtn.disabled = false;
   nextBtn.disabled = false;
}
};

// Add event listeners to the number links
links.forEach((link, index) => {
link.addEventListener("click", (e) => {
   e.preventDefault();
   currentStep = index;
   updateActiveLink();
   updateBtn();
});
});

// Add event listeners to the "previous" button
prevBtn.addEventListener("click", () => {
if (currentStep > 0) {
   currentStep--;
   updateActiveLink();
   updateBtn();
}
});

// Add event listeners to the "next" button
nextBtn.addEventListener("click", () => {
if (currentStep < links.length - 1) {
   currentStep++;
   updateActiveLink();
   updateBtn();
}
});

// Add event listener to the "start" button
startBtn.addEventListener("click", () => {
currentStep = 0;
updateActiveLink();
updateBtn();
});

// Add event listener to the "end" button
endBtn.addEventListener("click", () => {
currentStep = links.length - 1;
updateActiveLink();
updateBtn();
});

// Function to update the active link
const updateActiveLink = () => {
links.forEach((link, index) => {
   if (index === currentStep) {
       link.classList.add("active");
   } else {
       link.classList.remove("active");
   }
});
};

// Initialize button states
updateBtn();
