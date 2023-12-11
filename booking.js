/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
var costPerDay = 35;
var numDays = 0;
var totalCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

document.getElementById("monday").addEventListener("click", selectedMonday);
function selectedMonday() {
  document.getElementById("monday").classList.toggle("clicked");
  clickedDays();
}
document.getElementById("tuesday").addEventListener("click", selectedTuesday);
function selectedTuesday() {
  document.getElementById("tuesday").classList.toggle("clicked");
  clickedDays();
}
document
  .getElementById("wednesday")
  .addEventListener("click", selectedWednesday);
function selectedWednesday() {
  document.getElementById("wednesday").classList.toggle("clicked");
  clickedDays();
}
document.getElementById("thursday").addEventListener("click", selectedThursday);
function selectedThursday() {
  document.getElementById("thursday").classList.toggle("clicked");
  clickedDays();
}
document.getElementById("friday").addEventListener("click", selectedFriday);
function selectedFriday() {
  document.getElementById("friday").classList.toggle("clicked");
  clickedDays();
}

function clickedDays() {
  numDays = 0;
  const selectedDays = document.querySelectorAll(".day-selector .clicked");
  selectedDays.forEach(function (li)  {
    if (li.classList.contains("clicked")) numDays++;
  });
//   selectedDays.forEach((li) => {
//     if (li.classList.contains("clicked")) numDays++;
//   });
  console.log(numDays);
  totalCost.textContent = numDays * costPerDay;
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
document.getElementById("clear-button").addEventListener("click", clearAll);
function clearAll() {
  const clickedDays = document.querySelectorAll(".day-selector .clicked");
  clickedDays.forEach(function (li) {
    li.classList.remove("clicked");
  });
//   clickedDays.forEach((li) => {
//     li.classList.remove("clicked");
//   });
  numDays = 0;
  totalCost.textContent = numDays * costPerDay;
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
document.getElementById("half").addEventListener("click", halfClicked);
function halfClicked() {
  document.getElementById("half").classList.toggle("clicked");
  document.getElementById("full").classList.toggle("clicked");
  costPerDay = 20;
  clickedDays();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
document.getElementById("full").addEventListener("click", fullClicked);
function fullClicked() {
  document.getElementById("half").classList.toggle("clicked");
  document.getElementById("full").classList.toggle("clicked");
  costPerDay = 35;
  clickedDays();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
