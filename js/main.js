// Services
const services = [
  {ic:'🚗',t:'فتح السيارات المقفلة',d:'حلول فورية لفتح السيارات بدون أي ضرر'},
  {ic:'🔒',t:'فتح الأقفال المنزلية والتجارية',d:'خدمة سريعة وآمنة لفتح أقفال البيوت والمحلات'},
  {ic:'⚙️',t:'برمجة المفاتيح والريموتات',d:'برمجة احترافية لجميع موديلات السيارات الحديثة والقديمة'},
  {ic:'🔑',t:'برمجة المفاتيح الذكية',d:'أجهزة تشفير متطورة لجميع المفاتيح الذكية'},
  {ic:'✂️',t:'قص المفاتيح بالليزر',d:'أحدث مكاين قص المفاتيح بالليزر بدقة عالية'},
  {ic:'🔁',t:'إعادة برمجة المفاتيح القديمة',d:'إعادة تفعيل وبرمجة مفاتيحك القديمة بكفاءة'},
  {ic:'🛒',t:'بيع جميع ريموتات السيارات',d:'تشكيلة كاملة من ريموتات السيارات الأصلية'},
  {ic:'🔧',t:'إصلاح المايكي والسرعة لفورد',d:'تخصص في إصلاح أعطال فورد الإلكترونية'},
  {ic:'📶',t:'برمجة أونلاين',d:'خدمة برمجة عن بعد لأحدث الموديلات'},
];

