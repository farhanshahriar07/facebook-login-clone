document.addEventListener("DOMContentLoaded", () => {
  loadUserData();
});

function loadUserData() {
  fetch("https://express-login-zeta.vercel.app/users", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const userDataBody = document.getElementById("userDataBody");
      userDataBody.innerHTML = "";

      data.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
          `;
        userDataBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
