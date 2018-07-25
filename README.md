# Container Pricing Guide Site (CPGS)
The new home of Container Pricing solutions.

## Table of Contents
* [Code organization](#code-org)
* [YAML setup](#yaml-setup)
    * [Homepage](#yaml-homepage)
    * [Solution Homepages](#yaml-solution-homepage)
    * [Step Pages](#yaml-step-pages)
* [Links to Documentation](#docs)

<a name="code-org"></a>
## Code Organization
The CPGS uses a standard [Jekyll](https://jekyllrb.com) setup. Our code is mostly laid out in 6 places:
* __pages/__ - This is where content for every standard page of the CPGS is located (excluding the 404 page found in the root directory as `404.html`. Inside here are a series of `.md` ([Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)) files, named in a way that helps the editor/developer know which page of the site it controls. The names of these files do not affect any URLs or functionality of the live site.

* __\_config.yml__ - Global parameters like the site's title, description, email address, etc. are housed here. __EDIT THIS FILE CAREFULLY!__ Changes to the `baseurl` or `url` parameters can crash the site so be careful to maintain YAML syntax so that Jekyll knows how to rebuild the site when you are done editing this file.

* __assets/__ - Any file referenced that you would like hosted on the CPGS should go in here. In addition to holding this site's processed stylesheets and javascript, you can fill it with images, PDFs, videos, MP3s, etc. For organization, please put any files in the appropriate subdirectory.

* __\_layouts/__ - All pages in the CPGS use a layout found in this directory to build out the content in their markdown file. In a page's `.md` the `layout` parameter tells Jekyll which of these layouts to use.

* __\_includes/__ - When code is repeated in many places it is placed within this directory. Headers, Footers, and Menus that should not be coded more than once but are needed in multiple places can be referenced in a layout by including it from here.

* __\_sass/__ - Here you can find all the unprocessed SASS stylesheets. Any new CSS code should be entered here and __not__ in the `main.scss` file found in _assets/


<a name="yaml-setup"></a>
## YAML setup
The YAML for CPGS 2.0 is a lot more dynamic. This allows the editor many more options for how content gets entered and displayed on the site, however there is a greater potential for error - so here I will explain these pages' layouts and intricacies.

<a name="yaml-homepage"></a>
### Homepage YAML Setup
__\_pages/homepage.md__ - This is the CPGS homepage. Its YAML begins as such:
```
layout: home
permalink: /
slug: home
```
These are admin settings and changing them is not recommended. `layout` tells Jekyll which layout template to use (here we are using the "home" layout). `permalink` tells Jekyll what URL this page uses (__CAUTION:__ Changing this value can cause this page to crash). Finally, `slug` is a CSS class that gets entered into the page and allows CSS to know what styles to apply to this page.

Next, `banners` is the parameter that controls the homepage's "pathway" banner. It has three lists inside it that are for mobile/tablet/desktop versions (controlled by the `size` parameter).

Finally, the `page-sections` parameter. The homepage has two sections, the __What's new__ and __Dive into a solution__ sections. Each page section on the homepage behaves differently as they are both designed to show very different content, unlike page sections found in other parts of the site.

#### What's new
Of the three parameters (`title`, `component`, `text`), `component` is the only one best left alone as it is used for CSS styling. `title` and `text` are pretty self-explanatory, but `text` is formatted to allow markdown-format content. In fact, __any paramter that starts with the first line as a pipe (|) is markdown-ready__.

#### Dive into a solution
This page section is largely automated or controlled elsewhere. CPGS searches for any page using the layout `solution-home` and lists them here. Devtest's homepage is a good example. It uses the correct layout template and so the "Dive" section lists it here. 

On the homepage, each solution listed in the __Dive__ section has a thumbnail icon, a title, and a brief excerpt. All three of these items are contained within that solution's homepage markdown file (ex: _pages/devtest-home.md) within the parameters `title`, `thumbnail`, and `excerpt`. Editing these solution homepage parameters will reflect on the CGPS homepage when the site rebuilds.
