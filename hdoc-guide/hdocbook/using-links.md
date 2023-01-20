---
title: Using Links In Documentation
layout: article-toc
description: Provides information about the various ways links can be used in documentation
author: gerry
---
# Using Links In Documentation

This article covers the various ways in which you can use links withing the Hornbill Docs documentation system.  Markdown provides
a very simple syntax for adding links, and links can refer to other parts of the same article, another article in the current book, an article in another book, or various forms of links to documents and resources outside of the Hornbill Docs system.

When creating links, the text of the link should be readable and meaningful text that describes the thing being linked to. So creating a link with text that is written like [click here](#) is not recommended.  Instead, something [using links](#) is better, this helps with readability but also helps with search-engine optimizations too.

There are two types of links you can use on the Hornbill Docs platform. Internal links and external links. 

An external link is any valid fully-qualified URL to a system other than the Hornbill Docs system. Links to other systems will generally open the resource in a new tap or window on your browser. In todays internet its very rare that non-https URLs are used, and its recommended that you always only ever link to secure wen sites.  An example of an external link would be

```md
[Google in the UK](https://about.google/google-in-uk/)
```

Would render as: [Google in the UK](https://about.google/google-in-uk/)


An internal link, is a link to another article or resource within the Hornbill Docs system.  Links to other pages are generally opened within the same browser session, updating the navigation history etc, so you can use the Back button to go to the previous page as the user navigates around your documentation content

```md
[Using Links](/hdoc-guide/hdocbook/using-links)
```
Would render as: [Using Links](/hdoc-guide/hdocbook/using-links)

It should be noted that when you specify a link to another page, that page is typically a markdown file with a .md file extension.  However you should **never** include the .md part in any internal link. This is because the Hornbill Docs system generates static site content at build time, and markdown is typically transformed to a .html file.  Both the 'hdoc Preview Server' and Hornbill documentation servers will locate the correct resource based on the URL without the extension. 

## Hornbill Docs URL Structure

Its helpful to understand the structure of the Hornbill Docs system.  URL's purposefully include the file/folder names of content within each book, this is done because at build time, static HTML content is generated and its important there is a consistent strategy for dealing with URL's to make sure that documents are referenced correctly, and to make sure there is a consistent mapping between the published content and the article source code, typically in a GitHub repository. 

The Hornbill Docs URL is made up as follows: -

https://docs.hornbill.com/[language-code]/{book-id}/path/to/article

- **language-code** - this is an optional segment, but if provided, tells the docs server which language variation to serve (if available). Examples might be en-gb, de-de, us etc...
- **book-id** - every published book is allocated a unique identifier. The book-id is that unique identifier. 

When specifying an internal URL as a link to an Article, you should never specify the language-code, this will be taken care of automatically. All internal URL's should ve referenced from the root folder of the Hornbill Docs system. So if you wanted to reference this specific article, you would specify

```md
[Using Links](/hdoc-guide/hdocbook/using-links)
```

Which would render the following link: [Using Links](/hdoc-guide/hdocbook/using-links)


## Linking To Third-Party Sites

The purpose of the Hornbill Docs site is primarily to provide access to Hornbill's documentation. With that in mind we want to ensure that links to third-party sites while sometimes useful, are kept to a minimum.  Its in the best interest of the user experience to minimize the amount of "site exit" links, so when creating these, we should **always** consider the following: -

- **Accountability**: We should always link to third-party content when it's the third-party's information to share or responsibility to support. As an example, we might want to explain to a customer in our documentation how to use another software product, but its generally not our place to tell that story, its better to simply link to that documentation and allow that other vendor to provide that information in the way thats most appropriate for them. 
- **Implied Promotion**: The primary goal of the Hornbill Docs web site is to provide documentation about Hornbill's products and services.  We may from time to time feel its useful for our customers to reference other tools, products or services because it relates to the job they are currently doing with Hornbill's products.  However, we are not Google selling advertising and we should generally not be promoting other products. 
- **Actual Promotion**: We will not take requests from companies, individuals or other entities to include links on our documentation pages to their products.  Likewise, if we accept contributions to our documentation from third parties we will not accept or allow any links that are in any way promotional. Links may be allowed, only if they are genuinely helpful, but not if they are both genuinely helpful AND promotional
- **Relevance**: third party content can and will change without our knowledge, so its always best to keep external referenced to a minimum.  We will from time to time look for and correct dead links. 

