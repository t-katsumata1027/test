$(document).ready(function() {
    $("#add").on("click", function(){
        const input = $("#input").val();
        $("#todolist").append("<li><input type='checkbox'>" + input + "</li>");

        $("#input").val("");
    });
});
