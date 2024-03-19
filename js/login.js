var correctmail = "test@test.fr";
var correctpassword = "test";

document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault();

	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if (email === correctmail && password === correctpassword) {
		window.location.href = "dashboard.html";
	} else {
		alert("Email ou Mot de passe incorrecte");
	}
});

function SaveNewLogs() {
	var emailNew = document.getElementById("emailChange").value;
	var passwordNew = document.getElementById("passwordChange").value;

	correctmail = emailNew;
	correctpassword = passwordNew;

	alert("Vos identifiants ont bien été modifiés !");
}
