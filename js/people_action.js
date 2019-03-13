// Handling the modal pop-up for the add form
$("#people-header-btn").click(function() {
    var modal = document.getElementById("addpeoplemodal");
    var span = document.getElementsByClassName("add-people-close")[0];
    var nameInput = document.getElementById("name");

    nameInput.value = "";

    if(nameInput.classList.contains("used")) {
        nameInput.classList.remove("used");
    }

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// Handling the add button click event
$("#add-people-submit").click(function() {
    // Grabbing data from the form
    var form = $("#add-people-form");
    var formData = $(form).serialize();
    // When the user clicks submit on the form
    form.submit(function(event) {
        event.preventDefault(); // Prevent the default action to happen
        // a.k.a the form sending data to another page rather that doing it with AJAX
        $.ajax({
            data: formData, // Feeding AJAX some data to send (Hope it likes it)
            url: "php/people_action.php", // Script to use
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

// Handling the remove button click event
$("#people-table").on("click", "#people-btn-delete", function() {
    // Making sure the user wants to remove the entry
    if (confirm("Are you sure you want to remove this task?")) {
        var action = "remove"; // Used for AJAX's data, indicating we want to remove something
        var id = $(this).val(); // Grabbing the ID which is the button's value
        $.ajax({
            data: { // Putting some data to send
                action: action,
                id: id
            },
            url: "php/people_action.php", // Script to use
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
