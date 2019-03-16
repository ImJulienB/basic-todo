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
document.getElementById("add-submit").addEventListener("click", function(event) {
    event.preventDefault();

    let xmlhttp = window.XMLHttpRequest ?
        new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            taskrequest();
            document.getElementById("addmodal").style.display = "none";
        }
    }

    let content = document.getElementById("content").value;
    let date = document.getElementById("date").value;
    let peopleid = document.getElementById("task-people-select").value;

    xmlhttp.open("GET","php/tasks_action.php?action=add&content=" + content + "&date=" + date + "&people-id=" + peopleid, true);
    xmlhttp.send();
});

document.addEventListener('click',function(e){
    // Handling the edit buttons click event
    if(e.target && e.target.id== 'task-btn-edit'){

        var id = e.target.value;
        var peopleID = e.target.parentNode.parentNode.children[0].id; // Grabbing the affected person's id
        
        var dateID = "#date-" + id;
        var contentID = "#task-content-" + id;

        var date = e.target.parentNode.parentNode.children[1].innerHTML;
        date = date.replace(/\s/g, "T");
        var content = e.target.parentNode.parentNode.children[2].innerHTML;


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
    }
    if(e.target && e.target.id == "task-btn-delete") {
        if (confirm("Are you sure you want to remove this task?")) {
            var id = e.target.value; // Grabbing the ID which is the button's value

            let xmlhttp = window.XMLHttpRequest ?
            new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

            xmlhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    taskrequest();
                    modal.style.display = "none";
                }
            }

            xmlhttp.open("GET","php/tasks_action.php?action=remove&id=" + id, true);
            xmlhttp.send();
        }
    }
});

document.getElementById("edit-submit").addEventListener("click", function(event) {
    event.preventDefault();

    let xmlhttp = window.XMLHttpRequest ?
        new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            taskrequest();
            document.getElementById("editmodal").style.display = "none";
        }
    }

    let content = document.getElementById("edit-content").value;
    let date = document.getElementById("edit-date").value;
    let peopleid = document.getElementById("edit-task-people-select").value;
    let id = document.getElementById("edit-id").value;

    xmlhttp.open("GET","php/tasks_action.php?action=update&id=" + id +"&content=" + content + "&date=" + date + "&people-id=" + peopleid, true);
    xmlhttp.send();
});