export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61113bf2842ddbdd115fc71d',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-n1784i9x',
                  apiId: '7cad22f8-3654-47a5-a92f-8c31876a36a4'
                },
                {
                  buildHookId: '61113bf3ea2a79e9069b38b2',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ndmqc8r3',
                  apiId: 'cdb42e7f-1987-41a3-aa8f-f0fea2f469f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tenzan/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ndmqc8r3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
