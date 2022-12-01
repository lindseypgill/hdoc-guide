---
layout: article
---
# Complex Edits Workflow
The basic editing tools in GitHub, while sufficient for simple edits, are not well-suited for more comprehensive editing sessions.  In this case we recommend you use this more advanced editing workflow which takes some initial setup, but once set up, the editing environment is far better, with lots of supporting tools and functionality to assist with you writing/editing productivity. 

::: note
This guide assumes you will be using Visual Studio Code as your text editor. This is because the text editor is free, very powerful and most importantly has a large eco system full of useful plugins, some of which we will recommend for your HDocBook editing workflow.  

However, there are many other very good editors with their own ecosystems of features and plugins, so if you prefer to choose a different text editor that you are already used to working with, please feel free to do so, using what you find in this document as general guidance of what you need
:::

## Required Tools 

* Download and Install [Visual Studio Code](https://code.visualstudio.com/) 
* Download and Install [Node.js LTS](https://nodejs.org/en/)

### Recommended Visual Studio Code Extensions

You should install the following Visual Studio Code extensions. To see how, see [Install Visual Studio Code Extensions](https://code.visualstudio.com/learn/get-started/extensions).

There are many such extension so if you are familiar with VS Code you may choose other extensions if they better suit your workflow. 

* [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) by Street Side Software
  * Gives you spell checking and highlighting
* [Word Count]() by Microsoft
  * Provides a useful count of words in your current document
* [Preview](https://marketplace.visualstudio.com/items?itemName=searKing.preview-vscode) by Haixan Chen
  * Gives you Markdown preview capability. 
* [SVG Previewer](https://marketplace.visualstudio.com/items?itemName=vitaliymaz.vscode-svg-previewer) by Vitalii Mazurenko  


## Installing HDocBook Tools

HDocBook Tools is a simple command-line tool you install on your system, it requires Node.js to be installed on your system.  This tool is developed and maintained by Hornbill and provides you with a local preview server functionality as well as other functions to help you with content development. 

You can install the Hornbill HDocBook tools using Node package manager. From a command-line simply type the following command and press Enter. This installs the tools globally to your Node.js installation, making the `hdoc` CLI tool available for you to use.  

```bash
npm install hdoc-tools -g
```

## Getting The HDocBook to work on
There are a number of stages to this step.

#### Step 1 - Choose The Document To Contribute
Browse Hornbill Docs GitHub account here: [Hornbill-Docs](https://github.com/Hornbill-Docs) and locate the document you wish to contribute to. 

#### Step 2 - Fork Your Copy on GitHup
In order to contribute to a HDocBook you are required to first make a copy of the HDocBook repository. In essence, forking a repository means "Make a copy of this repository into your personal account GitHub account".

#### Step 3 - Clone Your Copy To Your Local Computer
To start editing the HDocBook you need to make a clone of the HDocBook from your personal GitHub account.  Follow the steps below: -

- On your computer, create a folder in your home directory called "hornbill-docs"
- Open a terminal window in that folder and type the command
  - `git clone [your cloned HDocBook url]`

#### Step 4 - Run the Preview Server
Inside Visual Studio Code open a terminal window and type the command `hdoc serve` and the preview server should start. Now open a web browser and enter the URL http://127.0.0.1:3000/ and you should be presented with a preview of the document.

::: note
Currently the content in the browser with the preview server DOES NOT auto refresh as you edit the content. To see changes in the page you are viewing or in the navigation you will need to refresh the browser page.
:::

Edit the document(s) content as required.

::: tip
To see the basic statistics of the document, including file count and total word count, in the terminal window you can run:
- `hdoc stats`

To get more verbose breakdown of the stats you can run the command:
- `hdoc stats -v`
:::

#### Step 5 - Commit Your Edits
Once you have finished making edits, you should use VS Code's built in compatibility with GitHub to commit and push your changes back to your personal GitHub account's copy of the HDocBook.  

#### Step 6 - Create Pull Request
Because your local repo is a clone of the master repo for the document, you are able to use Git to create a Pull Request. This will take your changes and push them back up to the master repo on GitHub as a Pull Request, notifying the Hornbill Docs team that you have requested a change to the document. The Hornbill Docs team will review the proposed changes in your Pull Request(s) and apply to the master repo ready for the next document build/publish cycle.
