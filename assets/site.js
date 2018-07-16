// $(document).ready(function() {
//   // "PREPARE" buttons behavior.
//   $('button').on('click', function() {
//     // Get clicked button's index
//     var index = $(this).parent().index();
//     // Remove "selected" class from all buttons.
//     $('button').each(function() {
//       $(this).removeClass('selected');
//     });
//     // Remove "selected" class from all sections.
//     $('#pc--needs').find('section').each(function() {
//       $(this).removeClass('selected');
//     });
//     // Add "selected" class to clicked button.
//     $(this).addClass('selected');
//     // Add "selected" class to appropriate section.
//     $('#pc--needs').find('section:nth-child(' + (index + 1) + ')').addClass('selected');
//   })
// });