const remotes = [
  {img:'images/remote-001.jpg',t:'ريموت مرسيدس',d:'ريموت مرسيدس الذكي، يدعم الفتح والإغلاق وفتح الشنطة عن بعد مع خدمة البرمجة والاستبدال حسب موديل السيارة.',c:'Mercedes-Benz C-Class, E-Class, S-Class, GLC, GLE'},
  {img:'images/remote-002.jpg',t:'ريموت BMW',d:'ريموت BMW بشاشة عرض متطورة، يدعم خاصية Comfort Access والدخول بدون مفتاح لجميع فئات BMW.',c:'X3, X5, X6, 7, الفئة 5, الفئة 3'},
  {img:'images/remote-003.jpg',t:'ريموت تويوتا أساسي',d:'ريموت تويوتا بزرين بتصميم عملي مناسب للنسخ والبرمجة السريعة.',c:'Camry, Corolla, Yaris, Hilux, Fortuner'},
  {img:'images/remote-004.jpg',t:'ريموت هوندا ذكي',d:'ريموت هوندا الذكي بخمسة أزرار (فتح، إغلاق، تشغيل عن بعد، Hold، شنطة) للموديلات الحديثة.',c:'Honda Accord 2022+, Civic 2022+, CR-V 2023+'},
  {img:'images/remote-005.jpg',t:'ريموت هيونداي ذكي',d:'ريموت هيونداي سمارت بكي عن أزرار فتح وإغلاق وشنطة وتشغيل عن بعد.',c:'Sonata, Elantra, Tucson, Santa Fe, Azera'},
  {img:'images/remote-006.jpg',t:'ريموت نيسان باترول',d:'ريموت نيسان باترول بلاتينيوم الذكي بخمسة أزرار بتصميم بضاوي أصلي، مع خدمة البرمجة والاستبدال.',c:'Nissan Patrol Platinum, Armada, Pathfinder'},
  {img:'images/remote-007.jpg',t:'ريموت فورد ذكي',d:'ريموت فورد سمارت متعدد الأزرار مع تشغيل عن بعد وفتح الشنطة.',c:'Explorer, Taurus, Edge, Expedition, F-150'},
  {img:'images/remote-008.jpg',t:'ريموت GMC ذكي',d:'ريموت GMC بخاصية تشغيل عن بعد وفتح الشنطة مناسب للبرمجة والاستبدال.',c:'Yukon, Sierra, Acadia, Terrain, Denali'},
  {img:'images/remote-009.jpg',t:'ريموت MG ذكي',d:'ريموت MG سمارت بتصميم حديث وخيارات برمجة دقيقة حسب موديل السيارة.',c:'MG HS, MG RX8, MG ONE, MG GT'},
  {img:'images/remote-010.jpg',t:'ريموت كيا كرنفال',d:'ريموت كيا كرنفال سمارت بأربعة أزرار، رقم القطعة 95440A9200.',c:'Kia Carnival / Sedona 2017-2019'},
  {img:'images/remote-011.jpg',t:'ريموت جيب رانجلر',d:'ريموت جيب رانجلر بثلاثة أزرار فتح وإغلاق وإنذار أحمر، مناسب للنسخ والبرمجة.',c:'Jeep Wrangler'},
  {img:'images/remote-012.jpg',t:'ريموت RAM ذكي',d:'ريموت RAM ذكي أسود مع شعار خلفي وأزرار فتح وإغلاق وتشغيل عن بعد وإنذار.',c:'RAM 1500, 2500, 3500'},
  {img:'images/remote-013.jpg',t:'ريموت لكزس ذكي',d:'ريموت لكزس سمارت بثلاثة أزرار مع زر إنذار، تشطيب فاخر مع خدمة البرمجة الكاملة.',c:'Lexus ES, IS, GS, RX, NX'},
  {img:'images/remote-014.jpg',t:'ريموت لكزس LX570',d:'ريموت لكزس LX570 الذكي بأربعة أزرار مع تشغيل عن بعد وفتح الشنطة الكهربائية.',c:'Lexus LX570, LX600, GX460'},
  {img:'images/remote-015.jpg',t:'ريموت أودي فليب',d:'ريموت أودي فليب بثلاثة أزرار يدعم البرمجة والنسخ لجميع موديلات أودي الحديثة.',c:'Audi A3, A4, A6, Q5, Q7'},
  {img:'images/remote-016.jpg',t:'ريموت أودي ذكي',d:'ريموت أودي سمارت كي بدخول بدون مفتاح وتشغيل عن بعد لطرازات A8 وQ8 الفاخرة.',c:'Audi A8, Q8, e-tron, RS Q8'},
  {img:'images/remote-017.jpg',t:'ريموت فولكس فاجن فليب',d:'ريموت فولكس فاجن فليب بثلاثة أزرار، متوافق مع البرمجة المحلية والأونلاين.',c:'VW Golf, Passat, Tiguan, Touareg'},
  {img:'images/remote-018.jpg',t:'ريموت بورش بشكل السيارة',d:'ريموت بورش الفاخر بتصميم على شكل السيارة، يدعم الدخول بدون مفتاح وتشغيل عن بعد.',c:'Porsche Cayenne, Panamera, Macan, 911'},
  {img:'images/remote-019.jpg',t:'ريموت رنج روفر سمارت',d:'ريموت رنج روفر سمارت بثلاثة أزرار، تشطيب فاخر مع خدمة البرمجة والاستبدال.',c:'Range Rover Vogue, Sport, Velar, Evoque'},
  {img:'images/remote-020.jpg',t:'ريموت لاند روفر ديسكفري',d:'ريموت لاند روفر ديسكفري الذكي بأزرار فتح وإغلاق وشنطة، يدعم Keyless Entry.',c:'Land Rover Discovery, Defender, LR4'},
  {img:'images/remote-021.jpg',t:'ريموت شيفروليه تاهو',d:'ريموت شيفروليه تاهو الذكي بستة أزرار مع تشغيل عن بعد وفتح الباب الخلفي الكهربائي.',c:'Chevrolet Tahoe, Suburban 2015+'},
  {img:'images/remote-022.jpg',t:'ريموت شيفروليه سلفرادو',d:'ريموت شيفروليه سلفرادو بخمسة أزرار، مناسب للبرمجة والنسخ السريع.',c:'Chevrolet Silverado 1500, 2500, 3500'},
  {img:'images/remote-023.jpg',t:'ريموت شيفروليه كمارو',d:'ريموت شيفروليه كمارو بأربعة أزرار مع تشغيل عن بعد وزر إنذار.',c:'Chevrolet Camaro, Corvette, Malibu'},
  {img:'images/remote-024.jpg',t:'ريموت كاديلاك إسكاليد',d:'ريموت كاديلاك إسكاليد الفاخر بستة أزرار مع تشغيل عن بعد وفتح الشنطة.',c:'Cadillac Escalade, CT5, XT5, XT6'},
  {img:'images/remote-025.jpg',t:'ريموت دودج تشارجر',d:'ريموت دودج تشارجر بخمسة أزرار يدعم Remote Start ودخول بدون مفتاح.',c:'Dodge Charger, Challenger, Durango'},
  {img:'images/remote-026.jpg',t:'ريموت دودج دورانجو',d:'ريموت دودج دورانجو سمارت بستة أزرار مع تشغيل عن بعد وفتح الباب الخلفي.',c:'Dodge Durango 2014+, Grand Caravan'},
  {img:'images/remote-027.jpg',t:'ريموت كرايسلر 300',d:'ريموت كرايسلر 300 الذكي بخمسة أزرار، يدعم خاصية الدخول بدون مفتاح.',c:'Chrysler 300, Pacifica, Voyager'},
  {img:'images/remote-028.jpg',t:'ريموت فورد موستنج',d:'ريموت فورد موستنج بخمسة أزرار مع تشغيل عن بعد وفتح الشنطة.',c:'Ford Mustang, Edge, Fusion'},
  {img:'images/remote-029.jpg',t:'ريموت فورد برونكو',d:'ريموت فورد برونكو الذكي بأربعة أزرار، مع خاصية Keyless Entry.',c:'Ford Bronco, Ranger, Maverick'},
  {img:'images/remote-030.jpg',t:'ريموت تويوتا لاند كروزر',d:'ريموت تويوتا لاند كروزر الذكي بأربعة أزرار مع تشغيل عن بعد وفتح الشنطة.',c:'Toyota Land Cruiser 200, 300, LC79'},
  {img:'images/remote-031.jpg',t:'ريموت تويوتا برادو',d:'ريموت تويوتا برادو سمارت بثلاثة أزرار، خدمة برمجة كاملة ومضمونة.',c:'Toyota Prado VX, TXL, GX'},
  {img:'images/remote-032.jpg',t:'ريموت تويوتا راف فور',d:'ريموت تويوتا RAV4 الذكي بأربعة أزرار مع زر شنطة كهربائية لطرازات Hybrid.',c:'Toyota RAV4, Highlander, Venza'},
  {img:'images/remote-033.jpg',t:'ريموت تويوتا سيكويا',d:'ريموت تويوتا سيكويا الذكي بأربعة أزرار، يدعم الدخول بدون مفتاح وفتح الشنطة.',c:'Toyota Sequoia, Tundra, 4Runner'},
  {img:'images/remote-034.jpg',t:'ريموت نيسان التيما',d:'ريموت نيسان التيما الذكي بأربعة أزرار، مع تشغيل عن بعد وفتح الشنطة.',c:'Nissan Altima, Maxima, Teana'},
  {img:'images/remote-035.jpg',t:'ريموت نيسان إكستريل',d:'ريموت نيسان X-Trail بثلاثة أزرار، يدعم البرمجة والنسخ المحلي.',c:'Nissan X-Trail, Qashqai, Juke'},
  {img:'images/remote-036.jpg',t:'ريموت نيسان صني',d:'ريموت نيسان صني الأساسي بزرين، مناسب للنسخ والبرمجة السريعة.',c:'Nissan Sunny, Sentra, Versa'},
  {img:'images/remote-037.jpg',t:'ريموت إنفينيتي QX80',d:'ريموت إنفينيتي QX80 الفاخر بخمسة أزرار مع تشغيل عن بعد وفتح الشنطة.',c:'Infiniti QX80, QX60, QX70'},
  {img:'images/remote-038.jpg',t:'ريموت إنفينيتي Q50',d:'ريموت إنفينيتي Q50 الذكي بثلاثة أزرار، تصميم رياضي ودخول بدون مفتاح.',c:'Infiniti Q50, Q60, Q70'},
  {img:'images/remote-039.jpg',t:'ريموت مازda CX-5',d:'ريموت مازدا CX-5 الذكي بثلاثة أزرار، يدعم البرمجة الأصلية.',c:'Mazda CX-5, CX-9, CX-30'},
  {img:'images/remote-040.jpg',t:'ريموت مازدا 6',d:'ريموت مازدا 6 سمارت بثلاثة أزرار، مع خاصية Keyless Entry.',c:'Mazda 3, Mazda 6, MX-5'},
  {img:'images/remote-041.jpg',t:'ريموت ميتسوبيشي باجيرو',d:'ريموت ميتسوبيشي باجيرو بثلاثة أزرار مناسب للبرمجة والنسخ.',c:'Mitsubishi Pajero, Montero, Outlander'},
  {img:'images/remote-042.jpg',t:'ريموت ميتسوبيشي L200',d:'ريموت ميتسوبيشي L200 الذكي بأربعة أزرار، يدعم تشغيل عن بعد.',c:'Mitsubishi L200, Triton, ASX'},
  {img:'images/remote-043.jpg',t:'ريموت هيونداي أكسنت',d:'ريموت هيونداي أكسنت بثلاثة أزرار، حل اقتصادي وعملي.',c:'Hyundai Accent, i10, i20'},
  {img:'images/remote-044.jpg',t:'ريموت هيونداي باليسيد',d:'ريموت هيونداي باليسيد الذكي بأربعة أزرار مع تشغيل عن بعد.',c:'Hyundai Palisade, Staria, Venue'},
  {img:'images/remote-045.jpg',t:'ريموت هيونداي كريتا',d:'ريموت هيونداي كريتا بأربعة أزرار يدعم البرمجة الكاملة.',c:'Hyundai Creta, Kona, Bayon'},
  {img:'images/remote-046.jpg',t:'ريموت كيا سبورتاج',d:'ريموت كيا سبورتاج الذكي بأربعة أزرار، خدمة برمجة سريعة.',c:'Kia Sportage, Seltos, Niro'},
  {img:'images/remote-047.jpg',t:'ريموت كيا سورنتو',d:'ريموت كيا سورنتو الذكي بأربعة أزرار مع تشغيل عن بعد.',c:'Kia Sorento, Mohave, Carnival 2022+'},
  {img:'images/remote-048.jpg',t:'ريموت كيا K5',d:'ريموت كيا K5 سمارت بأربعة أزرار، تصميم رياضي حديث.',c:'Kia K5, Optima, Stinger'},
  {img:'images/remote-049.jpg',t:'ريموت كيا تيلورايد',d:'ريموت كيا تيلورايد الفاخر بأربعة أزرار مع تشغيل عن بعد وفتح الشنطة.',c:'Kia Telluride, EV6, EV9'},
  {img:'images/remote-050.jpg',t:'ريموت جينيسيس G80',d:'ريموت جينيسيس G80 الفاخر بخمسة أزرار مع شاشة لمس وتشغيل عن بعد.',c:'Genesis G70, G80, G90, GV70, GV80'},
  {img:'images/remote-051.jpg',t:'ريموت رينو داستر',d:'ريموت رينو داستر فليب بثلاثة أزرار، مناسب للبرمجة والنسخ.',c:'Renault Duster, Captur, Megane'},
  {img:'images/remote-052.jpg',t:'ريموت بيجو 3008',d:'ريموت بيجو 3008 فليب بثلاثة أزرار مع شعار الأسد الفضي.',c:'Peugeot 208, 301, 2008, 3008, 5008'},
  {img:'images/remote-053.jpg',t:'ريموت سوزوكي جيمني',d:'ريموت سوزوكي جيمني بزرين، تصميم متين وعملي.',c:'Suzuki Jimny, Vitara, Swift'},
  {img:'images/remote-054.jpg',t:'ريموت سوزوكي ديزاير',d:'ريموت سوزوكي ديزاير بزرين، مناسب للنسخ والبرمجة.',c:'Suzuki Dzire, Ciaz, Baleno'},
  {img:'images/remote-055.jpg',t:'ريموت إيسوزو دي ماكس',d:'ريموت إيسوزو D-Max بثلاثة أزرار، حل احترافي لسيارات البيك أب.',c:'Isuzu D-Max, MU-X, NPR'},
  {img:'images/remote-056.jpg',t:'ريموت جيلي كولراي',d:'ريموت جيلي كولراي الذكي بثلاثة أزرار مع تشطيب أنيق.',c:'Geely Coolray, Emgrand, Tugella'},
  {img:'images/remote-057.jpg',t:'ريموت شيري تيجو',d:'ريموت شيري تيجو الذكي بثلاثة أزرار مع خدمة البرمجة.',c:'Chery Tiggo 4, 7, 8, Arrizo'},
  {img:'images/remote-058.jpg',t:'ريموت شانجان CS75',d:'ريموت شانجان CS75 الذكي بأربعة أزرار، تصميم حديث وعملي.',c:'Changan CS35, CS75, CS95, Eado'},
  {img:'images/remote-059.jpg',t:'ريموت هافال H6',d:'ريموت هافال H6 الذكي بثلاثة أزرار، يدعم الدخول بدون مفتاح.',c:'Haval H6, Jolion, H9, F7'},
  {img:'images/remote-060.jpg',t:'ريموت BYD هان',d:'ريموت BYD هان الكهربائي الذكي بثلاثة أزرار، تصميم عصري.',c:'BYD Han, Tang, Song, Atto 3'},
  {img:'images/remote-061.jpg',t:'ريموت MG ZS',d:'ريموت MG ZS سمارت بثلاثة أزرار، خدمة برمجة كاملة ومضمونة.',c:'MG ZS, MG5, MG6'},
  {img:'images/remote-062.jpg',t:'ريموت تويوتا هايلكس',d:'ريموت تويوتا هايلكس بثلاثة أزرار مع زر إنذار، مناسب للنسخ.',c:'Toyota Hilux, Tacoma, Innova'},
];

