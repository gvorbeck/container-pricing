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
    $(".accordion").on("click", ".accordion__label", function() {
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
    $("body.layout--faqs").find(".faq-cats__label").on("click", function() {
        let thisCat = $(this).parent();

        if ($(window).width() >= 1024) {
            $(".faq-content").find(".accordion").each(function() {
                if ($(this).css("display") === "block") {
                    $(this).slideUp();
                }

                if (thisCat.index() == $(this).index()) {
                    $(this).slideDown();
                }
            });
        }
        else {
            $(".faq-cats").find(".accordion").each(function() {
                if (!thisCat.is($(this).parent())) {
                    $(this).slideUp();
                }
            });
            thisCat.find(".accordion").slideDown();
        }
    });
});
