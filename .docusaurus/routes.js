import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '543'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'dd3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '3ab'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b56'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e94'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '03a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '09f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '3fb'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4a1'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '3df'),
            routes: [
              {
                path: '/docs/chapter-five/',
                component: ComponentCreator('/docs/chapter-five/', 'ddb'),
                exact: true,
                sidebar: "thesisSidebar"
              },
              {
                path: '/docs/chapter-four/',
                component: ComponentCreator('/docs/chapter-four/', '6da'),
                exact: true,
                sidebar: "thesisSidebar"
              },
              {
                path: '/docs/chapter-one/',
                component: ComponentCreator('/docs/chapter-one/', '2d7'),
                exact: true,
                sidebar: "thesisSidebar"
              },
              {
                path: '/docs/chapter-six/',
                component: ComponentCreator('/docs/chapter-six/', 'e79'),
                exact: true,
                sidebar: "thesisSidebar"
              },
              {
                path: '/docs/chapter-three/',
                component: ComponentCreator('/docs/chapter-three/', 'd69'),
                exact: true,
                sidebar: "thesisSidebar"
              },
              {
                path: '/docs/chapter-two/',
                component: ComponentCreator('/docs/chapter-two/', '51f'),
                exact: true,
                sidebar: "thesisSidebar"
              },
              {
                path: '/docs/front-matter/abstract',
                component: ComponentCreator('/docs/front-matter/abstract', '441'),
                exact: true,
                sidebar: "thesisSidebar"
              },
              {
                path: '/docs/front-matter/certificate',
                component: ComponentCreator('/docs/front-matter/certificate', 'c9e'),
                exact: true,
                sidebar: "thesisSidebar"
              },
              {
                path: '/docs/front-matter/dedication',
                component: ComponentCreator('/docs/front-matter/dedication', '740'),
                exact: true,
                sidebar: "thesisSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'e84'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '15a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
