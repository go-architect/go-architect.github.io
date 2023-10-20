import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'adb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '25d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8a8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '89b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '5a2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '43f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b3b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '461'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8d8'),
    routes: [
      {
        path: '/docs/analysis-tools/dependency-coupling',
        component: ComponentCreator('/docs/analysis-tools/dependency-coupling', '5d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/analysis-tools/dependency-graph',
        component: ComponentCreator('/docs/analysis-tools/dependency-graph', '1a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/analysis-tools/dependency-structure-matrix',
        component: ComponentCreator('/docs/analysis-tools/dependency-structure-matrix', 'bce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/analysis-tools/instability-and-abstractness',
        component: ComponentCreator('/docs/analysis-tools/instability-and-abstractness', 'f8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/analysis-tools/project-metrics',
        component: ComponentCreator('/docs/analysis-tools/project-metrics', '244'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/analysis-tools/vcs-analysis',
        component: ComponentCreator('/docs/analysis-tools/vcs-analysis', '01b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/analysis-tools',
        component: ComponentCreator('/docs/category/analysis-tools', 'f21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/contribute',
        component: ComponentCreator('/docs/contribute', 'c2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/analysis-tools-overview',
        component: ComponentCreator('/docs/getting-started/analysis-tools-overview', '514'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/open-project',
        component: ComponentCreator('/docs/getting-started/open-project', '519'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/project-summary-page',
        component: ComponentCreator('/docs/getting-started/project-summary-page', '1ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/install',
        component: ComponentCreator('/docs/install', '65c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '048'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
