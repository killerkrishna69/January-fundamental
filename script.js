$(document).ready(function () {

  /* Show / Hide Password */
  $("#togglePassword").click(function () {
    let passwordInput = $("#userpassword");

    if (passwordInput.attr("type") === "password") {
      passwordInput.attr("type", "text");
      $(this).text("Hide");
    } else {
      passwordInput.attr("type", "password");
      $(this).text("Show");
    }
  });

  /* Form Validation */
  $("#registerForm").submit(function (e) {
    e.preventDefault(); // Stop default submit

    let name = $("#username").val().trim();
    let email = $("#useremail").val().trim();
    let phone = $("#userphone").val().trim();
    let password = $("#userpassword").val();

    $("#msgBox").removeClass().hide();

    // Required fields validation
    if (name === "" || email === "" || phone === "" || password === "") {
      showError("All fields are required.");
      return;
    }

    // Email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("Please enter a valid email address.");
      return;
    }

    // Phone number validation
    if (!/^\d{10}$/.test(phone)) {
      showError("Phone number must contain exactly 10 digits.");
      return;
    }

    // Password strength validation
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      showError("Password must be strong (uppercase, lowercase, number, min 8 chars).");
      return;
    }

    // Success message
    $("#msgBox")
      .addClass("success")
      .text("Form submitted successfully!")
      .fadeIn();

    // Reset form
    $("#registerForm")[0].reset();
  });

  /* Error Message Function */
  function showError(message) {
    $("#msgBox")
      .addClass("error")
      .text(message)
      .fadeIn();
  }

});