// ===== ريموتات إضافية (تظهر فقط عند استخدام الفلاتر أو البحث) =====
const newRemotes = [
  // Toyota (8)
  {img:'images/remote-063.jpg',t:'ريموت تويوتا كامري 2018+',d:'ريموت تويوتا كامري الذكي بأربعة أزرار مع تشغيل عن بعد وفتح الشنطة الكهربائية.',c:'Toyota Camry XLE, XSE, Hybrid 2018+'},
  {img:'images/remote-064.jpg',t:'ريموت تويوتا كورولا 2020+',d:'ريموت تويوتا كورولا سمارت بثلاثة أزرار مع خاصية Keyless Entry.',c:'Toyota Corolla 2020+, Corolla Cross'},
  {img:'images/remote-065.jpg',t:'ريموت تويوتا أفالون',d:'ريموت تويوتا أفالون الفاخر بأربعة أزرار مع تشغيل عن بعد.',c:'Toyota Avalon, Avalon Hybrid'},
  {img:'images/remote-066.jpg',t:'ريموت تويوتا سي اتش ار',d:'ريموت تويوتا C-HR الذكي بثلاثة أزرار، تصميم رياضي عملي.',c:'Toyota C-HR, Yaris Cross'},
  {img:'images/remote-067.jpg',t:'ريموت تويوتا تاكوما',d:'ريموت تويوتا تاكوما بأربعة أزرار، مناسب للنسخ والبرمجة.',c:'Toyota Tacoma 2016+, Tundra'},
  {img:'images/remote-068.jpg',t:'ريموت تويوتا انوفا',d:'ريموت تويوتا إنوفا فليب بثلاثة أزرار للموديلات الحديثة.',c:'Toyota Innova Crysta, Hiace'},
  {img:'images/remote-069.jpg',t:'ريموت تويوتا فورتشنر',d:'ريموت تويوتا فورتشنر الذكي بثلاثة أزرار مع تشغيل عن بعد.',c:'Toyota Fortuner 2016+, Hilux Revo'},
  {img:'images/remote-070.jpg',t:'ريموت تويوتا ياريس',d:'ريموت تويوتا ياريس الأساسي بزرين، حل اقتصادي ومضمون.',c:'Toyota Yaris Sedan, Hatchback'},
  // Lexus (5)
  {img:'images/remote-071.jpg',t:'ريموت لكزس RX350',d:'ريموت لكزس RX350 سمارت بأربعة أزرار مع شنطة كهربائية.',c:'Lexus RX350, RX450h, RX500h'},
  {img:'images/remote-072.jpg',t:'ريموت لكزس NX',d:'ريموت لكزس NX الذكي بثلاثة أزرار، تصميم أنيق وعملي.',c:'Lexus NX200, NX300, NX350h'},
  {img:'images/remote-073.jpg',t:'ريموت لكزس GX460',d:'ريموت لكزس GX460 الفاخر بأربعة أزرار مع خاصية الدخول بدون مفتاح.',c:'Lexus GX460, GX470'},
  {img:'images/remote-074.jpg',t:'ريموت لكزس IS',d:'ريموت لكزس IS سمارت بثلاثة أزرار مع زر إنذار.',c:'Lexus IS250, IS300, IS350'},
  {img:'images/remote-075.jpg',t:'ريموت لكزس LS',d:'ريموت لكزس LS الفاخر بشاشة لمس وخمسة أزرار للموديلات الراقية.',c:'Lexus LS460, LS500, LS500h'},
  // Nissan (5)
  {img:'images/remote-076.jpg',t:'ريموت نيسان مورانو',d:'ريموت نيسان مورانو الذكي بأربعة أزرار مع تشغيل عن بعد.',c:'Nissan Murano, Pathfinder 2022+'},
  {img:'images/remote-077.jpg',t:'ريموت نيسان كيكس',d:'ريموت نيسان كيكس بثلاثة أزرار، تصميم عصري ومتين.',c:'Nissan Kicks, Magnite'},
  {img:'images/remote-078.jpg',t:'ريموت نيسان نافارا',d:'ريموت نيسان نافارا فليب بثلاثة أزرار للموديلات الحديثة.',c:'Nissan Navara, Frontier'},
  {img:'images/remote-079.jpg',t:'ريموت نيسان GT-R',d:'ريموت نيسان GT-R الرياضي بثلاثة أزرار مع تشطيب فاخر.',c:'Nissan GT-R, 370Z, 400Z'},
  {img:'images/remote-080.jpg',t:'ريموت نيسان أرمادا',d:'ريموت نيسان أرمادا الفاخر بخمسة أزرار مع تشغيل عن بعد.',c:'Nissan Armada 2017+, Patrol Y62'},
  // Hyundai (4)
  {img:'images/remote-081.jpg',t:'ريموت هيونداي سانتا في',d:'ريموت هيونداي سانتا في الذكي بأربعة أزرار مع زر شنطة.',c:'Hyundai Santa Fe 2019+, Santa Cruz'},
  {img:'images/remote-082.jpg',t:'ريموت هيونداي توسان 2022',d:'ريموت هيونداي توسان الذكي الجديد بأربعة أزرار وتصميم عصري.',c:'Hyundai Tucson 2022+, NX4'},
  {img:'images/remote-083.jpg',t:'ريموت هيونداي فينيو',d:'ريموت هيونداي فينيو بثلاثة أزرار، خيار اقتصادي ومتين.',c:'Hyundai Venue, Bayon'},
  {img:'images/remote-084.jpg',t:'ريموت هيونداي ايلنترا 2021+',d:'ريموت هيونداي إلنترا الذكي بأربعة أزرار للجيل السابع.',c:'Hyundai Elantra 2021+, Avante'},
  // Kia (4)
  {img:'images/remote-085.jpg',t:'ريموت كيا سيراتو',d:'ريموت كيا سيراتو بثلاثة أزرار، مناسب للنسخ والبرمجة.',c:'Kia Cerato, Forte, K3'},
  {img:'images/remote-086.jpg',t:'ريموت كيا ريو',d:'ريموت كيا ريو الأساسي بثلاثة أزرار، حل اقتصادي.',c:'Kia Rio, Pegas, Soluto'},
  {img:'images/remote-087.jpg',t:'ريموت كيا EV6',d:'ريموت كيا EV6 الذكي بأربعة أزرار للسيارة الكهربائية.',c:'Kia EV6, EV9, Niro EV'},
  {img:'images/remote-088.jpg',t:'ريموت كيا سيلتوس',d:'ريموت كيا سيلتوس الذكي بأربعة أزرار مع خاصية Keyless.',c:'Kia Seltos, Soul, Stonic'},
  // Ford (4)
  {img:'images/remote-089.jpg',t:'ريموت فورد F-150',d:'ريموت فورد F-150 الذكي بخمسة أزرار مع تشغيل عن بعد.',c:'Ford F-150, F-250, F-350 2021+'},
  {img:'images/remote-090.jpg',t:'ريموت فورد إكسبيديشن',d:'ريموت فورد إكسبيديشن الفاخر بخمسة أزرار مع فتح الشنطة.',c:'Ford Expedition, Expedition Max'},
  {img:'images/remote-091.jpg',t:'ريموت فورد إيدج',d:'ريموت فورد إيدج سمارت بأربعة أزرار، تشطيب أنيق.',c:'Ford Edge, Escape, Kuga'},
  {img:'images/remote-092.jpg',t:'ريموت فورد فيوجن',d:'ريموت فورد فيوجن بأربعة أزرار، مناسب للبرمجة المحلية.',c:'Ford Fusion, Mondeo, Taurus'},
  // GMC (3)
  {img:'images/remote-093.jpg',t:'ريموت GMC يوكون 2021+',d:'ريموت GMC يوكون الذكي الجديد بستة أزرار مع تشغيل عن بعد.',c:'GMC Yukon, Yukon XL, Denali 2021+'},
  {img:'images/remote-094.jpg',t:'ريموت GMC سييرا',d:'ريموت GMC سييرا بخمسة أزرار مع خاصية Remote Start.',c:'GMC Sierra 1500, 2500, AT4'},
  {img:'images/remote-095.jpg',t:'ريموت GMC أكاديا',d:'ريموت GMC أكاديا الذكي بخمسة أزرار، تصميم عملي.',c:'GMC Acadia, Terrain'},
  // Chevrolet (4)
  {img:'images/remote-096.jpg',t:'ريموت شيفروليه ترافيرس',d:'ريموت شيفروليه ترافيرس بخمسة أزرار مع تشغيل عن بعد.',c:'Chevrolet Traverse, Blazer'},
  {img:'images/remote-097.jpg',t:'ريموت شيفروليه إكوينوكس',d:'ريموت شيفروليه إكوينوكس الذكي بخمسة أزرار.',c:'Chevrolet Equinox, Trax, Trailblazer'},
  {img:'images/remote-098.jpg',t:'ريموت شيفروليه إمبالا',d:'ريموت شيفروليه إمبالا بخمسة أزرار، تصميم كلاسيكي.',c:'Chevrolet Impala, Malibu, Cruze'},
  {img:'images/remote-099.jpg',t:'ريموت شيفروليه كورفيت',d:'ريموت شيفروليه كورفيت الرياضي الذكي بأربعة أزرار.',c:'Chevrolet Corvette C7, C8'},
  // Cadillac (2)
  {img:'images/remote-100.jpg',t:'ريموت كاديلاك CT5',d:'ريموت كاديلاك CT5 الذكي بستة أزرار مع خاصية Remote Start.',c:'Cadillac CT5, CT4, CTS'},
  {img:'images/remote-101.jpg',t:'ريموت كاديلاك XT5',d:'ريموت كاديلاك XT5 سمارت بستة أزرار مع فتح الشنطة الكهربائية.',c:'Cadillac XT4, XT5, XT6'},
  // Dodge / Chrysler / RAM / Jeep (5)
  {img:'images/remote-102.jpg',t:'ريموت دودج تشالنجر',d:'ريموت دودج تشالنجر الرياضي بخمسة أزرار مع زر إنذار.',c:'Dodge Challenger, Charger SRT'},
  {img:'images/remote-103.jpg',t:'ريموت كرايسلر باسيفيكا',d:'ريموت كرايسلر باسيفيكا الذكي بستة أزرار مع أبواب كهربائية.',c:'Chrysler Pacifica, Voyager, Town & Country'},
  {img:'images/remote-104.jpg',t:'ريموت RAM 2500',d:'ريموت RAM 2500 الذكي بخمسة أزرار، مناسب لشاحنات الـ Heavy Duty.',c:'RAM 2500, 3500, 4500'},
  {img:'images/remote-105.jpg',t:'ريموت جيب جراند شيروكي',d:'ريموت جيب جراند شيروكي الذكي بخمسة أزرار مع تشغيل عن بعد.',c:'Jeep Grand Cherokee, Cherokee 2014+'},
  {img:'images/remote-106.jpg',t:'ريموت جيب كومباس',d:'ريموت جيب كومباس بخمسة أزرار مع خاصية Remote Start.',c:'Jeep Compass, Renegade'},
  // Mercedes (4)
  {img:'images/remote-107.jpg',t:'ريموت مرسيدس G-Class',d:'ريموت مرسيدس G-Class الفاخر بثلاثة أزرار، تشطيب كروم.',c:'Mercedes G500, G63 AMG'},
  {img:'images/remote-108.jpg',t:'ريموت مرسيدس CLA',d:'ريموت مرسيدس CLA الذكي بثلاثة أزرار مع شعار كروم.',c:'Mercedes CLA, A-Class, GLA'},
  {img:'images/remote-109.jpg',t:'ريموت مرسيدس GLE',d:'ريموت مرسيدس GLE سمارت كي بأربعة أزرار مع شنطة كهربائية.',c:'Mercedes GLE, GLS, GLE Coupe'},
  {img:'images/remote-110.jpg',t:'ريموت مرسيدس S-Class 2021+',d:'ريموت مرسيدس S-Class الجديد بشاشة عرض وأربعة أزرار.',c:'Mercedes S-Class W223, EQS'},
  // BMW (4)
  {img:'images/remote-111.jpg',t:'ريموت BMW X1',d:'ريموت BMW X1 الذكي بثلاثة أزرار، تصميم رياضي عملي.',c:'BMW X1, X2, 2 Series'},
  {img:'images/remote-112.jpg',t:'ريموت BMW الفئة 7 2023+',d:'ريموت BMW الفئة 7 الجديد بشاشة عرض متطورة وأزرار لمسية.',c:'BMW 7 Series G70, i7'},
  {img:'images/remote-113.jpg',t:'ريموت BMW M3',d:'ريموت BMW M3 الرياضي بثلاثة أزرار مع شعار M.',c:'BMW M3, M4, M5'},
  {img:'images/remote-114.jpg',t:'ريموت BMW iX',d:'ريموت BMW iX الكهربائي الذكي بأربعة أزرار.',c:'BMW iX, i4, iX3'},
  // Audi (3)
  {img:'images/remote-115.jpg',t:'ريموت أودي A6',d:'ريموت أودي A6 الذكي بأربعة أزرار مع خاصية Keyless.',c:'Audi A6, A7, S6'},
  {img:'images/remote-116.jpg',t:'ريموت أودي Q5',d:'ريموت أودي Q5 سمارت بأربعة أزرار مع فتح الشنطة الكهربائية.',c:'Audi Q3, Q5, SQ5'},
  {img:'images/remote-117.jpg',t:'ريموت أودي RS',d:'ريموت أودي RS الرياضي بثلاثة أزرار مع شعار RS الأحمر.',c:'Audi RS6, RS7, RS Q8'},
  // VW (2)
  {img:'images/remote-118.jpg',t:'ريموت فولكس فاجن جيتا',d:'ريموت فولكس فاجن جيتا فليب بثلاثة أزرار، مناسب للنسخ.',c:'VW Jetta, Polo, Bora'},
  {img:'images/remote-119.jpg',t:'ريموت فولكس فاجن طوارق',d:'ريموت فولكس فاجن طوارق الذكي بأربعة أزرار مع تشغيل عن بعد.',c:'VW Touareg, Atlas, Teramont'},
  // Porsche (2)
  {img:'images/remote-120.jpg',t:'ريموت بورش ماكان',d:'ريموت بورش ماكان بشكل السيارة الفاخر مع تشطيب كروم.',c:'Porsche Macan, Macan S, Macan GTS'},
  {img:'images/remote-121.jpg',t:'ريموت بورش تايكان',d:'ريموت بورش تايكان الكهربائي الفاخر بثلاثة أزرار.',c:'Porsche Taycan, Taycan Cross Turismo'},
  // Range Rover / Land Rover (3)
  {img:'images/remote-122.jpg',t:'ريموت رنج روفر 2023+',d:'ريموت رنج روفر فوج الجديد بأربعة أزرار وتشطيب فاخر.',c:'Range Rover Vogue L460, SV'},
  {img:'images/remote-123.jpg',t:'ريموت رنج روفر سبورت',d:'ريموت رنج روفر سبورت الذكي بأربعة أزرار مع Keyless Entry.',c:'Range Rover Sport, Sport SVR'},
  {img:'images/remote-124.jpg',t:'ريموت لاند روفر ديفندر',d:'ريموت لاند روفر ديفندر الذكي بأربعة أزرار، تصميم عسكري متين.',c:'Land Rover Defender 90, 110, 130'},
  // Honda (3)
  {img:'images/remote-125.jpg',t:'ريموت هوندا باسيفيك',d:'ريموت هوندا باسيفيك بأربعة أزرار مع فتح الأبواب الكهربائية.',c:'Honda Odyssey, Pilot, Passport'},
  {img:'images/remote-126.jpg',t:'ريموت هوندا سيتي',d:'ريموت هوندا سيتي فليب بثلاثة أزرار، حل عملي واقتصادي.',c:'Honda City, Jazz, Fit'},
  {img:'images/remote-127.jpg',t:'ريموت هوندا HR-V',d:'ريموت هوندا HR-V الذكي بثلاثة أزرار، تصميم عصري.',c:'Honda HR-V, ZR-V, WR-V'},
  // Mazda / Mitsubishi / Infiniti (6)
  {img:'images/remote-128.jpg',t:'ريموت مازدا CX-30',d:'ريموت مازدا CX-30 الذكي بثلاثة أزرار، تشطيب أنيق.',c:'Mazda CX-30, MX-30'},
  {img:'images/remote-129.jpg',t:'ريموت مازدا CX-9',d:'ريموت مازدا CX-9 الفاخر بأربعة أزرار مع تشغيل عن بعد.',c:'Mazda CX-9, CX-90'},
  {img:'images/remote-130.jpg',t:'ريموت ميتسوبيشي اكليبس كروس',d:'ريموت ميتسوبيشي إكليبس كروس بأربعة أزرار مع خاصية Keyless.',c:'Mitsubishi Eclipse Cross, ASX 2023+'},
  {img:'images/remote-131.jpg',t:'ريموت ميتسوبيشي اوتلاندر',d:'ريموت ميتسوبيشي أوتلاندر الذكي بأربعة أزرار مع تشغيل عن بعد.',c:'Mitsubishi Outlander, Outlander PHEV'},
  {img:'images/remote-132.jpg',t:'ريموت إنفينيتي QX60',d:'ريموت إنفينيتي QX60 الذكي بأربعة أزرار مع فتح الشنطة.',c:'Infiniti QX60 2022+, QX55'},
  {img:'images/remote-133.jpg',t:'ريموت إنفينيتي QX55',d:'ريموت إنفينيتي QX55 سمارت بأربعة أزرار، تصميم كوبيه فاخر.',c:'Infiniti QX55, QX50'},
  // الصينية والأخرى (10)
  {img:'images/remote-134.jpg',t:'ريموت MG RX5',d:'ريموت MG RX5 الذكي بثلاثة أزرار مع خدمة البرمجة.',c:'MG RX5, MG ZS EV'},
  {img:'images/remote-135.jpg',t:'ريموت جيلي أتلاس',d:'ريموت جيلي أطلس الذكي بثلاثة أزرار مع تشطيب أنيق.',c:'Geely Atlas, Atlas Pro, Monjaro'},
  {img:'images/remote-136.jpg',t:'ريموت شيري اريزو',d:'ريموت شيري أريزو فليب بثلاثة أزرار، حل اقتصادي.',c:'Chery Arrizo 5, 6, 8'},
  {img:'images/remote-137.jpg',t:'ريموت شانجان CS35',d:'ريموت شانجان CS35 الذكي بثلاثة أزرار مع خدمة البرمجة.',c:'Changan CS35 Plus, Eado Plus'},
  {img:'images/remote-138.jpg',t:'ريموت هافال جوليون',d:'ريموت هافال جوليون الذكي بثلاثة أزرار، تصميم عصري.',c:'Haval Jolion, Dargo'},
  {img:'images/remote-139.jpg',t:'ريموت BYD اتو 3',d:'ريموت BYD ATTO 3 الكهربائي الذكي بأربعة أزرار.',c:'BYD Atto 3, Dolphin, Seal'},
  {img:'images/remote-140.jpg',t:'ريموت جينيسيس GV80',d:'ريموت جينيسيس GV80 الفاخر بخمسة أزرار وشاشة لمس.',c:'Genesis GV80, GV70, G90'},
  {img:'images/remote-141.jpg',t:'ريموت رينو كوليوس',d:'ريموت رينو كوليوس الذكي بأربعة أزرار مع تشغيل عن بعد.',c:'Renault Koleos, Talisman'},
  {img:'images/remote-142.jpg',t:'ريموت بيجو 5008',d:'ريموت بيجو 5008 فليب بثلاثة أزرار للموديلات الحديثة.',c:'Peugeot 5008, 3008 GT, 508'},
  {img:'images/remote-143.jpg',t:'ريموت سوزوكي فيتارا',d:'ريموت سوزوكي فيتارا الذكي بثلاثة أزرار مع خاصية Keyless.',c:'Suzuki Vitara, S-Cross, Grand Vitara'},
];
newRemotes.forEach(r=>{ r.hidden = true; });
remotes.push(...newRemotes);

