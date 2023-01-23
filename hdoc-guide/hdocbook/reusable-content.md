# Reusable Content

It is often desirable to create content that can be used in one or more books or pages. Good examples of this might be things like copyright notices, terms and conditions or other commonly used content where it would be undesirable to have duplicates from a maintenance point of view.

To support this, HDocBook markdown format supports an INCLUDE directive.

As of the writing of this document, only markdown text content is supported.  The include directive should specify a fully-qualified URL to a markdown file. At build time (or runtime in dev preview) this include include statement will be replaced by the content within the file that the URL contains. 

<code>
[ [INCLUDE https://raw.githubusercontent.com/Hornbill-Docs/hdoc-library/main/hdoc-library/agreements/code-of-conduct.md] ]
</code>

Without the space between the two ['s will inject the content from the file code-of-content.md