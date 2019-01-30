$(function() {
    $(".btn-add").click(function() {
        var form = $(".form-control");
        var formData = $(form).serialize();
        $(".form-control").submit(function(event) {
            event.preventDefault();
            $.ajax({
                data: formData,
                url: "php/tasks_action.php",
                success: function() {
                    location.reload();
                },
                error: function() {
                    location.reload();
                }
            });
        });
    });
    
    $(".tasks-table").on("click", ".btn-edit", function() {
        var action = "edit";
        var id = $(this).val();
        $.ajax({
            type: 'GET',
            data: {
                "action": action,
                "id": id
            },
            url: "php/tasks_action.php",
            success: function() {
                location.reload();
            },
            error: function() {
                location.reload();
            }
        });
    });

    $(".tasks-table").on("click", ".btn-delete", function() {
        var action = "remove";
        var id = $(this).val();
        $.ajax({
            type: 'GET',
            data: {
                action: action,
                id: id
            },
            url: "php/tasks_action.php",
            success: function() {
                location.reload();
            },
            error: function() {
                location.reload();
            }
        });
    });
});