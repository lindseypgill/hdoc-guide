# Server Variables 

When the development preview server serves a Markdown file or static HTML file, or when a HDocBook is packaged for deployment, there are a number of variables that are processed if they are encountered in the content. Each variable name is written in UPPER_CASE and word-separated by an underscore, and for the server to process these variables they should be encapsulated in double curly braces `{{VAR_NAME}}`.

## Available Server Variables

|Variable|Current Value|Description|
|:---|:---|:---|
|<pre>\{\{BASE_PATH\}\}</pre>|`{{BASE_PATH}}`|The base URL of the current HDocBook root. You should refer to resources and links using this variable, which ensures each published HDocBook remains portable and not locked into a specific URL.|
|<pre>\{\{BUILD_NUMBER\}\}</pre>|`{{BUILD_NUMBER}}`|The build number of the HDocBook being viewed. If the HoDocBook is in development mode, then this will be zero (0).|
|<pre>\{\{BUILD_DATE\}\}</pre>|`{{BUILD_DATE}}`|The date/time this document was built. In development mode this will be set to the current date/time.|
