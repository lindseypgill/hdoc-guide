# Contributing - How it Works

## GitHub

GitHub is an online source code and community projects website, primarily used to host Open Source projects.  Hornbill maintains a specific GitHib account which is used for our documentation.  Most documents on our Hornbill Docs site are made available as a public repository on our GitHub account.  You can see the GitHub account here [Hornbill-Docs](https://github.com/Hornbill-Docs)

## How Contributing Works

The basic workflow for contributing is as follows. 

1. When logged into your own GitHub account, you browse our Hornbill Docs repository on GitHub and locate the document you wish to contribute to.  Once located, you 'fork' the document project.  Forking is a GitHub term that simply means, make a copy of this repo and copy it into my own personal account.

2. When y ou go back in your GitHub account repository list, you will see your forked copy of the document source where you can make your edits.

3. Once you have completed the edits you want to make, you can, if you want to, create a Pull Request to ask the maintainers of the master document source (in this case Hornbill Docs team) to accept your edits into the master document source. The team will review your changes and pull them into the master repo for inclusion in the next nightly documentation build. 

4. Once you have finished your editing session, you can save space on your personal GitHub account by deleting the local copy of the document. Forking is fast and simple to do, so its easy to take a copy of the latest when you want to start a new editing session. 

::: tip
Once you have copied (forked) the master repo, your changes are not applied to the master, so you are safe to do whatever you want. If you do raise a Pull request, the changes you request will be reviewed before being accepted.  The review process will be much faster if your changes are small
:::

There are two workflows for content editing, simple and advanced.  

For [Simple Edits Workflow]({{BASE_PATH}}/getting-started/simple-edits) you can do everything through GitHub UI, there are no additional tools required.  Simple edits are good where you want to make quick text changes.  However, its important to understand that while Hornbill Docs system uses Markdown, there are many flavours of Markdown, and although in the GitHub UI the Hornbill Docs markdown will be rendered, it will not be rendered exactly as it will be on Hornbill Docs web site.  So for more complex edits/contributions you should follow the [Complex Edits Workflow]({{BASE_PATH}}/getting-started/complex-edits) workflow. 

For [Complex Edits Workflow]({{BASE_PATH}}/getting-started/complex-edits) you will generally install some specific tools, including Git command-line tools, or TortoiseGIT Windows shell extension, a text/code editor of choice, Node.js and some other supporting tools. Editing will involve forking in GitHub then checking out (cloning in Git speak) your forked copy to your local hard drive, and then using your favorite text editor to make the changes/edits.  The advantage of the [Complex Edits Workflow]({{BASE_PATH}}/getting-started/complex-edits) workflow, is you will install and use a tool that will give you a live preview of the documentation you are editing, and this preview gives you a life-like preview of what the documentation will look like on the live [Hornbill Docs Workflow](https://docs.hornbill.com/) website. 
