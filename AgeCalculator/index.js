const warning = "Please Enter Your Date of Birth";

function calculateAge() {
  let dateInput = document.getElementById("date-input").value;
  let resultText = document.getElementById("result");

  if (!dateInput) {
    resultText.textContent = warning;
    return;
  }

  let date = new Date(dateInput);
  let year = date.getFullYear();
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  let age = currentYear - year;

  if (isNaN(age)) {
    resultText.textContent = warning;
  } else {
    let pluralize = age === 1 ? "" : "'s";
    resultText.textContent = "You are " + age + " year" + pluralize + " old";
  }
}
