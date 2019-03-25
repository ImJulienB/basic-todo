document.addEventListener("DOMContentLoaded", function() { // Whenever the document is ready
	checkCookie(); // fire the check cookie function to check if the user is logged in
    taskrequest(); // fire the task request function so the tasks are all displayed
    peoplerequest(); // fire the people request function so people are shown everywhere needed
});