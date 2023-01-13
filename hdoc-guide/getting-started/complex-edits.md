---
layout: article
---
# Advanced Editing Workflow
This guide explains how to set up and configure the Advanced Editing workflow for Hornbill documentation. 

The main benefit of using the Advanced Editing workflow over the Basic Editing workflow is being able to preview how documentation and content will be presented on the live Hornbill Docs website.

The Advanced Edits workflow is more complex to setup and configure than the [Simple Edits workflow](/_books/hdoc-guide/hdocbook/sinple-edits) as you need to install a number of dependencies and tools. 

Once you are set up, the Advanced [Document editing and publishing workflow](/_books/hdoc-guide/hdocbook/complex-edits/Document-editing-and-publishing-workflow) is relatively straightforward.

## Overview
The Advanced Edits workflow allows you to work on Hornbill's GitHub documentation content offline using Git and then submit it back to GitHub. Using this approach, you will:

1. Check out (fork) content from Hornbill's main branch of the content hosted that is hosted online into your GitHub account.
2. Copy (clone) content from your account to your local machine then edit it using a text editor.
3. Save (commit) it locally to Git.
4. Send it back (push) to your GitHub account.
5. Publish (commit) your changes to Hornbill's main branch to be validated by Hornbill. 

This guide recommends using Microsoft's Visual Studio as a text editor, but you can use an alternative of your choice. Visual studio is free, well-supported, and has a large ecosystem of extensions that are useful when editing documentation.

## Before you begin
The following prerequisutes must be complete before you can edit and commit Hornbil documention:
1. Sign up for a free [GitHub account](https://github.com/signup) if you do not already have one.
2. Download and install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). 
3. Follow these instructions to [Link your installation of Git to your GitHub account](https://docs.github.com/en/get-started/quickstart/set-up-git).
4. Download and install [Visual Studio Code](https://code.visualstudio.com/). 
5. Download and install [Node.js LTS](https://nodejs.org/en/) (Minimum version: Node.js LTS v18 LTS).
 ::: important
  Install the latest Long Term Support (LTS) version of Node.js. Non-LTS versions are not validated by Hornbill.
  :::

During the Node.js installation, you may be asked to automatically install the tools necessary to compile native modules. Because these tools are required by the Hornbill's HDocBook tooling, you must either:
  1. Allow the Node.js installation to download and install these automatically.
  2. Install the tooling manually once the Node.js installation is complete. To do this, see the [node-gyp](https://www.npmjs.com/package/node-gyp)  package documentation for further information.

 

6.  Install HDocBook Tools. To install HDocs Tools, enter a terminal window and enter the following command: 
```bash
npm install hdoc-tools -g
```
This installs the package globally to your Node.js installation, making the `hdoc` CLI tool available for you to use. 

HDocBook Tools is a command-line tool that is developed and maintained by Hornbill. Importantly, it provides you with a local preview server for previewing content in a browser window.

## Document editing and publishing workflow
Follow these steps to edit and publish documents:

1. Select a Document to Edit. To do this, browse to the [Hornbill Docs GitHub account](https://github.com/Hornbill-Docs) and locate the document you wish to contribute to. 

2. Fork Your Copy on GitHub. In order to contribute to a HDocBook you are first required to fork the HDocBook repository that contains it, which will make a copy of that repository in your personal GitHub account. The button to do this is near the top right of the repository page on GitHub.

3. Clone Your Copy to Your Local Computer. To do this:
    1. On your computer, create a folder called "hornbill-docs" in the desired location.
    2. Open a terminal window in that folder and type the command:

  `git clone [your cloned HDocBook url]`

4. Preview the document. To do this:
    1. In Visual Studio Code, select File -> Open Folder and open the first/top-level hdoc-guide folder. This folder which contains the hdocbook-project.json file. 
    2. Select Terminal > New Terminal, to open a terminal window. 
    3. In the terminal prompt, type `hdoc serve` then press return to start the preview server. 
    4. Open a web browser then navigate to http://127.0.0.1:3000/. The web browser should display a preview of the document.

5. Edit documents in Visual Studio and save changes as you go. You can work on multiple documents simultaneously in Visual Studio by having them open in different tabs. 

    ::: note
    Updates in the text editor are not automatically displayed in the document preview. To preview changes as you work on a document, refresh the browser page.
    :::

    ::: tip
    Run this command to view basic statistics of the document, including file count and total word count:
    - `hdoc stats`

    Run this command to access a more detailed breakdown of the statistics:
    - `hdoc stats -v`
    :::

6. Commit Your Edits. To do this:
    1. Select "Source Control" on the left side of the VS Code screen, then select "Commit". 
    2. A commit message window opens. Add a commit message then select the tick button to commit.

    ::: note
    A commit message is your description of the changes you have made. The heading of your message (a summary of your actions) should be no more than 50 characters, and the body (details) should be no more than 72 characters. [See here](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) for more information on practices for commit messages. 
    :::

6. Push Your Changes to your Fork. To do this, select the "Sync Changes" button under the "Source Control" menu in Visual Studio.

7. Create a Pull Request from Your Fork to the Hornbill Main Branch. To to this:
    1. Go online to your GitHub account. 
    2. Navigate to your fork of the HDocBook repository. 
    3. Select "Pull Requests", then select "New Pull Request", then follow the instructions from there. 
    4. When prompted, add a message to summarize the pull request.

After a pull request, your change is submitted to the Hornbill Documentation team. They will review proposed changes and decide whether to approve them for inclusion in the Hornbill documentation.

# Next steps

Refer back to the [Document editing and publishing workflow](/_books/hdoc-guide/hdocbook/complex-edits/Document-editing-and-publishing-workflow) for future Hornbill document editing.

You can use a combination of this Advanced Edits workflow and the [Simple Edits workflow](/_books/hdoc-guide/hdocbook/sinple-edits) depending on your need for the previewing feature.

## Useful resources

### Using Git with Visual Studio Code (external)
<iframe width="560" height="315" src="https://www.youtube.com/embed/i_23KUAEtUM" title="Using Git with Visual Studio Code (Official Beginner Tutorial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Optional Visual Studio Code Extensions (external)

There are a number of [Visual Studio code Extensions ](https://code.visualstudio.com/learn/get-started/extensions) you can install to improve your editing experience.

Examples include:

* [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) 
  * Gives you spell checking and highlighting
* [Word Count](https://marketplace.visualstudio.com/items?itemName=ms-vscode.wordcount) 
  * Provides a useful count of words in your current document
* [Preview](https://marketplace.visualstudio.com/items?itemName=searKing.preview-vscode) 
  * Gives you Markdown preview capability
* [SVG Previewer](https://marketplace.visualstudio.com/items?itemName=vitaliymaz.vscode-svg-previewer)
  * Shows .svg images