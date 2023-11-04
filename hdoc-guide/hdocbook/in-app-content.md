# In-App Contextual Help Content & Guidance
As well as providing on-line documentation the HDocBook format supports in-app content.  Unlike normal documentation content which is presented on the docs.hornbill.com web site, in-app content is designed to be used/presented to the user directly as a contextual popup help/guidance.  

## When to use In-App Contextual Help & Guidance
When building a user interface, its always best to make the user interface as self-explanatory as possible to foster intuitive use that requires no further explanation. For example, if there is a text field who's label is __First Name__ and you can enter text, it should be obvious to every user what they need to type in. Documenting these are a waste of time.  However, sometimes you have more complex entries, for examples, expressions, lists, code, SQL or other more complex input fields that really do need to offer the user some further information. In this case, an In-App Contextual Help option is ideal. 

Contextual help can be presented at different levels too.  For example, if you have a view or pop-up form that is for configuring something, you might want a form-level help document, that explains the form and all of the fields within it, for this you might provide a help button, or somewhere to click a (?) button.  More commonly, you might have a field on form on a view that requires very specific information/knowledge in order for the user to understand what that field requires.  Expressions, code snippets or complex input fields like date/time entry fields, or even search fields that have a lot of syntactical options, these are all good use cases to make use of field-level in-app help, typically made visible to the user via simple help (?) icon right next to the field in question, for example: -

![Field Level Help Example](/_books/hdoc-guide/hdocbook/images/field-level-help.png)

## Creating In-App Contextual Help & Guidance
In-App content can be created in any book, by simply creating documents in the __/{<book_id}/_inline/__ folder.  Documents in this folder are treated differently to other documents in the following way. 

- While adopting the same styling, documents in this folder will be rendered as a stand-alone page, and not within documentation site UI framework. This means when rendered, none of the navigation, search or any other docs.hornbill.com features will be available.
- Articles in this folder cannot be added to the hdocbook navigation.
- Articles in this folder cannot be linked to from other documentation pages.
- Articles in this folder should be designed to be stand-alone and rendered in a popup window/lightbox to the end user, from within the application.
- Articles in this folder WILL NOT be included in the sitemap and should not be subject to any site indexing.
- Links within these Articles will always target a new browser window/tab. 

When working with documents in development mode using the __hdoc serve__ command that tool will generate a pseudo entry at the bottom of the left-hand navigation so you can easily see/browse/view the in-app documents you have created in your HDocBook 
