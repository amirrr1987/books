const fs = require("fs");
const path = require("path");

// مسیر فایل Markdown
const filePath = path.join(__dirname, "08_Working_With_Images.md");

// خواندن فایل
let content = fs.readFileSync(filePath, "utf8");

// شماره‌گذاری تصاویر
let counter = 33;
content = content.replace(/<img\s+[^>]*src="([^"]*)"[^>]*>/g, (match, src) => {
  const newSrc = `/refactoring-ui/08_Working_With_Images/${counter}.png`;
  counter++;
  return `<img src="/images/refactoring-ui/image1.png" alt="ui"  />`;
});

// ذخیره‌ی فایل
fs.writeFileSync(filePath, content, "utf8");

console.log("تصاویر با موفقیت شماره‌گذاری شدند!");
