<script setup>
import Image1 from '/components/Image1.vue'
import Image2 from '/components/Image2.vue'
import Image3 from '/components/Image3.vue'
</script>

<Image1 name="image349.png" />

## از عکس های مناسب استفاده کنید

عکس بد یک طرح را نابود خواهد کرد، حتی اگر همه چیز آن طرح عالی به نظر برسد.

<Image3 :mode="1" name="image351.jpg" />

اگر طراحی شما به عکاسی نیاز داشته و شما یک عکاس با استعداد نیستید، دو گزینه دارید:

1. استخدام یک عکاس حرفه ای.

> اگر برای پروژه خود به عکس های بسیار خاصی احتیاج دارید، به یک حرفه ای اعتماد کنید. گرفتن عکس های فوق العاده تنها به خاطر استفاده از یک دوربین گران قیمت نیست، بلکه به روشنایی، تنظیم، رنگ و سایر مهارت هایی که پرورش آن سال ها طول می کشد، وابسته است.

2. از عکس های استوک دارای کیفیت بالا استفاده کنید.

> اگر نیازهای شما بیشتر جنبه عمومی دارند، منابع عالی بسیار زیادی وجود دارند که می توانید عکس های استوک فوق العاده ای را از آنها خریداری کنید. حتی سایت هایی مانند Unsplash وجود دارند که عکس های زیبایی را به صورت رایگان ارائه می دهند. به احتمال زیاد منابع رایگان تصاویر، تمام نیاز شما برای پروژه های غیر تخصصی را براورده خواهند کرد.

بسیاری از طرح هایی که در وبسایت های اشتراک گذاری نمونه کار می بینید و شما را انگشت به دهان می گذارند با همین اصول ساده مانند استفاده صحیح و به جا از مواردی مانند تصاویر، شما را مجذوب خود می کنند.

## متن به کنتراست یکپارچه نیاز دارد

تا به حال شده است که سعی در افزودن یک عنوان متنی بر روی یک تصویر بزرگ داشته اید، اما در نهایت به این نتیجه برسید که مهم نیست چه رنگی را برای این متن در نظر بگیرید، هر کاری انجام می دهید باز هم خواندن آن متن دشوار است؟

<Image2 isBad name="image354.jpeg" />

در اینجا مشکل از متن نیست، بلکه تصویر مشکل دارد.

**مشکل تصاویر پس زمینه**

عموم تصاویر حاوی تعداد زیاد مناطق تیره و روشن هستند. یک متن سفید ممکن است در مناطق تیره عالی به نظر برسد، اما در مناطق روشن گم می شود .متن تیره در مناطق روشن عالی به نظر رسیده، اما در مناطق تیره گم می شود.

<div class="flex  my-12 flex-col items-center gap-4">
    <div  class="flex gap-x-48">
        <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
        <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    </div>
    <img src="/images/refactoring-ui/image356.jpeg" alt="ui"  />
</div>

برویم سراغ روش هایی که برای حل این مشکل وجود دارد.

**یک لایه پوششی روی تصویر ایجاد کنید.**

یک راه برای افزایش کنتراست کلی متن، افزودن یک لایه نیمه شفاف به تصویر پس زمینه است.

<Image2  name="image358.jpeg" />

یک لایه پوششی سیاه، نقاط روشن تصویر را کم رنگ تر کرده و به برجسته شدن متن سفید رنگی که روی آن قرار گرفته کمک می کند ،به همین صورت یک پوشش سفید نقاط تیره تصویر را روشن تر کرده و به برجسته شدن یک متن تیره روی تصویر کمک می کند.

**کاهش کنتراست تصویر**

