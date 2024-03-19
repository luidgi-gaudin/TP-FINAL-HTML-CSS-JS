var correctmail = "test@test.fr";
var correctpassword = "test";

document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault();

	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if (email === correctmail && password === correctpassword) {
		document.body.innerHTML = `
<head>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #343A40;
        }
    </style>
</head>

<body>

    <div style="align-self: center;">
        <img id="engrenage" src="images/engrenage.gif" alt="Engrenage" width=200rem/>
    </div>


</body>
`;
		setTimeout(() => {
			window.location.href = "dashboard.html";
		}, 1000);
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
