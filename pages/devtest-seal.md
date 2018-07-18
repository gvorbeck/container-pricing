---
layout: solution-step
title: Seal the _deal_
permalink: /devtest/seal/
weight: 04
slug: seal

page-logo: image3.jpg

page-sections:
# PAGE SECTION CHEATSHEET

## type: intro, outro, alert, emphasis, accordion, [missing]
#### intro - This is the first block of content on a Solution Step page.
#### outro - This is the last block of content on a Solution Step page and included a navigation link to the next step.
#### alert - This will create a white box with a purple background and purple text. This is a convenient way to warn a reader to something important in this process
#### emphasis - This creates a purple box with black text. It is a useful way to highlight content that may have an interactive component or needs to stand out.
#### accordion - This creates collapsed content sections that can be expanded to reveal content.
#### [missing] - If no "type" parameter is listed, this page section will be a normal, borderless area of content.

## title: [text]
#### This is a space for a large <h3> title (ex: "Continue Learning" on /cpricing/salesguides/devtest/learn/). This will be inserted at the top of this Page Section.
#### NOTE: For smaller, inline <h4> titles, type those inside the "text" parameter with "#### " and " ####" around them. They will be populated with the rest of the Page Section text.

## text: |
#    [text]
#### This area starts with a space an pipe character ("|") and immediately goes to a new line. This tells Jekyll to treat this parameter as markdown. Every line after the "|" needs to be indented twice in order for YAML to know that you are not trying to start a new parameter. Enter content formatted as markdown (specifically kramdown).

- type: accordion
  items:
  - title: "Step 1: Validate the offer"
    text: |
      The CPS Spreadsheet (above) will provide you with the DevTest MSU Base and the DevTest MLC Base Charges for your client.

      Determine any additional IPLA entitlement requirements at 1x, 2x and 3x container sizes.

      Determine any additional IPLA entitlement requirements at 1x, 2x and 3x container sizes.

      Before talking about IPLA costs, reiterate that the goal of the DevTest Container is healthy DevTest environments.
  - title: "Step 2: Qualify the offer"
    text: |
      Work with your client on available budget and desired container size. Structure an offer such that a larger container is substantially better value.

      Your primary objective is to match a large container size (2x or above) with available budget.

      Identify any potential 'problem' areas that could require Limited Use Licenses or other special treatment.

      The Container Pricing team have a lot of experience in this part of the process.

      We are ready and willing to support you at: cpricing@us.ibm.com.

      Keep your Techline representative engaged to review changes and ensure inventory validity.
  - title: "Step 3: Agree the offer"
    text: |
      By this point, the client should have a pretty good understanding of what they are prepared to commit under what circumstances.

      You should also have a pretty good understanding of what will it take to win and how soon the client is able to sign.

      Continue the negotiations until you reach a conditional agreement, but be sure to make clear the offer is not yet fully approved

      It is strongly recommended you engage the Container Pricing during this stage to ensure you stay within the bounds of what is possible: [cpricing@us.ibm.com](mailto:cpricing@us.ibm.com)
- type: emphasis
  title: Getting approval
  text: |
    Once you have conditional agreement, your final step before presenting a firm offer is to secure worldwide Z software pricing approval.

    You will need the completed CPS spreadsheet and completed contract addendum.

    ![alt text]( /cpricing/devtest/assets/image1.jpg )

    Please email those two documents to Zach Miller at [zmiller@us.ibm.com](mailto:zmiller@us.ibm.com) copying [cpricing@us.ibm.com](mailto:cpricing@us.ibm.com) for final approval.
- type: outro
  title: "Next Steps:"
  text: |
    After IBM has approved an offering and your client has signed, you will submit the final documents and help your customer set up their container.

  outro-link:
    text: Finalize the _deal_
    href: finalize/
---
