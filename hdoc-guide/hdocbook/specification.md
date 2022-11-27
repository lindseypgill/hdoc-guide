# The HDocBook Specification
The source content for a Book is made up of a folder structure containing a any number of documents which can be authored in markdown, or as plain HTML. This specification is called HDocBook and is defined in this article.

## Book ID
Every HDocBook project needs to be allocated a Book ID. This ID will uniquely, and globally identify each book (just like an ISBN number does for physical books).  This ID must be allocated by the Hornbill Docs Team on request, these ID's are globally unique, and maintained within a central list.

## Folder Structure
The folder structure of a HDocBook project is organized as a typical Node.js assisted development project.  

* The root folder contains a hdocbook-project.json file is required, this is used by the preview server and document build tools to identify the book ID (docId) for this project
* The root folder of the project must contain a folder who's name is the same as the book ID for this project. All HDocBook content should appear inside this folder. 

### Folder Structure Example
``` md
  [some location on your disk]
   ├── <doc-id>
   │   ├── hdocbook.json
   │   └── **/* (any content goes in here)
   ├── hdocbook-project.json
   ├── package.json
   └── README.md
```

## hdocbook-project.json file

This file contains configuration settings used by the supporting hdocbook development and build tools. The most important property inside this file is the `docId` property, which tells the tools the name of the folder where the hdocbook.json file can be found.  Here is an example of the project file

``` json
{
    "docId": "hdoc-guide"
}
```

## hdocbook.json file

Located in the root of the &lt;doc-id&gt; folder, the hdocbook.json file provides information needed to describe the HDocBook, its navigation, keywords and taxonomy metadata and so on.  The following proprties are defined at the top-level of this file

|Property|Description|
|:---|:---|
|`docId`|This is the document ID and should be set to the exact same name as the folder that the hdocbook.json file sits in|
|`title`|The title of this document|
|`description`|A short description of the contents/purpose of this book|
|`publicSourceCode`|A URL to the public source location of the HDocBook. If not specified, this HdocBook is considered private|
|`version`|A version tag which identifies the revision of this book|
|`navigation`|An object containing the definition of the navigation that is presented to the left of the documentation.  <br><br><br>The navigation object contains an items[] array containing the top-level navigation items. See the table below for navigation item properties| 

### Navigation Item Properties
|Property|Description|
|:---|:---|
|`text`|The text displayed on the navigation view for this navigation item|
|`link`|The link to the content page you want this item to navigate to (this is ignored if `items` is present|
|`expand`|Set this to 'true' you want this item to expand on refresh (assuming there are child navigation items|
|`items[]`|items|An array of child navigation items. There are only three levels allowed, so levels defined beyond this are ignored


Here is an example configuration, showing the file used to define this HDocBook

``` json
{
    "docId": "hdoc-guide",
    "title": "Hornbill Docs Contributor Guide",
    "description": "Information about developing and publishing documentation on Hornbill Docs (docs.hornbill.com) website",
    "publicSourceCode": "https://github.com/Hornbill-Docs/hdoc-guide",
    "version": "1.0.0",
    "navigation": {
        "items": [
            {
                "text": "Introduction",
                "expand": true,
                "items": [
                    {
                        "text": "Welcome",
                        "link": "hdoc-guide/index"
                    },
                    {
                        "text": "Concepts",
                        "expand": true,
                        "items": [
                            {
                                "text": "Overview",
                                "link": "hdoc-guide/overview"
                            },
                            {
                                "text": "HDocBook",
                                "link": "hdoc-guide/concepts/hdocbook"
                            },
                            {
                                "text": "Library",
                                "link": "hdoc-guide/concepts/library"
                            },
                            {
                                "text": "Publishing",
                                "link": "hdoc-guide/concepts/publishing"
                            }
                        ]
                    },
                    {
                        "text": "Getting Started",
                        "expand": true,
                        "items": [
                            {
                                "text": "1. Create a GitHub Account",
                                "link": "hdoc-guide/getting-started/github"
                            },
                            {
                                "text": "2. Install HDocBook Tools",
                                "link": "hdoc-guide/getting-started/tools"
                            },
                            {
                                "text": "3. Clone A Book Repository",
                                "link": "hdoc-guide/getting-started/clone-repo"
                            }
                        ]
                    },
                    {
                        "text": "HDocBook Reference",
                        "expand": true,
                        "items": [
                            {
                                "text": "Specification",
                                "link": "hdoc-guide/hdocbook/specification"
                            },
                            {
                                "text": "Markdown Syntax",
                                "link": "hdoc-guide/hdocbook/markdown"
                            },
                            {
                                "text": "Layout Templates",
                                "link": "hdoc-guide/hdocbook/layout-templates"
                            },
                            {
                                "text": "Frontmatter",
                                "link": "hdoc-guide/hdocbook/frontmatter"
                            },
                            {
                                "text": "Server Variables",
                                "link": "hdoc-guide/hdocbook/server-variables"
                            }
                        ]
                    },
                    {
                        "text": "Other Useful Resources",
                        "link": "hdoc-guide/additional-resources"
                    }
                ]
            }
        ]
    }
}
```




