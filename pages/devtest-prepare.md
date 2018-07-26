---
layout: solution-step
title: Prepare your _offering_
permalink: /devtest/prepare/
weight: 03
slug: prepare

page-logo: visual_prepare.png

page-sections:
# PAGE SECTION CHEATSHEET

## type: intro, outro, alert, emphasis, [missing]
#### intro - This is the first block of content on a Solution Step page.
#### outro - This is the last block of content on a Solution Step page and included a navigation link to the next step.
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
  title: Engage techline
  text: |
    Once you have the required SCRT reports, you must engage Techline (through your normal process).

    ![Techline]( /cpricing/salesguides/assets/images/visual_techline.png )

    Techline has been trained to fulfill the the required steps to construct a container.
- type: emphasis
  title: Gather these items
  tab-selector:
  - title: SCRT reports
    text: |
      * 3 consecutive months of Business as Usual Reports
      * 3 consecutive months of Production only Reports
      * 3 consecutive months of DevTest only reports

      In the case of Standalone machine(s) or Sysplex configurations, nine (9) SCRT reports are required for each machine (i.e. each HW serial number).

      For Multiplex clients, SCRT can calculate the container size across machines (i.e. combined HW serial numbers) and so only nine (9) reports are required.

      If you are in any doubt about what the client needs to provide, please revisit the 'SCRT email template (PDF)' in the 'Learn' section above.
  - title: WLP reports
    text: |
      You will need to create two (2) sets of Workload Pricer (WLP) files to calculate the MLC price requirements:

      * 3 BAU WLP files
      * 3 PROD (only) WLP files

      From these WLP files, you can generate the six (6) custom reports ready to be imported into the CPS spreadsheet. The CPS spreadsheet will automatically calculate all the MLC pricing you need from these reports.

      Note that Flat and Tiered MLC products continue to be priced per machine. There is no change to how Flat and Tiered MLC programs are priced when adding a DevTest container.
  - title: CPS spreadsheet
    text: |
      The CPS Spreadsheet has been created by the CIO organization to establish the DevTest container baseline, derive MLC and OTC pricing, automate the approval process and to create the factors required for our billing systems.

      The required SCRT submissions combined with the WLP price reports are all that is needed. Once these items are imported, the CPS spreadsheet will calculate all the MLC pricing required to close the deal.

      The latest version of the spreadsheet and the eduction on how to use it can be downloaded from the CPS spreadsheet box folder.
  - title: IPLA discounting
    text: |
      Unless your client is full capacity on IBM IPLA, or they already have substantial additional entitlements, they will very likely need to purchase additional capacity.

      We have support for:
      * Special bids at very aggressive discounts (up to 95%) for fully licensed required products
      * Special bids for Limited Use Licenses (LULs) at an even higher discount, if need be

      For IPLA discounts that exceed local delegation, you should request approval directly from [zmiller@us.ibm.com](mailto:zmiller@us.ibm.com) copying the [cpricing@us.ibm.com](mailto:cpricing@us.ibm.com) ID.  
  - title: Contract creations
    text: |
      Create a draft of the contract, completing the tables with the MLC and IPLA products required. You will not know the desired container size yet, so leave that blank for now.

      If the contract has already been localized for your country, you can download it from the ww Std Contracts and SOW Templates web portal.

      If the contract does not yet exist for your country:
      * Send an email to the BOD Management and Localization team [BODMGLOC@hu.ibm.com](mailto:BODMGLOC@hu.ibm.com) to request it.
      * Ensure all your relevant local contract teams are copied on the request.
  - title: Approval requests
    text: |
      The requirement for a separate, manually created 'DevTest Approval Request' spreadsheet has been removed. It has been replaced with an auto-generated 'PricingApproval_Form' tab in V1.8 of the CPS Spreadsheet.

      This 'PricingApproval_Form' tab should provide all the key numbers you need to present a conditional offer. If you would like to validate you have correctly used the tool before presenting a conditional pricing proposal to your client, you may send your input files to [cpricing@us.ibm.com](mailto:cpricing@us.ibm.com) for validation.

      Worldwide approval is still required in order to present a firm offer.
- type: outro
  title: "Next Steps:"
  text: |
    Once you have built your internal team and collected these items, you may need to iterate through the next step a few times as part of the client negotiations.

  outro-link:
    text: Seal the _deal_
    href: seal/
---
