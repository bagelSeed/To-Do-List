function addTaskOnList() {
	var task = $("#newJobs").val();
	//confirm(task);
	$(".list").append('<li><input type="checkbox" />'+task +' <button class="removeTask">remove</button></li>');
	$("#newJobs").val('');
}

function removeTaskOnList() {
	$(this).parent().remove();
}

function doneTaskOnList() {
	if($(this).parent().css('textDecoration') === 'line-through'){
		$(this).parent().css('textDecoration', 'none').css('color', 'black');
	} else {
		$(this).parent().css('textDecoration', 'line-through').css('color', 'grey');
	}
}

$(function (){
	$(document).on('click', "#addTask", addTaskOnList);
	$(document).on('click', ".removeTask", removeTaskOnList);
	$(document).on('click', ".completed", doneTaskOnList);
	$("#newJobs").keyup(function(event){
		if(event.keyCode == 13){
			$("#addTask").click();
		}
	});
});

