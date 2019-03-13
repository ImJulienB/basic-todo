// Handling the modal pop-up for the add form
// Adding an event listener to the + button in the header
document.getElementById("add-header-btn").addEventListener("click", function() {
    /* Grabbing some elements from the DOM:
        * modal: the modal of the adding form
        * close: the modal's close button
        * contentInput: the form's content input element
        * dateInput: the form's date input element
        * personInput: the form's person selector element
        */
    var modal = document.getElementById("addmodal");
    var close = document.getElementsByClassName("add-close")[0];
    var contentInput = document.getElementById("content");
    var dateInput = document.getElementById("date");
    var personInput = document.getElementById("task-people-select");

    // Resetting each input's values on each modal opening
    contentInput.value = "";
    dateInput.value = "";
    personInput.value = "";

    // As I'm removing any content from the input fields I have to check if the content field has the "used" class
    if(contentInput.classList.contains("used")) { // If it has it: I remove it
        contentInput.classList.remove("used");
    }

    if(dateInput.classList.contains("used")) { // Same thing for the date field
        dateInput.classList.remove("used");
    }

    modal.style.display = "block"; // Showing the modal

    close.onclick = function() { // If I click the close (X) button: close the modal
        modal.style.display = "none";
    }

    window.onclick = function(event) { // Checking where the user clicks on the page
        if (event.target == modal) { // If the user clicks somewhere else than on the modal: close the modal
            modal.style.display = "none";
        }
    }
});

// Handling the add button click event
$("#add-submit").click(function() {
    // Grabbing data from the form
    var form = $("#add-form");
    var formData = $(form).serialize();
    // When the user clicks submit on the form
    form.submit(function(event) {
        event.preventDefault(); // Prevent the default action to happen
        // a.k.a the form sending data to another page rather that doing it with AJAX
        $.ajax({
            data: formData, // Feeding AJAX some data to send (Hope it likes it)
            url: "php/tasks_action.php", // Script to use
            success: function() { // In case of success
                location.reload(); // Reload the current page
            },
            error: function() { // In case of error
                //alert("An error occured"); // Indicate that an error happened
                // (Every scripts on this file throws errors yet everything works somehow)
                location.reload(); // Reload
            }
        });
    });
});

// Handling the edit button click event
$("#tasks-table").on("click", "#task-btn-edit", function() {
    var id = $(this).val(); // Grabbing the ID which is the button's value
    var peopleID = $(this).closest("tr").children(".task-people-id").attr("id"); // Grabbing the affected person's id
    
    var dateID = "#date-" + id;
    var contentID = "#task-content-" + id;

    var date = $(this).closest("tr").children(dateID).text();
    date = date.replace(/\s/g, "T");
    var content = $(this).closest("tr").children(contentID).text();


    document.getElementById("edit-content").value = content;
    document.getElementById("edit-date").value = date;
    document.getElementById("edit-id").value = id;
    document.getElementById("edit-task-people-select").value = peopleID;

    var modal = document.getElementById("editmodal");
    var span = document.getElementsByClassName("edit-close")[0];

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $("#edit-submit").click(function() {
        var form = $("#edit-form");
        var formData = $(form).serialize();
        console.log(formData);

        form.submit(function(event) {
            event.preventDefault(); // Prevent the default action to happen

            $.ajax({
                data: formData, // Putting some data to send
                url: "php/tasks_action.php", // Script to use
                success: function() { // In case of success
                    location.reload(); // Reload the current page
                },
                error: function(data) { // In case of error
                    //alert("An error occured"); // Indicate that an error happened
                    // (Every scripts on this file throws errors yet everything works somehow)
                    location.reload(); // Reload
                }
            });
        });
    });
});

// Handling the remove button click event
$("#tasks-table").on("click", "#task-btn-delete", function() {
    // Making sure the user wants to remove the entry
    if (confirm("Are you sure you want to remove this task?")) {
        var action = "remove"; // Used for AJAX's data, indicating we want to remove something
        var id = $(this).val(); // Grabbing the ID which is the button's value
        $.ajax({
            data: { // Putting some data to send
                action: action,
                id: id
            },
            url: "php/tasks_action.php", // Script to use
            success: function() { // In case of success
                    location.reload(); // Reload the current page
                },
                error: function(data) { // In case of error
                    //alert("An error occured"); // Indicate that an error happened
                    // (Every scripts on this file throws errors yet everything works somehow)
                    location.reload(); // Reload
                }
        });
    }
});
