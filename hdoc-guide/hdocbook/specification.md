# The HDocBook Specification
The source content for a Book is made up of a folder structure containing a any number of documents which can be authored in markdown, or as plain HTML. This specification is called HDocBook and is defined in this article.

## Book ID
Every HDocBook project needs to be allocated a Book ID. This ID will uniquely, and globally identify each book (just like an ISBN number does for physical books).  This id should be allocated by the Hornbill Documentation Team on request, who will maintain a central list of allocated Book ID's

## Folder Structure
The folder structure of a HDocBook project is organized in a pretty familiar waym, amkingit possible to work with Node.js.  

* The root folder contains a book.js file which indicates that this is a HDocBook project.  (See [book.js](#book_js) for specification).
* The root folder bust contain a folder who's name is the same as the book ID for this project. All HDocBook content should appear within this folder. 

### Folder Structure Example
``` text
  [some location on your disk]
   ├── <doc-id>
   │   └── **/*
   ├── book.js
   ├── package.json
   └── README.md
```

