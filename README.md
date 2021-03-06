# Container Pricing Guide Site (CPGS)
The new home of Container Pricing solutions.

## Table of Contents
* [Code organization](#code-org)
* [YAML setup](#yaml-setup)
    * [Homepage](#yaml-homepage)
    * [Solution Landing Pages](#yaml-solution-landing)
    * [Step Pages](#yaml-step-pages)
* [Tutorials](#tutorials)
    * [How to create a new solution](#tutorials-new-solution)
    * Markdown Tips
        * Create a link
        * Show an image
* [Links to Documentation](#docs)

<a name="code-org"></a>
## Code Organization
The CPGS uses a standard [Jekyll](https://jekyllrb.com) setup. Our code is mostly laid out in 6 places:
* __pages/__ - This is where content for every standard page of the CPGS is located (excluding the 404 page found in the root directory as `404.html`). Inside here are a series of `.md` ([Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)) files, named in a way that helps the editor/developer know which page of the site it controls. The names of these files do not affect any URLs or functionality of the live site.

* __\_config.yml__ - Global parameters like the site's title, description, email address, etc. are housed here. __EDIT THIS FILE CAREFULLY!__ Changes to the `baseurl` or `url` parameters can crash the site so be careful to maintain YAML syntax so that Jekyll knows how to rebuild the site when you are done editing this file.

* __assets/__ - Any file referenced that you would like hosted on the CPGS should go in here. In addition to holding this site's processed stylesheets and javascript, you can fill it with images, PDFs, videos, MP3s, etc. For organization, please put any files in the appropriate subdirectory.

* __\_layouts/__ - All pages in the CPGS use a layout found in this directory to build out the content in their markdown file. In a page's `.md` the `layout` parameter tells Jekyll which of these layouts to use.

* __\_includes/__ - When code is repeated in many places it is placed within this directory. Headers, Footers, and Menus that should not be coded more than once but are needed in multiple places can be referenced in a layout by including it from here.

* __\_sass/__ - Here you can find all the unprocessed SASS stylesheets. Any new CSS code should be entered here and __not__ in any `.css` file. 


<a name="yaml-setup"></a>
## YAML setup
The YAML for CPGS 2.0 is a lot more dynamic. This allows the editor many more options for how content gets entered and displayed on the site, however there is a greater potential for error - so here I will explain these pages' layouts and intricacies.

For terminology's sake, I will refer to four different page types while I discuss this site's YAML implementation:
* __Homepage__ - This is the CPGS homepage (ex: https://pages.github.ibm.com/cpricing/salesguides/)
* __Solution Landing Page(s)__ - These are the landing pages for each Solution. They list links to Solution Step Pages (ex: https://pages.github.ibm.com/cpricing/salesguides/devtest/)
* __Solution Step__ pages - These are the pages devoted to individual steps within a Solution (ex: https://pages.github.ibm.com/cpricing/salesguides/devtest/learn/)
* __Help__ pages - 404, FAQs, and Contact Us pages.

In general these page's YAML will be set up with the following sections:
* __Admin Settings__ - YAML parameters that are related to the development and functioning of the site. Changing these parameter's values will greatly alter how several parts of the site work. Edit these carefully.

* __Parent-page Content__ - Many pages feed eachother in CPGS 2.0. For instance, the Homepage gets the content for the __Dive into a solution__ section directly from the Solution Landing Page's markdown file. This is done to keep content together and not spread around several files. An editor should not have to remember that changing the content for devtest is _also_ required within the Homepage's markdown. Instead, the homepage gets all its info for devtest _directly_ from the devtest Solution Landing Page markdown file. Simple.

* __Page Content__ - This is where you'll find the parameters for content appearing directly on the page. Most editorial work will be done here.

<a name="yaml-homepage"></a>
### Homepage YAML Setup
__\_pages/homepage.md__ - This is the CPGS homepage markdown file.

#### Admin Settings
```
layout: home
permalink: /
slug: home
```
These settings control the page's layout template, url, and CSS slug. Be careful when changing these settings.

#### Banner
The homepage banner is controlled via the `banner` parameter. The various `size` sub-parameters are for the different width layouts.

#### Page content

For the __What's new__ section, the `title` parameter is self-explanatory. The `component` parameters for both __What's new__ and __Dive into a solution__ are for CSS styles and template logic. Changing the value of this parameter will remove most of the styles or content of that section, so it is not recommended.

The __What's new__ `page-section` has a markdown `text` parameter for updates.

The __Dive into a solution__ section content is retrieved from Solution Landing Page markdown files, so there isn't much here.

<a name="yaml-solution-landing"></a>
### Solution Landing Pages' YAML Setup
__\_pages/[SOLUTION]-home.md__ - These are the landing/homepages for individual solutions (ex: `_pages/devtest-home.md`).

#### Admin Settings
```
layout: solution-landing
title: Application Development and Test Solution
permalink: /devtest/
weight: 00
slug: devtest
```
Again, the `layout` parameter controls the layout template for this page. This parameter value is what causes this solution to be listed on the CPGS Homepage, since the Homepage looks for all other pages with `solution-landing` as their layout template before listing the results on the __Dive into a solution__ section.

`title` is the title of the solution. The CPGS Homepage's markdown file did not have this as it uses the site's title (found in `_config.yml`) for its title.

`permalink` and `slug` work exactly as described above in the CPGS Homepage markdown file.

The `weight` parameter is part of the infrastructure that populates the CPGS navigation/hamburger menu. Solution Landing Pages should always have a `weight` value of `00`. Any other value will break the CPGS navigation menu.

#### Parent-page Content
The last parameters on Solution Landing Pages are `thumbnail` and `excerpt`. These are only output on the CPGS Homepage and control what is seen in the __Dive into a solution__ section.

<a name="yaml-step-pages"></a>
### Solution Step Pages' YAML Setup
__\_pages/[SOLUTION]-[SHORT-TITLE].md__ - These are the pages for each Solution Step (ex: `_pages/devtest-learn.md`).

#### Admin Settings
```
layout: solution-step
title: Learn about _the solution_
permalink: /devtest/learn/
weight: 01
slug: learn
```
For the layout template, the `solution-step` value tells Jekyll to build this page out as a Solution Step. It, the `permalink`, and `slug` parameters are the same as before.

The `title` parameter takes advantage of markdown formatting to set where the colored background appears on the title (On the __Learn about the solution__ title, "the solution" is in white surrounded by a pink background - coming directly from the `_` characters in this parameter).

The `weight` parameter is set to `01` to show the order in which this page should be listed in the navigation/hamburger menu. Make sure not to duplicate numbers here or the nav menu will get very complicated to read.

#### Parent-page Content
On the Solution Landing Pages, each step in the process has a `logo`, `excerpt`, and `button`. That content is found here. Changing anything here will not show up on the Solution Step page. Instead this content feeds directly to the Step's Solution Hompage.

#### Page Content
The content for Solution Step pages is contained within the `page-sections` parameter. Each item in `page-sections` controls a block of the content. These "content blocks" can be presented in several ways:
* `type: accordion` - This creates collapsed content sections that can be expanded to reveal content. Content blocks set as accordions need a sub-parameter named `items` to hold a list of accordion folds, each with their own respective `title` and `text` parameters. (See `/pages/devtest-finalize.md` for example).
* `type: alert` - This will create a white box with a purple border and purple text. This is a convenient way to warn a reader to something important in this process.
* `type: emphasis` - This creates a purple box with black text. It is a useful way to highlight content that may have an interactive component or needs to stand out.
* `type: intro` - This is the first block of content on a Solution Step page. It does not have a title (the `title` parameter in the Admin Settings section handles this). 
* `type: outro` - This is the last block of content on a Solution Step page.
* [no type listed] - If no `type` parameter is listed, this page section will be a normal, borderless area of content.

__NOTE:__ When a `page-sections` item has a `content-type` parameter, __this means the `text` parameter may have very specific formatting in order to maintain a specific design layout__. Changing the value of the `content-type` parameter or deviating drastically from the existing formatting within the `text` parameter could greatly alter the layout of the site.

<a name="tutorials"></a>
## Tutorials

<a name="tutorials-new-solution"></a>
### How to create a new solution

1. In order to create a new solution for the CPGS, first __create a new Solution Landing Page__ for the solution. In the __pages/ directory__ create a new markdown files as `SOLUTION_SHORT_NAME-home.md` (ex: `devtest-home.md`)

    * In the new Solution Landing Page's markdown files, __add the opening and closing `---` marks__.
    
    * Inside there, __add the solution's Admin Settings__:
      ```
      # ADMIN SETTINGS
      layout: solution-landing
      title: FULL_TITLE_OF_NEW_SOLUTION
      permalink: /SOLUTION_SHORT_NAME/
      weight: 00
      slug: SOLUTION_SHORT_NAME
      ```
      
    * __Upload a thumbnail icon image__ for the solution in the `assets/images` directory.
    
    * Finally, __create the homepage content__ for your solution's listing on the CPGS Homepage:
      ```
      # HOMEPAGE CONTENT ("DIVE INTO A SOLUTION")
      thumbnail: SOLUTION-THUMBNAIL.png
      excerpt: |
        Lorem ipsum dolor sit amet...
      ```
      
2. After that, __create the various Solution Step pages'__ markdown files in the `pages/`. They should be named as `SOLUTION_SHORT_NAME-STEP_SHORT_NAME.md` (ex: `devtest-learn.md`)

    * Add __Admin Settings__ sections to each Solution Step page's markdown file inside of opening and closing `---` marks. (ex: `devtest-learn.md`):
      ```
      # ADMIN SETTINGS
      layout: solution-step
      title: Learn about _the solution_
      permalink: /devtest/learn/
      weight: 01
      slug: learn
      ```
      
      For the `title` parameter, add underscores around the part of the title that you want shown with purple background. The `permalink` parameter should follow the structure of `/SOLUTION_SHORT_NAME/STEP_SHORT_NAME/`. To build the navigation links for this site, each Solution Step Page's `weight` attribute should have an incrementing two digit number, starting with `01` - __make sure not to create any duplicates__. The `slug` attribute should be the `STEP_SHORT_NAME`.
      
    * Upload a thumbnail icon image for the step in the assets/images directory.
    
    * The content for this solution's Landing Page is taken from its Solution Step Pages' markdown files in the Parent-page Content:
      ```
      # SOLUTION LANDING PAGE CONTENT
      page-logo: SOLUTION_STEP_ICON.png
      excerpt: |
        Lorem Ipsum...
      button: Learn more
      ```
      
    * Finally, create a Page Content section in each Solution Step Page's markdown:
      ```
      # PAGE CONTENT
      page-sections:
      ```
      
      You can create that Solution Step page's various page sections using the existing pages as template's and notes from the [Solution Step Pages' YAML Setup](#yaml-step-pages).
