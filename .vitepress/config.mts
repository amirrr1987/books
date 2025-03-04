import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "کتاب‌های من", // ترجمه عنوان به فارسی
  description:
    "کتاب‌هایی درباره رابط کاربری، فرانت‌اند، بک‌اند، ویو، و نست‌جی‌اس", // ترجمه توضیحات
  dir: "rtl", // جهت راست به چپ
  lang: "fa-IR", // زبان فارسی

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "رابط کاربری", link: "/books/ui" }, // ترجمه UI
      { text: "ویو.جی‌اس", link: "/books/vue" }, // ترجمه Vue.js
      { text: "نست.جی‌اس", link: "/books/nest" }, // ترجمه Nest.js
    ],
    sidebar: [
      {
        text: "مقدمه", // حفظ متن فارسی
        link: "/books/refactoring-ui/01_Introduction.md",
      },
      {
        text: "شروع طراحی", // حفظ متن فارسی
        link: "/books/refactoring-ui/02_Starting_Design.md",
      },
      {
        text: "سلسله‌مراتب بصری", // تصحیح املایی "سلسه مراتب بصرری" به "سلسله‌مراتب بصری"
        link: "/books/refactoring-ui/03_Visual_Hierarchy.md",
      },
      {
        text: "چیدمان و فاصله‌گذاری", // اضافه کردن "گذاری" برای خوانایی بهتر
        link: "/books/refactoring-ui/04_Layout_and_Spacing.md",
      },
      {
        text: "طراحی متن", // حفظ متن فارسی
        link: "/books/refactoring-ui/05_Typography.md",
      },
      {
        text: "کار با رنگ‌ها", // اضافه کردن "ها" برای جمع بستن
        link: "/books/refactoring-ui/06_Color.md",
      },
      {
        text: "ایجاد عمق", // حفظ متن فارسی
        link: "/books/refactoring-ui/07_Depth_Creation.md",
      },
      {
        text: "کار با تصاویر", // جمع بستن "تصویر" به "تصاویر"
        link: "/books/refactoring-ui/08_Working_With_Images.md",
      },
      {
        text: "نکات نهایی و یادگیری بیشتر", // ترجمه کامل‌تر و دقیق‌تر
        link: "/books/refactoring-ui/09_Final_Tips.md",
      },
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "جستجو", // ترجمه دکمه جستجو
            buttonAriaLabel: "جستجو",
          },
          modal: {
            noResultsText: "نتیجه‌ای یافت نشد", // ترجمه پیام عدم یافتن نتیجه
            resetButtonTitle: "بازنشانی جستجو", // ترجمه دکمه بازنشانی
            footer: {
              selectText: "انتخاب",
              navigateText: "ناوبری",
              closeText: "بستن",
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/amirrr1987" },
      { icon: "linkedin", link: "https://linkedin.com/in/amirrr1987" },
    ],
  },
});
