// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XR Cloud',
  tagline: 'XR Cloud',
  url: 'https://xrcloud.belivvr.com',
  baseUrl: '/xrcloud-intro/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.webp',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'xrcloud', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'XRCloud',
          src: 'img/logo.webp',
          href: "https://developers.belivvr.com/",
          target: '_self'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: '소개',
          },
          {
            href: 'https://github.com/belivvr/xrcloud_doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
    }),
};

module.exports = config;
