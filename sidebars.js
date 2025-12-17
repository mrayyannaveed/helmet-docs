/**
 * Creating a sidebar enables you to:
 - Create an ordered group of docs
 - Render a sidebar in the docs site
 - List an item in the sidebar as category
 *
 * Do not forget to change the id with your project name
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  thesisSidebar: [
    {
      type: 'category',
      label: 'Front Matter',
      items: [
        'front-matter/certificate',
        'front-matter/dedication',
        'front-matter/abstract',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 1',
      items: ['chapter-one/index'],
    },
    {
      type: 'category',
      label: 'Chapter 2',
      items: ['chapter-two/index'],
    },
    {
      type: 'category',
      label: 'Chapter 3',
      items: ['chapter-three/index'],
    },
    {
      type: 'category',
      label: 'Chapter 4',
      items: ['chapter-four/index'],
    },
    {
      type: 'category',
      label: 'Chapter 5',
      items: ['chapter-five/index'],
    },
    {
      type: 'category',
      label: 'Chapter 6',
      items: ['chapter-six/index'],
    },
  ],
};

module.exports = sidebars;