// Professional line icons for services (gold, matches reference)
const SERVICE_SVGS = {
  '🚗':'<svg viewBox="0 0 24 24"><path d="M5 13l1.5-4.5A2 2 0 018.4 7h7.2a2 2 0 011.9 1.5L19 13M5 13h14v5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-5z"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/></svg>',
  '🔒':'<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>',
  '⚙️':'<svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>',
  '🔑':'<svg viewBox="0 0 24 24"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M13 10l3 3"/></svg>',
  '✂️':'<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.5 15.5M20 20L8.5 8.5"/></svg>',
  '🔁':'<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 0115-6.7L21 8M21 3v5h-5M21 12a9 9 0 01-15 6.7L3 16M3 21v-5h5"/></svg>',
  '🛒':'<svg viewBox="0 0 24 24"><path d="M5 7h14l-1.5 11a2 2 0 01-2 1.7H8.5a2 2 0 01-2-1.7L5 7z"/><path d="M9 7V5a3 3 0 016 0v2"/></svg>',
  '🔧':'<svg viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 105.05 5.05L21 13l-1.5 1.5L21 16l-5 5-1.5-1.5L13 21l-1.6-1.25a4 4 0 00-5.05-5.05L3 11l1.5-1.5L3 8l5-5 1.5 1.5L11 3l1.6 1.25c.6.6 1.4 1.1 2.1 1.5z"/></svg>',
  '📶':'<svg viewBox="0 0 24 24"><path d="M2 9a16 16 0 0120 0M5 13a11 11 0 0114 0M8 17a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/></svg>'
};
document.getElementById('services-grid').innerHTML = services.map(s=>`
  <div class="card-feature">
    <div class="ic">${SERVICE_SVGS[s.ic]||s.ic}</div>
    <h4>${s.t}</h4><p>${s.d}</p>
  </div>`).join('');

