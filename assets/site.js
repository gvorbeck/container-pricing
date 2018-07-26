$(document).ready(function() {
    $('.tab-selector__button').on('click', function() {
        // Get clicked button's index.
        let buttonIndex = $(this).parent().index();
        // Remove/Add all 'selected' class.
        $('.tab-selector__button').each(function() {
            $(this).removeClass('selected');
            if ($(this).parent().index() === buttonIndex && !$(this).hasClass('selected')) {
                $(this).addClass('selected');
            }
        });
        // Hide/Show appropriate content.
        $('.tab-selector__content-item').each(function() {
            $(this).hide();
            if ($(this).index() === buttonIndex) {
                $(this).show();
            }
        });
    });
});
