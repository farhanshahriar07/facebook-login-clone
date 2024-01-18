function registerUser() {
  const username = document.getElementById("email").value;
  const password = document.getElementById("pass").value;

  fetch("https://express-login-zeta.vercel.app/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").innerText = data.message;
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("result").innerText = "An error occurred.";
    });
}
