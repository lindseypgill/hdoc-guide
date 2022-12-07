---
title: HDocBook Markdown Overview
layout: article-toc
---
# HDocBook Markdown Overview

Every system that uses Markdown is generally built on a basic Markdown syntax, frequently based on the strongly typed and documented [CommonMark](https://commonmark.org/) specification. However, individual Markdown systems generally need to expand the syntax to include extra functions or rendering capabilities that are specific to the needs of the system.

Accordingly, the HDocBook Markdown syntax is also based on [CommonMark](https://commonmark.org/) but extends that with additional capabilities that allow rich documentation content features and visualizations to be created. This article is the reference for both basic and extended syntax for the HDocBook Markdown grammar and feature set.


## Alerts (Note, Tip, Important, Caution, Warning)

Alerts is a HDocBook Markdown extension that will create block quotes that render on Hornbill H-DOC with colors and icons that indicate call-out information within the document.

Avoid notes, tips, and "important" boxes. Readers tend to skip over them. It's better to put that info directly into the article text.

If you need to use alerts, limit them to one or two per article. Multiple notes should never be next to each other in an article.

The following alert types are supported:

```md
::: note
Information the user should notice even when skimming.
:::

::: tip
Optional information to help a user be more successful.
:::

::: important 
Essential information required for user success.
:::

::: caution
Negative potential consequences of an action, be careful.
:::

::: warning
Dangerous consequences of an action.
:::
```

These alerts look like this on Hornbill Docs:

::: note
Information the user should notice even when skimming.
:::

::: tip
Optional information to help a user be more successful.
:::

::: important 
Essential information required for user success.
:::

::: caution
Negative potential consequences of an action, be careful.
:::

::: warning
Dangerous consequences of an action.
:::



## Angle Brackets

If you need to use angle brackets &lt;&gt; in your text, you need to encode these using standard
HTML entity encoding. 

The following:
```md
&lt;between&gt;
```
will render as: &lt;between&gt;

## Blockquotes

Blockquotes are created using the `>` character:

```md
> This is a blockquote. It is usually rendered indented and with a different background color.
```

The preceding example renders as follows:

> This is a blockquote. It is usually rendered indented and with a different background color.

## Bold and Italic text

To format text as **bold**, enclose it in two asterisks:

```md
This text is **bold**.
```

To format text as *italic*, enclose it in single asterisks:

```md
This text is *italic*.
```

To format text as both ***bold and italic***, enclose it in three asterisks:

```md
This text is both ***bold and italic***.
```

## Headings

Hornbill Docs supports six levels of headings, specified by one through six hash `#` characters, followed by a space, and then the heading text:


```md
# Heading 1 (H1)
## Heading 2 (H2)
### Heading 3 (H3)
#### Heading 4 (H4)
##### Heading 5 (H5)
###### Heading 6 (H6)
```

The above Markdown will render like this. 

# Heading 1 (H1)
## Heading 2 (H2)
### Heading 3 (H3)
#### Heading 4 (H4)
##### Heading 5 (H5)
###### Heading 6 (H6)

::: note
- There must be at least one space between the `#` and heading text.
- Only a single H1 heading should exist in any Markdown file, and should be the first content item in the document.
- For templates that include the right-hand table of contents, H2 and H3 headings will automatically appear inside it.
- You can put links to individual headings in a Markdown file using anchor links, as so: `[create an anchor](#anchors-in-markdown)`.
:::

## HTML
Markdown supports inline HTML. As a general rule, HTML is not recommended for publishing to Hornbill Docs, but it may be useful in a limited number of situations. Basically, you should avoid using inline HTML to the greatest extent possible.

## Images
The following image types are supported.  

- .jpg
- .png
- .svg

For illustrations, flow diagrams and info graphics, we recommend you have your graphic designer use SVG format, and follow the [Hornbill Graphics and Illustration Style Guide](/_books/hdoc-guide/writing-style-guide#graphics-and-illustrations) in order to ensure that images scale properly for screen, print and PDF, and in the case of screen rendering look high quality in both light and dark screen rendering mode.

The basic Markdown syntax you should use to embed an image in your content is: 

``` md
![Alt Text](/path/to/image.jpg)
```
