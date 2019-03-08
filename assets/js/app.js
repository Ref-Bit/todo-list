//Check off Specific Todos by Clicking
$("ul").on("click", "li",function () {
    $(this).toggleClass("completed")
});

//Click on X to delete Todo
$("ul").on("click","span",function (event) {
    $(this).parent().fadeOut(500, function () {//"this" here refers to <span> element
        $(this).remove();//where here "this" refers to the parent element which is in this case <li>
    });
   event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //Grab a new todo text from input
        var todoText = $(this).val();
        //Clear the create field after setting a new todo
        $(this).val("");
        //Create a new <li> and add to <ul>
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});