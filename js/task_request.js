$(function() {
    $.ajax({
        url: "php/tasks_request.php",
        success: function(data) {
            $.each(data, function(i, item) {
                $(".tasks-table").append(
                    $('<tr>').append(
                        $('<td>').text(item.id),
                        $('<td>').text(item.date),
                        $('<td>').text(item.name),
                        $('<td>').append(
                            $('<button class="btn-edit" value="' + item.id + '"></button><button class="btn-delete" value="' + item.id + '"></button>')
                        )
                    )
                );
            });
        }
    })
});