import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: " ",
  description: "你的下一台个人电脑, 由 ARM® 驱动",
  lastUpdated: true,

  head: [
    [
      "link",
      { rel: "icon", href: "/logo.svg", size: "any", type: "image/svg+xml" },
    ],
  ],

  themeConfig: {
    logo: "/logo.svg",
    repo: "initdc/marspc-vitepress",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "最后更新",

    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },

    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg'
    // },

    nav: [
      { text: "参数", link: "/specs/", activeMatch: "^/specs/" },
      { text: "指南", link: "/guide/", activeMatch: "^/guide/" },
      {
        text: "资源",
        link: "/resources/",
        activeMatch: "^/resources/",
      },
      {
        text: "路线",
        link: "https://github.com/initdc/marspc-vitepress/projects",
      },
    ],

    // sidebar: {
    //   "/specs/": getSpecsSidebar(),
    //   "/guide/": getGuideSidebar(),
    //   "/resources/": getResourcesSidebar(),
    // },
  },
});

// function getSpecsSidebar() {
//   return [
//     {
//       children: [{ text: "目录", link: "/specs/#目录" }],
//     },
//   ];
// }

// function getGuideSidebar() {
//   return [
//     {
//       children: [{ text: "刷写固件", link: "/guide/flash" }],
//     },
//   ];
// }

// function getResourcesSidebar() {
//   return [
//     {
//       children: [{ text: "源码", link: "/resources/source-code" }],
//     },
//   ];
// }