// Brand detection from title
const brandMap = [
  {k:'mercedes', label:'مرسيدس', match:['مرسيدس']},
  {k:'bmw', label:'بي إم دبليو', match:['BMW','بي إم']},
  {k:'toyota', label:'تويوتا', match:['تويوتا']},
  {k:'lexus', label:'لكزس', match:['لكزس']},
  {k:'honda', label:'هوندا', match:['هوندا']},
  {k:'hyundai', label:'هيونداي', match:['هيونداي']},
  {k:'nissan', label:'نيسان', match:['نيسان']},
  {k:'ford', label:'فورد', match:['فورد']},
  {k:'gmc', label:'GMC', match:['GMC']},
  {k:'chevrolet', label:'شفروليه', match:['شيفروليه','شفروليه']},
  {k:'cadillac', label:'كاديلاك', match:['كاديلاك']},
  {k:'dodge', label:'دودج', match:['دودج']},
  {k:'jeep', label:'جيب', match:['جيب']},
  {k:'ram', label:'RAM', match:['RAM']},
  {k:'chrysler', label:'كرايسلر', match:['كرايسلر']},
  {k:'kia', label:'كيا', match:['كيا']},
  {k:'mazda', label:'مازدا', match:['مازدا','مازda']},
  {k:'mitsubishi', label:'ميتسوبيشي', match:['ميتسوبيشي']},
  {k:'infiniti', label:'إنفينيتي', match:['إنفينيتي','انفينيتي']},
  {k:'audi', label:'أودي', match:['أودي','اودي']},
  {k:'vw', label:'فولكس فاجن', match:['فولكس']},
  {k:'porsche', label:'بورش', match:['بورش']},
  {k:'rangerover', label:'رنج روفر', match:['رنج روفر']},
  {k:'landrover', label:'لاند روفر', match:['لاند روفر']},
  {k:'mg', label:'MG', match:['MG']},
  {k:'geely', label:'جيلي', match:['جيلي']},
  {k:'chery', label:'شيري', match:['شيري']},
  {k:'changan', label:'شانجان', match:['شانجان','شانغان']},
  {k:'haval', label:'هافال', match:['هافال']},
  {k:'byd', label:'BYD', match:['BYD']},
  {k:'maserati', label:'مازيراتي', match:['مازيراتي']},
  {k:'genesis', label:'جينيسيس', match:['جينيسيس']},
  {k:'renault', label:'رينو', match:['رينو']},
  {k:'peugeot', label:'بيجو', match:['بيجو']},
  {k:'suzuki', label:'سوزوكي', match:['سوزوكي']},
  {k:'isuzu', label:'إيسوزو', match:['إيسوزو','ايسوزو']},
];
function detectBrand(text){
  for(const b of brandMap){ for(const m of b.match){ if(text.indexOf(m)!==-1) return b.k; } }
  return 'other';
}
// Tag each remote
remotes.forEach(r=>{ r.brand = detectBrand(r.t+' '+(r.c||'')); });

