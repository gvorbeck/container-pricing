$(document).ready(function() {
    // Tab Selector behavior
    $(".tab-selector").find(".tab-selector__label").on("click", function() {
        // Get index # of clicked label.
        let thisIndex = $(this).attr("for").replace("tab-", "");
        // Hide all content divs.
        $(".tab-selector__content").each( function() {
            $(this).hide();
        });
        // Show matching content div.
        $("#content-" + thisIndex).show();
    });

    // Accordion behavior
    $(".accordion").find(".accordion__button").on("click", function() {
        console.log("foo1");

        let thisContent = $(this).next(".accordion__content"),
            allContents = $(this).parent().parent().find(".accordion__content");

        allContents.each(function() {
            if ($(this).is(thisContent) && $(this).css("display") === "none") {
                $(this).parent().addClass('accordion__item--open');
                thisContent.slideDown();
            }
            else if (!$(this).is(thisContent)) {
                 $(this).parent().removeClass('accordion__item--open');
                 $(this).slideUp();
            }
        });
    });
});
