var docId = 'hdoc-guide';

module.exports = {
  docId: docId,
  title: 'Hornbill Docs Contributor Guide',
  description: 'Information about developing and publishing documentation on Hornbill Docs (docs.hornbill.com) website',
  version: "1.0.0",
  themeConfig: {
    logo: 'images/logo.png',
    siteTitle: false,
    sidebar: {
      '/': [
        {
        text: 'Introduction',
        expand: true,
        items: [
            { text: 'Welcome', link: docId + '/index' }, 
            { 
              text: 'Concepts', 
              expand: true,
              items: [
                { text: 'Overview', link: docId + '/workflow' },
                { text: 'HDocBook', link: docId + '/concepts/hdocbook'},
                { text: 'Library', link: docId + '/concepts/library'},
                { text: 'Publishing', link: docId + '/concepts/publishing'}
              ]
            },
            { 
              text: 'Getting Started', 
              expand: true,
              items: [
                { text: '1. Create a GitHub Account', link: docId + '/getting-started/github' },
                { text: '2. Install HDocBook Tools', link: docId + '/getting-started/tools' },
                { text: '3. Clone A Book Repository', link: docId + '/getting-started/clone-repo'}
              ]
            },
            { 
              text: 'HDocBook Reference', 
              expand: true,
              items: [
                { text: 'Specification', link: docId + '/hdocbook/specification' },
                { text: 'Markdown', link: docId + '/hdocbook/markdown' },
                { text: 'Layout Templates', link: docId + '/hdocbook/layout-templates' },
                { text: 'Frontmatter', link: docId + '/hdocbook/frontmatter' },
                { text: 'Server Variables', link: docId + '/hdocbook/server-variables' },
              ]
            },
            { 
              text: 'Other Useful Resources', 
              link: docId + '/additional-resources'
            }
          ]
        }
      ]
    }
  }
}
