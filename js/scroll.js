document.addEventListener('scroll', function() { // Adding an event listener on the page's scroll state
	if (window.scrollY != 0) { // If the user isn't on the very top of the page
		document.getElementsByTagName("header")[0].classList.add("shadow"); // Add the shadow class
													// This class adds a slight shadow on the header
	} else { // If the user is on the very top of the page
		document.getElementsByTagName("header")[0].classList.remove("shadow"); // Remove the shadow class
	}
});

// Same but for the add people modal's header
document.getElementById("add-people-content").addEventListener('scroll', function() {
	if (this.scrollTop != 0) {
		document.getElementById("add-people-header").classList.add("shadow");
	} else {
		document.getElementById("add-people-header").classList.remove("shadow");
	}
});