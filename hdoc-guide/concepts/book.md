# Hornbill Docs - Book

An **Article** is what name we give to an individual page in a *Book*, an Article cane be a simple page of information or can be many screens full of information, will have automated H2/H3 generated anchors and table of contents for navigation.  The key attribute that defines an Article is, its represented physically by a single file, generally written using Markdown [HDocBook Markdown]({{BASE_PATH}}/hdocbook/markdown) or in some cases HTML. 

A **Book** is the term we give to a collection of individual Articles as described above.  As well as including a collection of articles, a Book provides the wrapper for supporting assets like as images, downloadable files, icons and other static resources.  Just like a physical book, this Book Package also includes the definition of a book's primary navigation index and table of contents, as well as other metadata to describe the books position in the Hornbill Docs library taxonomy. Other metadata that helps the Hornbill Docs search function includes information about the book such as subject, summary, keywords, tags and other such metadata that helps keeps books organization, categorized and easily searchable.  You can think of a Book analogous to a physical book. 

In source code form, a book is simply a folder with certain mandatory files and folders, organised into a well defined structure.  A file called `book.js` must be included in the root folder, this file which essentially includes all of the metadata required to create the book, as well as metadata that controls publishing, indexing and taxonomy attribution. 

 Developing content for the Hornbill Docs system is supported with development tools created by the the Hornbill Docs yea, which are available to install part of <a href="https://nodejs.org/en/" target="_blank">Node.js</a> and node package manager (npm)

## The Anatomy of a Book
All books have a number of immutable characteristics including a Globally Unique Identifier (called a slug), A Title, A Summery Description, A Table of Contents, as well as metadata that defines/controls publishing and presentation options, as well as information that helps organize Books into a structured taxonomy. 

### Book Unique Identifier (slug)
Each book is allocated a unique identifier, this is in the form of a lower-case-multi-word-hyphen-separated text string. When browsing the pages of the book, this slug is always included in the URL when accessing the book content.

### Book Content
Document content is written in "Markdown" which provides a complete separation of concerns between content and presentation.  Markdown is a simple plain text scheme for marking up a document that can be rendered in a browser on PDF document.  Using Markdown ensures that content writers can focus on content and not have to worry about presentation and design issues such as fonts, colors, page alignment and so on.   There are mor advanced options to use HTML and inline CSS to create custom layouts and presenations, but this is encouraged only for very special situation where markdown is simply not an option. 

### Table of Contents
A Book includes the definition of a table of contents, this table of contents is presented as a left-hand navigation panel of links to pages, it can be a simple vertical list of links, or, the table of contents can be a hierarchical tree of up to three levels deep.  

### Access Controls
A Book includes metadata and options that allow you to control who should be able to see the document. These access controls make it possible to give different people different levels of visibility/access to documentation, all through the same documentation web site. 

### Internationalization 
Books may contain pages for multiple languages if required, this is achieved by writing the main page in the default language (English), and then, you can write one or more language variants of each page. 

