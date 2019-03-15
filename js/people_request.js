// This script fires once you load the page, no event listeners here!
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
            $("#task-people-select").append(
                $('<option>').attr("value", item.id).text(item.name)
            );
            $("#edit-task-people-select").append(
                $('<option>').attr("value", item.id).text(item.name)
            );
        });
    }
});

/*let request = new XMLHttpRequest();
request.open('GET', 'php/tasks_request.php', true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        let data = JSON.parse(request.responseText);
        data.forEach(function(item, i) {
            
            let tr = document.createElement("tr");
                let tdpeople = document.createElement("td");
                    tdpeople.innerHTML = item.name;
                tr.appendChild(tdpeople);

                let tdactions = document.createElement("td");
                    let btndel = document.createElement("button");
                        btndel.classList.add("btn-delete");
                        btndel.setAttribute("id", "people-btn-delete");
                        btndel.value = item.id;
                    tdactions.appendChild(btndel);
                tr.appendChild(tdactions);

            $("#task-people-select").append(
                $('<option>').attr("value", item.id).text(item.name)
            );
            $("#edit-task-people-select").append(
                $('<option>').attr("value", item.id).text(item.name)
            );

            document.getElementById("people-table").appendChild(tr);
        });
    }
};

request.send();*/