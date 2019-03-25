document.getElementById("disconnect").addEventListener("click", function() {
	deleteCookie("username");
	window.location = "login.html";
});