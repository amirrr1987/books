import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "کتاب‌های من",
  description:
    "منبعی جامع برای یادگیری رابط کاربری، فرانت‌اند و بک‌اند با تمرکز بر ویو و نست‌جی‌اس",
  dir: "rtl",
  lang: "fa-IR",
  base: "/", // مسیر پایه (در صورت نیاز تغییر دهید)

  themeConfig: {
    nav: [
      { text: "خانه", link: "/" },
      { text: "رابط کاربری", link: "/books/ui" },
      { text: "ویو.جی‌اس", link: "/books/vue" },
      { text: "نست.جی‌اس", link: "/books/nest" },
      { text: "تماس با من", link: "/contact" },
    ],
    sidebar: {
      "/books/refactoring-ui/": [
        // تغییر به مسیر دقیق‌تر برای Refactoring UI
        {
          text: "کتاب‌های رابط کاربری",
          collapsed: false,
          items: [
            { text: "مقدمه", link: "/books/refactoring-ui/01_Introduction" }, // بدون .md
            {
              text: "شروع طراحی",
              link: "/books/refactoring-ui/02_Starting_Design",
            },
            {
              text: "سلسله‌مراتب بصری",
              link: "/books/refactoring-ui/03_Visual_Hierarchy",
            },
            {
              text: "چیدمان و فاصله‌گذاری",
              link: "/books/refactoring-ui/04_Layout_and_Spacing",
            },
            {
              text: "طراحی متن و تایپوگرافی",
              link: "/books/refactoring-ui/05_Typography",
            },
            { text: "کار با رنگ‌ها", link: "/books/refactoring-ui/06_Color" },
            {
              text: "ایجاد عمق در طراحی",
              link: "/books/refactoring-ui/07_Depth_Creation",
            },
            {
              text: "کار با تصاویر",
              link: "/books/refactoring-ui/08_Working_With_Images",
            },
            {
              text: "نکات نهایی و یادگیری بیشتر",
              link: "/books/refactoring-ui/09_Final_Tips",
            },
          ],
        },
      ],
      "/books/vue/": [
        {
          text: "کتاب‌های ویو.جی‌اس",
          collapsed: false,
          items: [
            { text: "آشنایی با ویو", link: "/books/vue/01_Introduction" },
            { text: "مفاهیم پایه", link: "/books/vue/02_Basics" },
          ],
        },
      ],
      "/books/nest/": [
        {
          text: "کتاب‌های نست.جی‌اس",
          collapsed: false,
          items: [
            { text: "شروع کار با نست", link: "/books/nest/01_Getting_Started" },
            { text: "ساختار پروژه", link: "/books/nest/02_Project_Structure" },
          ],
        },
      ],
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "جستجو",
            buttonAriaLabel: "جستجو در محتوا",
          },
          modal: {
            noResultsText: "نتیجه‌ای برای جستجوی شما یافت نشد",
            resetButtonTitle: "بازنشانی جستجو",
            footer: {
              selectText: "انتخاب",
              navigateText: "ناوبری",
              closeText: "بستن",
            },
          },
        },
      },
    },
    outline: {
      label: "در این صفحه",
      level: "deep",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/amirrr1987",
        ariaLabel: "گیت‌هاب من",
      },
      {
        icon: "linkedin",
        link: "https://linkedin.com/in/amirrr1987",
        ariaLabel: "لینکدین من",
      },
    ],
    footer: {
      message: "با عشق برای جامعه برنامه‌نویسان فارسی‌زبان",
      copyright: "© 2025 - تمامی حقوق محفوظ است",
    },
    editLink: {
      pattern: "https://github.com/amirrr1987/my-books/edit/main/:path",
      text: "ویرایش این صفحه در گیت‌هاب",
    },
    lastUpdated: {
      text: "آخرین به‌روزرسانی",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
  appearance: "dark",
});
