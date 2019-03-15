// This script fires once you load the page, no event listeners here!
let request = new XMLHttpRequest();
request.open('GET', 'php/people_request.php', true);

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

            let taskselect = document.getElementById("task-people-select");
                let taskoption = document.createElement("option");
                    taskoption.value = item.id;
                    taskoption.innerHTML = item.name;
            taskselect.appendChild(taskoption);

            let editselect = document.getElementById("edit-task-people-select");
                let editoption = document.createElement("option");
                    editoption.value = item.id;
                    editoption.innerHTML = item.name;
            editselect.appendChild(editoption);

            document.getElementById("people-table").appendChild(tr);
        });
    }
};

request.send();