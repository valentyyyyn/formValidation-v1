const firstname = document.getElementById("name");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

// Validations using regular expressions

firstname.addEventListener("blur", function (e) {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue.length < 3 || !/^[\p{L}]+$/u.test(fieldValue)) {
    document.getElementById("name_error").classList.remove("hidden");
    document.getElementById("name_valid").classList.add("hidden");
  } else {
    document.getElementById("name_error").classList.add("hidden");
    document.getElementById("name_valid").classList.remove("hidden");
    document.getElementById("name_valid").classList.add("visible");
  }
  document.getElementById("submit_valid").classList.add("hidden");
  document.getElementById("inbox_message").classList.add("hidden");
});

lastName.addEventListener("blur", function (e) {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue.length < 3 || !/^[\p{L}]+$/u.test(fieldValue)) {
    document.getElementById("lastName_error").classList.remove("hidden");
    document.getElementById("lastName_valid").classList.add("hidden");
  } else {
    document.getElementById("lastName_error").classList.add("hidden");
    document.getElementById("lastName_valid").classList.remove("hidden");
    document.getElementById("lastName_valid").classList.add("visible");
  }
  document.getElementById("submit_valid").classList.add("hidden");
  document.getElementById("inbox_message").classList.add("hidden");
});

email.addEventListener("blur", function (e) {
  const field = e.target;
  const fieldValue = e.target.value;
  if (
    fieldValue.length < 3 ||
    !/^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(fieldValue)
  ) {
    document.getElementById("email_error").classList.remove("hidden");
    document.getElementById("email_valid").classList.add("hidden");
  } else {
    document.getElementById("email_error").classList.add("hidden");
    document.getElementById("email_valid").classList.remove("hidden");
    document.getElementById("email_valid").classList.add("visible");
  }
  document.getElementById("submit_valid").classList.add("hidden");
  document.getElementById("inbox_message").classList.add("hidden");
});

password.addEventListener("blur", function (e) {
  const field = e.target;
  const fieldValue = e.target.value;
  if (
    fieldValue.length < 3 ||
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      fieldValue
    )
  ) {
    document.getElementById("password_error").classList.remove("hidden");
    document.getElementById("password_valid").classList.add("hidden");
  } else {
    document.getElementById("password_error").classList.add("hidden");
    document.getElementById("password_valid").classList.remove("hidden");
    document.getElementById("password_valid").classList.add("visible");
  }
  document.getElementById("submit_valid").classList.add("hidden");
  document.getElementById("inbox_message").classList.add("hidden");
});

// Form submission

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameError = !document.getElementById("name_error").classList.contains("hidden");
  const lastNameError = !document.getElementById("lastName_error").classList.contains("hidden");
  const emailError = !document.getElementById("email_error").classList.contains("hidden");
  const passwordError = !document.getElementById("password_error").classList.contains("hidden");

  if (!nameError && !lastNameError && !emailError && !passwordError) {
    
    // Reset form fields
    form.reset();

    // Reset validation messages and show success submission message
    document.getElementById("name_error").classList.add("hidden");
    document.getElementById("lastName_error").classList.add("hidden");
    document.getElementById("email_error").classList.add("hidden");
    document.getElementById("password_error").classList.add("hidden");
    document.getElementById("name_valid").classList.add("hidden");
    document.getElementById("lastName_valid").classList.add("hidden");
    document.getElementById("email_valid").classList.add("hidden");
    document.getElementById("password_valid").classList.add("hidden");

    document.getElementById("inbox_message").classList.remove("hidden");
    document.getElementById("submit_valid").classList.remove("hidden");
  }
});
