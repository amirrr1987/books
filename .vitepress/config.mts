import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Books",
  description: "books about UI and frontend and backend UI,vue,nest.js ",
  dir: "rtl",
  lang: "fa-IR",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "UI", link: "/books/ui" },
      { text: "Vue.js", link: "/books/vue" },
      { text: "Nest.js", link: "/books/nest" },
    ],
    sidebar: [],
    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/amirrr1987" },
      { icon: "linkedin", link: "https://linkedin.com/in/amirrr1987" },
    ],
  },
});
