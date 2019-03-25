// Handling the modal pop-up for the add form
document.getElementById("people-header-btn").addEventListener("click", function() { // When clicking on the people add icon/button
    var modal = document.getElementById("addpeoplemodal"); // Grabbing the modal by its ID
    var span = document.getElementsByClassName("add-people-close")[0]; // Grabbing the close button by its class name
    var nameInput = document.getElementById("name"); // Grabbing the name input field by its ID

    nameInput.value = ""; // Resetting the input field in case you close and re-open the modal with text in it

    modal.style.display = "block"; // Show/open the modal

    span.onclick = function() { // When clicking on the modal's close button
        modal.style.display = "none"; // Hide/close the modal
    }

    window.onclick = function(event) { // When clicking anywhere on the window
        if (event.target == modal) { // Checking if the user clicked somewhere else that on the modal
            modal.style.display = "none"; // If the user did, close the modal
        }
    }
});

// Handling the add button click event
document.getElementById("add-people-submit").addEventListener("click", function(event) { // AJAX request to add people, fires when the user clicks on the add button
    event.preventDefault(); // Preventing the form's default action

    let xmlhttp = window.XMLHttpRequest ?
        new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"); // Creating a new XMLHttpRequest object

    xmlhttp.onreadystatechange = function() { // When it's ready
        if (this.readyState === 4 && this.status === 200) { // Check if it succeeded
            peoplerequest(); // If yes, update people lists
        }
    }

    let name = document.getElementById("name").value; // Grabbing the name input field by its ID

    xmlhttp.open("GET","php/people_action.php?action=add&name=" + name, true); // Openning an AJAX request in GET on the people_action.php file
                                        // Its action parameter is 'add' and its name parameter is the name that was entered by the user
    xmlhttp.send(); // Firing the AJAX request
});

// Handling the remove button click event
document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'people-btn-delete'){
        // Making sure the user wants to remove the entry
        if (confirm("Are you sure you want to remove this person from the list? This will also remove any tasks affected to this person.")) {
            var id = e.target.value; // Grabbing the ID which is the button's value

            let xmlhttp = window.XMLHttpRequest ?
            new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

            xmlhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    taskrequest();
                    peoplerequest();
                }
            }

            xmlhttp.open("GET","php/people_action.php?action=remove&id=" + id, true);
            xmlhttp.send();
        }
    }
});
