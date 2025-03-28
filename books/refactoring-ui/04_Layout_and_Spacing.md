<script setup>
import Image from '/components/Image.vue'
</script>

<Image name="04_layout_and_spacing/01.png" />

# با فضای سفید بیش از حد کار خود را شروع کنید

در این قسمت می خواهیم در خصوص چیدمان طرح و فواصل موجود بین المان های مختلف طرح صحبت کنیم.

یکی از ساده ترین راه ها برای مرتب کردن یک طرح رابط کاربری این است که برای هر عنصر از رابط کاربری فضای بیشتری در نظر بگیرید تا المان ها در کنار هم بتوانند نفس بکشند.

<Image name="04_layout_and_spacing/02.jpg" />

<Image name="04_layout_and_spacing/03.jpg" />

به نظر ساده می رسد، درست است؟ پس چرا معمولا این کار را انجام نمی دهیم؟

**فضای سفید باید حذف شود، نه اینکه اضافه شود**

هنگام طراحی رابط کاربری، تقریباً همیشه فضای سفید به یک طراحی اضافه می شود یعنی اگر جایی زیادی شلوغ به نظر برسد، با افزودن کمی مارجین یا پدینگ همه چیز بهتر به نظر خواهد رسید.

<Image name="04_layout_and_spacing/04.jpg" />
<Image name="04_layout_and_spacing/05.jpg" />

مشکل این رویکرد این است که برای ایجاد ظاهر بهتر ،برای عناصر کمترین میزان فضای تنفس را در نظر می گیرند. برای یک ظاهر فوق العاده، معمولاً به فضای سفید بیشتری احتیاج دارید.

یک رویکرد بهتر در نظر گرفتن فضای سفید بیش از حد است، پس از جایگذاری اطلاعات و پایان طراحی می توانید تا راضی شدن از نتیجه کار، میزان فضای سفید را کم کنید.

<Image name="04_layout_and_spacing/06.jpg" />
<Image name="04_layout_and_spacing/07.jpg" />

ممکن است تصور کنید که در این صورت با فضای سفید بسیار زیادی مواجه خواهید شد، اما در عمل ،چیزی که برای یک المان از رابط کاربری ممکن است "کمی بیش از حد" به نظر برسد، در یک UI تکمیل شده و نهایی "کافی" به نظر خواهد رسید و در دید کلی، فضای سفید ایجاد شده بیش از حد نخواهد بود.

**UI های پرتراکم جای خود را دارند**

در حالی که تقریباً همیشه رابط های کاربری دارای فضای تنفسی زیاد تمیزتر و ساده تر حس می شوند ،مطمئناً شرایطی نیز وجود خواهند داشت که نیاز است طرحی بسیار فشرده تر باشد.

به عنوان مثال، اگر در حال طراحی نوعی داشبورد هستید که نیاز است در آن، اطلاعات زیادی به صورت یکجا قابل مشاهده باشند، جمع کردن اطلاعات در یک صفحه، احتمالا ارزش شلوغ به نظر رسیدن این طرح را دارد.

<Image name="04_layout_and_spacing/08.jpg" />

## یک سیستم تعیین فاصله و اندازه ایجاد کنید

هنگام تصمیم گیری در مورد اندازه مناسب یک عنصر در رابط کاربری خود، نباید بین انتخاب 120 px و 125 px سخت گیری کنید.

بدترین حالت ممکن، این است که هنگام طراحی هر المان از رابط کاربری اندازه ها را پیکسل به پیکسل و با حرکت دادن جهت های روی صفحه کلید و به صورت چشمی تنظیم کنید، این نحوه عملکرد در بهترین حالت به شدت روند پیشرفت شما را کند کرده و در بدترین حالت یک طرح زشت و ناهماهنگ ایجاد می کند.

<Image name="04_layout_and_spacing/09.jpg" />