// Render remote cards
function renderRemoteCard(r){
  return `<article class="remote-card" data-brand="${r.brand}">
    <div class="remote-img">${r.img?`<img src="${r.img}" alt="${r.t}" loading="lazy"/>`:`<span style="font-size:3rem">${r.ic||'🔑'}</span>`}</div>
    <div class="remote-body">
      <h4>${r.t}</h4>
      <p class="desc">${r.d}</p>
      <div class="compat"><strong>الموديلات المتوافقة</strong>${r.c}</div>
      <div class="actions">
        <a href="https://wa.me/966503791203?text=${encodeURIComponent('حجز واستعلام: '+r.t)}" class="btn btn-green">💬 حجز واستعلام</a>
        <a href="https://wa.me/966503791203?text=${encodeURIComponent('طلب برمجة ريموت: '+r.t)}" class="btn btn-cream">⚙️ اطلب برمجة ريموت</a>
      </div>
    </div>
  </article>`;
}

// Build brand chips (only brands that exist in remotes)
const presentBrands = new Set(remotes.map(r=>r.brand));
const chipDefs = [{k:'all',label:'الكل'}].concat(brandMap.filter(b=>presentBrands.has(b.k)).map(b=>({k:b.k,label:b.label})));
if(presentBrands.has('other')) chipDefs.push({k:'other',label:'متنوعة'});

