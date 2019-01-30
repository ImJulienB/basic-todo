$(function() {
    $(".form-control").submit(function(event) {
        event.preventDefault();
        var message = $(".form-control").serialize();
        $.ajax({
            url: "php/tasks_action.php",
            success: function(data) {
                
            }
        });
    });
    var action = "add";
    
    var datetime = $("#date").val();
    
    $(".tasks-table").on("click", ".btn-edit", function() {
        var action = "edit";
        var id = $(this).val();
    });

    $(".tasks-table").on("click", ".btn-delete", function() {
        var action = "delete";
        var id = $(this).val();
    });

    /*$.ajax({
        url: "php/tasks_request.php",
        success: function(data) {
            
        }
    });*/
});