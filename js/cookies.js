function setCookie(cname, cvalue) { // Creates a cookie
	var d = new Date("July 1, 2030");
	//d.setTime(d.getTime() + (exhours*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(cname) {
	var expires = "expires=Thu, 18 Dec 2013 12:00:00 UTC";
	document.cookie = cname + "=;" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() { // Checks if the user is logged in
	var username = getCookie("username");
	if (username != "") {
		return true;
	} else {
		return false;
	}
}