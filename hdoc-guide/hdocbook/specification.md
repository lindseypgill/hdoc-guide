# The HDocBook Specification
The source content for a Book is made up of a folder structure containing a any number of documents which can be authored in markdown, or as plain HTML. This specification is called HDocBook and is defined in this article.

## Book ID
Every HDocBook project needs to be allocated a Book ID. This ID will uniquely, and globally identify each book (just like an ISBN number does for physical books).  This ID must be allocated by the Hornbill Documentation Team on request, who will maintain a central list of allocated Book ID's

## Folder Structure
The folder structure of a HDocBook project is organized as a typical Node.js assisted development project.  

* The root folder contains a hdocbook-project.json file which tells the preview server and builder the book ID (docId) that this project relates to 
* The root folder must contain a folder who's name is the same as the book ID for this project. All HDocBook content should appear within this folder. 

### Folder Structure Example
``` text
  [some location on your disk]
   ├── <doc-id>
   │   ├── hdocbook.json
   │   └── **/*
   ├── hdocbook-project.json
   ├── package.json
   └── README.md
```



