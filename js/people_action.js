// Handling the modal pop-up for the add form
document.getElementById("people-header-btn").addEventListener("click", function() {
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
document.getElementById("add-people-submit").addEventListener("click", function(event) {
    event.preventDefault();

    let xmlhttp = window.XMLHttpRequest ?
        new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            location.reload();
        }
    }

    let name = document.getElementById("name").value;

    xmlhttp.open("GET","php/people_action.php?action=add&name=" + name, true);
    xmlhttp.send();
});

// Handling the remove button click event
document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'people-btn-delete'){
        // Making sure the user wants to remove the entry
        if (confirm("Are you sure you want to remove this person from the list? (Make sure you removed tasks affected to this person before)")) {
            var id = e.target.value; // Grabbing the ID which is the button's value

            let xmlhttp = window.XMLHttpRequest ?
            new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

            xmlhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    location.reload();
                }
            }

            xmlhttp.open("GET","php/people_action.php?action=remove&id=" + id, true);
            xmlhttp.send();
        }
    }
});
