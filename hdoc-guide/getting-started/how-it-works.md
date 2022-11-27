# Contributing - How it Works

The Hornbill Docs team published most of its documentation on GutHub, each HDocBook has its own public repository, anyone is free to contribute to Hornbill Docs should they wish, the process is simple and makes use of readily available and free tools, simply follow this guide to learn how. 

## GitHub

GitHub is an online source code and community projects website for Developers. Github is primarily used to host Open Source projects.  Hornbill maintains a specific GitHib account which we use to host our documentation source code.  Almost all documents available on [Hornbill Docs](https://github.com/Hornbill-Docs) website are made available as a public repository on our GitHub account.  You can see the GitHub account here [Hornbill-Docs](https://github.com/Hornbill-Docs)

In order for you to contribute to Hornbill Docs content, you will need a basic working knowledge of GitHub as well as a free account.

## How Contributing Works

The basic workflow for contributing to documentation on Hornbill Docs is as follows. 

1. When logged into your own GitHub account, you can browse the [Hornbill Docs](https://github.com/Hornbill-Docs) repository, and locate the specific document you wish to contribute to.  Once located, you need to 'fork' the document.  Forking is a GitHub term that simply means, make a copy of this repo and copy it into your own personal account. Although this will be a copy of the master document, GitHub maintains a link mack to the master source you copied from, this is what facilitates you being able to push back your changes for review and intake to the master.  

2. When you go back into your GitHub account repository list, you will see your forked copy of the document, this is where you can make your edits.

3. Now you can make your edits.  [Simple Edits]({{BASE_PATH}}/hdoc-guide/getting-started/simple-edits) can ve done from within GitHub directly. For more [Complex Edits]({{BASE_PATH}}/getting-started/complex-edits) we strongly recommend using a good source code editor, such as the utterly brilliant and free [Visual Studio Code](https://code.visualstudio.com/) editor from Microsoft, along with a small number of very useful plugins that makes a great editing experience.  

4. Once you have completed the edits you want to make, you can, if you want to, create a Pull Request to ask the maintainers of the master document source (in this case Hornbill Docs team) to accept your edits into the master document source. The team will review your changes and pull them into the master repo for inclusion in the next nightly documentation build. 

5. Once you have finished your editing session, you can save space on your personal GitHub account by deleting the local copy of the document. Forking is fast and simple to do, so its easy to take a copy of the latest when you want to start a new editing session. 

::: tip
Once you have copied (forked) the master repo, your changes are not applied to the master, so you are safe to do whatever you want. If you do send a Pull request, the changes you request will be reviewed by the Hornbill Docs team before being accepted into the master documentation source.  The review process will be much faster if your changes are small.
:::

There are two workflows for content editing, simple and advanced.  

### Simple Edits Workflow
For [Simple Edits Workflow]({{BASE_PATH}}/getting-started/simple-edits) you can do everything through GitHub UI, there are no additional tools required.  Simple edits are good where you want to make quick text changes.  However, its important to understand that while Hornbill Docs system uses Markdown, there are many flavours of Markdown, and although in the GitHub UI the Hornbill Docs markdown will be rendered, it will not be rendered exactly as it will be on Hornbill Docs web site.  So for more complex edits/contributions you should follow the [Complex Edits Workflow]({{BASE_PATH}}/getting-started/complex-edits) workflow. 

### Complex Edits Workflow
For [Complex Edits Workflow]({{BASE_PATH}}/getting-started/complex-edits) you will generally install some specific tools, including Git command-line tools, or TortoiseGIT Windows shell extension, a text/code editor of choice, Node.js and some other supporting tools. Editing will involve forking in GitHub then checking out (cloning in Git speak) your forked copy to your local hard drive, and then using your favorite text editor to make the changes/edits.  The advantage of the [Complex Edits Workflow]({{BASE_PATH}}/getting-started/complex-edits) workflow, is you will install and use a tool that will give you a live preview of the documentation you are editing, and this preview gives you a life-like preview of what the documentation will look like on the live [Hornbill Docs Website](https://docs.hornbill.com/) website. 
