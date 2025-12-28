const USERS = ["andreea", "vlad"];  // username-urile voastre
const SECRET_PASS = "09112024";     // parola comună

function register() {
  const user = document.getElementById("regUser").value.trim().toLowerCase();
  const pass = document.getElementById("regPass").value.trim();
  const error = document.getElementById("regError");

  error.textContent = "";

  if (user === "" || pass === "") {
    error.textContent = "Completează toate câmpurile!";
    return;
  }

  if (USERS.includes(user) && pass === SECRET_PASS) {
    // Ascunde formularul
    document.getElementById("registerBox").style.display = "none";

    // Creează mesajul de bun venit
    const message = document.createElement("div");
    message.textContent = user === "andreea" ? "Bine ai venit, Andreea 💕" : "Bine ai venit, Vlad 💙";
    message.style.fontSize = "24px";
    message.style.textAlign = "center";
    message.style.marginTop = "50px";
    message.style.fontFamily = "Times New Roman, Times, serif";
    document.body.appendChild(message);

    // Redirecționează după 3 secunde
    setTimeout(() => {
      window.location.href = "main.html"; 
    }, 3000);

  } else {
    error.textContent = "Acces refuzat 💔";
  }
}
