/* ==========================================================================
   VN Typhoon ??Internationalization (i18n)
   --------------------------------------------------------------------------
   ?좎?蹂댁닔 ?덈궡:
   - ?띿뒪?몃? 諛붽씀?ㅻ㈃ ?꾨옒 LANGS / TRANSLATIONS 媛앹껜留??섏젙?섎㈃ ?⑸땲??
   - ?몄뼱瑜?異붽??섎젮硫?LANGS 諛곗뿴怨?TRANSLATIONS??媛숈? 肄붾뱶????ぉ???뷀븯?몄슂.
   - HTML?먯꽌??data-i18n="hero.title" ?뺥깭濡??ㅻ? ?곌껐?⑸땲??
   ========================================================================== */

const LANGS = [
  { code: "en", label: "English",  flag: "?눣?눡", dir: "ltr" },
  { code: "ko", label: "?쒓뎅??,    flag: "?눖?눟", dir: "ltr" },
  { code: "vi", label: "Ti梳퓆g Vi沼뇍", flag: "?눤?눛", dir: "ltr" },
  { code: "zh", label: "訝?뻼",       flag: "?눊?눛", dir: "ltr" },
  { code: "ja", label: "?ζ쑍沃?,     flag: "?눓?눝", dir: "ltr" },
  { code: "es", label: "Espa챰ol",   flag: "?눎?눡", dir: "ltr" },
  { code: "fr", label: "Fran챌ais",  flag: "?눏?눟", dir: "ltr" },
  { code: "de", label: "Deutsch",   flag: "?눍?눎", dir: "ltr" },
  { code: "ru", label: "????克龜橘",   flag: "?눟?눣", dir: "ltr" },
  { code: "ar", label: "碼?晩邈磨?馬",   flag: "?눡?눇", dir: "rtl" },
];

const TRANSLATIONS = {
  /* ---------------------------------------------------------------- English */
  en: {
    nav: { services: "Services", portfolio: "Work", about: "About", process: "Process", contact: "Contact", cta: "Get a quote" },
    hero: {
      badge: "Web design & development studio",
      title: "We build websites that win customers.",
      subtitle: "VN Typhoon designs and develops fast, beautiful, multilingual websites for ambitious companies ??and maintains them for you.",
      ctaPrimary: "See our work",
      ctaSecondary: "Start a project",
      s1: "Projects delivered", s2: "Happy clients", s3: "Years of craft", s4: "Avg. load time",
    },
    services: {
      title: "What we do",
      subtitle: "End-to-end web production, from first sketch to launch and beyond.",
      i1t: "Web Design", i1d: "Clean, modern interfaces tailored to your brand and your customers.",
      i2t: "Development", i2d: "Hand-coded, lightning-fast sites built on solid, future-proof foundations.",
      i3t: "E-commerce", i3d: "Online stores that turn visitors into buyers and scale with your sales.",
      i4t: "Multilingual", i4d: "Reach the world ??sites built to speak your customers' language.",
      i5t: "SEO & Speed", i5d: "Search-ready, blazing-fast pages that rank and convert.",
      i6t: "Free Maintenance", i6d: "Hosting, updates and fixes handled ??so your site just keeps working.",
    },
    portfolio: {
      title: "Selected work",
      subtitle: "A few of the websites we're proud to have shipped.",
      all: "All", web: "Websites", shop: "E-commerce", brand: "Branding", app: "Web apps",
      p1t: "Aurora Studio", p1c: "Corporate website", p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "Online store", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "Brand & site", p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "Booking web app", p4m: "App",
      p5t: "Saigon Eats", p5c: "Restaurant chain", p5m: "Web",
      p6t: "Lumen Travel", p6c: "Multilingual portal", p6m: "Web",
      view: "View case",
    },
    about: {
      title: "A small studio with a big standard",
      p1: "VN Typhoon is a web production company. We partner with founders, marketers and teams to turn ideas into websites that look sharp, load instantly and sell.",
      p2: "Every project is hand-crafted, tested across devices, and built to last ??then we keep it running with free ongoing maintenance.",
      f1: "Fixed quotes, no surprises", f2: "Launch in weeks, not months", f3: "Own your code & content", f4: "Real humans, fast replies",
    },
    process: {
      title: "How we work",
      subtitle: "A simple, transparent path from idea to launch.",
      s1t: "Discover", s1d: "We learn your goals, audience and brand.",
      s2t: "Design", s2d: "We craft the look and feel, screen by screen.",
      s3t: "Build", s3d: "We develop, optimize and test everything.",
      s4t: "Launch", s4d: "We go live ??then maintain it for free.",
    },
    contact: {
      title: "Let's build something great",
      subtitle: "Tell us about your project. We'll reply within one business day.",
      name: "Your name", email: "Email", company: "Company (optional)", message: "What do you need?",
      send: "Send message", or: "or email us directly at",
    },
    footer: { tagline: "Websites that win customers.", rights: "All rights reserved.", made: "Designed & built by VN Typhoon." },
  },

  /* ---------------------------------------------------------------- Korean */
  ko: {
    nav: { services: "?쒕퉬??, portfolio: "?ы듃?대━??, about: "?뚯궗?뚭컻", process: "吏꾪뻾怨쇱젙", contact: "臾몄쓽", cta: "寃ъ쟻 諛쏄린" },
    hero: {
      badge: "???붿옄??쨌 媛쒕컻 ?ㅽ뒠?붿삤",
      title: "怨좉컼??紐⑥쑝???뱀궗?댄듃瑜?留뚮벊?덈떎.",
      subtitle: "VN Typhoon? 鍮좊Ⅴ怨??꾨쫫?ㅼ슫 ?ㅺ뎅???뱀궗?댄듃瑜??붿옄?맞룰컻諛쒗븯怨? 異쒖떆 ???좎?蹂댁닔源뚯? 梨낆엫吏묐땲??",
      ctaPrimary: "?ы듃?대━??蹂닿린",
      ctaSecondary: "?꾨줈?앺듃 ?쒖옉?섍린",
      s1: "?꾨즺???꾨줈?앺듃", s2: "留뚯”??怨좉컼??, s3: "?꾩쓽 寃쏀뿕", s4: "?됯퇏 濡쒕뵫 ?띾룄",
    },
    services: {
      title: "?쒓났 ?쒕퉬??,
      subtitle: "湲고쉷遺??異쒖떆, 洹??댄썑源뚯? ?????쒖옉??紐⑤뱺 寃껋쓣 梨낆엫吏묐땲??",
      i1t: "???붿옄??, i1d: "釉뚮옖?쒖? 怨좉컼??瑗?留욎텣 源붾걫?섍퀬 ?꾨??곸씤 ?붿옄??",
      i2t: "??媛쒕컻", i2d: "?꾪깂??湲곕컲 ?꾩뿉 吏곸젒 肄붾뵫?? 鍮좊Ⅴ怨?寃ш퀬???뱀궗?댄듃.",
      i3t: "?댁빱癒몄뒪", i3d: "諛⑸Ц?먮? 援щℓ?먮줈 諛붽씀怨?留ㅼ텧怨??④퍡 ?깆옣?섎뒗 ?⑤씪???ㅽ넗??",
      i4t: "?ㅺ뎅??吏??, i4d: "???멸퀎濡???怨좉컼???몄뼱濡?留먰븯???뱀궗?댄듃.",
      i5t: "SEO 쨌 ?띾룄", i5d: "寃?됱뿉 媛뺥븯怨?踰덇컻泥섎읆 鍮좊Ⅸ, ?꾪솚?섎뒗 ?섏씠吏.",
      i6t: "臾대즺 ?좎?蹂댁닔", i6d: "?몄뒪?끒룹뾽?곗씠?맞룹닔?뺢퉴吏 ???ъ씠?멸? ???뺤긽 ?묐룞?섎룄濡?",
    },
    portfolio: {
      title: "二쇱슂 ?묒뾽",
      subtitle: "?먯떊 ?덇쾶 ?좊낫?대뒗 ?쒖옉 ?щ??낅땲??",
      all: "?꾩껜", web: "?뱀궗?댄듃", shop: "?댁빱癒몄뒪", brand: "釉뚮옖??, app: "?뱀빋",
      p1t: "?ㅻ줈???ㅽ뒠?붿삤", p1c: "湲곗뾽 ?뱀궗?댄듃", p1m: "Web",
      p2t: "誘몃씪 肄붿뒪硫뷀떛", p2c: "?⑤씪???ㅽ넗??, p2m: "Shop",
      p3t: "?몄뒪?덈뱶 諭낇겕", p3c: "釉뚮옖??& ?ъ씠??, p3m: "Brand",
      p4t: "?꾩뒪 ?쇳듃?덉뒪", p4c: "?덉빟 ?뱀빋", p4m: "App",
      p5t: "?ъ씠怨??뉗툩", p5c: "?몄떇 泥댁씤", p5m: "Web",
      p6t: "猷⑤찘 ?몃옒釉?, p6c: "?ㅺ뎅???ы꽭", p6m: "Web",
      view: "?щ? 蹂닿린",
    },
    about: {
      title: "?묒?留?湲곗?? ?믪? ?ㅽ뒠?붿삤",
      p1: "VN Typhoon? ?뱀궗?댄듃 ?쒖옉 ?뚯궗?낅땲?? 李쎌뾽媛쨌留덉??걔룻?怨??④퍡 ?꾩씠?붿뼱瑜? 蹂닿린 醫뗪퀬 利됱떆 ?대━硫?留ㅼ텧濡??댁뼱吏???뱀궗?댄듃濡?留뚮벊?덈떎.",
      p2: "紐⑤뱺 ?꾨줈?앺듃??吏곸젒 ?쒖옉?섍퀬 紐⑤뱺 湲곌린?먯꽌 ?뚯뒪?명븯硫??ㅻ옒 媛?꾨줉 留뚮벊?덈떎. 異쒖떆 ?꾩뿉??臾대즺 ?좎?蹂댁닔濡?怨꾩냽 愿由ы빀?덈떎.",
      f1: "怨좎젙 寃ъ쟻, 異붽? 鍮꾩슜 ?놁쓬", f2: "紐??ъ씠 ?꾨땶 紐?二??덉뿉 異쒖떆", f3: "肄붾뱶쨌肄섑뀗痢좊뒗 怨좉컼 ?뚯쑀", f4: "?щ엺??吏곸젒, 鍮좊Ⅸ ?묐떟",
    },
    process: {
      title: "吏꾪뻾 怨쇱젙",
      subtitle: "?꾩씠?붿뼱?먯꽌 異쒖떆源뚯?, 媛꾨떒?섍퀬 ?щ챸??怨쇱젙.",
      s1t: "諛쒓껄", s1d: "紐⑺몴쨌怨좉컼쨌釉뚮옖?쒕? 源딆씠 ?댄빐?⑸땲??",
      s2t: "?붿옄??, s2d: "?붾㈃ ?섎굹?섎굹 猷⑹븻?꾩쓣 ?ㅺ퀎?⑸땲??",
      s3t: "媛쒕컻", s3d: "媛쒕컻쨌理쒖쟻?붋룻뀒?ㅽ듃瑜?紐⑤몢 吏꾪뻾?⑸땲??",
      s4t: "異쒖떆", s4d: "?ㅽ뵂????臾대즺濡??좎?蹂댁닔?⑸땲??",
    },
    contact: {
      title: "硫뗭쭊 寃껋쓣 ?④퍡 留뚮뱾?댁슂",
      subtitle: "?꾨줈?앺듃瑜??뚮젮二쇱꽭?? ?곸뾽??湲곗? 1???대궡???듬??쒕┰?덈떎.",
      name: "?대쫫", email: "?대찓??, company: "?뚯궗紐?(?좏깮)", message: "?대뼡 寃껋씠 ?꾩슂?섏꽭??",
      send: "硫붿떆吏 蹂대궡湲?, or: "?먮뒗 ?대찓?쇰줈 吏곸젒 臾몄쓽:",
    },
    footer: { tagline: "怨좉컼??紐⑥쑝???뱀궗?댄듃.", rights: "All rights reserved.", made: "VN Typhoon???붿옄?맞룹젣?묓뻽?듬땲??" },
  },

  /* ---------------------------------------------------------------- Vietnamese */
  vi: {
    nav: { services: "D沼땉h v沼?, portfolio: "D沼?찼n", about: "Gi沼쌻 thi沼뇎", process: "Quy tr챙nh", contact: "Li챗n h沼?, cta: "Nh梳춏 b찼o gi찼" },
    hero: {
      badge: "Studio thi梳퓍 k梳?& ph찼t tri沼긪 web",
      title: "Ch첬ng t척i x창y website thu h첬t kh찼ch h횪ng.",
      subtitle: "VN Typhoon thi梳퓍 k梳?v횪 ph찼t tri沼긪 website 휃a ng척n ng沼?nhanh, 휃梳퉝 cho doanh nghi沼뇈 ??v횪 b梳즣 tr챙 gi첬p b梳죒.",
      ctaPrimary: "Xem d沼?찼n",
      ctaSecondary: "B梳칣 휃梳쬾 d沼?찼n",
      s1: "D沼?찼n ho횪n th횪nh", s2: "Kh찼ch h횪ng h횪i l챵ng", s3: "N훱m kinh nghi沼뇅", s4: "T沼멵 휃沼?t梳즜 TB",
    },
    services: {
      title: "Ch첬ng t척i l횪m g챙",
      subtitle: "S梳즢 xu梳쩿 web tr沼뛫 g처i, t沼?ph찼c th梳즣 휃梳쬾 ti챗n 휃梳퓆 ra m梳칣 v횪 h퉤n th梳?",
      i1t: "Thi梳퓍 k梳?web", i1d: "Giao di沼뇆 hi沼뇆 휃梳죍, s梳죅h s梳? ph첫 h沼즤 v沼쌻 th튼퉤ng hi沼뇎 c沼쬪 b梳죒.",
      i2t: "Ph찼t tri沼긪", i2d: "Website vi梳퓍 tay, c沼켧 nhanh, n沼걆 t梳즢g v沼칗g ch梳칌, b沼걆 v沼칗g.",
      i3t: "Th튼퉤ng m梳죍 휃i沼뇆 t沼?, i3d: "C沼춁 h횪ng tr沼켧 tuy梳퓆 bi梳퓆 kh찼ch gh챕 th훱m th횪nh ng튼沼쓎 mua.",
      i4t: "휂a ng척n ng沼?, i4d: "V튼퉤n ra th梳?gi沼쌻 ??website n처i ng척n ng沼?c沼쬪 kh찼ch h횪ng.",
      i5t: "SEO & T沼멵 휃沼?, i5d: "Trang s梳탇 s횪ng cho t챙m ki梳퓅, nhanh v횪 chuy沼긪 휃沼뷼 cao.",
      i6t: "B梳즣 tr챙 mi沼꿳 ph챠", i6d: "Lo hosting, c梳춑 nh梳춗, s沼춁 l沼뾦 ??휃沼?web lu척n ho梳죜 휃沼셬g.",
    },
    portfolio: {
      title: "D沼?찼n ti챗u bi沼긳",
      subtitle: "M沼셳 v횪i website ch첬ng t척i t沼?h횪o 휃찾 th沼켧 hi沼뇆.",
      all: "T梳쩿 c梳?, web: "Website", shop: "TM휂T", brand: "Th튼퉤ng hi沼뇎", app: "Web app",
      p1t: "Aurora Studio", p1c: "Website doanh nghi沼뇈", p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "C沼춁 h횪ng online", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "Th튼퉤ng hi沼뇎 & web", p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "Web app 휃梳톞 l沼땉h", p4m: "App",
      p5t: "Saigon Eats", p5c: "Chu沼뾦 nh횪 h횪ng", p5m: "Web",
      p6t: "Lumen Travel", p6c: "C沼븂g 휃a ng척n ng沼?, p6m: "Web",
      view: "Xem chi ti梳퓍",
    },
    about: {
      title: "Studio nh沼?v沼쌻 ti챗u chu梳쯰 l沼썀",
      p1: "VN Typhoon l횪 c척ng ty s梳즢 xu梳쩿 website. Ch첬ng t척i 휃沼뱊g h횪nh c첫ng nh횪 s찼ng l梳춑 v횪 휃沼셢 ng크 휃沼?bi梳퓆 첵 t튼沼웢g th횪nh website 휃梳퉝, t梳즜 t沼쯢 th챙 v횪 b찼n h횪ng.",
      p2: "M沼뾦 d沼?찼n 휃튼沼즓 l횪m th沼?c척ng, ki沼긩 th沼?tr챗n m沼뛦 thi梳퓍 b沼?v횪 b沼걆 v沼칗g ??sau 휃처 ch첬ng t척i b梳즣 tr챙 mi沼꿳 ph챠.",
      f1: "B찼o gi찼 c沼?휃沼땙h, kh척ng b梳쩿 ng沼?, f2: "Ra m梳칣 trong v횪i tu梳쬷", f3: "B梳죒 s沼?h沼칤 m찾 & n沼셢 dung", f4: "Ng튼沼쓎 th梳춗, ph梳즢 h沼밿 nhanh",
    },
    process: {
      title: "C찼ch ch첬ng t척i l횪m vi沼놻",
      subtitle: "L沼?tr챙nh 휃퉤n gi梳즢, minh b梳죅h t沼?첵 t튼沼웢g 휃梳퓆 ra m梳칣.",
      s1t: "T챙m hi沼긳", s1d: "Hi沼긳 m沼쩭 ti챗u, kh찼ch h횪ng v횪 th튼퉤ng hi沼뇎 c沼쬪 b梳죒.",
      s2t: "Thi梳퓍 k梳?, s2d: "T梳죓 giao di沼뇆 t沼쳌g m횪n h챙nh m沼셳.",
      s3t: "X창y d沼켷g", s3d: "Ph찼t tri沼긪, t沼멼 튼u v횪 ki沼긩 th沼?m沼뛦 th沼?",
      s4t: "Ra m梳칣", s4d: "L챗n s처ng ??r沼밿 b梳즣 tr챙 mi沼꿳 ph챠.",
    },
    contact: {
      title: "C첫ng t梳죓 n챗n 휃i沼걏 tuy沼뇍 v沼쓎",
      subtitle: "H찾y k沼?v沼?d沼?찼n c沼쬪 b梳죒. Ch첬ng t척i ph梳즢 h沼밿 trong m沼셳 ng횪y l횪m vi沼놻.",
      name: "T챗n c沼쬪 b梳죒", email: "Email", company: "C척ng ty (t첫y ch沼뛫)", message: "B梳죒 c梳쬷 g챙?",
      send: "G沼춊 tin nh梳칗", or: "ho梳톍 g沼춊 email tr沼켧 ti梳퓈 휃梳퓆",
    },
    footer: { tagline: "Website thu h첬t kh찼ch h횪ng.", rights: "B梳즣 l튼u m沼뛦 quy沼걆.", made: "Thi梳퓍 k梳?& x창y d沼켷g b沼웙 VN Typhoon." },
  },

  /* ---------------------------------------------------------------- Chinese */
  zh: {
    nav: { services: "?띶뒦", portfolio: "旅덁풃", about: "?념틢?묇뺄", process: "役곭쮮", contact: "?붺내", cta: "?룟룚?δ뻔" },
    hero: {
      badge: "營묌〉溫얕?訝롥??묈램鵝쒎?",
      title: "?묇뺄?볣좄꺗壅℡풓若€댎?꾤퐨塋쇻?,
      subtitle: "VN Typhoon 訝뷸쐣?김킓?꾡펯訝싪?溫▼??묈엮?잆곭꼐獰롧쉪鸚싪?鼇營묊쳶竊뚦뭉訝뷸궓?곭뺌瀯닸뒪??,
      ctaPrimary: "?η쐦旅덁풃",
      ctaSecondary: "凉冶뗩」??,
      s1: "雅ㅴ퍡窈밭쎅", s2: "譯→꼷若€댎", s3: "亮당퍘謠?, s4: "亮녑쓦?좄슬",
    },
    services: {
      title: "?묇뺄?싦?阿?,
      subtitle: "餓롥닜葉욕댆訝딁봇阿껇눛阿뗥릮竊뚧룓堊쏁ク?곁ク?꾤퐨塋쇿댍鵝쒌?,
      i1t: "營묌〉溫얕?", i1d: "嶸域곭렟餓ｇ쉪?뚪씊竊뚪뇧翁ュ쪗?덃궓?꾢뱚?뚥툗若€댎??,
      i2t: "營묊쳶凉??, i2d: "?뗥램煐뽫쟻?곫엨?잌뒥饔쏙펽?뷰틢葉녑쎓?뚦뎺?사쉪?뜻엫??,
      i3t: "?드춴?녶뒦", i3d: "?딂?若℡룜?먧물若띰펽?뤻?????뚧닇?욜쉪?①봇?녶틭??,
      i4t: "鸚싪?鼇", i4d: "壅겼릲訝뽫븣?붴붺뵪若€댎?꾥?鼇雅ㅶ탛?꾤퐨塋쇻?,
      i5t: "SEO 訝롩잌벧", i5d: "?℡릲?쒐뇨?곫엨?잋툝遙섋쉬?뽫쉪窈들씊??,
      i6t: "?띹뉩瀯닸뒪", i6d: "?섊??곫쎍?겻툗岳?쨳?ⓨ똿?붴붻?營묊쳶?곭뺌瓦먫죱??,
    },
    portfolio: {
      title: "暎얗됪죭堊?,
      subtitle: "?묇뺄凉뺜빳訝뷴궟?꾦깿?녵퐳?곥?,
      all: "?③깿", web: "營묊쳶", shop: "?드븚", brand: "?곭뎹", app: "營묌〉佯붺뵪",
      p1t: "Aurora Studio", p1c: "鴉곦툣營묊쳶", p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "?①봇?녶틭", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "?곭뎹訝롧퐨塋?, p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "窯꾤벧營묌〉佯붺뵪", p4m: "App",
      p5t: "Saigon Eats", p5c: "瓦욇봺繞먬?", p5m: "Web",
      p6t: "Lumen Travel", p6c: "鸚싪?鼇?ⓩ댎", p6m: "Web",
      view: "?η쐦旅덁풃",
    },
    about: {
      title: "弱뤷램鵝쒎?竊뚪쳵?뉐뇛",
      p1: "VN Typhoon ???若띄퐨塋쇿댍鵝쒎뀶?멥귝닊餓т툗?쎾쭓雅뷴뭽??삜?덁퐳竊뚧뒍?쎿꼷?섉닇暎양풆?곭쭜凉訝붻꺗躍?씎???쉪營묊쳶??,
      p2: "驪뤶릉窈밭쎅?썹꼐恙껃댍鵝쒌곮랬溫얍쨭役뗨캊?곭퍘阿낁먪뵪?붴붶툓瀛욕릮?묇뺄?먧풘?띹뉩?곭뺌瀯닸뒪??,
      f1: "?뷴츣?δ뻔竊뚨퍦?졿꼷鸚?, f2: "?겼뫅訝딁봇竊뚩뚪씆?경쐢", f3: "餓ｇ쟻訝롥냵若밧퐩?ⓩ???, f4: "?잋볶?띶뒦竊뚦엮?잌썮鸚?,
    },
    process: {
      title: "?덁퐳役곭쮮",
      subtitle: "餓롥닗?뤷댆訝딁봇竊뚨??뺡뤸삇??,
      s1t: "?묊렟", s1d: "雅녻㎗?①쉪??젃?곩룛鴉쀤툗?곭뎹??,
      s2t: "溫얕?", s2d: "?먨콓?볡（鰲녻쭑訝롣퐪謠뚣?,
      s3t: "凉??, s3d: "凉?묆곦폍?뽩뭉?③씊役뗨캊??,
      s4t: "訝딁봇", s4d: "閭ｅ폀?묈툋?붴붺꽫?롥뀓兀밭뺨?ㅳ?,
    },
    contact: {
      title: "訝壅룡돀?졾눣?꿰쉪鵝쒎뱚",
      subtitle: "?딂칹?묇뺄?①쉪窈밭쎅竊뚧닊餓у컛?ⓧ?訝ゅ램鵝쒏뿥?끻썮鸚띲?,
      name: "?①쉪冶볟릫", email: "???", company: "?у뤈竊덆됧∥竊?, message: "?③?誤곦?阿덌폕",
      send: "?묌곦에??, or: "?뽫쎍?ε룕??뻑??,
    },
    footer: { tagline: "壅℡풓若€댎?꾤퐨塋쇻?, rights: "?덃쓢??됥?, made: "??VN Typhoon 溫얕?訝롥??묆? },
  },

  /* ---------------------------------------------------------------- Japanese */
  ja: {
    nav: { services: "?듐꺖?볝궧", portfolio: "若잏맘", about: "鴉싩ㅎ礖귟쫨", process: "?꿔굙??, contact: "?듿븦?꾢릦?뤵걵", cta: "誤뗧찉?귙굤堊앶졏" },
    hero: {
      badge: "Web ?뉎궣?ㅳ꺍?삯뼀?뷩궧?욍궦??,
      title: "窈㎩??믤꺓?띲겇?묆굥?╉궒?뽧궢?ㅳ깉?믢퐳?듽겲?쇻?,
      subtitle: "VN Typhoon ??곲잆걦??풆?쀣걚鸚싪?沃욁궢?ㅳ깉?믦Þ鼇덀꺕?뗧쇇?쀣곩뀶?뗥풄??퓷若덀겲?㎯걡餓삠걵?꾠걼?졼걨?얇걲??,
      ctaPrimary: "若잏맘?믦쫳??,
      ctaSecondary: "?쀣꺆?멥궒??깉?믣쭓?곥굥",
      s1: "榮띶뱚若잏맘", s2: "繹擁녈걚?잆걽?꾠걼窈㎩?", s3: "亮담겗永뚪쮶", s4: "亮녑쓦沃?씔?잌벧",
    },
    services: {
      title: "?먧풘?듐꺖?볝궧",
      subtitle: "??앫겗?밤궞?껁긽?뗣굢?ч뼀?곥걹??뀍?얇겎?귙궑?㎯깣?뜸퐳??걲?밤겍?믡?,
      i1t: "Web ?뉎궣?ㅳ꺍", i1d: "?뽧꺀?녈깋?③¨若㏂겓?덀굩?쎼걼?곫킋渶담걬?뚣걼?얌빰?꾠겒?뉎궣?ㅳ꺍??,
      i2t: "?뗧쇇", i2d: "?뗦쎑?띲궠?쇈깋?㎬텈遙섌잆귛쟿?㏂겎弱녷씎?㎯겗?귙굥?븀썶??,
      i3t: "EC ?듐궎??, i3d: "鼇ゅ븦?끹굮蘊쇔뀯?끹겓鸚됥걟?곩２訝듽겏?ⓦ굚?ユ닇?룔걲?뗣궧?덀궋??,
      i4t: "鸚싪?沃욃?恙?, i4d: "訝뽫븣?멤붴붼¨若㏂겗鼇沃욁겎沃욁굥?╉궒?뽧궢?ㅳ깉??,
      i5t: "SEO?삯잌벧", i5d: "濾쒐뇨?ュ섭?뤵곮텈遙섌잆겎?곫닇?쒌겓?ㅳ겒?뚣굥?싥꺖?멥?,
      i6t: "?→뼑岳앭츍", i6d: "?쎼궧?녴궍?녈궛?삥쎍?겹꺕岳???얇겎野얍퓶?귙궢?ㅳ깉??땿?띸텥?묆겲?쇻?,
    },
    portfolio: {
      title: "訝삠겒若잏맘",
      subtitle: "?や에?믤똻?ｃ겍?딂쫳?쎼겎?띲굥?뜸퐳雅뗤풃?㎯걲??,
      all: "?쇻겧??, web: "?╉궒?뽧궢?ㅳ깉", shop: "EC", brand: "?뽧꺀?녈깈?ｃ꺍??, app: "Web ?㏂깤??,
      p1t: "Aurora Studio", p1c: "?녈꺖?앫꺃?쇈깉?듐궎??, p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "?ゃ꺍?⒲궎?녈궧?덀궋", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "?뽧꺀?녈깋 & ?듐궎??, p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "雅덄큵 Web ?㏂깤??, p4m: "App",
      p5t: "Saigon Eats", p5c: "繇꿴짘?곥궒?쇈꺍", p5m: "Web",
      p6t: "Lumen Travel", p6c: "鸚싪?沃욁깮?쇈궭??, p6m: "Web",
      view: "雅뗤풃?믦쫳??,
    },
    about: {
      title: "弱뤵걬?뤵겍?귛읃繹뽧겘遙섅걚?밤궭?멥궕",
      p1: "VN Typhoon ??궑?㎯깣?뜸퐳鴉싩ㅎ?㎯걲?귛돲璵?끹굜?곥꺖?졼겏?긱겓?곥궋?ㅳ깈?㏂굮獰롢걮?뤶??с겎?뗣걤?곩２訝듽겓?ㅳ겒?뚣굥?듐궎?덀겦?ⓨ쨯?덀겲?쇻?,
      p2: "?쇻겧?╉겗旅덁뻑?믢툈野㎯겓?뜸퐳?쀣곥걗?됥굞?뗧ク?ャ겎?녴궧?덀걮?곲빓?뤶슴?덀굥?덀걝?ャ귛뀶?뗥풄??꽒?쇾퓷若덀겎??걟泳싥걨?얇걲??,
      f1: "?뷴츣誤뗧찉?귙굤?곮옙?좄꼇?ⓦ겒??, f2: "?겹걢?덀겎??겒?뤸빊?깁뼋?㎩뀶??, f3: "?녈꺖?됥겏?끻???걡若€쭣??굚??, f4: "雅뷩걣野얍퓶?곭킔?⒲걚瓦붶에",
    },
    process: {
      title: "?꿔굙??,
      subtitle: "?㏂궎?뉎궋?뗣굢?ч뼀?얇겎?곥궥?녈깤?ャ겎?롥엮?ャ?,
      s1t: "?븃쫳", s1d: "??쮽?삯¨若㏂꺕?뽧꺀?녈깋?믥릤鰲ｃ걮?얇걲??,
      s2t: "?뉎궣?ㅳ꺍", s2d: "?삯씊?붵겏?ヨ쫳?잏쎅?ⓧ퐪蟯볝굮鵝쒌굤?얇걲??,
      s3t: "?뗧쇇", s3d: "?뗧쇇?삥??⒴뙑?삠깇?밤깉?믦죱?꾠겲?쇻?,
      s4t: "?ч뼀", s4d: "?ч뼀孃뚣겘?→뼑?㏛퓷若덀걮?얇걲??,
    },
    contact: {
      title: "榮졿쇀?됥걮?꾠굚??굮訝渶믡겓",
      subtitle: "?쀣꺆?멥궒??깉?믡걡?욁걢?쎼걦?졼걬?꾠??뜻??δ빳?끹겓瓦붶에?쀣겲?쇻?,
      name: "?듿릫??, email: "?▲꺖??, company: "鴉싩ㅎ?랃펷餓삥꼷竊?, message: "?붻쫨?쎼겘竊?,
      send: "?곦에?쇻굥", or: "?얇걼??쎍?γ깳?쇈꺂??,
    },
    footer: { tagline: "窈㎩??믤꺓?띲겇?묆굥?╉궒?뽧궢?ㅳ깉??, rights: "?→뼪邕?펹?믥쫨?섅겲?쇻?, made: "VN Typhoon ?뚩Þ鼇덀꺕?뗧쇇?? },
  },

  /* ---------------------------------------------------------------- Spanish */
  es: {
    nav: { services: "Servicios", portfolio: "Proyectos", about: "Nosotros", process: "Proceso", contact: "Contacto", cta: "Pedir presupuesto" },
    hero: {
      badge: "Estudio de dise챰o y desarrollo web",
      title: "Creamos sitios web que ganan clientes.",
      subtitle: "VN Typhoon dise챰a y desarrolla sitios web multiling체es, r찼pidos y bonitos ??y los mantiene por ti.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Iniciar proyecto",
      s1: "Proyectos entregados", s2: "Clientes felices", s3: "A챰os de oficio", s4: "Carga media",
    },
    services: {
      title: "Qu챕 hacemos",
      subtitle: "Producci처n web integral, del primer boceto al lanzamiento y m찼s all찼.",
      i1t: "Dise챰o web", i1d: "Interfaces limpias y modernas a la medida de tu marca.",
      i2t: "Desarrollo", i2d: "Sitios programados a mano, ultrarr찼pidos y duraderos.",
      i3t: "E-commerce", i3d: "Tiendas online que convierten visitas en compras.",
      i4t: "Multiling체e", i4d: "Llega al mundo ??webs que hablan el idioma de tu cliente.",
      i5t: "SEO y velocidad", i5d: "P찼ginas veloces, listas para buscar y convertir.",
      i6t: "Mantenimiento gratis", i6d: "Hosting, actualizaciones y arreglos incluidos.",
    },
    portfolio: {
      title: "Trabajos destacados",
      subtitle: "Algunas webs que nos enorgullece haber lanzado.",
      all: "Todos", web: "Webs", shop: "E-commerce", brand: "Marca", app: "Apps web",
      p1t: "Aurora Studio", p1c: "Web corporativa", p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "Tienda online", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "Marca y web", p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "App de reservas", p4m: "App",
      p5t: "Saigon Eats", p5c: "Cadena de restaurantes", p5m: "Web",
      p6t: "Lumen Travel", p6c: "Portal multiling체e", p6m: "Web",
      view: "Ver caso",
    },
    about: {
      title: "Un estudio peque챰o con un gran est찼ndar",
      p1: "VN Typhoon es una empresa de producci처n web. Nos asociamos con fundadores y equipos para convertir ideas en webs que lucen, cargan al instante y venden.",
      p2: "Cada proyecto se hace a mano, se prueba en todos los dispositivos y se construye para durar ??luego lo mantenemos gratis.",
      f1: "Presupuesto fijo, sin sorpresas", f2: "Lanzamiento en semanas", f3: "El c처digo y contenido son tuyos", f4: "Personas reales, respuestas r찼pidas",
    },
    process: {
      title: "C처mo trabajamos",
      subtitle: "Un camino simple y transparente de la idea al lanzamiento.",
      s1t: "Descubrir", s1d: "Conocemos tus metas, p첬blico y marca.",
      s2t: "Dise챰ar", s2d: "Creamos el aspecto pantalla a pantalla.",
      s3t: "Construir", s3d: "Desarrollamos, optimizamos y probamos todo.",
      s4t: "Lanzar", s4d: "Publicamos ??y mantenemos gratis.",
    },
    contact: {
      title: "Construyamos algo genial",
      subtitle: "Cu챕ntanos tu proyecto. Respondemos en un d챠a h찼bil.",
      name: "Tu nombre", email: "Email", company: "Empresa (opcional)", message: "쩔Qu챕 necesitas?",
      send: "Enviar mensaje", or: "o escr챠benos directamente a",
    },
    footer: { tagline: "Webs que ganan clientes.", rights: "Todos los derechos reservados.", made: "Dise챰ado y creado por VN Typhoon." },
  },

  /* ---------------------------------------------------------------- French */
  fr: {
    nav: { services: "Services", portfolio: "R챕alisations", about: "? propos", process: "M챕thode", contact: "Contact", cta: "Demander un devis" },
    hero: {
      badge: "Studio de design et d챕veloppement web",
      title: "Nous cr챕ons des sites qui s챕duisent vos clients.",
      subtitle: "VN Typhoon con챌oit et d챕veloppe des sites multilingues rapides et 챕l챕gants ??et en assure la maintenance pour vous.",
      ctaPrimary: "Voir nos r챕alisations",
      ctaSecondary: "D챕marrer un projet",
      s1: "Projets livr챕s", s2: "Clients satisfaits", s3: "Ans de m챕tier", s4: "Chargement moyen",
    },
    services: {
      title: "Ce que nous faisons",
      subtitle: "Production web de bout en bout, du premier croquis 횪 la mise en ligne.",
      i1t: "Design web", i1d: "Interfaces 챕pur챕es et modernes, 횪 l'image de votre marque.",
      i2t: "D챕veloppement", i2d: "Sites cod챕s 횪 la main, ultrarapides et durables.",
      i3t: "E-commerce", i3d: "Des boutiques qui transforment les visiteurs en clients.",
      i4t: "Multilingue", i4d: "Rayonnez ??des sites qui parlent la langue de vos clients.",
      i5t: "SEO & vitesse", i5d: "Des pages rapides, optimis챕es pour le r챕f챕rencement.",
      i6t: "Maintenance gratuite", i6d: "H챕bergement, mises 횪 jour et corrections inclus.",
    },
    portfolio: {
      title: "R챕alisations choisies",
      subtitle: "Quelques sites que nous sommes fiers d'avoir livr챕s.",
      all: "Tous", web: "Sites", shop: "E-commerce", brand: "Branding", app: "Apps web",
      p1t: "Aurora Studio", p1c: "Site corporate", p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "Boutique en ligne", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "Marque & site", p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "App de r챕servation", p4m: "App",
      p5t: "Saigon Eats", p5c: "Cha챤ne de restaurants", p5m: "Web",
      p6t: "Lumen Travel", p6c: "Portail multilingue", p6m: "Web",
      view: "Voir le cas",
    },
    about: {
      title: "Un petit studio aux grandes exigences",
      p1: "VN Typhoon est une entreprise de production web. Nous accompagnons fondateurs et 챕quipes pour transformer les id챕es en sites 챕l챕gants, instantan챕s et qui vendent.",
      p2: "Chaque projet est fait main, test챕 sur tous les appareils et con챌u pour durer ??puis nous le maintenons gratuitement.",
      f1: "Devis fixe, sans surprise", f2: "En ligne en quelques semaines", f3: "Code et contenu vous appartiennent", f4: "De vrais humains, r챕ponses rapides",
    },
    process: {
      title: "Notre m챕thode",
      subtitle: "Un parcours simple et transparent, de l'id챕e au lancement.",
      s1t: "D챕couvrir", s1d: "Nous cernons vos objectifs, public et marque.",
      s2t: "Concevoir", s2d: "Nous fa챌onnons le rendu, 챕cran par 챕cran.",
      s3t: "D챕velopper", s3d: "Nous d챕veloppons, optimisons et testons tout.",
      s4t: "Lancer", s4d: "Mise en ligne ??puis maintenance gratuite.",
    },
    contact: {
      title: "Cr챕ons quelque chose de grand",
      subtitle: "Parlez-nous de votre projet. R챕ponse sous un jour ouvr챕.",
      name: "Votre nom", email: "Email", company: "Soci챕t챕 (facultatif)", message: "De quoi avez-vous besoin ?",
      send: "Envoyer le message", or: "ou 챕crivez-nous directement 횪",
    },
    footer: { tagline: "Des sites qui s챕duisent vos clients.", rights: "Tous droits r챕serv챕s.", made: "Con챌u et r챕alis챕 par VN Typhoon." },
  },

  /* ---------------------------------------------------------------- German */
  de: {
    nav: { services: "Leistungen", portfolio: "Arbeiten", about: "횥ber uns", process: "Ablauf", contact: "Kontakt", cta: "Angebot anfordern" },
    hero: {
      badge: "Studio f체r Webdesign & Entwicklung",
      title: "Wir bauen Websites, die Kunden gewinnen.",
      subtitle: "VN Typhoon gestaltet und entwickelt schnelle, sch철ne, mehrsprachige Websites ??und wartet sie f체r Sie.",
      ctaPrimary: "Arbeiten ansehen",
      ctaSecondary: "Projekt starten",
      s1: "Projekte geliefert", s2: "Zufriedene Kunden", s3: "Jahre Erfahrung", s4: "횠 Ladezeit",
    },
    services: {
      title: "Was wir tun",
      subtitle: "Web-Produktion von A bis Z ??von der Skizze bis zum Launch und dar체ber hinaus.",
      i1t: "Webdesign", i1d: "Klare, moderne Oberfl채chen, passend zu Ihrer Marke.",
      i2t: "Entwicklung", i2d: "Handgecodete, blitzschnelle Sites auf solidem Fundament.",
      i3t: "E-Commerce", i3d: "Online-Shops, die Besucher zu K채ufern machen.",
      i4t: "Mehrsprachig", i4d: "Erreichen Sie die Welt ??in der Sprache Ihrer Kunden.",
      i5t: "SEO & Tempo", i5d: "Schnelle, suchoptimierte Seiten, die konvertieren.",
      i6t: "Kostenlose Wartung", i6d: "Hosting, Updates und Fixes inklusive.",
    },
    portfolio: {
      title: "Ausgew채hlte Arbeiten",
      subtitle: "Einige Websites, auf die wir stolz sind.",
      all: "Alle", web: "Websites", shop: "E-Commerce", brand: "Branding", app: "Web-Apps",
      p1t: "Aurora Studio", p1c: "Unternehmenswebsite", p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "Online-Shop", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "Marke & Website", p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "Buchungs-Web-App", p4m: "App",
      p5t: "Saigon Eats", p5c: "Restaurantkette", p5m: "Web",
      p6t: "Lumen Travel", p6c: "Mehrsprachiges Portal", p6m: "Web",
      view: "Fall ansehen",
    },
    about: {
      title: "Ein kleines Studio mit gro횩em Anspruch",
      p1: "VN Typhoon ist eine Web-Produktionsfirma. Wir machen aus Ideen Websites, die scharf aussehen, sofort laden und verkaufen.",
      p2: "Jedes Projekt wird handgefertigt, auf allen Ger채ten getestet und f체r die Dauer gebaut ??danach warten wir es kostenlos.",
      f1: "Festpreis, keine 횥berraschungen", f2: "Launch in Wochen, nicht Monaten", f3: "Code & Inhalte geh철ren Ihnen", f4: "Echte Menschen, schnelle Antwort",
    },
    process: {
      title: "So arbeiten wir",
      subtitle: "Ein einfacher, transparenter Weg von der Idee zum Launch.",
      s1t: "Entdecken", s1d: "Wir verstehen Ziele, Zielgruppe und Marke.",
      s2t: "Gestalten", s2d: "Wir formen Look & Feel, Screen f체r Screen.",
      s3t: "Bauen", s3d: "Wir entwickeln, optimieren und testen alles.",
      s4t: "Launch", s4d: "Online gehen ??dann kostenlos warten.",
    },
    contact: {
      title: "Lassen Sie uns Gro횩es bauen",
      subtitle: "Erz채hlen Sie uns von Ihrem Projekt. Antwort binnen eines Werktags.",
      name: "Ihr Name", email: "E-Mail", company: "Firma (optional)", message: "Was brauchen Sie?",
      send: "Nachricht senden", or: "oder schreiben Sie direkt an",
    },
    footer: { tagline: "Websites, die Kunden gewinnen.", rights: "Alle Rechte vorbehalten.", made: "Gestaltet & gebaut von VN Typhoon." },
  },

  /* ---------------------------------------------------------------- Russian */
  ru: {
    nav: { services: "叫?剋?均龜", portfolio: "?逵閨棘??", about: "? 戟逵?", process: "??棘?筠??", contact: "?棘戟?逵克??", cta: "?棘剋??龜?? ?逵????" },
    hero: {
      badge: "鬼??畇龜? 勻筠閨-畇龜鈞逵橘戟逵 龜 ?逵鈞?逵閨棘?克龜",
      title: "?? ?棘鈞畇逵?劇 ?逵橘??, 克棘?棘??筠 極?龜勻棘畇?? 克剋龜筠戟?棘勻.",
      subtitle: "VN Typhoon 極?棘筠克?龜??筠? 龜 ?逵鈞?逵閨逵??勻逵筠? 閨?????筠, 克?逵?龜勻?筠 劇戟棘均棘?鈞??戟?筠 ?逵橘?? ??龜 棘閨?剋?菌龜勻逵筠? 龜? 鈞逵 勻逵?.",
      ctaPrimary: "鬼劇棘??筠?? ?逵閨棘??",
      ctaSecondary: "?逵?逵?? 極?棘筠克?",
      s1: "??棘筠克?棘勻 ?畇逵戟棘", s2: "?棘勻棘剋?戟?? 克剋龜筠戟?棘勻", s3: "?筠? 棘極??逵", s4: "鬼?. 鈞逵均??鈞克逵",
    },
    services: {
      title: "槻?棘 劇? 畇筠剋逵筠劇",
      subtitle: "?棘剋戟?橘 ?龜克剋 勻筠閨-極?棘龜鈞勻棘畇??勻逵 ??棘? 極筠?勻棘均棘 ??克龜鈞逵 畇棘 鈞逵極??克逵 龜 畇逵剋筠筠.",
      i1t: "?筠閨-畇龜鈞逵橘戟", i1d: "槻龜???筠 ?棘勻?筠劇筠戟戟?筠 龜戟?筠??筠橘?? 極棘畇 勻逵? 閨?筠戟畇.",
      i2t: "?逵鈞?逵閨棘?克逵", i2d: "鬼逵橘??, 戟逵極龜?逵戟戟?筠 勻???戟??, 劇棘剋戟龜筠戟棘?戟?筠 龜 戟逵畇?菌戟?筠.",
      i3t: "E-commerce", i3d: "?逵均逵鈞龜戟?, 極?筠勻?逵?逵??龜筠 極棘?筠?龜?筠剋筠橘 勻 極棘克?極逵?筠剋筠橘.",
      i4t: "?戟棘均棘?鈞??戟棘???", i4d: "???棘畇龜?筠 勻 劇龜? ???逵橘? 均棘勻棘?龜? 戟逵 ?鈞?克筠 克剋龜筠戟?逵.",
      i5t: "SEO 龜 ?克棘?棘???", i5d: "??????筠 ???逵戟龜??, 均棘?棘勻?筠 克 極棘龜?克? 龜 克棘戟勻筠??龜龜.",
      i6t: "?筠?極剋逵?戟逵? 極棘畇畇筠?菌克逵", i6d: "奎棘??龜戟均, 棘閨戟棘勻剋筠戟龜? 龜 極?逵勻克龜 ???逵橘? 勻?筠均畇逵 ?逵閨棘?逵筠?.",
    },
    portfolio: {
      title: "?鈞閨?逵戟戟?筠 ?逵閨棘??",
      subtitle: "?筠?克棘剋?克棘 ?逵橘?棘勻, 克棘?棘??劇龜 劇? 均棘?畇龜劇??.",
      all: "??筠", web: "鬼逵橘??", shop: "E-commerce", brand: "??筠戟畇龜戟均", app: "?筠閨-極?龜剋棘菌筠戟龜?",
      p1t: "Aurora Studio", p1c: "?棘?極棘?逵?龜勻戟?橘 ?逵橘?", p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "?戟?筠?戟筠?-劇逵均逵鈞龜戟", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "??筠戟畇 龜 ?逵橘?", p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "鬼筠?勻龜? 鈞逵極龜?龜", p4m: "App",
      p5t: "Saigon Eats", p5c: "鬼筠?? ?筠??棘?逵戟棘勻", p5m: "Web",
      p6t: "Lumen Travel", p6c: "?戟棘均棘?鈞??戟?橘 極棘??逵剋", p6m: "Web",
      view: "鬼劇棘??筠?? 克筠橘?",
    },
    about: {
      title: "?逵剋筠戟?克逵? ???畇龜? ? 勻??棘克棘橘 極剋逵戟克棘橘",
      p1: "VN Typhoon ??克棘劇極逵戟龜? 極棘 極?棘龜鈞勻棘畇??勻? ?逵橘?棘勻. ?? 極?筠勻?逵?逵筠劇 龜畇筠龜 勻 ?逵橘??, 克棘?棘??筠 勻?均剋?畇?? ???克棘, 棘?克??勻逵???? 劇均戟棘勻筠戟戟棘 龜 極?棘畇逵??.",
      p2: "?逵菌畇?橘 極?棘筠克? 畇筠剋逵筠??? 勻???戟??, ?筠??龜??筠??? 戟逵 勻?筠? ????棘橘??勻逵? 龜 ?剋?菌龜? 畇棘剋均棘 ??逵 極棘?棘劇 劇? 閨筠?極剋逵?戟棘 筠均棘 棘閨?剋?菌龜勻逵筠劇.",
      f1: "圭龜克?龜?棘勻逵戟戟逵? ?劇筠?逵, 閨筠鈞 ???極?龜鈞棘勻", f2: "?逵極??克 鈞逵 戟筠畇筠剋龜, 戟筠 劇筠????", f3: "?棘畇 龜 克棘戟?筠戟? 極?龜戟逵畇剋筠菌逵? 勻逵劇", f4: "?龜勻?筠 剋?畇龜, 閨?????筠 棘?勻筠??",
    },
    process: {
      title: "?逵克 劇? ?逵閨棘?逵筠劇",
      subtitle: "??棘??棘橘 龜 極?棘鈞?逵?戟?橘 極??? 棘? 龜畇筠龜 畇棘 鈞逵極??克逵.",
      s1t: "?鈞??逵筠劇", s1d: "叫鈞戟逵?劇 ?筠剋龜, 逵?畇龜?棘?龜? 龜 閨?筠戟畇.",
      s2t: "??棘筠克?龜??筠劇", s2d: "鬼棘鈞畇逵?劇 勻龜畇 龜 棘???筠戟龜筠, ?克?逵戟 鈞逵 ?克?逵戟棘劇.",
      s3t: "?逵鈞?逵閨逵??勻逵筠劇", s3d: "?逵鈞?逵閨逵??勻逵筠劇, 棘極?龜劇龜鈞龜??筠劇 龜 ?筠??龜??筠劇.",
      s4t: "?逵極??克逵筠劇", s4d: "??閨剋龜克?筠劇 ??龜 棘閨?剋?菌龜勻逵筠劇 閨筠?極剋逵?戟棘.",
    },
    contact: {
      title: "鬼棘鈞畇逵畇龜劇 ??棘-?棘 克???棘筠",
      subtitle: "?逵??克逵菌龜?筠 棘 極?棘筠克?筠. ??勻筠?龜劇 勻 ?筠?筠戟龜筠 ?逵閨棘?筠均棘 畇戟?.",
      name: "?逵?筠 龜劇?", email: "Email", company: "?棘劇極逵戟龜? (戟筠棘閨?鈞逵?筠剋?戟棘)", message: "槻?棘 勻逵劇 戟?菌戟棘?",
      send: "??極?逵勻龜??", or: "龜剋龜 戟逵極龜?龜?筠 戟逵劇 戟逵極??劇??",
    },
    footer: { tagline: "鬼逵橘??, 克棘?棘??筠 極?龜勻棘畇?? 克剋龜筠戟?棘勻.", rights: "??筠 極?逵勻逵 鈞逵?龜?筠戟?.", made: "?龜鈞逵橘戟 龜 ?逵鈞?逵閨棘?克逵 ??VN Typhoon." },
  },

  /* ---------------------------------------------------------------- Arabic (RTL) */
  ar: {
    nav: { services: "碼?漠膜?碼魔", portfolio: "粒晩?碼??碼", about: "?? ?幕?", process: "笠??馬 碼?晩??", contact: "魔?碼巒?", cta: "碼慢?磨 晩邈彎 卍晩邈" },
    hero: {
      badge: "碼卍魔?膜?? 魔巒??? ?魔慢??邈 碼???磨",
      title: "?磨?? ??碼?晩 魔?卍磨 碼?晩??碼立.",
      subtitle: "魔巒??? VN Typhoon ?魔慢??邈 ??碼?晩 ?魔晩膜膜馬 碼??曼碼魔 卍邈?晩馬 ?寞???馬 ???魔魔???? 巒?碼?魔?碼 ??碼磨馬? 晩??.",
      ctaPrimary: "娩碼?膜 粒晩?碼??碼",
      ctaSecondary: "碼磨膜粒 ?娩邈?晩?碼",
      s1: "?娩碼邈?晩 ??寞万馬", s2: "晩??碼立 卍晩膜碼立", s3: "卍??碼魔 漠磨邈馬", s4: "?魔?卍慢 碼?魔幕???",
    },
    services: {
      title: "?碼 ???? 磨?",
      subtitle: "瑪?魔碼寞 ??磨 ?魔?碼??? ?? 粒?? 邈卍? 幕魔? 碼?瑪慢?碼? ??碼 磨晩膜?.",
      i1t: "魔巒??? 碼???磨", i1d: "?碼寞?碼魔 粒???馬 ?晩巒邈?馬 ??巒??馬 晩?? 晩?碼?魔? 碼?魔寞碼邈?馬.",
      i2t: "碼?魔慢??邈", i2d: "??碼?晩 ??魔?磨馬 ?膜???碼? ?碼痲?馬 碼?卍邈晩馬 ?晩?? 粒卍碼卍 ?魔??.",
      i3t: "碼?魔寞碼邈馬 碼?瑪??魔邈???馬", i3d: "?魔碼寞邈 魔幕??? 碼?万?碼邈 瑪?? ?娩魔邈?? ?魔??? ?晩 ?磨?晩碼魔?.",
      i4t: "?魔晩膜膜 碼??曼碼魔", i4d: "巒?? 瑪?? 碼?晩碼?? ?????晩 ?魔幕膜麻 ?曼馬 晩??碼痲?.",
      i5t: "碼?卍?? ?碼?卍邈晩馬", i5d: "巒?幕碼魔 卍邈?晩馬 寞碼?万馬 ??磨幕麻 ?晩碼??馬 碼?魔幕???.",
      i6t: "巒?碼?馬 ?寞碼??馬", i6d: "碼卍魔彎碼?馬 ?魔幕膜?麻碼魔 ?瑪巒?碼幕碼魔 ????磨?? ???晩? ?晩?? 膜碼痲??碼.",
    },
    portfolio: {
      title: "粒晩?碼? ?漠魔碼邈馬",
      subtitle: "磨晩彎 碼???碼?晩 碼?魔? ??漠邈 磨瑪慢?碼??碼.",
      all: "碼???", web: "??碼?晩", shop: "?魔碼寞邈", brand: "???馬", app: "魔慢磨??碼魔 ??磨",
      p1t: "Aurora Studio", p1c: "???晩 娩邈?馬", p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "?魔寞邈 瑪??魔邈???", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "???馬 ????晩", p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "魔慢磨?? 幕寞万", p4m: "App",
      p5t: "Saigon Eats", p5c: "卍?卍?馬 ?慢碼晩?", p5m: "Web",
      p6t: "Lumen Travel", p6c: "磨?碼磨馬 ?魔晩膜膜馬 碼??曼碼魔", p6m: "Web",
      view: "晩邈彎 碼?幕碼?馬",
    },
    about: {
      title: "碼卍魔?膜?? 巒曼?邈 磨?晩碼??邈 ?磨?邈馬",
      p1: "?뢛N Typhoon 娩邈?馬 瑪?魔碼寞 ??碼?晩. ?晩?? ?晩 碼??摩卍卍?? ?碼??邈? ?魔幕??? 碼?粒??碼邈 瑪?? ??碼?晩 粒???馬 魔?魔幕 ??邈?碼 ?魔磨?晩.",
      p2: "?? ?娩邈?晩 ?巒??晩 磨晩?碼?馬 ??漠魔磨邈 晩?? ?? 碼?粒寞?万馬 ??磨?? ??膜?? ??麻? ?魔???? 巒?碼?魔? ?寞碼??碼.",
      f1: "晩邈彎 卍晩邈 麻碼磨魔 膜?? ??碼寞笠魔", f2: "瑪慢?碼? 漠?碼? 粒卍碼磨?晩 ?碼 粒娩?邈", f3: "碼???膜 ?碼??幕魔?? ????", f4: "磨娩邈 幕?????? ?邈膜?膜 卍邈?晩馬",
    },
    process: {
      title: "??? ?晩??",
      subtitle: "?卍碼邈 磨卍?慢 ?娩?碼? ?? 碼???邈馬 瑪?? 碼?瑪慢?碼?.",
      s1t: "碼?碼?魔娩碼?", s1d: "???? 粒?膜碼?? ?寞???邈? ?晩?碼?魔?.",
      s2t: "碼?魔巒???", s2d: "?巒?曼 碼?娩?? ?碼?瑪幕卍碼卍 娩碼娩馬 磨娩碼娩馬.",
      s3t: "碼?磨?碼立", s3d: "?慢??邈 ??幕卍?? ??漠魔磨邈 ?? 娩?立.",
      s4t: "碼?瑪慢?碼?", s4d: "??娩邈? ??麻? ?巒??? ?寞碼??碼.",
    },
    contact: {
      title: "??巒?晩 娩?痲?碼 邈碼痲晩?碼",
      subtitle: "幕膜?麻?碼 晩? ?娩邈?晩?. ?邈膜 漠?碼? ??? 晩?? ?碼幕膜.",
      name: "碼卍??", email: "碼?磨邈?膜 碼?瑪??魔邈???", company: "碼?娩邈?馬 (碼漠魔?碼邈?)", message: "?碼莫碼 魔幕魔碼寞?",
      send: "粒邈卍? 碼?邈卍碼?馬", or: "粒? 邈碼卍??碼 ?磨碼娩邈馬 晩??",
    },
    footer: { tagline: "??碼?晩 魔?卍磨 碼?晩??碼立.", rights: "?? 碼?幕??? ?幕??挽馬.", made: "魔巒??? ?魔慢??邈 VN Typhoon." },
  },
};

/* ==========================================================================
   Engine ??DOM ?곸슜 / ?몄뼱 ?꾪솚 / ???   ========================================================================== */

function lookup(dict, path) {
  return path.split(".").reduce((o, k) => (o && o[k] != null ? o[k] : null), dict);
}

function applyLanguage(code) {
  const dict = TRANSLATIONS[code] || TRANSLATIONS.en;
  const meta = LANGS.find((l) => l.code === code) || LANGS[0];

  // ?띿뒪???곸슜
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = lookup(dict, el.getAttribute("data-i18n"));
    if (val != null) el.textContent = val;
  });
  // placeholder ?곸슜
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const val = lookup(dict, el.getAttribute("data-i18n-ph"));
    if (val != null) el.setAttribute("placeholder", val);
  });

  // 臾몄꽌 諛⑺뼢/?몄뼱
  document.documentElement.lang = code;
  document.documentElement.dir = meta.dir;

  // ?꾩옱 ?몄뼱 ?쒖떆 ?낅뜲?댄듃
  const current = document.getElementById("langCurrent");
  if (current) current.textContent = meta.code.toUpperCase();

  // ?쒖꽦 ?쒖떆
  document.querySelectorAll("[data-lang-option]").forEach((b) => {
    b.setAttribute("aria-selected", b.getAttribute("data-lang-option") === code ? "true" : "false");
  });

  try { localStorage.setItem("vnt_lang", code); } catch (e) {}
}

function initLanguageMenu() {
  const menu = document.getElementById("langMenu");
  if (!menu) return;
  menu.innerHTML = LANGS.map(
    (l) =>
      `<button role="option" data-lang-option="${l.code}" aria-selected="false">
         <span class="flag">${l.flag}</span><span>${l.label}</span>
       </button>`
  ).join("");
  menu.querySelectorAll("[data-lang-option]").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang-option"));
      document.getElementById("langSwitch")?.classList.remove("open");
    });
  });
}

function detectInitialLang() {
  try {
    const saved = localStorage.getItem("vnt_lang");
    if (saved && TRANSLATIONS[saved]) return saved;
  } catch (e) {}
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return TRANSLATIONS[nav] ? nav : "en";
}

window.VNT_I18N = { LANGS, TRANSLATIONS, applyLanguage, initLanguageMenu, detectInitialLang };

