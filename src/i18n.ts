export type Lang = "en" | "ja";

export const translations = {
  en: {
    nav: {
      logo: "PM Portfolio",
      links: [
        { label: "About", href: "#about" },
        { label: "What I Do", href: "#what-i-do" },
        { label: "Skills", href: "#skills" },
        { label: "Tech Stack", href: "#tech-stack" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
      ],
    },
    hero: {
      badge: "Available for Projects",
      title: "Project Manager",
      tagline: "Tech-Savvy · End-to-End Delivery · 2+ Years Experience",
      description:
        "I help teams successfully deliver software projects — from external design to testing — with strong ownership, structured management, and solid technical understanding.",
      cta1: "What I Do",
      cta2: "Get in Touch",
    },
    about: {
      title: "Background",
      sub: "Who I am and what I bring",
      body1Text:
        "With 2+ years of experience as a Project Manager and a hands-on background in software development, I specialize in managing the full development lifecycle while effectively bridging the gap between business and engineering teams.",
      body1Highlight: "2+ years of experience",
      body2Text:
        "My experience spans eCommerce, Finance, Healthcare, Recruitment, and more — delivering projects end-to-end from planning through release.",
      body2Highlight: "eCommerce, Finance, Healthcare, Recruitment",
      stats: [
        { number: "2+", label: "Years as PM" },
        { number: "6+", label: "Domains" },
        { number: "7+", label: "Tech Stacks" },
      ],
      strengths: [
        { title: "Bridge Builder", desc: "Connect business and engineering teams with clear, effective communication." },
        { title: "Problem Solver", desc: "Drive projects forward and resolve blockers quickly before they escalate." },
        { title: "Full Ownership", desc: "Take complete responsibility of the project lifecycle from start to finish." },
        { title: "Tech-Aware PM", desc: "Identify technical risks early using a hands-on developer's perspective." },
      ],
    },
    whatIDo: {
      title: "What I Do Best",
      sub: "Core capabilities across PM and engineering",
      pm: {
        icon: "📋",
        title: "Project Management",
        items: [
          "End-to-End Project Management (Planning, Design, Development, Testing, Release)",
          "Requirement Definition & External Design",
          "Agile / Scrum / Waterfall Project Execution",
          "Task & Progress Management (Jira, Backlog, Trello)",
          "Team Coordination (Developers, Designers, QA)",
          "Risk Management & Issue Resolution",
          "Client & Stakeholder Communication",
          "Quality Assurance & Testing Coordination",
        ],
      },
      tech: {
        icon: "💻",
        title: "Technical Background",
        intro: "My hands-on programming experience enables me to:",
        items: [
          "Communicate smoothly with engineers",
          "Understand system architecture and technical constraints",
          "Support technical discussions and decision-making",
          "Identify risks early from a technical perspective",
        ],
      },
    },
    skills: {
      title: "Skills",
      sub: "Areas of expertise",
      categories: {
        "Project Management": [
          "Requirement Management",
          "Architectural Design",
          "Design Mockup",
          "Functional Prototype",
          "QA Engineering",
        ],
        Development: ["React", "React Native", "Flutter", "TypeScript", "Python", "Laravel"],
        "Engineering & Infrastructure": ["API Development", "Database Architecture", "Architecture", "DevOps"],
      },
    },
    techStack: {
      title: "Tech Stack",
      sub: "Technologies I work with",
      categoryLabel: "Category",
      stackLabel: "Stack",
      items: [
        { category: "Languages", stack: "JavaScript / TypeScript, Java, Python" },
        { category: "Frontend", stack: "React, React Native, Flutter" },
        { category: "Backend", stack: "Node.js, Spring Boot, Laravel" },
        { category: "Architecture", stack: "REST APIs, Microservices" },
        { category: "Database", stack: "MySQL, PostgreSQL" },
        { category: "Cloud", stack: "AWS (EC2, S3, etc.)" },
        { category: "DevOps", stack: "Git, CI/CD" },
      ],
    },
    experience: {
      title: "Project Experience",
      sub: "Domains I have delivered projects in",
      items: [
        { domain: "eCommerce", icon: "🛒" },
        { domain: "Finance", icon: "💹" },
        { domain: "Healthcare", icon: "🏥" },
        { domain: "Recruitment", icon: "🤝" },
        { domain: "Internal Systems / CRM", icon: "🏢" },
        { domain: "Data Management & Analytics", icon: "📊" },
      ],
    },
    approach: {
      title: "My Approach",
      sub: "Every project, every time",
      items: [
        { label: "On time", icon: "⏱" },
        { label: "Within scope", icon: "🎯" },
        { label: "High quality", icon: "✨" },
        { label: "Business-oriented", icon: "📈" },
      ],
    },
    contact: {
      title: "Let's Work Together",
      body: "Looking for a PM who understands both business and engineering? Let's build well-managed, efficient, and successful projects together.",
      cta: "Get in Touch",
    },
    footer: {
      logo: "PM Portfolio",
      sub: "Project Manager · Tech-Savvy · End-to-End Delivery",
    },
  },
  ja: {
    nav: {
      logo: "PMポートフォリオ",
      links: [
        { label: "自己紹介", href: "#about" },
        { label: "できること", href: "#what-i-do" },
        { label: "スキル", href: "#skills" },
        { label: "技術スタック", href: "#tech-stack" },
        { label: "経験", href: "#experience" },
        { label: "お問い合わせ", href: "#contact" },
      ],
    },
    hero: {
      badge: "プロジェクト募集中",
      title: "プロジェクトマネージャー",
      tagline: "技術理解 · 一気通貫デリバリー · 2年以上の経験",
      description:
        "外部設計からテストまで、ソフトウェアプロジェクトの成功を全力でサポートします。強い当事者意識と体系的なマネジメント、確かな技術理解でチームを牽引します。",
      cta1: "できること",
      cta2: "お問い合わせ",
    },
    about: {
      title: "自己紹介",
      sub: "私について",
      body1Text:
        "プロジェクトマネージャーとして2年以上の経験を持ち、ソフトウェア開発の実務経験を活かして、開発ライフサイクル全体を管理しながらビジネスとエンジニアリングチームの橋渡し役を担います。",
      body1Highlight: "2年以上の経験",
      body2Text:
        "eコマース・金融・医療・採用など幅広い領域で、企画から本番リリースまで一気通貫でプロジェクトをデリバリーしてきました。",
      body2Highlight: "eコマース・金融・医療・採用",
      stats: [
        { number: "2+", label: "PMとしての経験年数" },
        { number: "6+", label: "業界ドメイン数" },
        { number: "7+", label: "技術スタック数" },
      ],
      strengths: [
        { title: "橋渡し役", desc: "ビジネスとエンジニアリングチームを明確かつ効果的なコミュニケーションでつなぎます。" },
        { title: "問題解決力", desc: "プロジェクトを前進させ、ブロッカーを素早く解消する行動力があります。" },
        { title: "完全オーナーシップ", desc: "プロジェクトライフサイクルの最初から最後まで責任を持って担います。" },
        { title: "技術を知るPM", desc: "開発者としての視点から技術的なリスクを早期に特定します。" },
      ],
    },
    whatIDo: {
      title: "できること",
      sub: "PMとエンジニアリング両面のコア能力",
      pm: {
        icon: "📋",
        title: "プロジェクトマネジメント",
        items: [
          "一気通貫のプロジェクト管理（企画・設計・開発・テスト・リリース）",
          "要件定義・外部設計",
          "アジャイル / スクラム / ウォーターフォール対応",
          "タスク・進捗管理（Jira・Backlog・Trello）",
          "チームコーディネーション（開発者・デザイナー・QA）",
          "リスク管理・課題解決",
          "クライアント・ステークホルダーコミュニケーション",
          "品質保証・テスト調整",
        ],
      },
      tech: {
        icon: "💻",
        title: "技術的バックグラウンド",
        intro: "開発実務経験により以下が可能です：",
        items: [
          "エンジニアとスムーズにコミュニケーションできる",
          "システムアーキテクチャと技術的制約を理解できる",
          "技術的な意思決定をサポートできる",
          "技術的視点からリスクを早期に特定できる",
        ],
      },
    },
    skills: {
      title: "スキル",
      sub: "専門領域",
      categories: {
        "プロジェクトマネジメント": [
          "要件管理",
          "アーキテクチャ設計",
          "デザインモックアップ",
          "機能プロトタイプ",
          "QAエンジニアリング",
        ],
        "開発": ["React", "React Native", "Flutter", "TypeScript", "Python", "Laravel"],
        "エンジニアリング & インフラ": ["API開発", "データベース設計", "アーキテクチャ", "DevOps"],
      },
    },
    techStack: {
      title: "技術スタック",
      sub: "使用技術",
      categoryLabel: "カテゴリ",
      stackLabel: "スタック",
      items: [
        { category: "言語", stack: "JavaScript / TypeScript, Java, Python" },
        { category: "フロントエンド", stack: "React, React Native, Flutter" },
        { category: "バックエンド", stack: "Node.js, Spring Boot, Laravel" },
        { category: "アーキテクチャ", stack: "REST APIs, マイクロサービス" },
        { category: "データベース", stack: "MySQL, PostgreSQL" },
        { category: "クラウド", stack: "AWS (EC2, S3 など)" },
        { category: "DevOps", stack: "Git, CI/CD" },
      ],
    },
    experience: {
      title: "プロジェクト経験",
      sub: "担当した業界ドメイン",
      items: [
        { domain: "eコマース", icon: "🛒" },
        { domain: "金融", icon: "💹" },
        { domain: "医療", icon: "🏥" },
        { domain: "採用", icon: "🤝" },
        { domain: "社内システム / CRM", icon: "🏢" },
        { domain: "データ管理・分析", icon: "📊" },
      ],
    },
    approach: {
      title: "仕事のスタイル",
      sub: "すべてのプロジェクトで",
      items: [
        { label: "納期厳守", icon: "⏱" },
        { label: "スコープ内完遂", icon: "🎯" },
        { label: "高品質", icon: "✨" },
        { label: "ビジネス志向", icon: "📈" },
      ],
    },
    contact: {
      title: "一緒に働きましょう",
      body: "ビジネスとエンジニアリングの両方を理解するPMをお探しですか？質の高い管理で、効率よく成功するプロジェクトを一緒に作り上げましょう。",
      cta: "お問い合わせ",
    },
    footer: {
      logo: "PMポートフォリオ",
      sub: "プロジェクトマネージャー · 技術理解 · 一気通貫デリバリー",
    },
  },
} as const;
