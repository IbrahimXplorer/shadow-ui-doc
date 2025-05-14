import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Shadow UI",
  tagline: "Creating React Native apps with a truly native look and feel",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Shadow UI",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {to: 'Guide', label: 'Blog', position: 'left'},
        {to: 'blog', label: 'ShowCase', position: 'left'},
        {
          type: "html",
          position: "right",
          value: `
            <a href="https://github.com/IbrahimXplorer/shadow-ui" 
               target="_blank" 
               rel="noopener noreferrer" 
               style="display:flex;align-items:center;margin-right:10px;">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                   alt="GitHub" 
                   width="20" 
                   height="20" 
                   style="display:block;" />
            </a>
          `,
        },
        {
          type: "html",
          position: "right",
          value: `
            <a href="https://www.linkedin.com/in/devibrahim/" 
               target="_blank" 
               rel="noopener noreferrer" 
               style="display:flex;align-items:center;margin-right:10px;">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                   alt="LinkedIn" 
                   width="20" 
                   height="20" 
                   style="display:block;" />
            </a>
          `,
        },
        {
          type: "html",
          position: "right",
          value: `
          <a class="button button--primary button--md" 
             href="/docs/getting-started" 
             style="text-decoration:none;">
            Hire Me
          </a>
        `,
        },
      ]
      
    },
    footer: {
      // style: 'dark',
      copyright: `© ${new Date().getFullYear()} Shadow UI. Built by Ibrahim Khan.`,
      style: "dark",
    },
    
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "light", // 👈 Set default theme to dark
      // disableSwitch: true, // 👈 Optional: allow user to switch themes
      respectPrefersColorScheme: false, // 👈 Optional: ignore user's OS preference
    },
    
  } satisfies Preset.ThemeConfig,
};

export default config;
