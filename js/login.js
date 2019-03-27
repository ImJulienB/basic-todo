if (checkCookie()) {
	window.location = "./";
}

document.getElementById("signup").addEventListener("click", function(event) {
	event.preventDefault();

	window.location = "signup.html";
});

document.getElementById("login").addEventListener("click", function(event) {
	event.preventDefault();

	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	var http = new XMLHttpRequest();
	var url = "php/login.php";
	var params = "username=" + username + "&password=" + password;
	http.open('POST', url, true);

	//Send the proper header information along with the request
	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	http.onreadystatechange = function() { //Call a function when the state changes.
    	if(http.readyState == 4 && http.status == 200) {
    		// Success
    		var response = http.responseText;
    		console.log(response);
    		switch (response) {
    			case "noexist": // User does not exist
    				alert("This user does not exist.");
    				break;
    			case "incorrect": // Wrong password
    				alert("Incorrect password.");
    				break;
    			default:
    				setCookie("username", username);
    				setCookie("userid", response);
        			window.location = "./";
        			break;
    		}
    	}
	}
	http.send(params);
});