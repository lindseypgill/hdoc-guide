---
layout: article-toc
---
# Content Layout Templates 

When rendering an articles content, you can control the layout of the content by selecting the appropriate 
layout, this can be specified using the `layout` property in the frontmatter content of the article.  If 
not specified, then the default layout is set to **article**

![Article Screen Area]( {{BASE_PATH}}/content/hdocbook/images/article-area.png )

The content layout UI is responsive inasmuch as it will adapt as best it can to difference size device screens. Elements of that layout are adjusted/shown/hidden as required to get the best reading experience at any given screen resolution and screen orientation. 

## Content Layout Templates

You can specify the 'layout' property of each article to be any one of the following. The preview in the table below shows you how the article content will be laid out when rendered into the above content layout.  If you do not specify a layout in the article frontmatter section, then the default `article` layout will be used. 

|Layout|Description|Preview|
|:---|:---|:---|
|<span style="white-space:nowrap;">`article`</span>|The default article layout, provides a typical vertical document layout, a good default for most articles.  The width of the content, while responsive has a maximum width, after which the content is padded to the right, or on wider screens, centered in the content area.  The content width always takes up the same width as the content when a right-hand-side table of content is shown, this ensures that navigating between articles that do and do not include a right-hand toc, there is no uncomfortable shift of the horizontal screen reading position|![Article Screen Area]( {{BASE_PATH}}/content/hdocbook/images/article_1.png)|
|<span style="white-space:nowrap;">`article-toc`</span>|This is basically the same layout as the 'article' above, but with the addition of the right-hand side table of contents which is automatically generated from the articles H2 and H3 headers.  The links provided in this TOC list are anchor links which simply scroll you to the correct position in the rendered document on the screen.  If you do not have any H2 or H3 headings in the article, the this layout renders exactly the same as the default 'article' layout.|![Article Screen Area]( {{BASE_PATH}}/content/hdocbook/images/article-toc_1.png )|
|<span style="white-space:nowrap;">`article-wide`<span>|Full width table layout, where the content (normally a table) will be shown. This layout is usefil when you have content that will benefit from the full width of the content area, when there is definitely no anchor link document index.|![Article Screen Area]( {{BASE_PATH}}/content/hdocbook/images/article-wide_1.png ) |