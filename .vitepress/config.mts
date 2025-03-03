import { defineConfig } from "vitepress";
import { rtl } from "vitepress-plugin-rtl";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Books",
  description: "A VitePress Site",
  dir: "rtl",
  lang: "fa-IR",
  markdown: {
    container: {
      tipLabel: "نکته",
      warningLabel: "هشدار",
      dangerLabel: "خطر",
      infoLabel: "اطلاعات",
      detailsLabel: "جزئیات",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
