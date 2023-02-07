# Reusable Content

Creating reusable content for books or pages is often desirable, such as copyright notices, terms and conditions, or other commonly used content that should not have duplicates for maintenance purposes. HDocBook markdown format supports an INCLUDE directive to facilitate this. As of now, only markdown text content is supported by this directive. To use it, include the fully-qualified URL of a markdown file in the directive. The include statement will then be replaced by the content within that file at build time or runtime in dev preview.

The include directive takes the following form...

<code>
[ [INCLUDE https://raw.githubusercontent.com/Hornbill-Docs/hdoc-library/main/hdoc-library/agreements/code-of-conduct.md] ]
</code>

(without the space between the two ['s) which will inject the content from the file `code-of-content.md` into your article