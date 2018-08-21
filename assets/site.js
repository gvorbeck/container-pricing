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
    $(".accordion").find(".accordion__label").on("click", function() {
        let thisDefinition = $(this).parent().next(".accordion__definition"),
            thisTerm = $(this).parent();

        $(".accordion").find(".accordion__definition").each(function() {
            // console.log($(this));
            if ($(this).is(thisDefinition) && $(this).css("display") === "none") {
                thisTerm.addClass("accordion__term--open");
                thisDefinition.slideDown();
            }
            else if (!$(this).is(thisDefinition)) {
                $(this).prev(".accordion__term").removeClass("accordion__term--open");
                $(this).slideUp();
            }
        });
    });

    // Faqs behavior
    $("body.layout--faqs").find(".faq-cats__button").on("click", function() {
        let thisAccordion = $(this).next(),
            thisItem = $(this).parent();
        $("body.layout--faqs").find(".accordion").each(function() {
            if ($(this).is(thisAccordion) && thisAccordion.css("display") === "none") {
                thisAccordion.parent().addClass("faq-cats__item--open");
                thisAccordion.slideDown();
            }
            else if (!$(this).next().is(thisAccordion)) {
                $(this).parent().removeClass("faq-cats__item--open");
                $(this).slideUp();
            }
        });
    });

    // $($("body.layout--faqs").find(".faq-cats__button").get().reverse()).each(function(i) {
    //     if (i === 0) {
    //         $(this).delay((i + 1) * 50).fadeOut();
    //     }
    // });
});
