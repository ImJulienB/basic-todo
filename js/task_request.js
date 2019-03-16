// Requesting tasks and displaying them in a table
// I am putting this in a function so I can use it in every tasks related scripts instead of reloading the page to update the tables
function taskrequest() {
    let dateIDrqt;
    let contentIDrqt;

    let requesttask = new XMLHttpRequest();
    requesttask.open('GET', 'php/tasks_request.php', true);

    requesttask.onload = function() {
        if (requesttask.status >= 200 && requesttask.status < 400) {
            // Success!
            // Emptying the table
            let table = document.getElementById("tasks-table").innerHTML = "<tr><th>Person</th><th>Date</th><th>Task</th><th>Actions</th></tr>";

            // Grabbing data from the request
            let data = JSON.parse(requesttask.responseText);
            data.forEach(function(item, i) { // For each elements in the request's data
                dateIDrqt = "date-" + item.id; // Needed for the editing script
                contentIDrqt = "task-content-" + item.id; // Same

                let tr = document.createElement("tr"); // Creating a TR (table row) element
                    let tdpeople = document.createElement("td"); // Creating a TD element - this is done 4 times on each rows for there are 4 columns to generate
                        tdpeople.classList.add("task-people-id"); // Adding the "task-people-id" class
                        tdpeople.setAttribute("id", item.peopleid); // Setting its ID to the person's ID
                        tdpeople.innerHTML = item.name; // Writing the person's name in it
                    tr.appendChild(tdpeople); // Appending it to the previously created table row

                    let tddate = document.createElement("td");
                        tddate.setAttribute("id", dateIDrqt); // Setting this one's ID to the date's ID, needed for the editing script
                        tddate.innerHTML = item.date; // Writing the date in it
                    tr.appendChild(tddate);

                    let tdtask = document.createElement("td");
                        tdtask.setAttribute("id", contentIDrqt); // Same for the task's message/content
                        tdtask.innerHTML = item.content;
                    tr.appendChild(tdtask);                

                    let tdactions = document.createElement("td"); // Column for the action buttons
                        let btnedit = document.createElement("button"); // Creating a button element for the edit button
                            btnedit.classList.add("btn-edit"); // Adding the btn-edit class for styling and scripts
                            btnedit.setAttribute("id", "task-btn-edit"); // Giving it a specific ID needed for scripts
                            btnedit.value = item.id; // Setting its value to the task's ID
                        tdactions.appendChild(btnedit);

                        let btndel = document.createElement("button"); // Same thing but for the delete button
                            btndel.classList.add("btn-delete");
                            btndel.setAttribute("id", "task-btn-delete");
                            btndel.value = item.id;
                        tdactions.appendChild(btndel);
                    tr.appendChild(tdactions); // Appending everything to the created row

                document.getElementById("tasks-table").appendChild(tr); // Finally, everything's put in the table, and that task is repeated for each rows there are
            });
        }
    };

    requesttask.send(); // Sending the request
}

document.addEventListener("DOMContentLoaded", function() { // Whenever the document is ready: fire the tasks request function
    taskrequest();
});