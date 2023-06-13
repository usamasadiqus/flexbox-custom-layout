var currentYear = document.getElementById("current-year");

var date = new Date();

onload = function () {
  setCurrentYear();
};

function setCurrentYear() {
  currentYear.innerHTML = date.getFullYear();
}
