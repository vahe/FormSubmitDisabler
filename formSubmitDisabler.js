//Do an initial check
//This is necessary in case the user refreshes the page and the form data is retained
checkAndUpdateSubmitButtonStatus($('form#fbdForm'));


//Add id="fbdForm" to the forms you want to enable FormSubmitDisabler for
//On keyup in any of the #fbdForm text or password fields, perform a check to update submit button's state 
$('#fbdForm input:text, #fbdForm input:password').bind('keyup paste', function(){
    var parentForm = $(this).closest('form#fbdForm');    
    
    //need to pass the form selector to the function
    checkAndUpdateSubmitButtonStatus(parentForm);
});

//to update button status after an ajax request (jQuery UJS)
$('#fdbForm').bind('ajax:complete', function(){
    checkAndUpdateSubmitButtonStatus($(this));
});


//Checks every text and password inputs, expect those with class="optional"
//Disables the submit button(s) if any of the non-optional fields are empty
//Enables  the submit button(s) if all of the non-optional fields are filled
function checkAndUpdateSubmitButtonStatus(currentForm){

    var parentFormInputs = currentForm.find('input:text, input:password');
    var enableButton = true;

    var numberOfFields = parentFormInputs.length;
    //iterate thru the fields
    for(var i=0; i < numberOfFields; ++i){
        enableButton = ((parentFormInputs[i].value.trim() || parentFormInputs[i].classList.contains('optional')) && enableButton);
    }

    //update the button 'disabled' state
    currentForm.find('input:submit').attr('disabled', !enableButton );
}
