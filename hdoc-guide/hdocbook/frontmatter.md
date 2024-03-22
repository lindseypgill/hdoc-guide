# HDocBook Frontmatter

When composing a document using Markdown, the HDocBook system allows for each article to provide additional metadata that describes author details, options for how the content should be rendered, its index, its inclusion in any taxonomy, keywords and more. Frontmatter is a de facto scheme for including metadata that is not rendered as part of the article, but is instead used to provide options and other information to the HDocBook publishing system.

## Frontmatter Content Example
Frontmatter content is actually expressed in another language called [YAML](https://yaml.org/), so this is really a language within another language. At least, this is how the processing tools see it. 

By way of an example, here is a simple Markdown document with a H1 header and a paragraph:

``` md
# The Document Title

Some article paragraph text....
```

And here is that same article, but now with two metadata properties, `title` and `layout`, so now the document looks like this:

``` md
---
title: Doc Title
layout: article
---
# The Document Title

Some article paragraph text....
```

Frontmatter must always appear at the top of the article. The frontmatter content is fenced between two lines, with each line containing three or more hyphens (---) at the start of the line. The beginning and end of the frontmatter content block appear between these two fence lines. The Markdown parser will not directly render any of the frontmatter data or enclosing fence guards; Markdown rendering starts from the first text line after the second (---) Markdown fence line.

## Frontmatter Metadata Properties

|Property|Description|
|:---|:---|
|`title`|The title of this document; typically, but not always, the same as the first H1 in your document.|
|`layout`|The layout template to use when rendering this article. If not specified this defaults to "article". [Click here for a list of Content Layout Templates](/_books/hdoc-guide/hdocbook/layout-templates).|
|`coverImage`|Full-qualified [options] path from root for an image used as a cover image. This will be used for gallery rendering and social sharing. If not specified, the book-specific image will be used, and if not defined at book-level a global generic image will be used.|
|`description`|A description of the document. This will be used for gallery rendering and social sharing.|
|`readingTime`|The amount of reading time required for this document. If not specified, this will be calculated automatically when the document is built, ready for publishing.| 
|`pdfAvailable`|Set to 'true' if there is a PDF document available for this article.|