let activeBrand = 'all';
let searchTerm = '';

function applyFilter(){
  const term = searchTerm.trim().toLowerCase();
  const isFiltering = activeBrand!=='all' || !!term;
  const filtered = remotes.filter(r=>{
    if(r.hidden && !isFiltering) return false;
    const okBrand = activeBrand==='all' || r.brand===activeBrand;
    const okSearch = !term || (r.t+' '+r.d+' '+(r.c||'')).toLowerCase().indexOf(term)!==-1;
    return okBrand && okSearch;
  });
  document.getElementById('remotes-grid').innerHTML = filtered.map(renderRemoteCard).join('');
  document.getElementById('no-remotes').style.display = filtered.length? 'none':'block';
}

document.getElementById('brand-chips').innerHTML = chipDefs.map(c=>
  `<button class="brand-chip${c.k===activeBrand?' active':''}" data-brand="${c.k}">${c.label}</button>`
).join('');
document.getElementById('brand-chips').addEventListener('click',(e)=>{
  const btn = e.target.closest('.brand-chip'); if(!btn) return;
  activeBrand = btn.dataset.brand;
  document.querySelectorAll('.brand-chip').forEach(b=>b.classList.toggle('active', b===btn));
  applyFilter();
});
document.getElementById('remotes-search').addEventListener('input',(e)=>{
  searchTerm = e.target.value; applyFilter();
});
applyFilter();

