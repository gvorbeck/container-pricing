---
layout: solution-step
title: Meet your _customer_
permalink: /devtest/meet/
weight: 02
slug: meet

page-logo: visual_meet.png

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
    Frame the conversation around removing the limitations on DevTest that are currently imposed due to cost to allow our customers to focus on the value of having a modern, agile, DevOps environment on the platform.

    ![Frame]( /cpricing/salesguides/assets/images/visual_frame.png)

    For example, the loss of developer productivity when they are unable to work because the system is capped; the cost of replacing skilled developers that switch careers to work on  more 'modern' development platforms; the opportunity cost of longer development cycles leading to slower feature releases; the cost of fixing bugs that make it through to production; etc.
- type: alert
  text: |
    NEVER position this offering as 'free'. There is a good chance the client will need to purchase additional IPLA entitlement. In order for the DevTest container to be most useful, it may also require additional hardware capacity. These can be discounted, but not 'free'.
- title: Prepare for your meeting
  text: |
    This section includes the PPT versions of the presentations above as well as the Excel file used to created the charts in the presentation.

    #### Executive summary ####

    Use this presentation first.  If they are already familiar with Container Pricing you can skim through this presentation with them.

    [Download PPT](https://www.google.com)

    #### Executive overview ####

    Use this presentation for the majority of the meeting. Take questions as opportunities to add value to the presentation.

    [Download PPT](https://google.com)

    #### DevTest charts ####

    Customize the presentation to reflect your clients environment.  You can change the peak hours, or the size of the machines.

    [Download excel](https://google.com)

    #### DevTest contract #####

    Become familiar with the contract. You may want to leave a copy of this contract with your client as guidance.

    [Download contract](https://google.com)
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
- type: alert
  text: |
    Your goal for this first meeting is for the client to agree to send you their SCRT reports so that you can move to the next step.
- text: |
    #### SCRT email template ####

    Your goal for this first meeting is for the client to agree to send you their SCRT reports so that you can move to the next step.

    [Download template](https://google.com)
- type: outro
  title: "Next Steps:"
  text: |
    By this point, your client should be very excited about getting their very own DevTest container. You are now ready to move to the below 'Prepare' stage, where you will work with Techline to build their container

  outro-link:
    text: Prepare your _offering_
    href: prepare/
---
