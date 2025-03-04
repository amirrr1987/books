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
    sidebar: [
      {
        text: "مقدمه",
        link: "/books/refactoring-ui/01_Introduction.md",
      },
      {
        text: "شروع طراحی",
        link: "/books/refactoring-ui/02_Starting_Design.md",
      },
      {
        text: "سلسه مراتب بصرری",
        link: "/books/refactoring-ui/03_Visual_Hierarchy.md",
      },
      {
        text: "چیدمان و فاصله",
        link: "/books/refactoring-ui/04_Layout_and_Spacing.md",
      },
      {
        text: "طراحی متن",
        link: "/books/refactoring-ui/05_Typography.md",
      },
      {
        text: "کار با رنگ",
        link: "/books/refactoring-ui/06_Color.md",
      },
      {
        text: "ایجاد عمق",
        link: "/books/refactoring-ui/07_Depth_Creation.md",
      },
      {
        text: "کار با تصویر",
        link: "/books/refactoring-ui/08_Working_With_Images.md",
      },
      {
        text: "بیشتر یاد بگیرید",
        link: "/books/refactoring-ui/09_Final_Tips.md",
      },
    ],
    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/amirrr1987" },
      { icon: "linkedin", link: "https://linkedin.com/in/amirrr1987" },
    ],
  },
});
