export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '630626312c5408073ac25885',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-test-studio-p7dupy7d',
                  apiId: '4e983bfe-cca4-4f3e-984e-af448f305902'
                },
                {
                  buildHookId: '630626319b47d4005889be35',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-test-web-n5zebzv9',
                  apiId: '07eba74b-e961-4d65-a6c1-52e0191b91f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcobarbosa/sanity-nextjs-landing-pages-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-test-web-n5zebzv9.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