به جای تنظیم چشمی و لحظه ای فاصله ها، خود را با مجموعه ای از مقادیر که از قبل تعریف شده اند، محدود کنید.

**یک مقیاس خطی کارایی ندارد**

ایجاد یک سیستم تعیین فاصله و اندازه به سادگی اینکه"حتما همه چیز مضرب 4 px باشد" نیست. چنین رویکرد خامی انتخاب بین 120 px و 125 px را تسهیل نمی کند.

برای اینکه یک سیستم در عمل مفید باشد، باید تفاوت نسبی بین مقادیر مجاور هم ،در نظر گرفته شود.

در انتهای کوچک این مقیاس که المان های کوچک رابط کاربری و موارد وابسته به آن ها وجود دارند)مانند اندازه یک آیکون، یا پدینگ داخل یک دکمه(، تغییر حتی چند پیکسل نیز می تواند تفاوت زیادی ایجاد کند .

برای مثال پرش از 12 پیکسل به 16 پیکسل یک افزایش 33 درصدی است!

<Image name="04_layout_and_spacing/10.jpg" />

اما در انتهای بزرگ مقیاس که المان های بزرگ رابط کاربری و موارد وابسته به آن ها قرار دارد)مانند عرض یک کارت مربوط به محصولات یک فروشگاه آنلاین یا ارتفاع قسمت Hero در یک صفحه فرود(، تغییر در حد چند پیکسل نامحسوس است. حتی افزایش عرض یک کارت از 500 px به 520 px تنها یک افزایش 4 درصدی است، که هشت برابر کم اهمیت تر از پرش از 12 px به 16 px است.

<Image name="04_layout_and_spacing/11.jpg" />

اگر می خواهید سیستم شما تصمیم گیری در مورد اندازه را تسهیل کند، مطمئن شوید که در مقیاس شما، هیچ دو مقداری از 25٪ به یکدیگر نزدیک تر نباشند و در واقع فاصله هر دو مقدار از هم حداقل 25 درصد باشد.

**تعریف سیستم**

درست همان طور که نمی خواهید هنگام تعیین اندازه یک عنصر یا تنظیم دقیق فضای بین عناصر، بیش از حد بر روی مقادیر اختیاری وقت صرف کنید، نباید مقیاس تعیین فاصله و اندازه خود را با کمک مقادیر اختیاری ایجاد کنید.

یک رویکرد ساده این است که کار خود را با یک مقدار پایه معقول شروع کرده، سپس سیستم مقیاس خودتان را با ضرب کردن ضرایبی در عدد پایه و مقادیر حاصل از آن، ایجاد کنید.

16 پیکسل یک نقطه شروع بسیار مناسب است، چراکه به خوبی به اعداد مختلف بخش پذیر است و همچنین به نظر می رسد اندازه فونت پیش فرض، در تمام مرورگر های اصلی و پرطرفدار وب است.

مقادیر موجود در انتهای کوچک یک مقیاس باید به شکل تقریبا نزدیک به هم شروع شده و به تدریج با افزایش ضریب، بیشتر از هم فاصله بگیرند.

در اینجا مثالی از ایجاد یک مقیاس کارآمد با استفاده از این رویکرد آورده شده است:

<Image name="04_layout_and_spacing/12.jpg" />

**استفاده از سیستم**

پس از تعریف سیستم تعیین فاصله و اندازه )Spacing & sizing(، متوجه خواهید شد که سرعت طراحی شما به شدت افزایش یافته است و دیگر در آن حالت گیجی انتخاب اندازه ها قرار ندارید.

آیا نیاز به افزودن فضا در زیر یک عنصر دارید؟ عددی را از مقیاس خود انتخاب کرده و آن را امتحان کنید.

کافی نیست؟ عدد بعدی احتمالاً عالی است.

در حالی که پیشرفت روند کار احتملا بزرگترین مزیت است، شما همچنین متوجه نوعی یکپارچگی ظریف در طرح های خود خواهید شد که قبلاقبلاً وجود نداشت، و نهایتا همه چیز کمی مرتب تر به نظر خواهد رسید چرا که شما از یک سیستم منظم استفاده کرده اید نه دست ها و چشم های پر از خطایتان .

<Image name="04_layout_and_spacing/13.jpg" />

یک سیستم تعیین فاصله و اندازه به شما کمک می کند تا در زمان کمتر و با تلاش کمتر، طراحی های بهتری را ایجاد کنید. این ارزشمند ترین مورد در فرایند طراحی است.

# نیازی نیست کل صفحه را پر کنید

در گذشته ای نه چندان دور، رزولوشن عموم مانیتورها نهایتا 960 پیکسل بود. این روزها یافتن گوشی همراهی با چنین وضوح کمی، بسیار مشکل است.

بنابراین تعجب ندارد که اکثر ما هنگامی که ابزار طراحی مورد نظر خود را در نمایشگرهایی با وضوح بالا باز می کنیم، حداقل فضای 1200 تا 1400 پیکسل را برای پر کردن در نظر می گیریم. اما تنها به این دلیل که این فضا وجود دارد، به این معنی نیست که باید از آن استفاده کنید.

<Image name="04_layout_and_spacing/14.jpg" />

اگر تنها به 600 پیکسل نیاز دارید، 600 پیکسل را استفاده کنید. گسترده کردن موارد یا پهن کردن آنها به شکل غیرضروری، تنها باعث مشکل تر شدن درک رابط کاربری می شود، در حالی که کمی فضای اضافی در اطراف و حواشی طرح، کسی را اذیت نمی کند.

<Image name="04_layout_and_spacing/15.jpg" />

این رویکرد در مورد المان های یک رابط کاربری نیز کاربرد دارد .تنها به دلیل اینکه چیزی کل صفحه راگرفته است)مثل منوی بالای وبسایت ها(، نیازی نیست همه چیز را به شکل تمام صفحه طراحی کنید.
<Image name="04_layout_and_spacing/16.jpg" />

برای هر عنصر فضای مورد نیاز خودش را اختصاص دهید و فقط برای اینکه چیزی با سایر موارد مطابقت داشته باشد، آن را کشیده تر یا بزرگ تر نکنید.

**دامنه طراحی تان را کوچک کنید.**

اگر در طراحی یک رابط کاربری کوچک، بر روی یک صفحه بزرگ مشکل دارید، قسمتی از صفحه که هدف طراحیتان است را کوچک کنید! اگر یک وبسایت که برای ابعاد 1920 پیکسل طراحی شده را با یک مانیتور کشیده با عرض چندین برابر باز کنید، تنها قسمتی در وسط صفحه به کاربر نمایش داده خواهد شد و اطراف طرح خالی خواهند بود. این دقیقا همان کار اصولی است که شما هم باید انجام دهید.

اگر در حال ایجاد یک وبسایت رسپانسیو هستید، سعی کنید با عرض حدود 400 پیکسلی شروع کرده و ابتدا چیدمان آن در گوشی همراه را طراحی کنید.

<Image name="04_layout_and_spacing/17.jpg" />

پس از آنکه از طراحی آن در گوشی همراه راضی شدید، آن را به یک صفحه نمایش بزرگتر منتقل کرده و هرآنچه را که تصور می کنید برای دسکتاپ باید تغییر اندازه دهید، اندازه آن را مطابق دسکتاپ تنظیم کنید. به احتمال زیاد برخلاف آنچه فکر می کنید، نیاز چندانی به تغییر وجود ندارد.

<Image name="04_layout_and_spacing/18.jpg" />

**ستون ها را در طراحی جدی بگیرید.**

اگر در حال طراحی موردی هستید که در یک فضای باریک کارآمد بوده ،اما در یک UI عریض احساس عدم تعادل را القا می کند، بررسی کنید که آیا می توانید به جای تمام صفحه، آن را به ستون هایی تقسیم کنید.

برای مثال، این فرم که دارای یک طرح باریک است را در نظر بگیرید:

<Image name="04_layout_and_spacing/19.jpg" />

اگر تمایل داشتید بدون دشوار کردن استفاده از این فرم، از فضای موجود بهتر استفاده کنید، می توانید متنراهنما را در یک ستون جداگانه قرار دهید:

<Image name="04_layout_and_spacing/20.jpg" />

این عمل باعث می شود با جلوگیری از عریض شدن بیش از حد فرم، طراحی متعادل تر و سازگارتر به نظر برسد.

**هیچ اجباری در کار نیست!**

دقیقاً به همان شکل که نباید نگران پر کردن کل صفحه باشید، نباید سعی در جادادن غیر ضروری همه چیز در یک ناحیه کوچک داشته باشید.

اگر به فضای زیادی احتیاج دارید، به دنبال آن بروید! اما اگر مجبور نیستید، برای پر کردن آن هیچ اجباری نیست.

# به شبکه ها بیش از حد بها داده شده است

استفاده از سیستمی مانند یک شبکه 12 ستونی )Grid(، همانند آن چه که در Bootstrap وجود دارد، راهی عالی برای ساده کردن تصمیمات مربوط به چیدمان است و می تواند نظم رضایت بخشی را در طرح های شما فراهم کند. شما به سادگی می توانید تمام المان های مختلف رابط کاربری را با استفاده از این ستون ها جانمایی کنید.

به این تصویر و نحوه قرار گیری المان های رابط کاربری با استفاده از ستون ها دقت کنید .)به حاشیه های خالی اطراف طرح دقت کنید. این همان موردی است که قبلا راجع آن صجبت کردیم که نباید تمام صفحه را پر کنید(.

<Image name="04_layout_and_spacing/21.jpg" />

اما با وجود مفید بودن شبکه ها، این که تمام تصمیماتتان در خصوص چیدمان یک رابط کاربری را به شبکه ها بسپارید، کار اشتباهی است.

**نیازی نیست که همه عناصر، شناور باشند**

المان هایی از رابط کاربری شناور هستند که عرض آن ها نسبت به اندازه صفحه تغییر می کند. مهم نیست در چه دستگاهی یک وبسایت را باز می کنید، احتمالا منوی بالای آن وبسایت در تمام دستگاه ها چه موبایل و چه دسکتاپ، تمام صفحه نمایش داده می شود چرا که یک المان شناور است .

اصولاً، عملکرد یک سیستم شبکه(Grid system) ، ایجاد عرض مبتنی بر درصد و شناور در عناصر است، به شکلی که از بین مجموعه محدودی از درصدها، انتخاب می کنید.

برای مثال، در یک شبکه 12 ستونی، عرض هر ستون 8.33٪ است. تا زمانی که عرض یک عنصر با مضربی از٪8.33 برابر باشد، این عنصر از شبکه ها پیروی می کند.

<Image name="04_layout_and_spacing/22.jpg" />

مشکل نگاه متعصبانه به سیستم های شبکه ای این است که گاها شرایطی ایجاد می شود که استفاده از عرض ثابت برای یک عنصر، از عرض نسبی و شناور معقول تر است.

برای مثال ،یک چیدمان سنتی مثل نوار کناری را در نظر بگیرید. با استفاده از یک سیستم شبکه ای 12 ستونی، شما برای نوار کناری عرضی برابر با سه ستون) 25٪( و برای محتوای اصلی عرضی برابر با نه ستون )٪75( ایجاد می کنید.

<Image name="04_layout_and_spacing/23.jpg" />

در ابتدا به نظر می رسد مشکلی وجود ندارد، اما به این فکر کنید که هنگام تغییر اندازه صفحه چه اتفاقی می افتد. اگر صفحه را عریض تر کنید، نوار کناری نیز عریض تر شده و فضایی که می توان برای محتوای اصلی از آن استفاده کرد را، اشغال خواهد کرد.

<Image name="04_layout_and_spacing/24.jpg" />

به شکل مشابه، اگر صفحه را باریک تر کنید، نوار کناری از حداقل عرض معقول خود کوچک تر شده و چیدمانمتن آن به هم می خورد.

<Image name="04_layout_and_spacing/25.jpg" />

در این شرایط، منطقی تر این است که برای نوار کناری، مطابق با محتویات آن، عرض ثابتی در نظر گرفته شود. منطقه مربوط به محتوای اصلی نیز با کمک شبکه داخلی خود، منعطف بوده و فضای باقیمانده را پر خواهد کرد.

<Image name="04_layout_and_spacing/26.jpg" />

همانطور که در این تصویر می بینید، با وجود تغییر اندازه صفحه، اندازه سایدبار ثابت باقی مانده است. پس در واقع نباید اندازه هر المان از رابط کاربری را نسبی در نظر بگیرید .هیچ لزومی ندارد که اندازه تصویرپروفایل کاربر یا یک آیکون ،25 درصد یک صفحه باشد.

<Image name="04_layout_and_spacing/27.jpg" />

**بدون دلیل المان های رابط کاربری را کوچک نکنید**

تصور کنید که در حال طراحی یک صفحه ورود به وبسایت هستید. استفاده از پهنای تمام صفحه زشت به نظر می رسد، بنابراین برای آن عرضی برابر با 6 ستون)50 درصد کل صفحه( و 3 ستون در هر طرف آن، در نظر می گیرید.

<Image name="04_layout_and_spacing/28.jpg" />

در صفحات نمایشی با اندازه متوسط، متوجه خواهید شد که با وجود فضای کافی در اطراف ،برای بزرگ ترکردن آن، این فرم ورود کمی باریک است، بنابراین عرض آن را به 8 ستون تغییر می دهید)در هر طرف دو ستون خالی(.

<Image name="04_layout_and_spacing/29.jpg" />

نکته جالب در مورد این رویکرد این است که به دلیل شناور و منعطف بودن عرض ستون ها، این فرم ورود در صفحات متوسط نسبت به صفحات بزرگ، عریض تر است در حالی که باید در صفحات کوچکتر، کوچکتر به نظر می رسید:

<Image name="04_layout_and_spacing/30.jpg" />

اگر می دانید که 500 پیکسل برای یک فرم ورود بهینه است، چرا با وجود فضای کافی، آن را کوچک کنید؟ به جای تعیین اندازه عناصر براساس شبکه (Grid)، یک عرض حداکثری را برای آنها درنظر بگیرید تا بیش از حد بزرگ نشوند؛ و تنها درصورتی آنها را کوچک کنید که عرض صفحه، از عرض حداکثری کوچکتر باشد.

<Image name="04_layout_and_spacing/31.jpg" />

برده شبکه بندی طرح نباشید و فضای مورد نیاز برای المان های موجود در رابط کاربری را فراهم کنید.

## **اندازه نسبی ، با یک مقیاس منظم تغییر نمی کند!**

وسوسه انگیز است که باور کنید تمام بخش های یک رابط کاربری باید در تناسب با یکدیگر تعیین اندازه شوند، و اگر عنصر A در صفحه های کوچک تر 25٪ کاهش یافت، عنصر B نیز باید 25٪ کاهش یابد.

به عنوان مثال ،تصور کنید که در حال طراحی یک مقاله در یک صفحه نمایش بزرگ هستید. اگر اندازه متن بدنه شما 18 px و اندازه عناوین شما 45 پیکسل باشد، در واقع اندازه عنوان این رابط کاربری2.5 برابر اندازه متن بدنه است.

<Image name="04_layout_and_spacing/32.jpg" />

تصور کنید که برای کنترل طول خطوط در یک صفحه نمایش کوچک، اندازه متن بدنه خود را به 14 پیکسل کاهش داده اید. حالا اگر بیاییم مطابق رابطه قبلی بین اندازه فونت عنوان و بدنه، اندازه فونت عناوین را همان 2.5 برابر فونت بدنه در نظر بگیریم، به عدد 35 پیکسل برای فونت عنوان می رسیم که برای صفحات موبایل بسیار بزرگ است.

--sdf-sdf-sdf-
<Image name="04_layout_and_spacing/33.jpg" />

اندازه مناسب برای عناوین موجود در صفحات نمایش کوچک، چیزی بین 20 px و 24 px است:

<Image name="04_layout_and_spacing/34.jpg" />

این اندازه یعنی 20 تا 24 پیکسل ،تنها 1.5تا 1.7 برابر pp14 است. این بدان معنی است که هیچ گونه رابطه ای بین آنها وجود نداشته و تعیین اندازه عنوان ها نسبت به اندازه بدنه متن کار بیهوده ای است. پس چه کار کنیم که تناسب حفظ شود؟

به عنوان یک قاعده کلی، در صفحات نمایش بزرگ، عناصر بزرگ)نسبت به عناصر کوچک( باید با نسبت بیشتری کوچک شوند برعکس تفاوت بین عناصر کوچک و بزرگ در صفحات نمایش کوچک، کمتر است پس باید با نسبت کوچکتری ابعاد آن ها تغییر کند.

**روابط بین عناصر**

ایده تعیین مقیاس مستقل و ثابت برای موارد مختلف، تنها به تعیین اندازه عناصر در صفحات نمایش با اندازه های مختلف مربوط نمی شود، بلکه در مورد ویژگی های مربوط به یک بخش از رابط کاربری مانند پدینگ و مارجین یک المان نیز صدق می کند.

تصور کنید دکمه ای را طراحی کرده اید که فونت آن 16 px، پدینگ افقی 16 px و پدینگ عمودی 12 px است:

مانند مثال قبلی، تعیین پدینگ بر اساس اندازه فونت فعلی بسیار مناسب و حرفه ای به نظر می رسد. در این صورت اگر بخواهید یک دکمه بزرگتر یا کوچکتر طراحی کنید، با تغییر اندازه فونت، پدینگ به طور خودکار بروزرسانی خواهد شد.

<Image name="04_layout_and_spacing/35.jpg" />

همان طور که در تصویر می بینید این امکان وجود دارد که دکمه ها کوچک و بزرگ شده و همان نسبت ها را برای پارامترهایی مانند مارجین و پدینگ حفظ کنند، اما آیا این همان چیزی است که واقعاً می خواهیم؟

<Image name="04_layout_and_spacing/36.jpg" />

دکمه های تصویر قبلی را با دکمه های زیر که پدینگ آن در اندازه های بزرگتر بیشتر شده و در اندازه های کوچکتر به طور نامتناسب کوچک تر می شود، مقایسه کنید:

<Image name="04_layout_and_spacing/37.jpg" />

در اینجا دکمه بزرگ واقعا مثل یک دکمه بزرگ، و دکمه کوچک مثل یک دکمه کوچک به نظر می رسد)نه اینکه تنها زوم را تنظیم کرده باشیم.(

ایده تعیین مقیاس همه چیز با کمک تناسب را دور بیندازید. هر المان را با توجه به شرایط مربوط به خودش بسنجید و مواردی که فکر می کنید منطقی است را برای آن در نظر بگیرید. البته سیستم ها را فراموش نکنید.

## **از فاصله گذاری برای نمایش ارتباط اجزا با هم استفاده کنید.**

هنگامی که گروهی از عناصر را بخواهیم به صورت واضح از هم جدا کنیم، معمولاً با کمک یک حاشیه یا رنگ پس زمینه مشخص می کنیم که هر عنصر به کدام گروه تعلق دارد.

<Image name="04_layout_and_spacing/38.jpg" />

اما اگر از یک مرز مشخص استفاده نشود، این مورد که هر عنصر به چه گروهی تعلق دارد، دیگر چندان واضح نیست.

تصور کنید در حال طراحی فرمی حاوی انبوهی از برچسب ها و فیلدهای ورودی هستید. اگر فاصله زیر هربرچسب مشابه حاشیه زیر فیلد ورودی باشد، عناصر موجود در گروه های این فرم، چندان مرتبط به نظرنخواهند رسید و در واقع مشخص نخواهد شد که برچسب بالایی به فیلد مربوط است یا برچسب پایینی.

<Image name="04_layout_and_spacing/39.jpg" />

در این مثال ،در بهترین حالت کاربر باید برای درک رابط بیشتر تلاش کند و با تحلیلی که انجام می دهد متوجه شود که هر کدام از برچسب ها مربوط به کدام فیلد است. در بدترین حالت کاربر در تشخیص فیلد و برچسب مربوط به آن دچار خطا می شود و اطلاعات غلط را وارد فیلد نامربوط می کند.

راه حل این مشکل افزایش فضای بین گروه های این فرم است، به شکلی که مشخص شود هر برچسب به کدام ورودی تعلق دارد. اگر بیاییم فاصله هر برچسب با ورودی مربوط به خود را، کمتر از فاصله هر فیلد با برچسب بعدی در نظر بگیریم، به راحتی ارتباط بین فیلد ها و برچسب های متناظرشان برقرار خواهد شد.

<Image name="04_layout_and_spacing/40.jpg" />

این مشکل در مقالات نیز دیده می شود، جایی که در بالای عنوان مربوط به هر بخش، فضای کافی وجودندارد، در اینجا کاربر متوجه نمی شود که این عنوان، چکیده ای از متن بالایی است یا عنوانی برای متن بعدی:

<Image name="04_layout_and_spacing/41.jpg" />
<Image name="04_layout_and_spacing/42.jpg" />

به این لیست دقت کنید که در آن ارتفاع تمام خط ها برابر است. در این لیست ها کاربران در تشخیص گزینههای موجود در لیست به مشکل برمی خورند چرا که ارتفاع خطوط هر آیتم، با ارتفاع خط بین آیتم هایمختلف لیست برابر است.

در حالی که در تصویر پایینی این مشکل حل شده و ارتفاع خطوط یک آیتم با ارتفاع خط بین دو آیتم، متفاوت در نظر گرفته شده است بنابراین آیتم های مختلف لیست، کاملا جدا از هم تشخیص داده می شوند :

<Image name="04_layout_and_spacing/43.jpg" />
<Image name="04_layout_and_spacing/44.jpg" />

همچنین نباید تنها تصور کرد که تنها فاصله های عمودی در تعیین ارتباط یا عدم ارتباط موارد مختلف نقشندارند؛ فاصله های افقی هم به همان اندازه اهمیت دارند. به تصویر زیر دقت کنید. در تصویر بالایی اندازه هرلیبل آیکون با آیکون های اطراف آن، برابر در نظر گرفته شده در حالی که در تصویر پایین ،فاصله هر آیکون از لیبل مربوط به خودش، کمتر از آیکون های دیگر است پس به راحتی با تغییر فواصل، می توان ارتباط اجزا با یکدیگر را مدیریت کرد:

<Image name="04_layout_and_spacing/45.jpg" />
<Image name="04_layout_and_spacing/46.jpg" />

هر زمان که برای ایجاد ارتباط بین گروهی از عناصر به فاصله متکی هستید، مطمئن شوید که نسبت به داخل، در اطراف هر گروه فضای بیشتری وجود داشته باشد چرا که بدترین رابط های کاربری همان هایی هستند درک آنها دشوار است.
