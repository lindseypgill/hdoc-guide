---
layout: article
---
# Complex Edits Workflow
The basic editing tools in GitHub, while sufficient for simple edits, are not well-suited for more comprehensive editing sessions. In this case we recommend you use this more advanced editing workflow which takes some initial setup, but once set up, the editing environment is far better, with lots of supporting tools and functionality to assist with you writing/editing productivity. 

::: note
This guide assumes you will be using Visual Studio Code as your text editor. This is because the text editor is free, very powerful and—most importantly—has a large ecosystem of useful plugins, some of which we will recommend for your HDocBook editing workflow.

However, there are many other very good editors with their own ecosystems of features and plugins, so if you prefer to choose a different text editor that you are already used to working with, please feel free to do so, using what you find in this document as general guidance on what you need.
:::

## Required Tools 

* Download and install [Visual Studio Code](https://code.visualstudio.com/) 
* Download and install [Node.js LTS](https://nodejs.org/en/) — the process below requires Node.js LTS v18 or better. 
::: important
While the hdoc-tools package should work with any version of Node.js v18 or above, you should stick with the Long Term Support (LTS) install of Node.js **unless** you are a Node expert and prepared to troubleshoot and manage any incompatibilities and tool configuration issues that may arise.  The Hornbill Docs team test our tools with LTS versions of Node.js to ensure things will work as expected. 

During the Node.js installation, you will be asked if you would like to automatically install the tools necessary to compile native modules. On Windows, the option will appear as so:
<img src="_books/hdoc-guide/images/nodejs-setup.png" width="500px" />

These tools are required by the HDocBook tooling, so you should either:
* Allow the Node.js installation to download and install these automatically.
* Install the tooling manually once the Node.js installation is complete. To do this, see the [node-gyp](https://www.npmjs.com/package/node-gyp) package documentation for further information.
:::
* Download and install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Sign up for a [GitHub account](https://github.com/signup)
* [Link your installation of Git to your GitHub account](https://docs.github.com/en/get-started/quickstart/set-up-git)

### Recommended Visual Studio Code Extensions

You should install the following Visual Studio Code extensions. To see how, see [Install Visual Studio Code Extensions](https://code.visualstudio.com/learn/get-started/extensions).

There are many such extensions so if you are familiar with VS Code you may choose other extensions if they better suit your workflow. 

* [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) by Street Side Software
  * Gives you spell checking and highlighting
* [Word Count](https://marketplace.visualstudio.com/items?itemName=ms-vscode.wordcount) by Microsoft
  * Provides a useful count of words in your current document
* [Preview](https://marketplace.visualstudio.com/items?itemName=searKing.preview-vscode) by Haixan Chen
  * Gives you Markdown preview capability
* [SVG Previewer](https://marketplace.visualstudio.com/items?itemName=vitaliymaz.vscode-svg-previewer) by Vitalii Mazurenko
  * Shows .svg images

### Using Git With Visual Studio Code
This video by the Visual Studio Code team at Microsoft provides general information on how to use Git functions built into Visual Studio Code.

<iframe width="560" height="315" src="https://www.youtube.com/embed/i_23KUAEtUM" title="Using Git with Visual Studio Code (Official Beginner Tutorial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Installing HDocBook Tools

HDocBook Tools is a simple command-line tool you install on your system. It requires Node.js to be installed. This tool is developed and maintained by Hornbill and provides you with a local preview server and other functions to help you with content development.

You can install Hornbill's HDocBook Tools using Node Package Manager. From a command line simply type the following and press "Enter". This installs the package globally to your Node.js installation, making the `hdoc` CLI tool available for you to use.

```bash
npm install hdoc-tools -g
```

## Working on the HDocBook

#### Step 1—Choose the Document to Contribute to
Browse to the [Hornbill Docs GitHub account](https://github.com/Hornbill-Docs) and locate the document you wish to contribute to. 

#### Step 2—Fork Your Copy on GitHub
In order to contribute to a HDocBook you are first required to "fork" the HDocBook repository that contains it, which will make a copy of that repository in your personal GitHub account. The button to do this is near the top right of the repository page on GitHub.

#### Step 3—Clone Your Copy to Your Local Computer
To start editing the HDocBook you need to make a clone of the HDocBook from your personal GitHub account. Follow the steps below:

- On your computer, create a folder called "hornbill-docs" in the desired location.
- Open a terminal window in that folder and type the command:

  `git clone [your cloned HDocBook url]`

#### Step 4—Run the Preview Server
Inside Visual Studio Code use the Open Folder (Ctrl+k) function to open the first/top-level hdoc-guide folder, which contains the hdocbook-project.json file. Then open a terminal window (Ctrl+Shift+') and type `hdoc serve`. The preview server should start. Now open a web browser and enter the URL http://127.0.0.1:3000/ and you should be presented with a preview of the document.

::: note
Currently the content in the browser with the preview server DOES NOT auto refresh as you edit the content. To see changes in the page you are viewing or in the navigation you will need to refresh the browser page.
:::

Edit the document(s) as required.

::: tip
To see the basic statistics of the document, including file count and total word count, in the terminal window you can run:
- `hdoc stats`

To get a more verbose breakdown of the stats you can run the command:
- `hdoc stats -v`
:::

#### Step 5—Commit Your Edits
Once you have finished making edits, you should use VS Code's built-in compatibility with GitHub to add and commit your changes, which will save them to Git. You can do this by clicking "Source Control" on the left side of the VS Code screen, and then clicking "Commit". A new text file will open, prompting you for a commit message, in which you should give an idea of the changes you made.

Type your message above the existing text in the window. The heading of your message (a summary of your actions) should be no more than 50 characters, and the body (for any details) should be no more than 72 characters. [See here](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) for more information about best practices for commit messages. 

After you have written your commit message, click the tick symbol near the top right of the screen. Your changes are now saved locally to Git.

#### Step 6—Push Your Changes to Your Fork
Once you have committed your changes locally, the next step is to save those changes to your fork, your GitHub account's online copy of the HDocBook repository. You can do this in much the same way as the previous step, by clicking "Source Control" on the left side of VS Code and then clicking on the blue "Sync Changes" button presented there.

#### Step 7—Create a Pull Request from Your Fork to the Main Branch
You are able to use GitHub to create a pull request, which will ask Hornbill Docs, the operators of the main branch, to accept your changes into the master repo. The Hornbill Docs team will review the proposed changes in your pull request(s) and apply those that are accepted to the master repo ready for the next document build/publish cycle.

To make a pull request, use your browser to navigate to your fork of the HDocBook repository on your GitHub account. On that page, click "Pull Requests", then 'New Pull Request', and follow the instructions from there. Add a message at this stage to summarize the pull request.