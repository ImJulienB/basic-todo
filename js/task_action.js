$(function() {
    // Handling the add button click event
    $(".btn-add").click(function() {
        // Grabbing data from the form
        var form = $(".form-control");
        var formData = $(form).serialize();
        // When the user clicks submit on the form
        $(".form-control").submit(function(event) {
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
    $(".tasks-table").on("click", ".btn-edit", function() {
        var action = "edit"; // Used for AJAX's data, indicating we want to edit something
        var id = $(this).val(); // Grabbing the ID which is the button's value

        var dateID = "#date-" + id;
        var contentID = "#task-content-" + id;

        var date = $(dateID).text();
        var content = $(contentID).text();

        console.log(date);
        console.log(content);

        $(dateID).html("<input type='datetime-local' name='date' value='" + date + "'>");
        $(contentID).html("<input type='text' name='content' value='" + content + "'><input type='submit' name='btn-edit-send' value='Edit'>");

        /*$.ajax({
            data: { // Putting some data to send
                action: action,
                id: id
            },
            url: "php/tasks_action.php", // Script to use
            success: function() { // In case of success
                location.reload(); // Reload the current page
            },
            error: function() { // In case of error
                //alert("An error occured"); // Indicate that an error happened
                // (Every scripts on this file throws errors yet everything works somehow)
                location.reload(); // Reload
            }
        });*/
    });

    // Handling the remove button click event
    $(".tasks-table").on("click", ".btn-delete", function() {
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
                error: function() { // In case of error
                    //alert("An error occured"); // Indicate that an error happened
                    // (Every scripts on this file throws errors yet everything works somehow)
                    location.reload(); // Reload
                }
            });
        }
    });
});