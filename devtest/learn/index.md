---
layout: solution-step

page-title: Learn about _the solution_
solution-parent: devtest
page-slug: learn
page-main: step

page-logo: image1.jpg

page-sections:
# PAGE SECTION CHEATSHEET

## type: intro, alert, emphasis, [missing]
#### intro - This is the first block of content on a Solution Step page. It does not have a title (the 'page-title' parameter above handles this).
#### alert - This will create a white box with a purple background and purple text. This is a convenient way to warn a reader to something important in this process
#### emphasis - This creates a purple box with black text. It is a useful way to highlight content that may have an interactive component or needs to stand out.
#### [missing] - If no "type" parameter is listed, this page section will be a normal, borderless area of content.

## title: [text]
#### This is a space for a large <h3> title (ex: "Continue Learning" on /cpricing/salesguides/devtest/learn/). This will be inserted at the top of this Page Section.
#### NOTE: For smaller, inline <h4> titles, type those inside the "text" parameter with "#### " and " ####" around them. They will be populated with the rest of the Page Section text.

## text: |
#    [text]
#### This area starts with a space an pipe character ("|") and immediately goes to a new line. This tells Jekyll to treat this parameter as markdown. Every line after the "|" needs to be indented twice in order for YAML to know that you are not trying to start a new parameter. Enter content formatted as markdown (specifically kramdown).

- type: intro
  text: |
    Many clients are operating with severely capped Development and Test environments compromising best practices.

    For example:

    * Forcing it off hours.
    * Bypassing critical pre-production testing.

    We're empowering our clients to adopt agile practices by eliminating the fear of cost increase.

    ![alt text]( /cpricing/devtest/assets/image1.jpg "Logo Title Text 1")
- type: emphasis
  title: Watch these videos first
  text: |
    These sales training videos with walk your through the two key Container Pricing presentations you would give your clients.

    VIDEO PLACEHOLDER

    #### Executive summary ####

    Sales enablement training of the executive summary of Container Pricing for IBM Z.

    VIDEO PLACEHOLDER

    #### Executive overview ####

    Sales enablement training of the executive overview of Container Pricing for IBM Z.
- title: Continue learning
  text: |
    #### Full DevTest announce ####

    PDF of the complete Announcement letter, designed to be easier for clients to read.

    [Download PDF](https://www.google.com)

    #### Solution setup demo ####

    Demonstration of the end to end process of contacting and setting up an solution in a dedicated LPAR.

    [Watch demo](https://www.google.com)

    #### ID setup walkthrough ####

    Demonstration of the end to end process of contacting and setting up an solution in a dedidcated LPAR.

    [View walkthrough](https://www.google.com)
- type: outro
  title: "Next Steps:"
  text: |
    Customize these presentations and meet with your client. Include a senior representation from development who understands the pain points caused by severely capped DevTest environments.
  outro-link:
    text: Meet with _your client_
    href: meet/
---
