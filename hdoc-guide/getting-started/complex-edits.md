---
layout: article
---
# Advanced Editing Workflow
This guide explains how to set up and configure the Advanced Editing workflow for Hornbill documentation. 

The main benefit of using the Advanced Editing workflow over the Basic Editing workflow is being able to preview how documentation and content will be presented on the live Hornbill Docs website.

The Advanced Edits workflow is more complex to setup and configure than the Basic edits workflow as you need to install a number of dependencies and tools. 

Once you are set up, the Document editing and publishing workflow is relatively straightforward.

## Overview
The Advanced Edits workflow allows you to work on GitHub content offline using Git and then submit it back to GitHub. Using this approach, you will:

1. Check out (fork) content from Hornbill's main branch of the content hosted that is hosted online into your GitHub account.
2. Copy (clone) the content from your account to your local machine then edit it.
3. Save (commit) it locally to Git.
4. Send it back (push) to your GitHub account.
5. Commit your changes the main branch to be validated by Hornbill who may add your changes to the main repository.

This guide uses Visual Studio as a text editor, but you can use a different one of your choice. Visual studio is free, well-supported, and has a large ecosystem of plugins, which are useful when editing documentation.

## Before you begin
* Sign up for a free [GitHub account](https://github.com/signup) if you do not already have one.
* Download and install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). 
* Follow these instructions to [Link your installation of Git to your GitHub account](https://docs.github.com/en/get-started/quickstart/set-up-git).
* Download and install [Visual Studio Code](https://code.visualstudio.com/). 
* Download and install [Node.js LTS](https://nodejs.org/en/) — Minimum version: Node.js LTS v18 LTS.

During the Node.js installation, you may be asked to automatically install the tools necessary to compile native modules.
 
  Because these tools are required by the Hornbill's HDocBook tooling, you must either:
  1. Allow the Node.js installation to download and install these automatically.
  2. Install the tooling manually once the Node.js installation is complete. To do this, see the [node-gyp](https://www.npmjs.com/package/node-gyp)  package documentation for further information.

  ::: important
  Install the latest Long Term Support (LTS) version of Node.js. Non-LTS versions are not validated by Hornbill.
  :::

* Install HDocBook Tools. To install HDocs Tools, enter a terminal window and enter the following command: 
```bash
npm install hdoc-tools -g
```
This installs the package globally to your Node.js installation, making the `hdoc` CLI tool available for you to use. 

HDocBook Tools is a command-line tool that is developed and maintained by Hornbill. Importantly, it provides you with a local preview server for previewing content in a browser window.

## Document editing and publishing workflow

1. Select a Document to Edit 
Browse to the [Hornbill Docs GitHub account](https://github.com/Hornbill-Docs) and locate the document you wish to contribute to. 

2. Fork Your Copy on GitHub
In order to contribute to a HDocBook you are first required to fork the HDocBook repository that contains it, which will make a copy of that repository in your personal GitHub account. The button to do this is near the top right of the repository page on GitHub.

3. Clone Your Copy to Your Local Computer. To do this:
    1. On your computer, create a folder called "hornbill-docs" in the desired location.
    2. Open a terminal window in that folder and type the command:

  `git clone [your cloned HDocBook url]`

4. Preview the document. To do this:
    1. In Visual Studio Code, select File -> Open Folder and open the first/top-level hdoc-guide folder. This folder which contains the hdocbook-project.json file. 
    2. Select Terminal > New Terminal, to open a terminal window. 
    3. In the terminal prompt, type `hdoc serve` then press return to start the preview server. 
    4. Open a web browser then navigate to http://127.0.0.1:3000/. The web browser should display a preview of the document.

5. Edit documents in Visual Studio. You can work on multiple documents simultaneously in Visual Studio by having them open in different tabs. Save changes as you go.

::: note
Updates in the text editor are not automatically displayed in the document preview. To preview changes as you work on a document, refresh the browser page.
:::

::: tip
Run this command to view basic statistics of the document, including file count and total word count:
- `hdoc stats`

Run this command to access a more detailed breakdown of the statistics:
- `hdoc stats -v`
:::

6. Commit Your Edits
Use VS Code's built-in compatibility with GitHub to add and commit your changes, which will save them to Git. To do this, select "Source Control" on the left side of the VS Code screen, then select "Commit". A text file will open, prompting you to add a commit message. A commit message is your description of the changes you have made.

The heading of your message (a summary of your actions) should be no more than 50 characters, and the body (details) should be no more than 72 characters. [See here](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) for more information on practices for commit messages. 

After you have written your commit message, click the tick symbol to save your changes locally to Git.

6. Push Your Changes to Your Fork
Once you have committed your changes locally, the next step is to save those changes to your fork, your GitHub account's online copy of the HDocBook repository. You can do this in much the same way as the previous step, by clicking "Source Control" on the left side of VS Code and then clicking on the blue "Sync Changes" button presented there.

7. Create a Pull Request from Your Fork to the Main Branch. You are able to use GitHub to create a pull request, which will ask Hornbill Docs, the operators of the main branch, to accept your changes into the master repo. The Hornbill Docs team will review the proposed changes in your pull request(s) and apply those that are accepted to the master repo ready for the next document build/publish cycle.

To make a pull request, use your browser to navigate to your fork of the HDocBook repository on your GitHub account. On that page, click "Pull Requests", then 'New Pull Request', and follow the instructions from there. Add a message at this stage to summarize the pull request.

## Useful resources

## Using Git with Visual Studio Code (external)
Video embedded here


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