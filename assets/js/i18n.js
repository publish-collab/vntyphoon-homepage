/* ==========================================================================
   VN Typhoon — Internationalization (i18n)
   --------------------------------------------------------------------------
   유지보수 안내:
   - 텍스트를 바꾸려면 아래 LANGS / TRANSLATIONS 객체만 수정하면 됩니다.
   - 언어를 추가하려면 LANGS 배열과 TRANSLATIONS에 같은 코드의 항목을 더하세요.
   - HTML에서는 data-i18n="hero.title" 형태로 키를 연결합니다.
   ========================================================================== */

const LANGS = [
  { code: "en", label: "English",  flag: "🇺🇸", dir: "ltr" },
  { code: "ko", label: "한국어",    flag: "🇰🇷", dir: "ltr" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳", dir: "ltr" },
  { code: "zh", label: "中文",       flag: "🇨🇳", dir: "ltr" },
  { code: "ja", label: "日本語",     flag: "🇯🇵", dir: "ltr" },
  { code: "es", label: "Español",   flag: "🇪🇸", dir: "ltr" },
  { code: "fr", label: "Français",  flag: "🇫🇷", dir: "ltr" },
  { code: "de", label: "Deutsch",   flag: "🇩🇪", dir: "ltr" },
  { code: "ru", label: "Русский",   flag: "🇷🇺", dir: "ltr" },
  { code: "ar", label: "العربية",   flag: "🇸🇦", dir: "rtl" },
];

const TRANSLATIONS = {
  /* ---------------------------------------------------------------- English */
  en: {
    nav: { services: "Services", portfolio: "Work", about: "About", process: "Process", contact: "Contact", cta: "Get a quote" },
    hero: {
      badge: "Web design & development studio",
      title: "We build websites that win customers.",
      subtitle: "VN Typhoon designs and develops fast, beautiful, multilingual websites for ambitious companies — and maintains them for you.",
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
      i4t: "Multilingual", i4d: "Reach the world — sites built to speak your customers' language.",
      i5t: "SEO & Speed", i5d: "Search-ready, blazing-fast pages that rank and convert.",
      i6t: "Free Maintenance", i6d: "Hosting, updates and fixes handled — so your site just keeps working.",
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
      p2: "Every project is hand-crafted, tested across devices, and built to last — then we keep it running with free ongoing maintenance.",
      f1: "Fixed quotes, no surprises", f2: "Launch in weeks, not months", f3: "Own your code & content", f4: "Real humans, fast replies",
    },
    process: {
      title: "How we work",
      subtitle: "A simple, transparent path from idea to launch.",
      s1t: "Discover", s1d: "We learn your goals, audience and brand.",
      s2t: "Design", s2d: "We craft the look and feel, screen by screen.",
      s3t: "Build", s3d: "We develop, optimize and test everything.",
      s4t: "Launch", s4d: "We go live — then maintain it for free.",
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
    nav: { services: "서비스", portfolio: "포트폴리오", about: "회사소개", process: "진행과정", contact: "문의", cta: "견적 받기" },
    hero: {
      badge: "웹 디자인 · 개발 스튜디오",
      title: "고객을 모으는 웹사이트를 만듭니다.",
      subtitle: "VN Typhoon은 빠르고 아름다운 다국어 웹사이트를 디자인·개발하고, 출시 후 유지보수까지 책임집니다.",
      ctaPrimary: "포트폴리오 보기",
      ctaSecondary: "프로젝트 시작하기",
      s1: "완료한 프로젝트", s2: "만족한 고객사", s3: "년의 경험", s4: "평균 로딩 속도",
    },
    services: {
      title: "제공 서비스",
      subtitle: "기획부터 출시, 그 이후까지 — 웹 제작의 모든 것을 책임집니다.",
      i1t: "웹 디자인", i1d: "브랜드와 고객에 꼭 맞춘 깔끔하고 현대적인 디자인.",
      i2t: "웹 개발", i2d: "탄탄한 기반 위에 직접 코딩한, 빠르고 견고한 웹사이트.",
      i3t: "이커머스", i3d: "방문자를 구매자로 바꾸고 매출과 함께 성장하는 온라인 스토어.",
      i4t: "다국어 지원", i4d: "전 세계로 — 고객의 언어로 말하는 웹사이트.",
      i5t: "SEO · 속도", i5d: "검색에 강하고 번개처럼 빠른, 전환되는 페이지.",
      i6t: "무료 유지보수", i6d: "호스팅·업데이트·수정까지 — 사이트가 늘 정상 작동하도록.",
    },
    portfolio: {
      title: "주요 작업",
      subtitle: "자신 있게 선보이는 제작 사례입니다.",
      all: "전체", web: "웹사이트", shop: "이커머스", brand: "브랜딩", app: "웹앱",
      p1t: "오로라 스튜디오", p1c: "기업 웹사이트", p1m: "Web",
      p2t: "미라 코스메틱", p2c: "온라인 스토어", p2m: "Shop",
      p3t: "노스윈드 뱅크", p3c: "브랜드 & 사이트", p3m: "Brand",
      p4t: "펄스 피트니스", p4c: "예약 웹앱", p4m: "App",
      p5t: "사이공 잇츠", p5c: "외식 체인", p5m: "Web",
      p6t: "루멘 트래블", p6c: "다국어 포털", p6m: "Web",
      view: "사례 보기",
    },
    about: {
      title: "작지만 기준은 높은 스튜디오",
      p1: "VN Typhoon은 웹사이트 제작 회사입니다. 창업가·마케터·팀과 함께 아이디어를, 보기 좋고 즉시 열리며 매출로 이어지는 웹사이트로 만듭니다.",
      p2: "모든 프로젝트는 직접 제작하고 모든 기기에서 테스트하며 오래 가도록 만듭니다. 출시 후에는 무료 유지보수로 계속 관리합니다.",
      f1: "고정 견적, 추가 비용 없음", f2: "몇 달이 아닌 몇 주 안에 출시", f3: "코드·콘텐츠는 고객 소유", f4: "사람이 직접, 빠른 응답",
    },
    process: {
      title: "진행 과정",
      subtitle: "아이디어에서 출시까지, 간단하고 투명한 과정.",
      s1t: "발견", s1d: "목표·고객·브랜드를 깊이 이해합니다.",
      s2t: "디자인", s2d: "화면 하나하나 룩앤필을 설계합니다.",
      s3t: "개발", s3d: "개발·최적화·테스트를 모두 진행합니다.",
      s4t: "출시", s4d: "오픈한 뒤 무료로 유지보수합니다.",
    },
    contact: {
      title: "멋진 것을 함께 만들어요",
      subtitle: "프로젝트를 알려주세요. 영업일 기준 1일 이내에 답변드립니다.",
      name: "이름", email: "이메일", company: "회사명 (선택)", message: "어떤 것이 필요하세요?",
      send: "메시지 보내기", or: "또는 이메일로 직접 문의:",
    },
    footer: { tagline: "고객을 모으는 웹사이트.", rights: "All rights reserved.", made: "VN Typhoon이 디자인·제작했습니다." },
  },

  /* ---------------------------------------------------------------- Vietnamese */
  vi: {
    nav: { services: "Dịch vụ", portfolio: "Dự án", about: "Giới thiệu", process: "Quy trình", contact: "Liên hệ", cta: "Nhận báo giá" },
    hero: {
      badge: "Studio thiết kế & phát triển web",
      title: "Chúng tôi xây website thu hút khách hàng.",
      subtitle: "VN Typhoon thiết kế và phát triển website đa ngôn ngữ nhanh, đẹp cho doanh nghiệp — và bảo trì giúp bạn.",
      ctaPrimary: "Xem dự án",
      ctaSecondary: "Bắt đầu dự án",
      s1: "Dự án hoàn thành", s2: "Khách hàng hài lòng", s3: "Năm kinh nghiệm", s4: "Tốc độ tải TB",
    },
    services: {
      title: "Chúng tôi làm gì",
      subtitle: "Sản xuất web trọn gói, từ phác thảo đầu tiên đến ra mắt và hơn thế.",
      i1t: "Thiết kế web", i1d: "Giao diện hiện đại, sạch sẽ, phù hợp với thương hiệu của bạn.",
      i2t: "Phát triển", i2d: "Website viết tay, cực nhanh, nền tảng vững chắc, bền vững.",
      i3t: "Thương mại điện tử", i3d: "Cửa hàng trực tuyến biến khách ghé thăm thành người mua.",
      i4t: "Đa ngôn ngữ", i4d: "Vươn ra thế giới — website nói ngôn ngữ của khách hàng.",
      i5t: "SEO & Tốc độ", i5d: "Trang sẵn sàng cho tìm kiếm, nhanh và chuyển đổi cao.",
      i6t: "Bảo trì miễn phí", i6d: "Lo hosting, cập nhật, sửa lỗi — để web luôn hoạt động.",
    },
    portfolio: {
      title: "Dự án tiêu biểu",
      subtitle: "Một vài website chúng tôi tự hào đã thực hiện.",
      all: "Tất cả", web: "Website", shop: "TMĐT", brand: "Thương hiệu", app: "Web app",
      p1t: "Aurora Studio", p1c: "Website doanh nghiệp", p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "Cửa hàng online", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "Thương hiệu & web", p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "Web app đặt lịch", p4m: "App",
      p5t: "Saigon Eats", p5c: "Chuỗi nhà hàng", p5m: "Web",
      p6t: "Lumen Travel", p6c: "Cổng đa ngôn ngữ", p6m: "Web",
      view: "Xem chi tiết",
    },
    about: {
      title: "Studio nhỏ với tiêu chuẩn lớn",
      p1: "VN Typhoon là công ty sản xuất website. Chúng tôi đồng hành cùng nhà sáng lập và đội ngũ để biến ý tưởng thành website đẹp, tải tức thì và bán hàng.",
      p2: "Mỗi dự án được làm thủ công, kiểm thử trên mọi thiết bị và bền vững — sau đó chúng tôi bảo trì miễn phí.",
      f1: "Báo giá cố định, không bất ngờ", f2: "Ra mắt trong vài tuần", f3: "Bạn sở hữu mã & nội dung", f4: "Người thật, phản hồi nhanh",
    },
    process: {
      title: "Cách chúng tôi làm việc",
      subtitle: "Lộ trình đơn giản, minh bạch từ ý tưởng đến ra mắt.",
      s1t: "Tìm hiểu", s1d: "Hiểu mục tiêu, khách hàng và thương hiệu của bạn.",
      s2t: "Thiết kế", s2d: "Tạo giao diện từng màn hình một.",
      s3t: "Xây dựng", s3d: "Phát triển, tối ưu và kiểm thử mọi thứ.",
      s4t: "Ra mắt", s4d: "Lên sóng — rồi bảo trì miễn phí.",
    },
    contact: {
      title: "Cùng tạo nên điều tuyệt vời",
      subtitle: "Hãy kể về dự án của bạn. Chúng tôi phản hồi trong một ngày làm việc.",
      name: "Tên của bạn", email: "Email", company: "Công ty (tùy chọn)", message: "Bạn cần gì?",
      send: "Gửi tin nhắn", or: "hoặc gửi email trực tiếp đến",
    },
    footer: { tagline: "Website thu hút khách hàng.", rights: "Bảo lưu mọi quyền.", made: "Thiết kế & xây dựng bởi VN Typhoon." },
  },

  /* ---------------------------------------------------------------- Chinese */
  zh: {
    nav: { services: "服务", portfolio: "案例", about: "关于我们", process: "流程", contact: "联系", cta: "获取报价" },
    hero: {
      badge: "网页设计与开发工作室",
      title: "我们打造能赢得客户的网站。",
      subtitle: "VN Typhoon 为有抱负的企业设计开发快速、精美的多语言网站，并为您持续维护。",
      ctaPrimary: "查看案例",
      ctaSecondary: "开始项目",
      s1: "交付项目", s2: "满意客户", s3: "年经验", s4: "平均加载",
    },
    services: {
      title: "我们做什么",
      subtitle: "从初稿到上线乃至之后，提供端到端的网站制作。",
      i1t: "网页设计", i1d: "简洁现代的界面，量身契合您的品牌与客户。",
      i2t: "网站开发", i2d: "手工编码、极速加载，基于稳固而前瞻的架构。",
      i3t: "电子商务", i3d: "把访客变成买家，随销售一同成长的在线商店。",
      i4t: "多语言", i4d: "走向世界——用客户的语言交流的网站。",
      i5t: "SEO 与速度", i5d: "面向搜索、极速且高转化的页面。",
      i6t: "免费维护", i6d: "托管、更新与修复全包——让网站持续运行。",
    },
    portfolio: {
      title: "精选案例",
      subtitle: "我们引以为傲的部分作品。",
      all: "全部", web: "网站", shop: "电商", brand: "品牌", app: "网页应用",
      p1t: "Aurora Studio", p1c: "企业网站", p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "在线商店", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "品牌与网站", p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "预约网页应用", p4m: "App",
      p5t: "Saigon Eats", p5c: "连锁餐饮", p5m: "Web",
      p6t: "Lumen Travel", p6c: "多语言门户", p6m: "Web",
      view: "查看案例",
    },
    about: {
      title: "小工作室，高标准",
      p1: "VN Typhoon 是一家网站制作公司。我们与创始人和团队合作，把创意变成精美、秒开且能带来销售的网站。",
      p2: "每个项目都精心制作、跨设备测试、经久耐用——上线后我们提供免费持续维护。",
      f1: "固定报价，绝无意外", f2: "数周上线，而非数月", f3: "代码与内容归您所有", f4: "真人服务，快速回复",
    },
    process: {
      title: "合作流程",
      subtitle: "从创意到上线，简单透明。",
      s1t: "发现", s1d: "了解您的目标、受众与品牌。",
      s2t: "设计", s2d: "逐屏打磨视觉与体验。",
      s3t: "开发", s3d: "开发、优化并全面测试。",
      s4t: "上线", s4d: "正式发布——然后免费维护。",
    },
    contact: {
      title: "一起打造出色的作品",
      subtitle: "告诉我们您的项目，我们将在一个工作日内回复。",
      name: "您的姓名", email: "邮箱", company: "公司（选填）", message: "您需要什么？",
      send: "发送信息", or: "或直接发邮件至",
    },
    footer: { tagline: "赢得客户的网站。", rights: "版权所有。", made: "由 VN Typhoon 设计与开发。" },
  },

  /* ---------------------------------------------------------------- Japanese */
  ja: {
    nav: { services: "サービス", portfolio: "実績", about: "会社概要", process: "進め方", contact: "お問い合わせ", cta: "見積もり依頼" },
    hero: {
      badge: "Web デザイン・開発スタジオ",
      title: "顧客を惹きつけるウェブサイトを作ります。",
      subtitle: "VN Typhoon は、速くて美しい多言語サイトを設計・開発し、公開後の保守までお任せいただけます。",
      ctaPrimary: "実績を見る",
      ctaSecondary: "プロジェクトを始める",
      s1: "納品実績", s2: "満足いただいた顧客", s3: "年の経験", s4: "平均読込速度",
    },
    services: {
      title: "提供サービス",
      subtitle: "最初のスケッチから公開、その先まで。ウェブ制作のすべてを。",
      i1t: "Web デザイン", i1d: "ブランドと顧客に合わせた、洗練された現代的なデザイン。",
      i2t: "開発", i2d: "手書きコードで超高速。堅牢で将来性のある基盤。",
      i3t: "EC サイト", i3d: "訪問者を購入者に変え、売上とともに成長するストア。",
      i4t: "多言語対応", i4d: "世界へ——顧客の言語で語るウェブサイト。",
      i5t: "SEO・速度", i5d: "検索に強く、超高速で、成果につながるページ。",
      i6t: "無料保守", i6d: "ホスティング・更新・修正まで対応。サイトは動き続けます。",
    },
    portfolio: {
      title: "主な実績",
      subtitle: "自信を持ってお見せできる制作事例です。",
      all: "すべて", web: "ウェブサイト", shop: "EC", brand: "ブランディング", app: "Web アプリ",
      p1t: "Aurora Studio", p1c: "コーポレートサイト", p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "オンラインストア", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "ブランド & サイト", p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "予約 Web アプリ", p4m: "App",
      p5t: "Saigon Eats", p5c: "飲食チェーン", p5m: "Web",
      p6t: "Lumen Travel", p6c: "多言語ポータル", p6m: "Web",
      view: "事例を見る",
    },
    about: {
      title: "小さくても基準は高いスタジオ",
      p1: "VN Typhoon はウェブ制作会社です。創業者やチームと共に、アイデアを美しく一瞬で開き、売上につながるサイトへと変えます。",
      p2: "すべての案件を丁寧に制作し、あらゆる端末でテストし、長く使えるように。公開後は無料保守で支え続けます。",
      f1: "固定見積もり、追加費用なし", f2: "数か月ではなく数週間で公開", f3: "コードと内容はお客様のもの", f4: "人が対応、素早い返信",
    },
    process: {
      title: "進め方",
      subtitle: "アイデアから公開まで、シンプルで明快に。",
      s1t: "発見", s1d: "目標・顧客・ブランドを理解します。",
      s2t: "デザイン", s2d: "画面ごとに見た目と体験を作ります。",
      s3t: "開発", s3d: "開発・最適化・テストを行います。",
      s4t: "公開", s4d: "公開後は無料で保守します。",
    },
    contact: {
      title: "素晴らしいものを一緒に",
      subtitle: "プロジェクトをお聞かせください。1営業日以内に返信します。",
      name: "お名前", email: "メール", company: "会社名（任意）", message: "ご要望は？",
      send: "送信する", or: "または直接メールを",
    },
    footer: { tagline: "顧客を惹きつけるウェブサイト。", rights: "無断転載を禁じます。", made: "VN Typhoon が設計・開発。" },
  },

  /* ---------------------------------------------------------------- Spanish */
  es: {
    nav: { services: "Servicios", portfolio: "Proyectos", about: "Nosotros", process: "Proceso", contact: "Contacto", cta: "Pedir presupuesto" },
    hero: {
      badge: "Estudio de diseño y desarrollo web",
      title: "Creamos sitios web que ganan clientes.",
      subtitle: "VN Typhoon diseña y desarrolla sitios web multilingües, rápidos y bonitos — y los mantiene por ti.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Iniciar proyecto",
      s1: "Proyectos entregados", s2: "Clientes felices", s3: "Años de oficio", s4: "Carga media",
    },
    services: {
      title: "Qué hacemos",
      subtitle: "Producción web integral, del primer boceto al lanzamiento y más allá.",
      i1t: "Diseño web", i1d: "Interfaces limpias y modernas a la medida de tu marca.",
      i2t: "Desarrollo", i2d: "Sitios programados a mano, ultrarrápidos y duraderos.",
      i3t: "E-commerce", i3d: "Tiendas online que convierten visitas en compras.",
      i4t: "Multilingüe", i4d: "Llega al mundo — webs que hablan el idioma de tu cliente.",
      i5t: "SEO y velocidad", i5d: "Páginas veloces, listas para buscar y convertir.",
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
      p6t: "Lumen Travel", p6c: "Portal multilingüe", p6m: "Web",
      view: "Ver caso",
    },
    about: {
      title: "Un estudio pequeño con un gran estándar",
      p1: "VN Typhoon es una empresa de producción web. Nos asociamos con fundadores y equipos para convertir ideas en webs que lucen, cargan al instante y venden.",
      p2: "Cada proyecto se hace a mano, se prueba en todos los dispositivos y se construye para durar — luego lo mantenemos gratis.",
      f1: "Presupuesto fijo, sin sorpresas", f2: "Lanzamiento en semanas", f3: "El código y contenido son tuyos", f4: "Personas reales, respuestas rápidas",
    },
    process: {
      title: "Cómo trabajamos",
      subtitle: "Un camino simple y transparente de la idea al lanzamiento.",
      s1t: "Descubrir", s1d: "Conocemos tus metas, público y marca.",
      s2t: "Diseñar", s2d: "Creamos el aspecto pantalla a pantalla.",
      s3t: "Construir", s3d: "Desarrollamos, optimizamos y probamos todo.",
      s4t: "Lanzar", s4d: "Publicamos — y mantenemos gratis.",
    },
    contact: {
      title: "Construyamos algo genial",
      subtitle: "Cuéntanos tu proyecto. Respondemos en un día hábil.",
      name: "Tu nombre", email: "Email", company: "Empresa (opcional)", message: "¿Qué necesitas?",
      send: "Enviar mensaje", or: "o escríbenos directamente a",
    },
    footer: { tagline: "Webs que ganan clientes.", rights: "Todos los derechos reservados.", made: "Diseñado y creado por VN Typhoon." },
  },

  /* ---------------------------------------------------------------- French */
  fr: {
    nav: { services: "Services", portfolio: "Réalisations", about: "À propos", process: "Méthode", contact: "Contact", cta: "Demander un devis" },
    hero: {
      badge: "Studio de design et développement web",
      title: "Nous créons des sites qui séduisent vos clients.",
      subtitle: "VN Typhoon conçoit et développe des sites multilingues rapides et élégants — et en assure la maintenance pour vous.",
      ctaPrimary: "Voir nos réalisations",
      ctaSecondary: "Démarrer un projet",
      s1: "Projets livrés", s2: "Clients satisfaits", s3: "Ans de métier", s4: "Chargement moyen",
    },
    services: {
      title: "Ce que nous faisons",
      subtitle: "Production web de bout en bout, du premier croquis à la mise en ligne.",
      i1t: "Design web", i1d: "Interfaces épurées et modernes, à l'image de votre marque.",
      i2t: "Développement", i2d: "Sites codés à la main, ultrarapides et durables.",
      i3t: "E-commerce", i3d: "Des boutiques qui transforment les visiteurs en clients.",
      i4t: "Multilingue", i4d: "Rayonnez — des sites qui parlent la langue de vos clients.",
      i5t: "SEO & vitesse", i5d: "Des pages rapides, optimisées pour le référencement.",
      i6t: "Maintenance gratuite", i6d: "Hébergement, mises à jour et corrections inclus.",
    },
    portfolio: {
      title: "Réalisations choisies",
      subtitle: "Quelques sites que nous sommes fiers d'avoir livrés.",
      all: "Tous", web: "Sites", shop: "E-commerce", brand: "Branding", app: "Apps web",
      p1t: "Aurora Studio", p1c: "Site corporate", p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "Boutique en ligne", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "Marque & site", p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "App de réservation", p4m: "App",
      p5t: "Saigon Eats", p5c: "Chaîne de restaurants", p5m: "Web",
      p6t: "Lumen Travel", p6c: "Portail multilingue", p6m: "Web",
      view: "Voir le cas",
    },
    about: {
      title: "Un petit studio aux grandes exigences",
      p1: "VN Typhoon est une entreprise de production web. Nous accompagnons fondateurs et équipes pour transformer les idées en sites élégants, instantanés et qui vendent.",
      p2: "Chaque projet est fait main, testé sur tous les appareils et conçu pour durer — puis nous le maintenons gratuitement.",
      f1: "Devis fixe, sans surprise", f2: "En ligne en quelques semaines", f3: "Code et contenu vous appartiennent", f4: "De vrais humains, réponses rapides",
    },
    process: {
      title: "Notre méthode",
      subtitle: "Un parcours simple et transparent, de l'idée au lancement.",
      s1t: "Découvrir", s1d: "Nous cernons vos objectifs, public et marque.",
      s2t: "Concevoir", s2d: "Nous façonnons le rendu, écran par écran.",
      s3t: "Développer", s3d: "Nous développons, optimisons et testons tout.",
      s4t: "Lancer", s4d: "Mise en ligne — puis maintenance gratuite.",
    },
    contact: {
      title: "Créons quelque chose de grand",
      subtitle: "Parlez-nous de votre projet. Réponse sous un jour ouvré.",
      name: "Votre nom", email: "Email", company: "Société (facultatif)", message: "De quoi avez-vous besoin ?",
      send: "Envoyer le message", or: "ou écrivez-nous directement à",
    },
    footer: { tagline: "Des sites qui séduisent vos clients.", rights: "Tous droits réservés.", made: "Conçu et réalisé par VN Typhoon." },
  },

  /* ---------------------------------------------------------------- German */
  de: {
    nav: { services: "Leistungen", portfolio: "Arbeiten", about: "Über uns", process: "Ablauf", contact: "Kontakt", cta: "Angebot anfordern" },
    hero: {
      badge: "Studio für Webdesign & Entwicklung",
      title: "Wir bauen Websites, die Kunden gewinnen.",
      subtitle: "VN Typhoon gestaltet und entwickelt schnelle, schöne, mehrsprachige Websites — und wartet sie für Sie.",
      ctaPrimary: "Arbeiten ansehen",
      ctaSecondary: "Projekt starten",
      s1: "Projekte geliefert", s2: "Zufriedene Kunden", s3: "Jahre Erfahrung", s4: "Ø Ladezeit",
    },
    services: {
      title: "Was wir tun",
      subtitle: "Web-Produktion von A bis Z — von der Skizze bis zum Launch und darüber hinaus.",
      i1t: "Webdesign", i1d: "Klare, moderne Oberflächen, passend zu Ihrer Marke.",
      i2t: "Entwicklung", i2d: "Handgecodete, blitzschnelle Sites auf solidem Fundament.",
      i3t: "E-Commerce", i3d: "Online-Shops, die Besucher zu Käufern machen.",
      i4t: "Mehrsprachig", i4d: "Erreichen Sie die Welt — in der Sprache Ihrer Kunden.",
      i5t: "SEO & Tempo", i5d: "Schnelle, suchoptimierte Seiten, die konvertieren.",
      i6t: "Kostenlose Wartung", i6d: "Hosting, Updates und Fixes inklusive.",
    },
    portfolio: {
      title: "Ausgewählte Arbeiten",
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
      title: "Ein kleines Studio mit großem Anspruch",
      p1: "VN Typhoon ist eine Web-Produktionsfirma. Wir machen aus Ideen Websites, die scharf aussehen, sofort laden und verkaufen.",
      p2: "Jedes Projekt wird handgefertigt, auf allen Geräten getestet und für die Dauer gebaut — danach warten wir es kostenlos.",
      f1: "Festpreis, keine Überraschungen", f2: "Launch in Wochen, nicht Monaten", f3: "Code & Inhalte gehören Ihnen", f4: "Echte Menschen, schnelle Antwort",
    },
    process: {
      title: "So arbeiten wir",
      subtitle: "Ein einfacher, transparenter Weg von der Idee zum Launch.",
      s1t: "Entdecken", s1d: "Wir verstehen Ziele, Zielgruppe und Marke.",
      s2t: "Gestalten", s2d: "Wir formen Look & Feel, Screen für Screen.",
      s3t: "Bauen", s3d: "Wir entwickeln, optimieren und testen alles.",
      s4t: "Launch", s4d: "Online gehen — dann kostenlos warten.",
    },
    contact: {
      title: "Lassen Sie uns Großes bauen",
      subtitle: "Erzählen Sie uns von Ihrem Projekt. Antwort binnen eines Werktags.",
      name: "Ihr Name", email: "E-Mail", company: "Firma (optional)", message: "Was brauchen Sie?",
      send: "Nachricht senden", or: "oder schreiben Sie direkt an",
    },
    footer: { tagline: "Websites, die Kunden gewinnen.", rights: "Alle Rechte vorbehalten.", made: "Gestaltet & gebaut von VN Typhoon." },
  },

  /* ---------------------------------------------------------------- Russian */
  ru: {
    nav: { services: "Услуги", portfolio: "Работы", about: "О нас", process: "Процесс", contact: "Контакты", cta: "Получить расчёт" },
    hero: {
      badge: "Студия веб-дизайна и разработки",
      title: "Мы создаём сайты, которые приводят клиентов.",
      subtitle: "VN Typhoon проектирует и разрабатывает быстрые, красивые многоязычные сайты — и обслуживает их за вас.",
      ctaPrimary: "Смотреть работы",
      ctaSecondary: "Начать проект",
      s1: "Проектов сдано", s2: "Довольных клиентов", s3: "Лет опыта", s4: "Ср. загрузка",
    },
    services: {
      title: "Что мы делаем",
      subtitle: "Полный цикл веб-производства — от первого эскиза до запуска и далее.",
      i1t: "Веб-дизайн", i1d: "Чистые современные интерфейсы под ваш бренд.",
      i2t: "Разработка", i2d: "Сайты, написанные вручную, молниеносные и надёжные.",
      i3t: "E-commerce", i3d: "Магазины, превращающие посетителей в покупателей.",
      i4t: "Многоязычность", i4d: "Выходите в мир — сайт говорит на языке клиента.",
      i5t: "SEO и скорость", i5d: "Быстрые страницы, готовые к поиску и конверсии.",
      i6t: "Бесплатная поддержка", i6d: "Хостинг, обновления и правки — сайт всегда работает.",
    },
    portfolio: {
      title: "Избранные работы",
      subtitle: "Несколько сайтов, которыми мы гордимся.",
      all: "Все", web: "Сайты", shop: "E-commerce", brand: "Брендинг", app: "Веб-приложения",
      p1t: "Aurora Studio", p1c: "Корпоративный сайт", p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "Интернет-магазин", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "Бренд и сайт", p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "Сервис записи", p4m: "App",
      p5t: "Saigon Eats", p5c: "Сеть ресторанов", p5m: "Web",
      p6t: "Lumen Travel", p6c: "Многоязычный портал", p6m: "Web",
      view: "Смотреть кейс",
    },
    about: {
      title: "Маленькая студия с высокой планкой",
      p1: "VN Typhoon — компания по производству сайтов. Мы превращаем идеи в сайты, которые выглядят чётко, открываются мгновенно и продают.",
      p2: "Каждый проект делается вручную, тестируется на всех устройствах и служит долго — а потом мы бесплатно его обслуживаем.",
      f1: "Фиксированная смета, без сюрпризов", f2: "Запуск за недели, не месяцы", f3: "Код и контент принадлежат вам", f4: "Живые люди, быстрые ответы",
    },
    process: {
      title: "Как мы работаем",
      subtitle: "Простой и прозрачный путь от идеи до запуска.",
      s1t: "Изучаем", s1d: "Узнаём цели, аудиторию и бренд.",
      s2t: "Проектируем", s2d: "Создаём вид и ощущение, экран за экраном.",
      s3t: "Разрабатываем", s3d: "Разрабатываем, оптимизируем и тестируем.",
      s4t: "Запускаем", s4d: "Публикуем — и обслуживаем бесплатно.",
    },
    contact: {
      title: "Создадим что-то крутое",
      subtitle: "Расскажите о проекте. Ответим в течение рабочего дня.",
      name: "Ваше имя", email: "Email", company: "Компания (необязательно)", message: "Что вам нужно?",
      send: "Отправить", or: "или напишите нам напрямую",
    },
    footer: { tagline: "Сайты, которые приводят клиентов.", rights: "Все права защищены.", made: "Дизайн и разработка — VN Typhoon." },
  },

  /* ---------------------------------------------------------------- Arabic (RTL) */
  ar: {
    nav: { services: "الخدمات", portfolio: "أعمالنا", about: "من نحن", process: "آلية العمل", contact: "تواصل", cta: "اطلب عرض سعر" },
    hero: {
      badge: "استوديو تصميم وتطوير الويب",
      title: "نبني مواقع تكسب العملاء.",
      subtitle: "تصمّم VN Typhoon وتطوّر مواقع متعددة اللغات سريعة وجميلة — وتتولّى صيانتها نيابةً عنك.",
      ctaPrimary: "شاهد أعمالنا",
      ctaSecondary: "ابدأ مشروعًا",
      s1: "مشاريع منجزة", s2: "عملاء سعداء", s3: "سنوات خبرة", s4: "متوسط التحميل",
    },
    services: {
      title: "ما نقوم به",
      subtitle: "إنتاج ويب متكامل، من أول رسم حتى الإطلاق وما بعده.",
      i1t: "تصميم الويب", i1d: "واجهات أنيقة وعصرية مفصّلة على علامتك التجارية.",
      i2t: "التطوير", i2d: "مواقع مكتوبة يدويًا، فائقة السرعة وعلى أساس متين.",
      i3t: "التجارة الإلكترونية", i3d: "متاجر تحوّل الزوار إلى مشترين وتنمو مع مبيعاتك.",
      i4t: "متعدد اللغات", i4d: "صِل إلى العالم — موقع يتحدث لغة عملائك.",
      i5t: "السيو والسرعة", i5d: "صفحات سريعة جاهزة للبحث وعالية التحويل.",
      i6t: "صيانة مجانية", i6d: "استضافة وتحديثات وإصلاحات — ليبقى موقعك يعمل دائمًا.",
    },
    portfolio: {
      title: "أعمال مختارة",
      subtitle: "بعض المواقع التي نفخر بإطلاقها.",
      all: "الكل", web: "مواقع", shop: "متاجر", brand: "هوية", app: "تطبيقات ويب",
      p1t: "Aurora Studio", p1c: "موقع شركة", p1m: "Web",
      p2t: "Mira Cosmetics", p2c: "متجر إلكتروني", p2m: "Shop",
      p3t: "Northwind Bank", p3c: "هوية وموقع", p3m: "Brand",
      p4t: "Pulse Fitness", p4c: "تطبيق حجز", p4m: "App",
      p5t: "Saigon Eats", p5c: "سلسلة مطاعم", p5m: "Web",
      p6t: "Lumen Travel", p6c: "بوابة متعددة اللغات", p6m: "Web",
      view: "عرض الحالة",
    },
    about: {
      title: "استوديو صغير بمعايير كبيرة",
      p1: "‏VN Typhoon شركة إنتاج مواقع. نعمل مع المؤسسين والفرق لتحويل الأفكار إلى مواقع أنيقة تفتح فورًا وتبيع.",
      p2: "كل مشروع مصنوع بعناية ومختبر على كل الأجهزة ومبني ليدوم — ثم نتولّى صيانته مجانًا.",
      f1: "عرض سعر ثابت دون مفاجآت", f2: "إطلاق خلال أسابيع لا أشهر", f3: "الكود والمحتوى ملكك", f4: "بشر حقيقيون وردود سريعة",
    },
    process: {
      title: "كيف نعمل",
      subtitle: "مسار بسيط وشفاف من الفكرة إلى الإطلاق.",
      s1t: "الاكتشاف", s1d: "نفهم أهدافك وجمهورك وعلامتك.",
      s2t: "التصميم", s2d: "نصوغ الشكل والإحساس شاشة بشاشة.",
      s3t: "البناء", s3d: "نطوّر ونحسّن ونختبر كل شيء.",
      s4t: "الإطلاق", s4d: "ننشره — ثم نصونه مجانًا.",
    },
    contact: {
      title: "لنصنع شيئًا رائعًا",
      subtitle: "حدّثنا عن مشروعك. نرد خلال يوم عمل واحد.",
      name: "اسمك", email: "البريد الإلكتروني", company: "الشركة (اختياري)", message: "ماذا تحتاج؟",
      send: "أرسل الرسالة", or: "أو راسلنا مباشرة على",
    },
    footer: { tagline: "مواقع تكسب العملاء.", rights: "كل الحقوق محفوظة.", made: "تصميم وتطوير VN Typhoon." },
  },
};

/* ==========================================================================
   Engine — DOM 적용 / 언어 전환 / 저장
   ========================================================================== */

function lookup(dict, path) {
  return path.split(".").reduce((o, k) => (o && o[k] != null ? o[k] : null), dict);
}

function applyLanguage(code) {
  const dict = TRANSLATIONS[code] || TRANSLATIONS.en;
  const meta = LANGS.find((l) => l.code === code) || LANGS[0];

  // 텍스트 적용
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = lookup(dict, el.getAttribute("data-i18n"));
    if (val != null) el.textContent = val;
  });
  // placeholder 적용
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const val = lookup(dict, el.getAttribute("data-i18n-ph"));
    if (val != null) el.setAttribute("placeholder", val);
  });

  // 문서 방향/언어
  document.documentElement.lang = code;
  document.documentElement.dir = meta.dir;

  // 현재 언어 표시 업데이트
  const current = document.getElementById("langCurrent");
  if (current) current.textContent = meta.code.toUpperCase();

  // 활성 표시
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