یکی از سازش هایی که هنگام استفاده از پوشش انجام می دهیم، روشن تر یا تیره تر کردن کل تصویر است)به جای بخش های مشکل دار(.

اگر خواهان کنترل بیشتری هستید، راه حل دیگر پایین آوردن کنتراست خود تصویر است:

<Image2  name="image359.jpg" />

کاهش کنتراست، میزان روشنی یا تیرگی کلی تصویر را تغییر خواهد داد، بنابراین حتماً پس از آن میزان روشنایی را تنظیم کنید.

**رنگ آمیزی تصویر**

روش دیگر برای ایجاد تاکید در متن موجود در یک تصویر، رنگ آمیزی تصویر با یک رنگ واحد است.

برخی از نرم افزارهای ویرایش عکس، این خصوصیت را به عنوان یک ویژگی اصلی شامل می شوند.

<Image2  name="image362.jpeg" />

این روش همچنین می تواند یک راه عالی برای جفت شدن تصویر پس زمینه با رنگ های موجود در برند شما باشد.

**افزودن سایه به متن**

اگر تمایل دارید تصویر شما تقریبا به همان صورتی که هست به نظر برسد، ایجاد سایه در متن یک راهی عالی برای افزایش کنتراست، تنها در محلی که به آن احتیاج دارید است؛ بهتر است این سایه باید به جای اینکه شبیه به یک سایه واقعی باشد، بیشتر با هدف جدا کردن متن از تصویر پس زمینه ایجاد شود، بنابراین از یک

Blur radius بزرگ استفاده کنید.

<div class="flex flex-col items-center gap-4 justify-center my-12">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image364.jpeg" alt="ui"  />
</div>

## اندازه هر چیز مشخص است

اگر تصاویر پیکسلی را از اندازه اصلی آن ها بزرگتر کنید، منظره پیکسلی به خود می گیرند و این مورد اصلا مورد جالبی نیست و رابط کاربری شما را زشت و زننده می کند. در این قسمت می خواهیم نکاتی را در خصوص اندازه موارد مختلف در رابط کاربری مطرح کنیم.

<div class="flex flex-col items-center gap-4 justify-center my-12">
    <img src="/images/refactoring-ui/image365.jpg" alt="ui"  />
</div>

**آیکون ها را بزرگ نمایی نکنید**

اگر در حال طراحی موردی هستید که می تواند از برخی آیکون های بزرگ بهره ببرد)مانند بخش"ویژگی های" موجود در یک صفحه فرود که برای نمایش ویژگی های منتسب به آن محصول به کار می رود(، ممکن است بنابر عادت های قبلیتان مجموعه ای از آیکون های SVG مورد علاقه خود را انتخاب کرده و اندازه آن را تا زمانی که زیبا به نظر برسند، افزایش دهید.

از آنجا که این تصاویر برداری هستند ،پس افزایش اندازه آسیبی به آنها نخواهد زد و حالت پیکسلی پیدا نخواهند کرد، درست است؟

<Image1  name="image366.jpg" />

در حالی که کیفیت تصاویر برداری با افزایش اندازه کاهش نمی یابد، آیکون هایی که با اندازه 16 تا 24 پیکسل کشیده شده اند، با افزایش اندازه ای تا حدود 3 یا 4 برابر، هرگز چندان حرفه ای به نظر نخواهند آمد چرا که عموم آیکون ها به این جهت که در تمام اندازه ها حتی اندازه های کوچک، مفاهیم را منتقل کنند، فاقد جزئیات بوده و بنابراین با نمایش آن ها در ابعاد بزرگ ،نامتناسب به نظر خواهند رسید.

آیکون هایی در ابعاد بزرگ زیبا به نظر خواهند رسید که سطح مناسبی از جزئیات را ارائه دهند.

<div class="flex  my-12 flex-col items-center gap-4">
    <div  class="flex gap-x-28">
        <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
        <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
        <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    </div>
    <img src="/images/refactoring-ui/image368.jpeg" alt="ui"  />
</div>

اگر تنها آیکون های کوچکی در اختیار دارید، آنها را در شکل دیگری مانند دایره، مربعی با گوشه های گرد یا حتی اشکال نامنظم محصور کرده و برای این پس زمینه آیکون هم رنگ مناسبی در نظر بگیرید. درست مانند تصویر زیر که آیکون را درون دایره قرار داده ایم:

<div class="flex  my-12 flex-col items-center gap-4">
    <div  class="flex gap-x-38">
        <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
        <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    </div>
    <img src="/images/refactoring-ui/image369.jpg" alt="ui"  />
</div>

این کار به شما امکان می دهد با وجود پر کردن فضای بیشتر، آیکون به اندازه واقعی خود نزدیکتر باشد.

<div class="flex flex-col items-center gap-4 justify-center my-12">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image371.jpg" alt="ui"  />
</div>

**مقیاس عکس های صفحه را کاهش ندهید**

تصور کنید می خواهید یک اسکرین شات از اپلیکیشن خود را در یکی از صفحات وبسایتتان قرار دهید. اگر شما یک عکس صفحه با اندازه کامل را انتخاب کرده و آن را 70٪ کوچک کنید، در پایان با تصویری روبرو می شوید که جزئیات بیش از حدی را در یک فضای بسیار محدود گنجانده است.

<div class="flex flex-col items-center gap-4 justify-center my-12">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <div class="text-sm font-light">جزئیات تصویر، به دلیل اندازه کوچک مشخص نیستند.</div>
    <img src="/images/refactoring-ui/image373.jpg" alt="ui"  />
</div>

یک فونت px 16 در اپلیکیشن، در تصویر شما به یک فونت px 4 تبدیل شده است و بازدیدکنندگان مجبور هستند با فاصله دو اینچی از صفحه نمایش به آن نگاه کرده و سعی کنند متن های آن را متوجه شوند. اگر خواهان استفاده از یک تصویر دقیق در طراحی خود هستید، از این تصویر در یک صفحه نمایش کوچکترعکس گرفته)مثل تبلت( و فضای زیادی را برای آن در نظر بگیرید تا مجبور به کاهش اندازه آن نشوید:

<div class="flex flex-col items-center gap-4 justify-center my-12">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <div class="text-sm font-light">جزئیات تصویر ،نسبتا خوب به نظر می رسند.</div>
    <img src="/images/refactoring-ui/image374.jpg" alt="ui"  />
</div>

یا تنها از بخشی از آن عکس گرفته تا بتوانید بدون نیاز به کوچک کردن، آن را در فضای کمتری نمایش دهید:

<div class="flex flex-col items-center gap-4 justify-center my-12">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image376.jpeg" alt="ui"  />
</div>

اگر واقعاواقعاً مجبور به قرار دادن کل عکس صفحه یک اپلیکیشن در یک فضای اندک هستید، سعی کنید با حذفجزئیات و جایگزینی بعضی از متن ها، یک نسخه ساده تر از UI موجود در اسکرین شات را ایجاد کنید:

<div class="flex flex-col items-center gap-4 justify-center my-12">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image378.jpeg" alt="ui"  />
</div>

این روش، باعث می شود که کاربران به جای تمرکز بر جزئیات غیر ضروری تصویر، روی کلیات آن که از اهمیت بیشتری برخوردارند تمرکز کنند.

**مقیاس آیکون ها را نیز کاهش ندهید**

دقیقاً همانطور که آیکون های طراحی شده برای استفاده در pp16، هنگام بزرگ نمایی نامتناسب به نظر می رسند ،آیکون های طراحی شده برای اندازه های بزرگتر نیز با کاهش اندازه، تار و نامفهوم به نظر خواهند رسید.

مشهود ترین نمونه های این مورد، فوَآیکون ها)Favicons( هستند، همان آیکون های کوچکی که در تب مرورگر، در کنار عنوان صفحه مشاهده می کنید.

اگر یک لوگوی 128 پیکسلی را تا ابعاد یک فوَآیکون کوچک کنید، با این که مرورگر تمام تلاش خود را برای ارائه آن همه جزئیات در یک مربع کوچک 16 پیکسلی انجام می دهد، کل تصویر مبهم و نامفهوم خواهد شد:

<div class="flex flex-col items-center gap-4 justify-center my-12">
    <img src="/images/refactoring-ui/image379.jpg" alt="ui"  />
</div>

یک روش موثر برای حل این مشکل، ایجاد یک نسخه بسیار ساده از لوگو در اندازه هدف است، با این کار میتوانید چیزی که می خواهید کاربر واقعا ببیند را طراحی کنید. اگر مجبور بودید در جزئیات تغییر ایجاد کنید ،نگران نباشید.

<div class="flex flex-col items-center gap-4 justify-center my-12">
    <img src="/images/refactoring-ui/image380.jpg" alt="ui"  />
</div>

## مراقب محتوای ایجاد شده توسط کاربر باشید

اگر در یک محصول، به تصاویر آپلود شده توسط کاربر اتکا کنید، دیگر امتیاز مثبت تنظیم دقیق کنتراست، تنظیم دقیق رنگ ها یا انتخاب کادر مناسب را در اختیار ندارید. با این که شما همیشه تا حدی تحت تسلط کاربران خود قرار خواهید داشت، روش هایی وجود دارند که با انجام آن می توانید مطمئن شوید، محتوای تولید شده توسط کاربران طرح شما را تا حد زیادی ضعیف نمی کند.

**کنترل شکل و اندازه**

نمایش نسبت اصلی تصاویر بارگذاری شده توسط کاربر، می تواند یک طرح را نابود کند، به خصوص اگر به شکل همزمان تعداد زیادی از تصاویر روی صفحه نمایش وجود داشته باشند.

<div class="flex flex-col items-center gap-4 justify-center my-12">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <img src="/images/refactoring-ui/image382.jpeg" alt="ui"  />
</div>

اگر هیچ محدودیتی برای کاربران قائل نشوید و صرفا محتوای خام آپلود شده توسط کاربران، در محصول نمایش داده شود، تمام باکس ها به هم می ریزند و منظره نهایی بسیار زننده خواهد بود. برای حل این مشکل ،شما نمی توانید کاربران را مجبور به آپلود محتوا با ابعاد یا شرایط خیلی خاص کنید اما می توانید برای تصاویر یا متن ها کادر هایی ثابت و با ادنازه مشخص در نظر بگیرید، اگر کاربران تصاویر بزرگتری را آپلود کنند، تنها در همان محدوده باکس، با حفظ تناسب بین طول و عرض نمایش داده خواهند شد.

<div class="flex flex-col items-center gap-4 justify-center my-12">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image383.jpg" alt="ui"  />
</div>

امروزه انجام این کار با استفاده از CSS بسیار آسان است البته وظیفه شما به عنوان طراح رابط کاربری، برنامه نویسی فرانتند نیست اما توجه به این نکته و گنجاندن آن در طرح ها ضروری است.

<div class="flex flex-col items-center gap-4 justify-center my-12">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image386.jpeg" alt="ui"  />
</div>

**جلوگیری از ادغام تصاویر با پس زمینه**

اگر کاربری تصویری با رنگ پس زمینه ای مشابه با پس زمینه UI شما ارائه دهد، تصویر و پس زمینه در هم ادغام شده و این تصویر، زیبایی و نظم خود را از دست می هد.

<div class="flex flex-col items-center gap-4 justify-center my-12">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <img src="/images/refactoring-ui/image388.jpeg" alt="ui"  />
</div>

به جای تلاش برای حل این مشکل و مجبور کردن کاربر به آپلود تصاویری با ویژگی های دلخواه شما، با ایجاد یک حاشیه در اطراف تصویر، یا استفاده از یک سایه ظریف داخلی تصویر و پس زمینه را از هم جدا کنید:

<div class="flex  my-12 flex-col items-center gap-4">
    <div  class="flex gap-x-38">
        <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
        <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    </div>
    <img src="/images/refactoring-ui/image390.jpeg" alt="ui"  />
</div>

حاشیه ها اغلب با رنگ های موجود در تصویر تداخل ایجاد می کنند و بیشتر به نظر می رسند، در حالی که اکثر افراد به سختی حتی متوجه وجود سایه های استفاده شده در اطراف تصاویر می شوند.

اگر ظاهر فرورفته ای که استفاده از این Box shadow ایجاد می کند را نمی پسندید، یک حاشیه داخلی نیمه شفاف نیز می تواند انتخاب خوبی باشد. البته استفاده از سایه ها و حاشیه هایی که در طرح های ترند روز دیده می شوند، نه تنها باعث زیبایی طرح شما می شود، بلکه کاربران به دیدن آن ها عادت کرده اند و این مورد از نظر علم تجربه کاربری بسیار مطلوب است.

<div class="flex flex-col items-center gap-4 justify-center my-12">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image392.jpeg" alt="ui"  />
</div>

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img src="/images/refactoring-ui/image393.png" alt="ui"  />
</div>

## پیش فرض ها را با دقت طراحی کنید

همیشه برای جذابیت بیشتر یک طرح، نیازی به اختراع المان های جدید نیست. روش های زیادی برای افزایش زیبایی و هیجان در یک صفحه وجود دارد، یکی از آن ها این است که پیشفرض ها و المان های موجود را به شکل حرفه ای طراحی کنید و به کار ببرید.

برای مثال، اگر طرح شما شامل یک فهرست بولت است، سعی کنید به جای دایره های پیشفرض، از آیکون ها استفاده کنید:

<div class="flex  my-12 flex-col items-center gap-4">
    <div  class="flex gap-x-48">
        <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
        <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    </div>
    <img src="/images/refactoring-ui/image396.jpeg" alt="ui"  />
</div>

چک مارک ها و فلش ها در بسیاری از مواقع گزینه هایی عالی هستند، اما شما می توانید برای محتوای خود از مواردی اختصاصی تر نیز استفاده کنید؛ مانند یک آیکون قفل برای لیستی از ویژگی های مرتبط با امنیت:

<div class="flex  my-12 flex-col items-center gap-4">
    <div  class="flex gap-x-48">
        <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
        <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    </div>
    <img src="/images/refactoring-ui/image398.jpeg" alt="ui"  />
</div>

به همین ترتیب، اگر می خواهید یک نقل قول را در وبسایت یا محصول خود نمایش دهید، با افزایش اندازه و تغییر رنگ ،سعی کنید علامت نقل قول ها را شبیه به آیکون ها کنید، حالا در نظر بگیرید که برای عموم المان های رابط کاربری نیز می توانید این عمل را انجام دهید:

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <img src="/images/refactoring-ui/image400.jpeg" alt="ui"  />
</div>
<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image402.jpeg" alt="ui"  />
</div>

لینک ها یکی دیگر از گزینه هایی هستند که شما می توانید در طراحی آن ها خلاقانه تر از پیشفرض ها عمل کنید. شما می توانید به سادگی رنگ و وزن فونت را تغییر داده، یا از یک زیرخط سفارشی ضخیم و رنگی استفاده کنید البته مراقب باشید که این زیرخط، با متن لینک تداخلی نداشته باشد:

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <img src="/images/refactoring-ui/image404.jpeg" alt="ui"  />
</div>
<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image406.jpeg" alt="ui"  />
</div>
<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image408.jpeg" alt="ui"  />
</div>

اگر بر روی یک فرم کار می کنید، استفاده از چک باکس های سفارشی شده و دکمه های رادیویی، یک راه آسان برای افزودن رنگ و لعاب به طرح است. همین موارد به اشتباه کم اهمیت، نقش زیادی در زیبایی طرح شما خواهند داشت:

<div class="flex  my-12 flex-col items-center gap-4">
    <div  class="flex gap-x-48">
        <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
        <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    </div>
    <img src="/images/refactoring-ui/image409.jpg" alt="ui"  />
</div>

یکی از کارهایی که می توانید انجام دهید این است که یکی از رنگ های اصلی طرحتان یا رنگ برند محصول را برای حالت فعال المان های فرم در نظر بگیرید و رنگ های پیشفرض و کسل کننده این المان ها را به جذابیت های بصری تبدیل کنید.

## **برای لبه های المان ها، حاشیه های رنگی در نظر بگیرید.**

اگر یک طراح گرافیک نیستید، چگونه می توانید جذابیت بصری که سایر طرح ها با استفاده از عکس های زیبا یا تصاویر رنگارنگ دریافت می کنند را به UI خود اضافه کنید؟

یک ترفند ساده که می تواند تفاوت زیادی در بخش های ساده رابط کاربری ایجاد کند، افزودن حاشیه های رنگی به آن بخش ها است.

برای مثال، در بالای یک این کارت می بینید که یک حاشیه رنگی به کار برده ایم. آن را با نمونه ساده مقایسه کنید:

<div class="flex  my-12 flex-col items-center gap-4">
    <div  class="flex gap-x-48">
        <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
        <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    </div>
    <img src="/images/refactoring-ui/image411.jpg" alt="ui"  />
</div>

این حاشیه ها برای نمایش آیتم های فعال نویگیشن خصوصا در منو ها و تب ها خیلی کاربرد دارند:

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <img src="/images/refactoring-ui/image413.jpeg" alt="ui"  />
</div>

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image415.jpeg" alt="ui"  />
</div>

کاربرد دیگر این حاشیه ها می تواند در کنار پیام های هشدار و یا اعلان ها باشد، استفاده از رنگ متناسب با مفهوم هشدار می تواند کار شما را حرفه ای تر جلوه دهد، برای یک هشدار خطر از حاشیه سبز رنگ استفاده نکنید!

تصویر زیر کاربرد این مورد را نشان می دهد:

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <img src="/images/refactoring-ui/image417.jpeg" alt="ui"  />
</div>

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image418.jpg" alt="ui"  />
</div>

اگر کمی خلاق باشید، برای تاکید روی بعضی عناوین و متون مهم هم می توانید این مورد را استفاده کنید:

<div class="flex  my-12 flex-col items-center gap-4">
    <div  class="flex gap-x-48">
        <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
        <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    </div>
    <img src="/images/refactoring-ui/image421.jpeg" alt="ui"  />
</div>

این حاشیه های رنگی، حتی می توانند به صورت تمام صفحه نیز در بالا یا پایین صفحه نمایش داده شوند:

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <img src="/images/refactoring-ui/image423.jpeg" alt="ui"  />
</div>

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image424.jpg" alt="ui"  />
</div>
افزودن یک مستطیل یا حاشیه رنگی به UI، نیازی به استعداد خاصی در زمینه طراحی گرافیک نداشته اما می تواند باعث آراسته تر به نظر رسیدن موارد مختلف شود.

## پس زمینه های خود را تزئین کنید

حتی اگر سلسله مراتب، فواصل و تایپوگرافی را با دقت کامل انجام دهید، هنوز هم ممکن است یک طرح ساده و یکنواخت به نظر برسد. البته با رعایت این نکات طرح شما تقریبا حرفه ای به نظر می آید اما در اینجا در خصوص تفاوت یک طرح خوب و عالی صحبت می کنیم!

یک روش عالی برای از بین بردن بخشی از این یک نواختی، بدون اینکه تغییرات زیادی در طرح ایجاد کنیم، ایجاد هیجان در بخش هایی از پس زمینه است. در ادامه با روش هایی در این خصوص آشنا می شوید.

**رنگ پس زمینه را تغییر دهید**

یکی از راه های افزایش هیجان در پس زمینه، تغییر رنگ آن است.

<div class="flex  my-12 flex-col items-center gap-4">
    <div  class="flex gap-x-48">
        <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
        <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    </div>
    <img src="/images/refactoring-ui/image426.jpg" alt="ui"  />
</div>

این روش برای ایجاد تأکید در یکی از قسمت ها و همچنین افزایش تمایز بین بخش های مختلف یک صفحه، بسیار مفید است. فرض کنید سه عدد باکس نمایش امکانات و قیمت پلن های مختلف استفاده از یک نرم افزار در یک صفحه دارید، با تغییر رنگ پس زمینه یکی از این باکس ها، می توانید روی آن پلن تاکید کنید و علاوه بر آن با ایجاد تنوع در رابط کاربری، جلوه های بصری آن را تقویت کنید.

به این تصویر دقت کنید و با مقایسه دو مورد موجود در تصویر، متوجه اهمیت استفاده از رنگ ها در پس زمینه رابط کاربری شوید.

<div class="flex  my-12 flex-col items-center gap-4">
    <div  class="flex gap-x-48">
        <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
        <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    </div>
    <img src="/images/refactoring-ui/image428.jpg" alt="ui"  />
</div>

می توانید برای ایجاد یک ظاهر پر انرژی تر، به جای استفاده از یک رنگ ساده و یکپارچه از یک گرادینت ملایم استفاده کنید:

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img src="/images/refactoring-ui/image429.jpg" alt="ui"  />
</div>
برای کسب بهترین نتیجه در ایجاد گرادینت ها، از دو فام مختلف با حداکثر فاصله 30 درجه استفاده کنید.

گرادینت های شما باید از یک طیف رنگی باشند.

**از یک الگوی تکرارشونده استفاده کنید**

روش دیگر این است که در پس زمینه ها، از یکسری الگوهای پشت سرهم و تکرار شونده استفاده کنید، مانند این نمونه از سایت Hero Patterns، که الگویی از امواج در پس زمینه یک قسمت از رابط کاربری به صورت کاملا کم رنگ قرار گرفته اند:

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img src="/images/refactoring-ui/image430.jpg" alt="ui"  />
</div>

توجه کنید لزوماً نیاری به تکرار این الگوها در کل پس زمینه نیست. می توانید این الگوها را مانند تصویر زیر ،فقط برای یکی از لبه ها در نظر بگیرید.

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img src="/images/refactoring-ui/image431.jpg" alt="ui"  />
</div>

نکته مهم این است که الگوها را باید به گونه ای در نظر بگیرید که در صورت قرار گرفتن متن روی آن ها ،متون خوانایی لازم را داشته باشند.

**اََشکال یا تصاویر ساده اضافه کنید**

به جای تزئین کل پس زمینه، می توانید افزودن المان های گرافیکی ساده را در یکی دو منطقه خاص از پس زمینه را امتحان کنید.

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img src="/images/refactoring-ui/image432.jpg" alt="ui"  />
</div>

در این مورد اشکال هندسی ساده مانند تصویر زیر به خوبی عمل می کنند:

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img src="/images/refactoring-ui/image433.jpg" alt="ui"  />
</div>

همچنین، قسمت هایی از یک الگوی تکرار شونده اما ساده می توانند جلوه زیبایی برای طرح شما ایجاد کنند. می توانید از المان های کمی پیچیده تر که ارتباط بیشتری با طرحتان دارند هم استفاده کنید. برای مثال در این تصویر، از یک نقشه جهان اما با جزئیات نسبتا کم استفاده کرده ایم.

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img src="/images/refactoring-ui/image434.jpg" alt="ui"  />
</div>

درست مانند آنچه که در خصوص استفاده از الگوها در پس زمینه گفتیم، در اینجا نیز بهتر است میزان کنتراست را برای الگو کاهش دهید تا کم رنگ به نظر برسد و با محتوا مداخله نکند.

## از Empty state غافل نشوید

تصور کنید در حال طراحی یک ویژگی جدید برای اپلیکیشینی هستید که بر روی آن کار می کنید. شما زمان بسیار زیادی را صرف تهیه داده های واقع گرایانه، انتخاب نام های کاربری، آواتار با هدف ایجاد یک صفحه زیبا و جذاب کرده اید.

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img src="/images/refactoring-ui/image435.jpg" alt="ui"  />
</div>

شما تمام این موارد را در طرحتان گنجانده اید که برنامه نویس متوجه باشد که چه مواردی را پیاده کند. اما فراموش نکنید که وقتی یک محصول، برنامه نویسی می شود، محتواهای شما در آن گنجانده نمی شود. در صورتی که در محصول، محتواهایی تعریف شده باشد، در قالب طرحی که شما طراحی کرده اید نمایش داده خواهد شد اما در صورتی که محتوایی در محصول موجود نباشد، آن شمایلی که شما در نظر گرفته اید نمایش داده نخواهد شد بلکه کاربر با صفحه ای مانند صفحه زیر روبرو خواهد شد که به کاربر نشان می دهد محتوایی وجود ندارد.

چه صفحه بدقواره ای!

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <img src="/images/refactoring-ui/image437.jpeg" alt="ui"  />
</div>

اگر در حال طراحی موردی هستید که به محتوای تولید شده توسط کاربر وابسته است، Empty state باید یک اولویت باشد. در واقع شما باید برای حالتی که هیچ محتوایی در محصول وجود ندارد هم صفحاتی را طراحی کنید که به آن ها Empty state می گویند.

برای جلب توجه کاربر Empty state ها را ساده طراحی نکنید، یکی از بهترین رویکردها این است که از یک تصویر یا وکتور زیبا استفاده کرده و از یک دکمه و متن برای تفهیم کاربر نسبت به این موضوع که هیچ محتوایی در این قسمت وجود ندارد و ترغیب کاربر به ایجاد محتوا استفاده کنید:

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image439.jpeg" alt="ui"  />
</div>

اگر یک صفحه از رابط کاربری شما شامل یکسری محتوا و المان هایی برای کنترل محتواست، در صورتی که هیچ محتوایی در آن صفحه وجود ندارد، تمام عملکردهای موجود در صفحه را مخفی کنید. ارائه عملکرد هایی که بدون وجود محتوا کاری انجام نمی دهند، بی فایده است.

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <img src="/images/refactoring-ui/image441.jpeg" alt="ui"  />
</div>

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image443.jpeg" alt="ui"  />
</div>

Empty state ها اولین تعامل کاربر با یک محصول یا ویژگی جدید هستند. از آنها به عنوان فرصتی برای جلب توجه و ایجاد محتوا توسط کاربر استفاده کنید و آن ها را ساده و کسل کننده طراحی نکنید.

## حاشیه های کمتری استفاده کنید

اگر نیاز به نمایش جدایی بین دو عنصر دارید، بلافاصله به سراغ حاشیه ها برای این منظور نروید.

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <img src="/images/refactoring-ui/image445.jpeg" alt="ui"  />
</div>

در حالی که حاشیه راهی عالی برای تمایز دو عنصر از یکدیگر است، اما تنها راه نیست و استفاده بیش از حد از آن می تواند باعث شود طراحی شما شلوغ و گیج کننده به نظر برسد. در ادامه، راهکارهایی را معرفی می کنیم که می توانید از آن های به جای حاشیه ها با هدف جدا کردن موارد مختلف استفاده کنید.

**به جای حاشیه ها، از سایه ها استفاده کنید.**

سایه های دور باکس های مختلف، مانند حاشیه، به خوبی مرز بین عناصر را مشخص می کند، اما ظریف تر بوده و بدون ایجاد حواس پرتی برای کاربر، همان عملکرد حاشیه ها را دارند.

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <img src="/images/refactoring-ui/image447.jpeg" alt="ui"  />
</div>

استفاده از سایه ها برای جدا کردن المان های رابط کاربری، خصوصا زمانی که باکس مورد نظر شما، رنگی متفاوت از پس زمینه صفحه دارد، کارایی موثری دارد.

**از دو رنگ متفاوت در پس زمینه استفاده کنید**

با در نظر گرفتن رنگ پس زمینه متفاوت، برای المان های مجاور یا روی هم، معمولاً یکی از موثر ترین کارهایی است که می توانید برای ایجاد تمایز بین آنها انجام دهید. در تصویر زیر بدون استفاده از هیچ حاشیه ای برای باکس جستجو، آن را کاملا جدا طراحی کرده ایم.

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img src="/images/refactoring-ui/image448.jpg" alt="ui"  />
</div>

اگر از رنگ های پس زمینه متفاوت برای المان های مختلف استفاده می کنید، حاشیه ها را حذف کنید ،احتمالا به آن نیازی ندارید.

**افزودن فاصله بیشتر**

چه راه بهتری برای جداسازی بین عناصر غیر از افزایش فاصله وجود دارد؟

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img src="/images/refactoring-ui/image449.jpg" alt="ui"  />
</div>

ایجاد فاصله بین موارد مختلف، یک راه عالی برای ایجاد تمایز بین گروه های مختلف المان های موجود در رابط کاربری است. با افزایش فاصله المان ها، آن ها را از هم جدا معرفی می کنید و برعکس هر چه آن ها را به هم نزدیک تر کنید، مرتبط تر به نظر خواهند رسید.

## خلاقانه تر فکر کنید

بیشتر افراد در مورد ظاهر المان های مختلف رابط کاربری، تصورات از پیش تعیین شده و پیشفرض هایی دارند که نسبت به آن تعصب زیادی دارند. اما فقط به این دلیل که در مورد طراحی یک المان خاص شرطی شده ایم، به این معنا نیست که نمی شود آن ها را طور دیگری طراحی کرد.

به عنوان مثال ،یک منوی کشویی را تصور کنید. شما احتمالاً به یک باکس سفید، با کمی سایه و لیستی از لینک ها در داخل آن، فکر می کنید:

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <img src="/images/refactoring-ui/image450.jpg" alt="ui"  />
</div>

اما چه کسی می گوید که یک منوی کشویی باید لیست خسته کننده ای از لینک ها باشد؟ این المان از رابط کاربری تنها یک باکس شناور بر روی صفحه است، شما می توانید هر کاری که دوست دارید، با آن انجام دهید مثلا می توانید آن را به بخش های مختلف تقسیم کنید، از چندین ستون استفاده کنید، متن راهنما یا آیکون های رنگارنگ برای آیتم های موجود در آن اضافه کنید و....

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image453.jpeg" alt="ui"  />
</div>

این امر تنها شامل منوهای کشویی نمی شود، در خصوص جدول چطور؟

هنگامی که یک جدول را تصور می کنید، احتمالاً به ستون هایی فکر می کنید که هرکدام دارای یک بخش اطلاعاتی خاص هستند:

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <img src="/images/refactoring-ui/image455.jpeg" alt="ui"  />
</div>

نیازی نیست حتما جداول به این شکل باشند، بعضی از خانه های جدول شما می توانند چند دیتا را نشان دهند. حتی دیتاهای کاملا مختلف و جدا از هم! مثلا می توانید ایمیل را در زیر نام کاربر، در یک خانه از جدول بیاورید.

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image457.jpeg" alt="ui"  />
</div>

نیازی نیست محتوای جدول نیز حتما یک متن ساده باشد .اگر امکان دارد به آن تصاویری را اضافه کنید، یا برای درک بهتر داده های موجود ،از رنگ استفاده کنید:

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image458.jpg" alt="ui"  />
</div>

در خصوص دکمه های رادیویی چطور؟ احتمالا هیچ چیز خسته کننده تر از یک دسته از برچسب ها به همراه دایره های کوچکی در کنار آنها وجود ندارد.

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/0.png" alt="ui"  />
    <img src="/images/refactoring-ui/image461.jpeg" alt="ui"  />
</div>

اگر مجموعه ای از دکمه های رادیویی بخش مهمی از UI در حال طراحی شما هستند، به جای آن چیزی مانند کارت های قابل انتخاب را امتحان کنید:

<div class="flex justify-center my-12 flex-col items-center gap-4">
    <img class="w-8 h-8" src="/images/refactoring-ui/1.png" alt="ui"  />
    <img src="/images/refactoring-ui/image463.jpeg" alt="ui"  />
</div>

اجازه ندهید باورهای قبلی شما طرح های شما را تحت الشعاع قرار دهند. فراموش نکنید محدودیت ها قدرتمند هستند، اما گاهی کمی آزادی و رهایی از پیشفرض ها تنها چیزی است که برای تبدیل یک رابط کاربری خوب به عالی، به آن نیاز دارید.

البته در این خصوص توجه داشته باشید که خلاقیت شما به سمتی نرود که منجر به خلق مواردی شود که کاربران با آن ها نا آشنا باشند و مجبور باشند برای کلیک کردن روی یک دکمه خلاقانه که شما طراحی کرده اید، ذهن خود را درگیر یادگیری کنند. علیرغم این که باید بعضی از پیشفرض های خود را بشکنید، به پیشفرض های کاربران احترام بگذارید.

ضمنا قرار نیست قوه خلاقیتتان را صرف اختراع دوباره چرخ کنید.
