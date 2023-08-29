const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const result = document.getElementById("result");

function calculateAge() {
  const birthdayVal = birthdayEl.value;

  if (birthdayVal === "") {
    alert("Please enter your birthday!");
  } else {
    const age = getAge(birthdayVal);
    result.innerText = `You are ${age} ${
      age > 1 || age === 0 ? "years" : "year"
    } old!`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnEl.addEventListener("click", calculateAge);
