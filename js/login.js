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
    			case "2": // User does not exist
    				alert("This user does not exist.");
    				break;
    			case "1": // Wrong password
    				alert("Incorrect password.");
    				break;
    			case "0":
    				setCookie("username", username, "1");
        			window.location = "./";
        			break;
    		}
    	}
	}
	http.send(params);
});