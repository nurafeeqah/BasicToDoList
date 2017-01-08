$(document).ready(function(e){
    

    $("#addRow").click(function(e){
        var toDoItem = $("#toDoItem").val();

        var newToDo = "<tr><td>" + toDoItem + "</td><td><input type='checkbox' toDoItem='newToDo'></td></tr>"
        $("table tbody").append(newToDo);
    });

    // Find and remove selected table rows
    $("#deleteRow").click(function(e){
        $("table tbody").find('input[toDoItem="newToDo"]').each(function(e){
        	if($(this).is(":checked")){
                $(this).parents("tr").remove();
            }
        });
    });
    // Delete all table row except the first row 
    $('#clearAll').click(function(e){
        $('#toDoTable').find("tr:gt(0)").remove(); //gt selector
    });

  

});    
