$("ul").on("click","li" ,function() {
	// body...
	$(this).toggleClass("completed");
});

$("ul").on("click", "span" ,function(event){
$(this).parent().fadeOut(500,function () {
	// body...
	$(this).remove();
});
event.stopPropagation();
});

$("input[type= 'text'").keypress(function (event) {
	// body...
	if(event.which===13){
		var toDO=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "  + toDO + "</li>" );
	}
});

$(".fa-plus")click(function(){
	$("input [type='text'").fadeToggle();
});