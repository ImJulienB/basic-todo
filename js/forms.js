/**********************************************************/
/* This is a little script from a framework I have been   */
/* working on in my spare time. It allows me to           */
/* effortlessly create stylish forms based on Google's    */
/* Material Design which I am a fan of.                   */
/**********************************************************/

$(document).ready(function() {
	$(".form-control-input").focusout(function() { // Once the input has lost focus
		if($(this).val()) // If it has a value...
			$(this).addClass('used'); // ...add the "used" class

		// This class allows me to stick the input's label on top of the input box,
		// without it overlapping the text the user entered. It also allows me to
		// avoid using the "required" parameter on the input tag's code in order
		// to achieve the same thing.
		
		else // If there is no content in the text box...
			$(this).removeClass('used'); // ...remove the "used" class
	});
});