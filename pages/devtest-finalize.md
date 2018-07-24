---
layout: solution-step
title: Finalize the _deal_
permalink: /devtest/finalize/
weight: 05
slug: finalize

page-logo: visual_finalize.png

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
  - title: "Step 1: Submit key documents"
    text: |
      The signed contract, pricing approval and completed CPS spreadsheet needs to be sent to the Q2C team (formally called STS) and Techline for processing.

      ![alt text]( /cpricing/devtest/assets/image1.jpg )

      First, send the documents to Patricia Hadbavna from Q2C, copying the Container Pricing team to ensure a smooth process:
      * [phadbavn@sk.ibm.com](mailto:phadbavn@sk.ibm.com)
      * [cpricing@us.ibm.com](mailto:cpricing@us.ibm.com)

      Next, raise a Techline request via your normal process, for example the online TSRG form.

      If your client has an ELA, please also send the contract to the ECM team.

      If your client does not have an ELA, please also send the contract to the ESW team.
  - title: "Step 2: Configure in the systems"
    text: |
      Techline will create the DevTest inventory profile for the DevTest container and ensure it accurately aligns with the contract, so it is important you submitted both the final CPS spreadsheet and the signed contract to Techline as per the previous step.

      Techline will build the MLC configuration at 3x the DevTest MSU base (regardless of the container size), ensuring the client will not incur additional MLC charges unless they exceed the contractual 3x maximum.

      The IPLA entitlement will be configured to the DevTest Solution MSU value (i.e., chosen container size).

      Q2C will then be responsible for processing the configurations and ensuring that the data will flow from iERP/ESW to LMS along with the creation of the Solution ID which is typically created within 4-6 hours after configuration processing.

      Keep your Techline representative engaged to review changes and ensure inventory validity.
  - title: "Step 3: Circle back with your client"
    text: |
      Once the Solution ID is in the system, your client will be able to access it through the standard LMS ibm.com/software/lms portal.

      Confirm with your client that they can see their Solution ID and check if they have any outstanding questions.

      Your client can use that Solution ID to establish the container on their next SCRT submission, even if the contract was signed midway through the reporting period.

      The container is not effective until a valid SCRT report with the Container configuration is received by IBM.

      Once a valid SCRT report has been received, the Q2C SCRT team and Techline will monitor and track the reported Container Solution on a monthly basis to ensure compliance with the signed contract.
- type: emphasis
  title: Congratulations!
  text: |
    You've completed the deal.

    ![alt text]( /cpricing/devtest/assets/image1.jpg )
---
