if (checkCookie()) {
	window.location = "./";
}

document.getElementById("login").addEventListener("click", function(event) {
	event.preventDefault();

	window.location = "login.html";
});

document.getElementById("passwordconfirm").addEventListener("keyup", function() {
	let confirm = this.value;
	let confirmlabel = document.getElementById("confirmlabel");
	let password = document.getElementById("password").value;
	let submitbtn = document.getElementById("signup");

	if (confirm != password) {
		confirmlabel.style.color = "red";
		submitbtn.disabled = true;
	} else if (confirm == password) {
		confirmlabel.style.color = "";
		submitbtn.disabled = false;
	}
});

document.getElementById("signup").addEventListener("click", function(event) {
	event.preventDefault();

	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	var http = new XMLHttpRequest();
	var url = "php/signup.php";
	var params = "username=" + username + "&password=" + password;
	http.open('POST', url, true);

	// Send the proper header information along with the request
	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	http.onreadystatechange = function() { //Call a function when the state changes.
    	if(http.readyState == 4 && http.status == 200) {
    		// Success
    		var response = http.responseText;
        	if (response == "exists") {
        		alert("This user already exists.");
        	} else {
        		setCookie("username", username);
        		setCookie("userid", response);
        		window.location = "./";
        	}
    	}
	}
	http.send(params);
});