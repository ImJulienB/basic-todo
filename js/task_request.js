// This script fires once you load the page, no event listeners here!
var dateID;
var contentID;

var request = new XMLHttpRequest();
request.open('GET', 'php/tasks_request.php', true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        data.forEach(function(item, i) {
            dateID = "date-" + item.id;
            contentID = "task-content-" + item.id;

            var tr = document.createElement("tr");
            var tdpeople = document.createElement("td");
                tdpeople.classList.add("task-people-id");
                tdpeople.setAttribute("id", item.peopleid);
                tdpeople.innerHTML = item.name;
            tr.appendChild(tdpeople);

            var tddate = document.createElement("td");
                tddate.setAttribute("id", dateID);
                tddate.innerHTML = item.date;
            tr.appendChild(tddate);

            var tdtask = document.createElement("td");
                tdtask.setAttribute("id", contentID);
                tdtask.innerHTML = item.content;
            tr.appendChild(tdtask);                

            var tdactions = document.createElement("td");
                var btnedit = document.createElement("button");
                    btnedit.classList.add("btn-edit");
                    btnedit.setAttribute("id", "task-btn-edit");
                    btnedit.value = item.id;
                tdactions.appendChild(btnedit);

                var btndel = document.createElement("button");
                    btndel.classList.add("btn-delete");
                    btndel.setAttribute("id", "task-btn-delete");
                    btndel.value = item.id;
                tdactions.appendChild(btndel);
            tr.appendChild(tdactions);

            document.getElementById("tasks-table").appendChild(tr);
        });
    }
};

request.send();