// This script fires once you load the page, no event listeners here!
let dateID;
let contentID;

let requesttask = new XMLHttpRequest();
requesttask.open('GET', 'php/tasks_request.php', true);

requesttask.onload = function() {
    if (requesttask.status >= 200 && requesttask.status < 400) {
        // Success!
        let data = JSON.parse(requesttask.responseText);
        data.forEach(function(item, i) {
            dateID = "date-" + item.id;
            contentID = "task-content-" + item.id;

            let tr = document.createElement("tr");
                let tdpeople = document.createElement("td");
                    tdpeople.classList.add("task-people-id");
                    tdpeople.setAttribute("id", item.peopleid);
                    tdpeople.innerHTML = item.name;
                tr.appendChild(tdpeople);

                let tddate = document.createElement("td");
                    tddate.setAttribute("id", dateID);
                    tddate.innerHTML = item.date;
                tr.appendChild(tddate);

                let tdtask = document.createElement("td");
                    tdtask.setAttribute("id", contentID);
                    tdtask.innerHTML = item.content;
                tr.appendChild(tdtask);                

                let tdactions = document.createElement("td");
                    let btnedit = document.createElement("button");
                        btnedit.classList.add("btn-edit");
                        btnedit.setAttribute("id", "task-btn-edit");
                        btnedit.value = item.id;
                    tdactions.appendChild(btnedit);

                    let btndel = document.createElement("button");
                        btndel.classList.add("btn-delete");
                        btndel.setAttribute("id", "task-btn-delete");
                        btndel.value = item.id;
                    tdactions.appendChild(btndel);
                tr.appendChild(tdactions);

            document.getElementById("tasks-table").appendChild(tr);
        });
    }
};

requesttask.send();