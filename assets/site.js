// $(document).ready(function() {
//     // Button Selector behavior.
//     $('.tab-selector__button').on('click', function() {
//         // Get clicked button's index.
//         let buttonIndex = $(this).parent().index();
//         // Remove/Add all 'selected' class.
//         $('.tab-selector__button').each(function() {
//             $(this).removeClass('selected');
//             if ($(this).parent().index() === buttonIndex && !$(this).hasClass('selected')) {
//                 $(this).addClass('selected');
//             }
//         });
//         // Hide/Show appropriate content.
//         $('.tab-selector__content-item').each(function() {
//             $(this).hide();
//             if ($(this).index() === buttonIndex) {
//                 $(this).show();
//             }
//         });
//     });
//
//     // Accordion behavior
//     $('.content__block.accordion').find('.accordion__button').click( function() {
//         // Get content div of button clicked.
//         let thisContent = $(this).next('.accordion__content');
//         $(this).parent().parent().find('.accordion__content').each( function() {
//             // Go through each content div and open the relevant content and hide the other.
//             // Not using .slideToggle() here in order to keep from being able to close all content divs.
//             if ($(this).is(thisContent) && $(this).css('display') === 'none') {
//                 $(this).parent().addClass('open');
//                 $(this).slideDown();
//             }
//             else if(!$(this).is(thisContent)) {
//                 $(this).parent().removeClass('open');
//                 $(this).slideUp();
//             }
//         });
//
//     });
// });
