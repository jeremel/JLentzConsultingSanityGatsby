export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec2a960a69fb2020319973c',
                  title: 'Sanity Studio',
                  name: 'JLentzConsultingSanityGatsby-studio',
                  apiId: '4ff090f5-5072-431e-b734-48f29649fe7e'
                },
                {
                  buildHookId: '5ec2a960a350ef0232c61c7c',
                  title: 'Blog Website',
                  name: 'JLentzConsultingSanityGatsby',
                  apiId: '5e258c4d-39f9-47ff-a737-3079c1c68725'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeremel/JLentzConsultingSanityGatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://JLentzConsultingSanityGatsby.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
