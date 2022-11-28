---
layout: article-toc
---
# TODO - Outstaring Development Tasks
Just keeping track of things that need doing as I am thinking about them

## 1. Contributor Content Development Workflow
* Write license/contribution page, inspired by open source Microsoft Learn contributor license.  Have asked Lindsey for his views. 
* Document recommended tools like VS Code, various extensions, Node.js and our own developer support tool (hdoc)
* Document how to fork a repo, modify and submit pull request back to master repo, figure out the exact steps and provide a how-to guide for this, we have to assume our document contributors are not GitHub expert users, or even github users period.
* Document writing & Style guide, covering writing guide, SVN illustrations, color pallets and so on. 
* DONE: Research and figure out how to package hdoc dev server tool into a github repo so it can be made to install using `npm install hdoc-tools` or something along those lines, basically this tool and the build functions need to be packaged up as an installable node tool to make it super easy for a contributor to fork and start working on documentation.
* Expand hdoc tool to include stats (for word counts, page counts, image counts etc...)
* Expand hdoc tool to include a 'build' function to static render markdown and package up into ZIP file ready for inclusion in an FSDB package 
* Its possible (as seen with Microsoft tools) to include a markdown preview CSS that renders the markdown in a preview pane with our CSS, this is required because our CSS extends the normal CommonMark content. It may be possible to preview through the preview server function we have developed (hdoc serve), not sure exactly how this should work, we should probably look at how Microsoft have done this for their Microsoft Learn content. 

## 2. Build/Publish Workflow
* Work not started, this is not really useful for contributors so arguably belongs in another book, we also need to document how to work "our side of the process", like doing builds, publishing documents, accepting Pull Requests into master. 

## 3. docs.hornbill.com Website
* Work not started, this is not really useful for contributors so arguably belongs in another book

## Other HDocBooks we need
* Hornbill Docs Team Guide - a book for internal use, aimed at anyone within the Hornbill Docs team, covers workflows, tools, administering Hornbill Docs GitHub Account, accepting/merging pull requests etc
