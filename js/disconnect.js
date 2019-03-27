document.getElementById("disconnect").addEventListener("click", function() {
	deleteCookie("username");
	deleteCookie("userid");
	window.location = "login.html";
});