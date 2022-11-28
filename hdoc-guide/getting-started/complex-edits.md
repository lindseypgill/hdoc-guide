---
layout: article
---
# Complex Edits Workflow
The basic editing tools in GitHub, while sufficient for simple edits is not ideal for more comprehensive editing sessions.  In this case we recommend you use this advanced editing workflow which takes some initial setup, but once set up, the editing environment is far better, with lost of supporting tools and functionality to assist with you writing/editing productivity. 

::: note
This guide assumes you will be using Visual Studio Code as your text editor. This is because the text editor is free, very powerful and most importantly has a large eco system full of useful plugins, some of which we will recommend for your HDocBook editing workflow.  

However, there are many other very good editors with their own ecosystems of features and plgins, so if you prefer to choose a different text editor that you are already used to working with, please feel free to do so, using what you find in this document as general guidance of what you need
:::

## Required Tools 

* Download and Install [Visual Studio Code](https://code.visualstudio.com/) 
* Download and Install [Node.js LTS](https://nodejs.org/en/)

### Recommended Visual Studio Code Extensions 
You should install the following Visual Studio Code extensions. To see how, see [Install Visual Studio Code Extensions](https://code.visualstudio.com/learn/get-started/extensions)

There are many such extension so if you are familiar with VS Code you may choose other extensions if they better suit your needs. 

; [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) by Street Side Software
  * Gives you spell checking and highlighting
* [Preview](https://marketplace.visualstudio.com/items?itemName=searKing.preview-vscode) by Haixan Chen
  * Gives you Markdown preview capability. 
* [SVC Previewer](https://marketplace.visualstudio.com/items?itemName=vitaliymaz.vscode-svg-previewer) by Vitalii Mazurenko  


## Installing HDocBook Tools
HDocBook Tools is a simple command-line tool you install on your system, it requires Node.js to be installed on your system.  This tool is developed and maintained by Hornbill and provides you with a local preview server functionality as well as other functions to help you with content development. 

You can install the Hornbill HDocBook tools using Node package manager tool, and typing in the following command. This installs the tools globally to your Node.js installation making the `hdoc` CLI tool available to you to use.  

```bash
npm install hdoc-tools -g
```

## 