const fs = require("fs");
const path = require("path");

// مسیر فایل Markdown
const filePath = path.join(__dirname, "04_Layout_and_Spacing.md");

// خواندن فایل
let content = fs.readFileSync(filePath, "utf8");

// شماره‌گذاری تصاویر
let counter = 68;
content = content.replace(/<img\s+[^>]*src="([^"]*)"[^>]*>/g, (match, src) => {
  const newSrc = `/refactoring-ui/${counter}.jpg`;
  counter++;
  return `<img src="${newSrc}" />`;
});


// ذخیره‌ی فایل
fs.writeFileSync(filePath, content, "utf8");

console.log("تصاویر با موفقیت شماره‌گذاری شدند!");
