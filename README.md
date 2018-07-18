# Container Pricing Guide Site (CPGS)
The new home of Container Pricing solutions.

## Table of Contents
* [Code organization](#code-org)
* [YAML setup](#yaml-setup)
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
Blah blah blah
