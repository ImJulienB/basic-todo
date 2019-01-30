$(document).ready(function() {
	$(".form-control-input").focusout(function() {
		if($(this).val())
			$(this).addClass('used');
		else
			$(this).removeClass('used');
	});
});