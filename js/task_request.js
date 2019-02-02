// This script fires once you load the page, no event listeners here!
$(function() {
    var dateID;
    var contentID;
    $.ajax({
        url: "php/tasks_request.php", // The script to use
        success: function(data) { // In case of success
            $.each(data, function(i, item) { // Foreach equivalent, to show the result of the script
                dateID = "date-" + item.id;
                contentID = "task-content-" + item.id;
                $(".tasks-table").append( // Adding stuff to the table
                    $('<tr>').append( // Adding stuff to a newly created tr
                        $('<td>').text(item.id), // Adding the ID to the first td
                        $('<td>').attr("id", dateID).text(item.date), // Adding the date & time to the second td
                        $('<td>').attr("id", contentID).text(item.content), // Adding the task's content to the third td
                        $('<td>').append( // Adding the buttons here, have to open this one
                            $('<button class="btn-edit" value="' + item.id + '"></button><button class="btn-delete" value="' + item.id + '"></button>')
                        ) // Closing the last td
                    ) // Closing the tr
                ); // Done adding stuff to the table
            });
        }
    })
});