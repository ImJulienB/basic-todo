// This script fires once you load the page, no event listeners here!
var nameID;
$.ajax({
    url: "php/people_request.php", // The script to use
    success: function(data) { // In case of success
        $.each(data, function(i, item) { // Foreach equivalent, to show the result of the script
            contentID = "task-content-" + item.id;
            $("#people-table").append( // Adding stuff to the table
                $('<tr>').append( // Adding stuff to a newly created tr
                    $('<td>').text(item.name), // Adding the ID to the first td
                    $('<td>').append( // Adding the buttons here, have to open this one
                        $('<button class="btn-delete" id="people-btn-delete" value="' + item.id + '"></button>')
                    ) // Closing the last td
                ) // Closing the tr
            ); // Done adding stuff to the table
        });
    }
});