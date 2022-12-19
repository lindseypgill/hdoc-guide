---
layout: article-toc
---
# Content Layout Templates 

You can control the rendered layout of an HDocBook page by selecting the appropriate `layout` property in the frontmatter content of the article. If not specified, then the default layout is set to **article**.

![Article Screen Area]( /_books/hdoc-guide/hdocbook/images/article-area.png )

The content layout UI is responsive and will adapt as best it can to different screen sizes. Elements of the layout are adjusted/shown/hidden as required to get the best reading experience at any given screen resolution and screen orientation. 

## Available Layout Templates

You can specify the `layout` property of each article to be any one of the following. The preview in the table below shows you how the article content will be laid out when rendered into the above content layout. If you do not specify a layout in the article frontmatter section, then the default `article` layout will be used. 

|Layout|Description|Preview|
|:---|:---|:---|
|<span style="white-space:nowrap;">`article`</span>|The default article layout including a page table of contents automatically generated from H2/H3 on the right hand aside. The width of the content, while responsive, has a maximum width, after which the content is padded to the right or, on wider screens, centered in the content area.  <br/> <br/>The links provide quite access to sections of the page. This layout provides a typical vertical document layout, a good default for most articles. |![Article Screen Area]( /_books/hdoc-guide/hdocbook/images/article-toc_1.png)|
|<span style="white-space:nowrap;">`article-no-toc`</span>|This layout is basically the same as "article" above, but without the addition of the right-hand aside page table of contents.|![Article Screen Area]( /_books/hdoc-guide/hdocbook/images/article_1.png )|
|<span style="white-space:nowrap;">`article-wide`<span>|Full-width table layout, where the content (normally a table) will be shown. This layout is useful when you have content that will benefit from the full width of the content area, when there is definitely no anchor link document index.|![Article Screen Area]( /_books/hdoc-guide/hdocbook/images/article-wide_1.png ) |