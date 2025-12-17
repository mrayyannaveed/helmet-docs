// @ts-check
// A type definition is not strictly required but can help with IntelliSense in your IDE.

/** @type {import('@docusaurus/types').Config} */
const config = {
  // --- Site Metadata ---
  title: 'Smart Helmet for Accident Detection and Rider Safety',
  tagline: 'An FYP Thesis Site',
  url: 'https://your-docusaurus-site.example.com', 
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // --- Organization and Project Details (for GitHub Pages deployments) ---
  organizationName: 'your-org',
  projectName: 'smart-helmet-thesis',

  // --- Presets (classic preset includes docs, blog, pages, and theme) ---
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // Disable blog for a thesis site
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // --- Theme Configuration ---
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Smart Helmet Thesis',
        logo: {
          alt: 'Smart Helmet Thesis Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'thesisSidebar', // Will be renamed to 'thesisSidebar' later
            position: 'left',
            label: 'Thesis',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Smart Helmet Thesis. Built with Docusaurus.`,
      },
      // prism: {
      //   theme: require('prism-react-renderer/themes/github'),
      //   darkTheme: require('prism-react-renderer/themes/dracula'),
      // },
    }),
};

module.exports = config;
