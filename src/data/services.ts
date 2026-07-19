export const CONTACT = {
  email: 'Quobol25@gmail.com',
  linkedin: 'https://www.linkedin.com/company/Quobol/',
  tagline: 'Simplifying Tomorrow, Today.',
} as const

export type ServiceIcon =
  | 'ai'
  | 'web'
  | 'rpa'
  | 'cloud'
  | 'custom'
  | 'data'
  | 'security'
  | 'consulting'
  | 'staff'

export type Service = {
  slug: string
  icon: ServiceIcon
  title: string
  shortTitle: string
  cardDescription: string
  heroHeadline: string
  heroSub: string
  whatItIs: string
  howItWorks: { title: string; detail: string }[]
  advantages: { title: string; detail: string }[]
  useCases: string[]
  outcomes: { metric: string; label: string }[]
}

export const services: Service[] = [
  {
    slug: 'ai-integration',
    icon: 'ai',
    title: 'AI Integration',
    shortTitle: 'AI Integration',
    cardDescription:
      'Embed AI into your CRM, ERP, apps, and workflows - chatbots, predictive models, and intelligent data processing that make operations smarter.',
    heroHeadline: 'Make AI part of how your business already works.',
    heroSub:
      'Not a separate tool bolted on the side. Quobol integrates AI into the systems your teams use every day - so automation, insights, and decisions happen inside your real workflows.',
    whatItIs:
      'AI Integration connects machine learning, generative AI, and intelligent agents to your existing software. We design the data pipelines, model touchpoints, guardrails, and UI so AI reduces work instead of creating new complexity.',
    howItWorks: [
      {
        title: 'Map high-value workflows',
        detail: 'Identify where AI can cut cycle time - support, reporting, document intake, forecasting - without disrupting critical controls.',
      },
      {
        title: 'Connect systems & data',
        detail: 'Secure connectors into CRM, ERP, databases, and APIs so models see the right context with the right permissions.',
      },
      {
        title: 'Deploy with human oversight',
        detail: 'Ship copilots, chatbots, and decision aids with audit trails, exception queues, and measurable KPIs.',
      },
    ],
    advantages: [
      {
        title: 'Higher productivity',
        detail: 'Automate repetitive analysis and responses so staff focus on judgment calls that need people.',
      },
      {
        title: 'Lower operating cost',
        detail: 'Reduce manual handling across support, back-office, and reporting without sacrificing quality.',
      },
      {
        title: 'Faster decisions',
        detail: 'Surface real-time insights and recommendations where managers already work.',
      },
      {
        title: 'Better customer experience',
        detail: '24/7 intelligent assistants that resolve or route requests with full business context.',
      },
    ],
    useCases: [
      'Customer support copilots & chatbots',
      'Predictive analytics and demand forecasting',
      'Document / invoice intelligent extraction',
      'CRM & ERP AI assistants',
      'Automated report generation',
    ],
    outcomes: [
      { metric: '24/7', label: 'Intelligent response coverage' },
      { metric: '↓ hours', label: 'Manual analysis & reporting' },
      { metric: '↑ CX', label: 'Faster first-response quality' },
    ],
  },
  {
    slug: 'web-mobile-development',
    icon: 'web',
    title: 'Web & Mobile Development',
    shortTitle: 'Web & Mobile',
    cardDescription:
      'Responsive web apps and native-quality iOS & Android experiences - designed for performance, usability, and growth.',
    heroHeadline: 'Products your customers actually want to use.',
    heroSub:
      'From marketing sites to complex progressive web apps and mobile products, we design and engineer experiences that feel fast, clear, and reliable on every device.',
    whatItIs:
      'End-to-end product engineering for web and mobile: UX/UI, frontend, backend APIs, app store delivery, and ongoing releases. We build for startups shipping their first product and enterprises modernizing customer channels.',
    howItWorks: [
      {
        title: 'Discover & prototype',
        detail: 'Clarify users, journeys, and technical constraints - then validate flows before heavy build investment.',
      },
      {
        title: 'Build iteratively',
        detail: 'Ship vertical slices with automated tests, accessible UI, and performance budgets baked in.',
      },
      {
        title: 'Launch & grow',
        detail: 'App store / production release, analytics, A/B hooks, and a roadmap for continuous improvement.',
      },
    ],
    advantages: [
      {
        title: 'One partner, web + mobile',
        detail: 'Shared design systems and APIs so your brand and logic stay consistent across channels.',
      },
      {
        title: 'Performance by default',
        detail: 'Core Web Vitals, offline-aware mobile patterns, and lean bundles that convert better.',
      },
      {
        title: 'Scalable architecture',
        detail: 'Clean APIs and modular frontends that grow with features - not technical debt.',
      },
      {
        title: 'Maintainable code',
        detail: 'Documented, reviewed engineering your team can own after launch.',
      },
    ],
    useCases: [
      'Customer portals & dashboards',
      'iOS & Android product apps',
      'E-commerce storefronts',
      'Internal ops web tools',
      'Progressive web apps (PWA)',
    ],
    outcomes: [
      { metric: 'Cross-device', label: 'Consistent UX web → mobile' },
      { metric: 'Faster', label: 'Time-to-interactive pages' },
      { metric: 'Ready', label: 'Store & production launches' },
    ],
  },
  {
    slug: 'rpa-automation',
    icon: 'rpa',
    title: 'RPA & Intelligent Automation',
    shortTitle: 'RPA Automation',
    cardDescription:
      'Software bots that handle rule-based work - and AI-powered RPA that reads documents, decides, and escalates exceptions.',
    heroHeadline: 'Stop paying people to do what bots do better.',
    heroSub:
      'RPA handles the doing. AI handles the thinking. Together they turn hours of manual ops into minutes of supervised automation.',
    whatItIs:
      'Robotic Process Automation uses software bots to log into apps, move data, fill forms, and run workflows 24/7. When we add AI, bots can understand unstructured documents and make rule-assisted decisions - sending only exceptions to humans.',
    howItWorks: [
      {
        title: 'Process mapping',
        detail: 'Document the as-is workflow, systems touched, volumes, and exception paths that need human review.',
      },
      {
        title: 'Bot + AI design',
        detail: 'Build reliable RPA for structured steps; layer AI for reading, classification, and validation.',
      },
      {
        title: 'Govern & scale',
        detail: 'Monitoring, credentials vaulting, audit logs, and a backlog of the next processes to automate.',
      },
    ],
    advantages: [
      {
        title: 'Fewer manual errors',
        detail: 'Standardized, auditable steps replace copy-paste fatigue.',
      },
      {
        title: 'Hours → minutes',
        detail: 'Invoice, onboarding, and report cycles collapse dramatically.',
      },
      {
        title: 'Always-on capacity',
        detail: 'Bots run overnight and during peaks without overtime burn.',
      },
      {
        title: 'People on higher-value work',
        detail: 'Staff review exceptions and customer issues - not keystrokes.',
      },
    ],
    useCases: [
      'Invoice processing & AP automation',
      'HR onboarding data entry',
      'Customer ticket triage',
      'Compliance & anomaly checks',
      'Cross-system data migration',
    ],
    outcomes: [
      { metric: '24/7', label: 'Bot execution capacity' },
      { metric: '↓ errors', label: 'Manual data handling' },
      { metric: '↑ ROI', label: 'Measurable process savings' },
    ],
  },
  {
    slug: 'cloud-infrastructure',
    icon: 'cloud',
    title: 'Cloud Infrastructure & DevOps',
    shortTitle: 'Cloud & DevOps',
    cardDescription:
      'AWS, Azure, DigitalOcean - secure architectures, CI/CD, infrastructure-as-code, and reliable releases.',
    heroHeadline: 'Infrastructure that ships software safely and fast.',
    heroSub:
      'We design cloud foundations and DevOps pipelines so environments are reproducible, deployments are boring (in a good way), and your platform scales with demand.',
    whatItIs:
      'Cloud & DevOps covers landing zones, networking, identity, containers, Kubernetes where needed, CI/CD, observability, and cost controls. You get environments that match production and a delivery path your engineers trust.',
    howItWorks: [
      {
        title: 'Assess & design',
        detail: 'Map workloads, compliance needs, and target cloud(s). Define reference architecture and landing zones.',
      },
      {
        title: 'Automate everything',
        detail: 'Terraform / IaC, pipelines, secrets management, and environment promotion with clear gates.',
      },
      {
        title: 'Operate with visibility',
        detail: 'Metrics, logs, alerts, and runbooks so incidents are detectable and recoverable.',
      },
    ],
    advantages: [
      {
        title: 'Predictable releases',
        detail: 'CI/CD with tests and approvals removes “works on my machine” risk.',
      },
      {
        title: 'Security baked in',
        detail: 'Least-privilege IAM, network segmentation, and encrypted defaults.',
      },
      {
        title: 'Cost clarity',
        detail: 'Right-sized resources, autoscaling, and visibility into spend drivers.',
      },
      {
        title: 'Team velocity',
        detail: 'Self-service environments so builders aren’t blocked by ticket queues.',
      },
    ],
    useCases: [
      'AWS / Azure / DigitalOcean platforms',
      'Kubernetes & container platforms',
      'CI/CD pipeline modernization',
      'Zero-downtime migrations',
      'Observability & SRE foundations',
    ],
    outcomes: [
      { metric: 'Faster', label: 'Safe production deploys' },
      { metric: 'Lower', label: 'Environment drift risk' },
      { metric: 'Clear', label: 'Ops & cost visibility' },
    ],
  },
  {
    slug: 'custom-software',
    icon: 'custom',
    title: 'Custom Software & Enterprise Systems',
    shortTitle: 'Custom Software',
    cardDescription:
      'ERP, CRM, HRM, Hospital Management, and bespoke platforms built around how your business actually operates.',
    heroHeadline: 'Software shaped to your workflows - not the other way around.',
    heroSub:
      'Off-the-shelf tools force compromises. Quobol designs and builds systems that mirror your processes, integrate cleanly, and scale as you grow.',
    whatItIs:
      'Custom and enterprise software engineering - from domain-specific platforms to ERP/CRM/HRM/HMS modules. We cover discovery, architecture, build, migration, training, and long-term support under one roof.',
    howItWorks: [
      {
        title: 'Understand the business',
        detail: 'Deep workflow workshops so the system reflects real operations, not generic templates.',
      },
      {
        title: 'Architect for change',
        detail: 'Modular services, clear data models, and integration points for the rest of your stack.',
      },
      {
        title: 'Deliver & support',
        detail: 'Phased rollouts, user training, and maintenance so the system stays useful after go-live.',
      },
    ],
    advantages: [
      {
        title: 'Fit for purpose',
        detail: 'Features match your domain - healthcare, logistics, finance, and more.',
      },
      {
        title: 'Vendor consolidation',
        detail: 'One technology partner instead of juggling specialists for every layer.',
      },
      {
        title: 'Integration-ready',
        detail: 'APIs and connectors so data flows across your ecosystem.',
      },
      {
        title: 'Built to scale',
        detail: 'Architecture that absorbs new modules, users, and locations.',
      },
    ],
    useCases: [
      'ERP / CRM / HRM platforms',
      'Hospital Management Systems',
      'Industry-specific operations software',
      'Legacy modernization',
      'Internal workflow platforms',
    ],
    outcomes: [
      { metric: '1 partner', label: 'Design → build → support' },
      { metric: 'Aligned', label: 'Software ↔ real workflows' },
      { metric: 'Durable', label: 'Maintainable codebase' },
    ],
  },
  {
    slug: 'databases-apis',
    icon: 'data',
    title: 'Databases & API Architecture',
    shortTitle: 'DB & APIs',
    cardDescription:
      'Solid data models, performant databases, and clean APIs - the backbone every reliable product depends on.',
    heroHeadline: 'If the data layer is wrong, everything else fights you.',
    heroSub:
      'We design schemas, query strategies, and API contracts that keep applications fast, consistent, and ready for analytics or AI on top.',
    whatItIs:
      'Database architecture, migrations, performance tuning, and API development (REST/GraphQL). We make sure services share trustworthy data contracts and that reporting or AI layers can consume clean information.',
    howItWorks: [
      {
        title: 'Model the domain',
        detail: 'Entities, relationships, and integrity rules that match business truth.',
      },
      {
        title: 'Engineer access paths',
        detail: 'Indexes, caching, pagination, and API design for real traffic patterns.',
      },
      {
        title: 'Protect & evolve',
        detail: 'Backups, migrations, versioning, and observability for data services.',
      },
    ],
    advantages: [
      {
        title: 'Performance under load',
        detail: 'Queries and APIs that stay responsive as data grows.',
      },
      {
        title: 'Clean integrations',
        detail: 'Well-documented contracts for web, mobile, partners, and AI.',
      },
      {
        title: 'Data you can trust',
        detail: 'Consistency rules that prevent silent corruption.',
      },
      {
        title: 'Analytics-ready',
        detail: 'Structures that support reporting and ML without heroic ETL.',
      },
    ],
    useCases: [
      'PostgreSQL / SQL Server / MongoDB design',
      'REST & GraphQL API platforms',
      'Data migration & consolidation',
      'Caching & performance tuning',
      'Event-driven service APIs',
    ],
    outcomes: [
      { metric: 'Faster', label: 'API & query response' },
      { metric: 'Cleaner', label: 'Cross-system contracts' },
      { metric: 'Safer', label: 'Migrations & backups' },
    ],
  },
  {
    slug: 'cybersecurity-qa',
    icon: 'security',
    title: 'Cybersecurity & Quality Assurance',
    shortTitle: 'Security & QA',
    cardDescription:
      'Security practices and rigorous testing so what you ship is trustworthy - from penetration-minded reviews to automated QA.',
    heroHeadline: 'Ship with confidence, not crossed fingers.',
    heroSub:
      'Security and quality are delivery features. We embed them into the build so vulnerabilities and regressions are caught before customers ever see them.',
    whatItIs:
      'Application security reviews, secure SDLC practices, test automation, and QA strategy. We harden authentication, data handling, and release gates while building suites that protect every deploy.',
    howItWorks: [
      {
        title: 'Risk & coverage map',
        detail: 'Identify critical assets, threat surfaces, and untested paths in the product.',
      },
      {
        title: 'Harden & automate',
        detail: 'Fix priority issues; add unit, integration, and E2E tests into CI.',
      },
      {
        title: 'Continuous assurance',
        detail: 'Regression packs, security checklists, and release criteria your team owns.',
      },
    ],
    advantages: [
      {
        title: 'Fewer production incidents',
        detail: 'Bugs and security gaps caught in pipeline, not in production.',
      },
      {
        title: 'Customer trust',
        detail: 'Demonstrable care for data protection and reliability.',
      },
      {
        title: 'Faster safe releases',
        detail: 'Automated suites unlock frequent deploys without fear.',
      },
      {
        title: 'Clear ownership',
        detail: 'Documented standards so quality isn’t tribal knowledge.',
      },
    ],
    useCases: [
      'Secure SDLC & auth hardening',
      'Automated regression suites',
      'API & UI quality gates',
      'Pre-launch security reviews',
      'Compliance-oriented checklists',
    ],
    outcomes: [
      { metric: '↓ risk', label: 'Ship-time vulnerabilities' },
      { metric: '↑ coverage', label: 'Automated test depth' },
      { metric: 'Stable', label: 'Release confidence' },
    ],
  },
  {
    slug: 'it-consulting',
    icon: 'consulting',
    title: 'IT Consulting & Digital Transformation',
    shortTitle: 'IT Consulting',
    cardDescription:
      'Modernize legacy systems, choose the right stack, and build a transformation roadmap your organization can execute.',
    heroHeadline: 'Clarity before code. Strategy that survives contact with reality.',
    heroSub:
      'We help leadership decide what to build, buy, retire, or automate - then stay accountable through the transformation, not just the slide deck.',
    whatItIs:
      'Advisory and hands-on consulting for digital transformation: architecture reviews, vendor selection, legacy modernization plans, and delivery coaching. Insights from building real systems, not only theory.',
    howItWorks: [
      {
        title: 'Diagnose',
        detail: 'Assess current systems, skills, debt, and business priorities.',
      },
      {
        title: 'Roadmap',
        detail: 'Phased plan with costs, risks, quick wins, and capability building.',
      },
      {
        title: 'Execute alongside you',
        detail: 'Architecture guidance, squad enablement, and checkpoint reviews.',
      },
    ],
    advantages: [
      {
        title: 'Decisions with teeth',
        detail: 'Recommendations tied to delivery capacity and ROI.',
      },
      {
        title: 'Legacy without fear',
        detail: 'Pragmatic modernization paths that avoid big-bang failure.',
      },
      {
        title: 'Aligned stakeholders',
        detail: 'Shared language between business and engineering.',
      },
      {
        title: 'Long-term partnership',
        detail: 'Support that continues after the strategy document.',
      },
    ],
    useCases: [
      'Legacy system modernization',
      'Technology stack selection',
      'Digital transformation roadmaps',
      'Architecture & delivery reviews',
      'Vendor & build-vs-buy analysis',
    ],
    outcomes: [
      { metric: 'Clear', label: 'Executable tech roadmap' },
      { metric: 'Reduced', label: 'Transformation risk' },
      { metric: 'Aligned', label: 'Biz ↔ engineering goals' },
    ],
  },
  {
    slug: 'staff-augmentation',
    icon: 'staff',
    title: 'Staff Augmentation & Ongoing Support',
    shortTitle: 'Staff & Support',
    cardDescription:
      'Senior engineers who embed with your team - plus post-launch maintenance so systems stay healthy after go-live.',
    heroHeadline: 'Extra capacity without the hiring lag or the knowledge gap.',
    heroSub:
      'Get specialists who raise the bar inside your squads, or a support retainer that keeps production stable while you focus on growth.',
    whatItIs:
      'Flexible engagement models: embedded developers, designers, and automation specialists, plus ongoing maintenance and support after launch. Aligned to outcomes - not just billable hours.',
    howItWorks: [
      {
        title: 'Define the need',
        detail: 'Skills, seniority, timezone overlap, and success criteria for the engagement.',
      },
      {
        title: 'Embed & deliver',
        detail: 'Engineers join your rituals, tools, and codebase with clear ownership.',
      },
      {
        title: 'Support & transfer',
        detail: 'Maintenance SLAs, knowledge transfer, and option to scale up or down.',
      },
    ],
    advantages: [
      {
        title: 'Speed to capacity',
        detail: 'Start in weeks, not quarters of recruiting.',
      },
      {
        title: 'Senior judgment',
        detail: 'People who improve architecture while shipping features.',
      },
      {
        title: 'Continuity after launch',
        detail: 'Patches, monitoring, and enhancements without rebuilding the team.',
      },
      {
        title: 'Flexible scale',
        detail: 'Expand for a release push; contract when the spike ends.',
      },
    ],
    useCases: [
      'Embedded full-stack engineers',
      'AI / RPA specialist reinforcement',
      'Release surge capacity',
      'Production maintenance retainers',
      'Knowledge transfer & mentoring',
    ],
    outcomes: [
      { metric: 'Weeks', label: 'Time to productive capacity' },
      { metric: 'Senior', label: 'Embedded engineering talent' },
      { metric: 'Ongoing', label: 'Post-launch support' },
    ],
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
