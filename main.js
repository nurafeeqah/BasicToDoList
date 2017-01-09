$(document).ready(function(e){
    
    // $("#toDoItem").submit(function(e){
    //     e.preventDefault();
    // });

    // Adding new row when clicked Add button
    $("#addRow").click(function(e){
            var toDoItem = $("#toDoItem").val();
            var newToDo = "<tr></td><td contenteditable='true'>" + toDoItem + "</td><td><input type='checkbox' toDoItem='newToDo'></td></tr>"
            if (toDoItem     === '') {
                alert("Form cannot be empty"); //Alert to not add an empty to-do item
              } else {
                $("table tbody").append(newToDo); 
              }
              document.getElementById("toDoItem").value = ""; //Clear the form once added to the list
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

    $("table tbody").sortable(); 

    

});    
