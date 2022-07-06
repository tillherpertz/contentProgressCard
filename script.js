const progressSteps = $('input[type=checkbox]').length;
let progressStepsChecked = 0;
let progressPercent = 0;

$('input[type=checkbox]').click(function(){

    // Sets progressStepsChecked on click to the amount of checked inputs
    progressStepsChecked = $('input[type=checkbox]:checked').length;

    // Input Click gives parent class="is--checked" for style appliance and removes lock from next element
    $(this).parent().toggleClass('is--checked');

    // Increments or decrements progressStepsChecked on checkbox click
    // Disables and Enables Inputs if the first was clicked

    if ($(this).is(':checked')){
        // enables next input box
        $(this).parent().parent().next().removeClass('is--locked');
    } else {
        // disables input boxes if the one before isnt checked
        // disables checked inputs and recacls the progressStepsChecked
        $(this).parent().parent().nextAll().addClass('is--locked');
        $(this).parent().parent().nextAll().children().removeClass('is--checked');
        $(this).parent().parent().nextAll().find('input').prop('checked', false);
        progressStepsChecked = $('input[type=checkbox]:checked').length;
    }
    // Writes percentage into progress <span>
    // Writes percentage into circular animation
    assignPercentage(progressSteps, progressStepsChecked);
});

// Assign percentage to progressStepsChecked

function assignPercentage(steps, checked){
    // calculates the actual percentage of progress dependent on checkboxes that are checked
    progressPercent = Math.floor(100 / (steps / checked));
    // adds percentage to <p id="percent">
    $('#percent').text(progressPercent+'%');
    // adds percentage as inline style to custom css property --p
    $('.donut').css('--p', progressPercent);
    // makes circular animation visible with opacity transition
    
    if (progressStepsChecked != 0){
        $('.donut').css('opacity', 1);
    }
}

