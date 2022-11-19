# HDocBook Frontmatter

When composing a document using markdown, the HDocBook system allows for each article to provide additional 
metadata that describes author details, options for how the content should be rendered, index and 
included in any taxonomy, keywords etc.   Frontmatter is a defacto scheme for including metadata that
is not rendered as part of the article, but is instead used to provide options and other information 
to the HDocBook publishing system.

## Frontmatter Content Example
Frontmatter content is actually expressed in another language called [YAML](https://yaml.org/), so this is 
really a language within another language, or at least, this is how the processing tools see the difference. 

By way of an example, here is a simple markdown document with a H1 header and a paragraph

``` md
# The Document Title

Some article paragraph text....
```

And here is that same article, but now with two metadata properties, `title` and `layout`, ao 
now the document looks like this. 

``` md
---
title: Doc Title
layout: article
---
# The Document Title

Some article paragraph text....
```

Frontmatter must always appear at the top of the article. The frontmatter content is fenced between two 
lines, with each line containing three or more hyphens (---) at the start of the line.  The beginning and 
end of the frontmatter content block appears between these two fence lines  The markdown parser will not 
directly render any of the frontmatter data or enclosing fence guards, markdown rendering starts from the
first text line after the second (---) markdown fence line

## Frontmatter Metadata Properties

|Property|Description|
|:---|:---|
|`title`|The title of this document, typically, but not always the same as the first H1 in your document.  This is used |
|`layout`|The layout template to use when rendering this article. If not specified this defaults to 'article'. Click here for a list of [Content Layout Templates]({{BASE_PATH}}/hdocbook/layout-templates)|