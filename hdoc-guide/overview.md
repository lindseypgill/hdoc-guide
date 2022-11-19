# Content Creation Primer

Creating good quality documentation is challenging, aside from the challenge of knowing the subject and writing about it in a way that readers will be able to consume. There is a lot involved in taking basic written content and publishing it in a format that is consistent, reliable, accessible and scalable.  

Traditional documentation systems are generally built around WYSIWYG editing tools and proprietary formats/publishing schemes.  Hornbill has chosen to use a more contemporary approach of content development, using simple text-based markdown. Markdown has many benefits over proprietary formats, the most significant benefit being a complete abstraction of content from the design/presentation needs.  The use of markdown helps you, as a content creator, focus on the content and removes the distractions of styling, publishing and deploying content. 

As well as basic writing skills and requisite subject matter expertise, writing documentation at scale also needs a consistent, well defined, easy to use workflow for content creation, preview and publication.  The Hornbill Docs in-house document system provides all of this in an end-to-end tools and systems supported workflow handing the three main process steps of Content Development, Build/Publishing and Consumption. 

![Documentation Architecture]( {{BASE_PATH}}/content/images/hdocbook-architechture.svg )


## High-Level Content Workflow

In order to get the best quality and consistency of documentation on Hornbill Docs there is a well defined workflow, supported by guidelines, specifications and tools all designed to make the process and easy and repeatable as possible, by multiple authors, even if they do not work together.  This consistency in approach and tooling is required because we wish to encourage the broadest possible audience to help us develop and expand the documentation that helps our user community get the very best out of Hornbill's software. 

There are three key stages in the document publishing lifecycle explained here.  The architecture diagram shows you the workflow, which is broken down into these distinct steps.  Contributors to the Hornbill Docs content only need to be concerned with the Content Development step, but the full workflow cycle is explained here for content, helping you to understand how the Content Development workflow fits into the creation to consumption process. 

## 1. Content Development

The primary capability of any documentation system is the ability to facilitate the creation of content. When developing Hornbill Docs content, your work unit is a HDocBook. Each Book is a separate/stand-alone project.  The source content for a Book is simply made up of a folder structure containing a any number of documents which can be authored in markdown, or as custom HTML. This structure is called HDocBook. The workload for content creation is designed around standard, easy to use development tools, plugins and the ability to accurately preview your content during the content development process.  For some documentation, for example API's and other content that is defined in metadata such as XML, JSON or document extracted from source code comments or markup, can be sources used to automatically generate documentation content.  

## 2. Build & Publish

Publishing a Book involves building the document source, rendering markdown into HTML, generating metadata, an index and packaging all of that rendered/generated into a deployable HDocBook package. Once built, the document is published into the Document Library ready for consumption.  The Published Document Library is a content deployment scheme that makes HDocBook's accessible to the content publishing application servers.  

## 3. Consumption

Consuming documentation is really describing the implementation of the web server and the Docs UI Web App that makes up the website https://docs.hornbill.com that all published documentation is consumed.  The web sit provides the ability to browse the book library, browse and search for content etc. 