// Areas — محافظات الباحة (بلجرشي، المندق، المخواة، العقيق، قلوة)
const ICONS = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  city:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 9h2M9 13h2M9 17h2M13 9h2M13 13h2M13 17h2"/></svg>',
  mountain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20l6-10 4 6 3-4 5 8z"/><circle cx="17" cy="6" r="2"/></svg>',
  valley:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l5 12 4-7 4 4 5-11"/></svg>',
  tree:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V14"/><path d="M7 14a5 5 0 1 1 10 0"/><path d="M5 10a7 7 0 1 1 14 0"/></svg>',
  road:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3l-3 18"/><path d="M18 3l3 18"/><path d="M12 4v3M12 11v3M12 18v3"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/></svg>'
};

const governorates = [
  { key:'baljurashi', name:'بلجرشي', icon: ICONS.city, areas:[
    'السوق','وسط بلجرشي','الفيصلية','الروضة','العزيزية','النزهة','الأندلس','الصفا','المروة','النخيل',
    'الشروق','الواحة','الزهور','الربيع','الورود','الياسمين','الخالدية','النسيم','الملك فهد','الملك عبدالعزيز',
    'الأطاولة','الحجرة','السحامة','الرفايع','الكدوة','الشرفية','المنحدر','مرتفعات بلجرشي','الشعبة','الفيحاء',
    'شرق السوق','مرابا','بلحارث','آل سليمان','شرق المركز','الرحاب الشرقي','المنصورة الشرقية','الواحة الشرقية','الأمواج','الجوهرة الشرقية',
    'جنوب السوق','وادي بلجرشي','الجنوبية','السهل','السدر'
  ]},
  { key:'mandaq', name:'المندق', icon: ICONS.mountain, areas:[
    'المندق','شعف بلجرشي','الزرقاء','ربوع بلجرشي','الجوف','القمة','الفجر','السحاب','الشعار','الحزم',
    'المروج','شمال السوق','الجبل','القرن الشمالي','الفلق','المرتفعات','الهضبة','شمال بلجرشي'
  ]},
  { key:'mikhwah', name:'المخواة', icon: ICONS.valley, areas:[
    'المخواة','بني كبير','بني سار','آل عامر','آل البار','السديرة','جدر','آل ظبي','العالية',
    'آل عبدالله','آل سعد','آل علي','بني ظبيان','آل محمد','بني عبدالله'
  ]},
  { key:'aqiq', name:'العقيق', icon: ICONS.tree, areas:[
    'العقيق','الأمواه','شعف العقيق','القرى','وادي العقيق','مركز العقيق','الحازمي','العرضية','الفرعة','الجريسية'
  ]},
  { key:'qilwah', name:'قلوة', icon: ICONS.road, areas:[
    'قلوة','آل ساعد','ذي عين','الرحوة','الشعراء','الخلف','آل غصن','بني حسن','مركز قلوة','وادي قلوة'
  ]}
];

const areasWrap = document.getElementById('areas-wrap');
if(areasWrap){
  areasWrap.innerHTML = governorates.map(g=>`
    <article class="gov-card" data-gov="${g.key}">
      <header class="gov-head">
        <div class="gov-title">
          <h3>مفاتيح سيارات ${g.name}</h3>
          <p>${g.areas.length} حي ومركز خدمة</p>
        </div>
        <div class="gov-icon">${g.icon}</div>
      </header>
      <div class="gov-grid">
        ${g.areas.map(a=>`<div class="gov-item"><span class="gov-check">${ICONS.check}</span><span>مفاتيح سيارات ${a}</span></div>`).join('')}
      </div>
    </article>
  `).join('');
}

// Mobile nav toggle
document.querySelector('.nav-toggle').addEventListener('click',()=>{
  document.querySelector('.main-nav').classList.toggle('open');
});

// Form
function sendWhatsApp(e){
  e.preventDefault();
  const name = document.getElementById('f-name').value;
  const phone = document.getElementById('f-phone').value;
  const service = document.getElementById('f-service').value;
  const note = document.getElementById('f-note').value;
  const msg = `السلام عليكم،\nالاسم: ${name}\nالجوال: ${phone}\nالخدمة: ${service}\nتفاصيل: ${note}`;
  window.open(`https://wa.me/966503791203?text=${encodeURIComponent(msg)}`,'_blank');
  return false;
}
