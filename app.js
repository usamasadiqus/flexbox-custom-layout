var currentYear = document.getElementById("current-year");
var currentDateTime = document.getElementById("current-date-time");

var date = new Date();

onload = function () {
  setCurrentYear();
  setCurrentDate();
};

function setCurrentYear() {
  currentYear.innerHTML = date.getFullYear();
}

function setCurrentDate() {
  currentDateTime.innerHTML = date;
}
