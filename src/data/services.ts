export const CONTACT = {
  email: 'info@quobol.com',
  linkedin: 'https://www.linkedin.com/company/Quobol/',
  instagram: 'https://www.instagram.com/its.quobol/',
  facebook: 'https://www.facebook.com/profile.php?id=61592078738670',
  tiktok: 'https://www.tiktok.com/@quobol1?lang=en-GB',
  tagline: 'Simplifying Tomorrow, Today.',
  phone: '',
  siteUrl: 'https://quobol.vercel.app',
  companyName: 'Quobol',
  location: 'Remote-first IT services and software development',
} as const

export type ServiceIcon =
  | 'ai'
  | 'crm'
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
  seoTitle: string
  seoDescription: string
  platforms?: string[]
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
      'AI Integration connects machine learning, generative AI, and intelligent agents to your existing software stack. Quobol designs the data pipelines, model touchpoints, guardrails, and user interfaces so AI reduces manual work instead of creating new complexity. We help organizations move beyond pilots by embedding copilots, chatbots, document intelligence, and predictive analytics directly into CRM, ERP, support platforms, and custom applications. Every integration is scoped around measurable business outcomes - faster response times, fewer errors, and better decisions - with human oversight, audit trails, and security controls built in from day one.',
    howItWorks: [
      {
        title: 'Map high-value workflows',
        detail:
          'We identify where AI can cut cycle time in support, reporting, document intake, forecasting, and sales operations - without disrupting critical compliance or approval controls.',
      },
      {
        title: 'Connect systems and data',
        detail:
          'Secure connectors into CRM, ERP, databases, and APIs ensure models see the right context with the right permissions, retention policies, and data quality checks.',
      },
      {
        title: 'Deploy with human oversight',
        detail:
          'We ship copilots, chatbots, and decision aids with exception queues, feedback loops, and KPI dashboards so teams trust the output and can improve it over time.',
      },
    ],
    advantages: [
      {
        title: 'Higher productivity',
        detail:
          'Automate repetitive analysis, classification, and responses so staff focus on judgment calls that require people, relationships, and accountability.',
      },
      {
        title: 'Lower operating cost',
        detail:
          'Reduce manual handling across support, back-office, and reporting without sacrificing quality or creating shadow processes outside your systems.',
      },
      {
        title: 'Faster decisions',
        detail:
          'Surface real-time insights, summaries, and recommendations where managers and frontline teams already work - not in a separate analytics silo.',
      },
      {
        title: 'Better customer experience',
        detail:
          'Deliver 24/7 intelligent assistants that resolve or route requests with full business context, brand tone, and escalation paths when needed.',
      },
    ],
    useCases: [
      'Customer support copilots and chatbots',
      'Predictive analytics and demand forecasting',
      'Document and invoice intelligent extraction',
      'CRM and ERP AI assistants',
      'Automated report generation and summarization',
      'Knowledge base search and internal Q&A',
    ],
    outcomes: [
      { metric: '24/7', label: 'Intelligent response coverage' },
      { metric: 'Less manual', label: 'Analysis and reporting hours' },
      { metric: 'Stronger CX', label: 'Faster first-response quality' },
    ],
    seoTitle: 'AI Integration Services | Quobol - Embed AI in CRM, ERP, and Workflows',
    seoDescription:
      'Quobol integrates generative AI, copilots, and predictive models into CRM, ERP, and custom apps. Secure pipelines, human oversight, and measurable ROI - simplifying tomorrow, today.',
  },
  {
    slug: 'salesforce-crm',
    icon: 'crm',
    title: 'Salesforce and CRM Solutions',
    shortTitle: 'CRM Solutions',
    cardDescription:
      'Salesforce Sales Cloud, Service Cloud, Experience Cloud, Apex, Lightning, and Flow - plus HubSpot, Dynamics 365, Zoho CRM, custom CRM builds, migrations, and integrations.',
    heroHeadline: 'CRM that matches how your revenue and service teams actually sell and support.',
    heroSub:
      'From Salesforce implementation and customization to multi-platform CRM strategy, Quobol helps you capture leads, close deals, resolve cases, and deliver digital experiences on the platform that fits your business.',
    whatItIs:
      'Salesforce and CRM Solutions cover the full customer relationship lifecycle: lead capture, pipeline management, service case handling, partner portals, and customer self-service. Quobol implements and extends Salesforce Sales Cloud for revenue teams, Service Cloud for support operations, and Experience Cloud for branded portals and communities. Our engineers work in Apex, Lightning Web Components, and Flow to automate processes, enforce data quality, and connect CRM to marketing, billing, ERP, and product systems. We also deliver HubSpot, Microsoft Dynamics 365, and Zoho CRM deployments when those platforms better match your size, industry, or Microsoft ecosystem. For unique workflows, we design custom CRM platforms with clean APIs and migration paths from legacy spreadsheets or aging systems. Whether you are greenfield, replatforming, or consolidating tools, we handle discovery, configuration, custom development, data migration, integration, training, and ongoing optimization so adoption sticks and reporting stays trustworthy.',
    howItWorks: [
      {
        title: 'Assess CRM fit and roadmap',
        detail:
          'We map sales, marketing, and service processes, evaluate Salesforce versus HubSpot, Dynamics 365, Zoho, or custom CRM options, and define a phased rollout with migration and integration priorities.',
      },
      {
        title: 'Configure, customize, and integrate',
        detail:
          'Lightning pages, Flow automation, Apex where needed, Experience Cloud portals, and bidirectional integrations with email, telephony, ERP, and marketing tools - all aligned to role-based access and data governance.',
      },
      {
        title: 'Migrate data and drive adoption',
        detail:
          'Structured data cleansing, cutover planning, user training, and post-launch tuning so pipelines, cases, and dashboards reflect reality on day one and improve quarter over quarter.',
      },
    ],
    advantages: [
      {
        title: 'Platform depth across leaders',
        detail:
          'Certified-style delivery on Salesforce Sales Cloud, Service Cloud, and Experience Cloud, plus practical experience with HubSpot, Dynamics 365, and Zoho CRM when those are the better fit.',
      },
      {
        title: 'Custom code without chaos',
        detail:
          'Apex, Lightning, and Flow built with maintainable patterns, documentation, and deployment pipelines so your org scales without brittle one-off fixes.',
      },
      {
        title: 'Clean migrations and integrations',
        detail:
          'Move off legacy CRM, spreadsheets, or siloed tools with validated data mapping, deduplication, and API integrations that keep finance, fulfillment, and support in sync.',
      },
      {
        title: 'Adoption-focused delivery',
        detail:
          'Training, in-app guidance, and reporting that sales and service leaders actually use - because CRM value only shows up when teams trust the system.',
      },
    ],
    useCases: [
      'Salesforce Sales Cloud pipeline and forecasting setup',
      'Service Cloud case management and omnichannel routing',
      'Experience Cloud customer and partner portals',
      'Apex, Lightning, and Flow automation for complex approvals',
      'HubSpot or Dynamics 365 marketing-to-sales alignment',
      'Zoho CRM rollout for mid-market teams',
      'Custom CRM for industry-specific workflows',
      'CRM migration from legacy or spreadsheet-based processes',
    ],
    outcomes: [
      { metric: 'Single source', label: 'Trusted customer and pipeline data' },
      { metric: 'Faster cycles', label: 'Automated sales and service workflows' },
      { metric: 'Connected stack', label: 'CRM integrated with ERP and tools' },
    ],
    seoTitle:
      'Salesforce CRM Implementation | Sales Cloud, Service Cloud, HubSpot, Dynamics 365 - Quobol',
    seoDescription:
      'Quobol implements Salesforce Sales Cloud, Service Cloud, Experience Cloud, Apex, Lightning, and Flow. HubSpot, Dynamics 365, Zoho CRM, custom CRM, migrations, and integrations.',
    platforms: [
      'Salesforce Sales Cloud',
      'Salesforce Service Cloud',
      'Salesforce Experience Cloud',
      'Apex',
      'Lightning',
      'Flow',
      'HubSpot',
      'Microsoft Dynamics 365',
      'Zoho CRM',
      'Custom CRM',
      'CRM Migrations',
      'CRM Integrations',
    ],
  },
  {
    slug: 'web-mobile-development',
    icon: 'web',
    title: 'Web and Mobile Development',
    shortTitle: 'Web and Mobile',
    cardDescription:
      'Responsive web apps and native-quality iOS and Android experiences - designed for performance, usability, accessibility, and growth.',
    heroHeadline: 'Products your customers actually want to use.',
    heroSub:
      'From marketing sites to complex progressive web apps and mobile products, Quobol designs and engineers experiences that feel fast, clear, and reliable on every device.',
    whatItIs:
      'Web and Mobile Development is end-to-end product engineering for browser and app experiences: UX research, UI design, frontend frameworks, backend APIs, app store delivery, and ongoing releases. We build for startups shipping their first product and for enterprises modernizing customer channels, employee tools, and partner portals. Our teams prioritize Core Web Vitals, accessible interfaces, secure authentication, and analytics hooks so you can measure adoption and iterate with confidence. Whether you need a high-converting marketing site, a customer dashboard, or a cross-platform mobile app, we deliver cohesive design systems and shared APIs so your brand and business logic stay consistent across touchpoints.',
    howItWorks: [
      {
        title: 'Discover and prototype',
        detail:
          'Clarify users, journeys, and technical constraints - then validate flows with wireframes or clickable prototypes before heavy build investment.',
      },
      {
        title: 'Build iteratively',
        detail:
          'Ship vertical slices with automated tests, accessible UI components, performance budgets, and code review standards baked into each sprint.',
      },
      {
        title: 'Launch and grow',
        detail:
          'Production and app store release, monitoring, analytics, A/B hooks, and a roadmap for continuous improvement based on real usage data.',
      },
    ],
    advantages: [
      {
        title: 'One partner for web and mobile',
        detail:
          'Shared design systems and APIs keep your brand, logic, and release cadence consistent across browser and native channels.',
      },
      {
        title: 'Performance by default',
        detail:
          'Core Web Vitals, offline-aware mobile patterns, and lean bundles that load quickly and convert better on search and social traffic.',
      },
      {
        title: 'Scalable architecture',
        detail:
          'Clean REST or GraphQL APIs and modular frontends that grow with new features without accumulating hard-to-change technical debt.',
      },
      {
        title: 'Maintainable code',
        detail:
          'Documented, reviewed engineering your internal team can own after launch - with clear handoff and optional ongoing support.',
      },
    ],
    useCases: [
      'Customer portals and self-service dashboards',
      'iOS and Android product applications',
      'E-commerce storefronts and checkout flows',
      'Internal operations and field service web tools',
      'Progressive web apps for offline-first teams',
      'Marketing sites with CMS and SEO foundations',
    ],
    outcomes: [
      { metric: 'Cross-device', label: 'Consistent UX from web to mobile' },
      { metric: 'Faster loads', label: 'Optimized time-to-interactive' },
      { metric: 'Launch-ready', label: 'Store and production releases' },
    ],
    seoTitle: 'Web and Mobile App Development | Quobol - React, iOS, Android, PWA',
    seoDescription:
      'Quobol builds responsive web apps, iOS and Android products, and PWAs with strong UX, performance, and scalable APIs. From prototype to app store - simplifying tomorrow, today.',
  },
  {
    slug: 'rpa-automation',
    icon: 'rpa',
    title: 'RPA and Intelligent Automation',
    shortTitle: 'RPA Automation',
    cardDescription:
      'Software bots that handle rule-based work - and AI-powered RPA that reads documents, decides, and escalates exceptions to humans.',
    heroHeadline: 'Stop paying people to do what bots do better.',
    heroSub:
      'RPA handles the doing. AI handles the thinking. Together they turn hours of manual operations into minutes of supervised automation your auditors can trust.',
    whatItIs:
      'Robotic Process Automation uses software bots to log into applications, move data, fill forms, reconcile records, and run workflows around the clock. When we add intelligent automation, bots can read unstructured documents, classify inputs, validate against business rules, and route only exceptions to people. Quobol maps your as-is processes, selects the right automation platform, builds reliable bots for structured steps, and layers document AI where variability exists. We include credential vaulting, logging, monitoring, and change management so automations survive system updates and organizational growth. The result is measurable capacity freed for higher-value work - not another brittle script nobody maintains.',
    howItWorks: [
      {
        title: 'Process mapping',
        detail:
          'Document the as-is workflow, systems touched, transaction volumes, exception paths, and compliance requirements that need human review or approval.',
      },
      {
        title: 'Bot and AI design',
        detail:
          'Build dependable RPA for structured steps; add classification, extraction, and validation models for emails, PDFs, and scanned documents.',
      },
      {
        title: 'Govern and scale',
        detail:
          'Monitoring dashboards, role-based access, audit logs, and a prioritized backlog of the next processes to automate across finance, HR, and operations.',
      },
    ],
    advantages: [
      {
        title: 'Fewer manual errors',
        detail:
          'Standardized, auditable steps replace copy-paste fatigue and reduce costly mistakes in finance, onboarding, and customer records.',
      },
      {
        title: 'Hours to minutes',
        detail:
          'Invoice processing, employee onboarding, and recurring report cycles collapse dramatically while maintaining traceability.',
      },
      {
        title: 'Always-on capacity',
        detail:
          'Bots run overnight, across time zones, and during seasonal peaks without overtime burn or backlog spikes.',
      },
      {
        title: 'People on higher-value work',
        detail:
          'Staff review exceptions, serve customers, and improve processes - instead of repeating keystrokes in legacy UIs.',
      },
    ],
    useCases: [
      'Invoice processing and accounts payable automation',
      'HR onboarding and offboarding data entry',
      'Customer ticket triage and routing',
      'Compliance checks and anomaly detection',
      'Cross-system data migration and reconciliation',
      'Report generation and distribution',
    ],
    outcomes: [
      { metric: '24/7', label: 'Bot execution capacity' },
      { metric: 'Fewer errors', label: 'Reduced manual data handling' },
      { metric: 'Clear ROI', label: 'Measurable process savings' },
    ],
    seoTitle: 'RPA and Intelligent Automation Services | Quobol - Bots plus AI',
    seoDescription:
      'Quobol delivers RPA and AI-powered automation for finance, HR, and operations. Document intelligence, governed bots, and exception workflows - simplifying tomorrow, today.',
  },
  {
    slug: 'cloud-infrastructure',
    icon: 'cloud',
    title: 'Cloud Infrastructure and DevOps',
    shortTitle: 'Cloud and DevOps',
    cardDescription:
      'AWS, Azure, DigitalOcean - secure architectures, CI/CD, infrastructure-as-code, observability, and reliable releases.',
    heroHeadline: 'Infrastructure that ships software safely and fast.',
    heroSub:
      'Quobol designs cloud foundations and DevOps pipelines so environments are reproducible, deployments are predictable, and your platform scales with demand without surprise bills or outages.',
    whatItIs:
      'Cloud Infrastructure and DevOps covers landing zones, networking, identity, containers, Kubernetes where it earns its keep, CI/CD, observability, backup strategy, and cost controls. We help teams on AWS, Azure, and DigitalOcean move from manual server babysitting to infrastructure-as-code, automated testing gates, and clear runbooks. You get development environments that mirror production, secrets managed properly, and deployment paths engineers trust. Whether you are cloud-native, hybrid, or migrating off on-prem hardware, we align architecture to your compliance, performance, and budget constraints - then stay hands-on through cutover and steady-state operations.',
    howItWorks: [
      {
        title: 'Assess and design',
        detail:
          'Map workloads, compliance needs, and target cloud providers. Define reference architecture, landing zones, and a migration or greenfield plan with risk controls.',
      },
      {
        title: 'Automate everything',
        detail:
          'Terraform or equivalent IaC, CI/CD pipelines, secrets management, and environment promotion with automated tests and approval gates.',
      },
      {
        title: 'Operate with visibility',
        detail:
          'Metrics, logs, alerts, backups, and runbooks so incidents are detected early, root causes are clear, and recovery is rehearsed.',
      },
    ],
    advantages: [
      {
        title: 'Predictable releases',
        detail:
          'CI/CD with automated tests and staged rollouts removes works-on-my-machine risk and shortens time from commit to production.',
      },
      {
        title: 'Security baked in',
        detail:
          'Least-privilege IAM, network segmentation, encrypted defaults, and patch cadences aligned to your threat model.',
      },
      {
        title: 'Cost clarity',
        detail:
          'Right-sized resources, autoscaling policies, tagging, and dashboards that show which services and teams drive spend.',
      },
      {
        title: 'Team velocity',
        detail:
          'Self-service environments and documented pipelines so builders are not blocked by long infrastructure ticket queues.',
      },
    ],
    useCases: [
      'AWS, Azure, and DigitalOcean platform design',
      'Kubernetes and container orchestration',
      'CI/CD pipeline modernization',
      'Zero-downtime cloud migrations',
      'Observability, logging, and SRE foundations',
      'Disaster recovery and backup automation',
    ],
    outcomes: [
      { metric: 'Faster deploys', label: 'Safe production releases' },
      { metric: 'Less drift', label: 'Reproducible environments' },
      { metric: 'Full visibility', label: 'Ops metrics and cost control' },
    ],
    seoTitle: 'Cloud Infrastructure and DevOps | Quobol - AWS, Azure, CI/CD, IaC',
    seoDescription:
      'Quobol builds secure cloud platforms on AWS, Azure, and DigitalOcean with DevOps, IaC, CI/CD, and observability. Reliable releases and scalable architecture - simplifying tomorrow, today.',
  },
  {
    slug: 'custom-software',
    icon: 'custom',
    title: 'Custom Software and Enterprise Systems',
    shortTitle: 'Custom Software',
    cardDescription:
      'ERP, CRM, HRM, hospital management, and bespoke platforms built around how your business actually operates - not generic templates.',
    heroHeadline: 'Software shaped to your workflows - not the other way around.',
    heroSub:
      'Off-the-shelf tools force compromises. Quobol designs and builds systems that mirror your processes, integrate cleanly with the rest of your stack, and scale as you grow.',
    whatItIs:
      'Custom Software and Enterprise Systems covers domain-specific platforms, ERP modules, CRM extensions, HRM suites, hospital management systems, and internal workflow tools tailored to your industry. Quobol runs discovery workshops to capture how teams really work, then architects modular services, clear data models, and integration points for finance, logistics, compliance, and customer channels. We deliver phased rollouts with training and documentation so adoption succeeds after go-live. When packaged software almost fits but critical gaps remain, custom build-or-extend decisions are made with total cost of ownership, upgrade paths, and long-term maintainability in mind - not short-term feature checklists.',
    howItWorks: [
      {
        title: 'Understand the business',
        detail:
          'Deep workflow workshops with stakeholders so the system reflects real operations, regulatory requirements, and edge cases - not generic templates.',
      },
      {
        title: 'Architect for change',
        detail:
          'Modular services, documented APIs, and extensible data models that absorb new modules, locations, and product lines without rewrites.',
      },
      {
        title: 'Deliver and support',
        detail:
          'Phased releases, user training, hypercare after launch, and optional maintenance retainers so the system stays useful as rules evolve.',
      },
    ],
    advantages: [
      {
        title: 'Fit for purpose',
        detail:
          'Features match your domain - healthcare, logistics, manufacturing, professional services, and more - instead of forcing process workarounds.',
      },
      {
        title: 'Vendor consolidation',
        detail:
          'One technology partner for discovery, build, integration, and support instead of juggling disconnected specialists for every layer.',
      },
      {
        title: 'Integration-ready',
        detail:
          'APIs and event-driven connectors so data flows across billing, inventory, CRM, and reporting without duplicate entry.',
      },
      {
        title: 'Built to scale',
        detail:
          'Architecture that absorbs new users, regions, and product lines with performance and security standards held constant.',
      },
    ],
    useCases: [
      'ERP, CRM, and HRM platform development',
      'Hospital and clinic management systems',
      'Industry-specific operations and compliance software',
      'Legacy application modernization',
      'Internal workflow and approval platforms',
      'Partner and vendor portal development',
    ],
    outcomes: [
      { metric: 'One partner', label: 'Design through long-term support' },
      { metric: 'Aligned', label: 'Software matches real workflows' },
      { metric: 'Durable', label: 'Maintainable, documented codebase' },
    ],
    seoTitle: 'Custom Software Development | Quobol - ERP, CRM, Enterprise Systems',
    seoDescription:
      'Quobol builds custom ERP, CRM, HRM, and industry-specific enterprise software integrated with your stack. Discovery to support - simplifying tomorrow, today.',
  },
  {
    slug: 'databases-apis',
    icon: 'data',
    title: 'Databases and API Architecture',
    shortTitle: 'DB and APIs',
    cardDescription:
      'Solid data models, performant databases, and clean APIs - the backbone every reliable product, integration, and AI layer depends on.',
    heroHeadline: 'If the data layer is wrong, everything else fights you.',
    heroSub:
      'Quobol designs schemas, query strategies, and API contracts that keep applications fast, consistent, and ready for analytics, partners, and AI on top.',
    whatItIs:
      'Databases and API Architecture spans relational and document stores, migration planning, performance tuning, caching, and REST or GraphQL API development. We ensure services share trustworthy data contracts, versioning discipline, and observability so consumers - web apps, mobile clients, partner integrations, and machine learning pipelines - all read the same source of truth. Our work includes indexing strategy, pagination patterns, idempotent writes, backup and recovery design, and documentation your teams and vendors can rely on. When legacy databases constrain growth, we plan phased migrations with validation gates instead of risky big-bang cutovers.',
    howItWorks: [
      {
        title: 'Model the domain',
        detail:
          'Define entities, relationships, integrity rules, and lifecycle states that match business truth - not just what is easy to sketch on a whiteboard.',
      },
      {
        title: 'Engineer access paths',
        detail:
          'Indexes, caching, connection pooling, pagination, rate limits, and API design tuned to real read/write patterns and peak traffic.',
      },
      {
        title: 'Protect and evolve',
        detail:
          'Backups, migration scripts, schema versioning, monitoring, and deprecation policies so data services improve without breaking dependents.',
      },
    ],
    advantages: [
      {
        title: 'Performance under load',
        detail:
          'Queries and APIs stay responsive as data volume, concurrent users, and integration partners grow.',
      },
      {
        title: 'Clean integrations',
        detail:
          'Well-documented contracts with consistent error handling for web, mobile, partners, and internal automation.',
      },
      {
        title: 'Data you can trust',
        detail:
          'Constraints, transactions, and validation rules that prevent silent corruption and reconciliation nightmares.',
      },
      {
        title: 'Analytics-ready',
        detail:
          'Structures and event streams that support reporting, BI, and ML features without heroic one-off ETL projects.',
      },
    ],
    useCases: [
      'PostgreSQL, SQL Server, and MongoDB design',
      'REST and GraphQL API platforms',
      'Data migration and consolidation projects',
      'Caching, indexing, and performance tuning',
      'Event-driven and webhook-based service APIs',
      'API gateway and partner integration layers',
    ],
    outcomes: [
      { metric: 'Faster APIs', label: 'Optimized query and response times' },
      { metric: 'Cleaner contracts', label: 'Consistent cross-system data' },
      { metric: 'Safer change', label: 'Controlled migrations and backups' },
    ],
    seoTitle: 'Database and API Architecture Services | Quobol - PostgreSQL, REST, GraphQL',
    seoDescription:
      'Quobol designs performant databases and REST or GraphQL APIs with migrations, caching, and clean contracts. The data foundation for apps and AI - simplifying tomorrow, today.',
  },
  {
    slug: 'cybersecurity-qa',
    icon: 'security',
    title: 'Cybersecurity and Quality Assurance',
    shortTitle: 'Security and QA',
    cardDescription:
      'Security practices and rigorous testing so what you ship is trustworthy - from threat-aware reviews to automated QA in CI/CD.',
    heroHeadline: 'Ship with confidence, not crossed fingers.',
    heroSub:
      'Security and quality are delivery features. Quobol embeds them into the build so vulnerabilities and regressions are caught before customers, auditors, or attackers ever see them.',
    whatItIs:
      'Cybersecurity and Quality Assurance combines application security reviews, secure SDLC practices, test strategy, and automation. We harden authentication and session handling, protect sensitive data in transit and at rest, and define release gates aligned to your risk tolerance and compliance obligations. On the QA side, we build unit, integration, API, and end-to-end test suites integrated into CI so teams can deploy frequently without fear. Our engagements range from pre-launch assessments and penetration-minded code review to standing up regression packs and security checklists your organization owns long after we roll off.',
    howItWorks: [
      {
        title: 'Risk and coverage map',
        detail:
          'Identify critical assets, threat surfaces, authentication flows, and untested paths in the product and deployment pipeline.',
      },
      {
        title: 'Harden and automate',
        detail:
          'Remediate priority findings; add security headers, secrets hygiene, and automated tests at unit, API, and UI levels inside CI.',
      },
      {
        title: 'Continuous assurance',
        detail:
          'Regression packs, release criteria, and periodic reviews so quality and security stay current as features and dependencies change.',
      },
    ],
    advantages: [
      {
        title: 'Fewer production incidents',
        detail:
          'Bugs and security gaps caught in pipeline stages - not discovered by users, regulators, or incident response at 2 a.m.',
      },
      {
        title: 'Customer and partner trust',
        detail:
          'Demonstrable care for data protection, availability, and secure development practices strengthens sales and vendor reviews.',
      },
      {
        title: 'Faster safe releases',
        detail:
          'Automated suites and clear quality gates unlock frequent deploys without manual marathon test cycles before every push.',
      },
      {
        title: 'Clear ownership',
        detail:
          'Documented standards, test catalogs, and remediation playbooks so quality is institutional - not tribal knowledge.',
      },
    ],
    useCases: [
      'Secure SDLC and authentication hardening',
      'Automated regression and API test suites',
      'CI/CD quality and security gates',
      'Pre-launch security and architecture reviews',
      'Compliance-oriented testing checklists',
      'Performance and load testing for critical paths',
    ],
    outcomes: [
      { metric: 'Lower risk', label: 'Fewer ship-time vulnerabilities' },
      { metric: 'More coverage', label: 'Deeper automated test depth' },
      { metric: 'Stable releases', label: 'Confidence in every deploy' },
    ],
    seoTitle: 'Cybersecurity and QA Services | Quobol - Secure SDLC and Test Automation',
    seoDescription:
      'Quobol delivers application security, secure SDLC, and automated QA integrated into CI/CD. Ship reliable, trustworthy software - simplifying tomorrow, today.',
  },
  {
    slug: 'it-consulting',
    icon: 'consulting',
    title: 'IT Consulting and Digital Transformation',
    shortTitle: 'IT Consulting',
    cardDescription:
      'Modernize legacy systems, choose the right stack, and build a transformation roadmap your organization can actually execute.',
    heroHeadline: 'Clarity before code. Strategy that survives contact with reality.',
    heroSub:
      'Quobol helps leadership decide what to build, buy, retire, or automate - then stays accountable through delivery, not just the slide deck.',
    whatItIs:
      'IT Consulting and Digital Transformation blends advisory work with hands-on execution support. We assess current systems, technical debt, team skills, and business priorities, then produce phased roadmaps with costs, risks, quick wins, and capability building. Services include architecture reviews, vendor selection, legacy modernization planning, cloud and SaaS strategy, and delivery coaching for internal squads. Because Quobol also builds production systems, our recommendations reflect real delivery constraints - integration complexity, data migration effort, change management, and total cost of ownership - not theoretical best practices disconnected from your timeline and budget.',
    howItWorks: [
      {
        title: 'Diagnose',
        detail:
          'Assess applications, infrastructure, data flows, skills gaps, and business priorities through interviews, documentation review, and targeted technical spikes.',
      },
      {
        title: 'Roadmap',
        detail:
          'Produce a phased plan with milestones, dependencies, budget ranges, risk mitigations, and measurable success criteria leadership can track.',
      },
      {
        title: 'Execute alongside you',
        detail:
          'Provide architecture guidance, squad enablement, vendor negotiation support, and checkpoint reviews as teams implement the plan.',
      },
    ],
    advantages: [
      {
        title: 'Decisions with teeth',
        detail:
          'Recommendations tied to delivery capacity, integration realities, and ROI - not generic industry trend slides.',
      },
      {
        title: 'Legacy without fear',
        detail:
          'Pragmatic modernization paths - strangler patterns, phased cutovers, and parallel runs - that avoid big-bang failure modes.',
      },
      {
        title: 'Aligned stakeholders',
        detail:
          'Shared language and artifacts between business, IT, and vendors so priorities stay synchronized through long programs.',
      },
      {
        title: 'Long-term partnership',
        detail:
          'Advisory that continues through implementation checkpoints, not a report that gathers dust after the workshop.',
      },
    ],
    useCases: [
      'Legacy system modernization planning',
      'Technology stack and SaaS selection',
      'Digital transformation roadmaps',
      'Enterprise architecture and delivery reviews',
      'Build versus buy and vendor analysis',
      'Cloud migration and operating model design',
    ],
    outcomes: [
      { metric: 'Clear plan', label: 'Executable technology roadmap' },
      { metric: 'Less risk', label: 'Reduced transformation failure modes' },
      { metric: 'Aligned goals', label: 'Business and engineering in sync' },
    ],
    seoTitle: 'IT Consulting and Digital Transformation | Quobol - Strategy to Execution',
    seoDescription:
      'Quobol provides IT consulting, architecture reviews, and digital transformation roadmaps grounded in real delivery. Modernize with clarity - simplifying tomorrow, today.',
  },
  {
    slug: 'staff-augmentation',
    icon: 'staff',
    title: 'Staff Augmentation and Ongoing Support',
    shortTitle: 'Staff and Support',
    cardDescription:
      'Senior engineers who embed with your team - plus post-launch maintenance so systems stay healthy after go-live.',
    heroHeadline: 'Extra capacity without the hiring lag or the knowledge gap.',
    heroSub:
      'Get specialists who raise the bar inside your squads, or a support retainer that keeps production stable while you focus on product and growth.',
    whatItIs:
      'Staff Augmentation and Ongoing Support offers flexible engagement models: embedded developers, designers, automation specialists, and platform engineers who work inside your tools, rituals, and codebase. We also provide maintenance retainers after launch - patches, monitoring, minor enhancements, and incident response - so production systems do not stall when the original project team disperses. Engagements are scoped around outcomes and clear success criteria, not open-ended staff leasing. Quobol engineers bring senior judgment, documentation habits, and knowledge transfer so your internal team grows stronger during and after the engagement.',
    howItWorks: [
      {
        title: 'Define the need',
        detail:
          'Align on skills, seniority, timezone overlap, duration, and success criteria - whether you need a release surge or steady embedded capacity.',
      },
      {
        title: 'Embed and deliver',
        detail:
          'Engineers join your standups, repos, and ticket systems with explicit ownership areas and transparent progress reporting.',
      },
      {
        title: 'Support and transfer',
        detail:
          'Maintenance SLAs, runbooks, mentoring, and optional scale-up or scale-down as priorities shift quarter to quarter.',
      },
    ],
    advantages: [
      {
        title: 'Speed to capacity',
        detail:
          'Start productive work in weeks, not quarters lost to recruiting, onboarding, and bench time for niche skills.',
      },
      {
        title: 'Senior judgment',
        detail:
          'Contributors who improve architecture, code quality, and delivery practices while shipping features on your roadmap.',
      },
      {
        title: 'Continuity after launch',
        detail:
          'Patches, monitoring, and enhancements without rebuilding a project team from scratch every time priorities change.',
      },
      {
        title: 'Flexible scale',
        detail:
          'Expand for a release push or compliance deadline; contract when the spike ends - without layoff cycles or idle headcount.',
      },
    ],
    useCases: [
      'Embedded full-stack and platform engineers',
      'AI, RPA, and CRM specialist reinforcement',
      'Release surge and deadline capacity',
      'Production maintenance and support retainers',
      'Knowledge transfer and team mentoring',
      'Fractional tech leadership during transitions',
    ],
    outcomes: [
      { metric: 'Weeks', label: 'Time to productive capacity' },
      { metric: 'Senior talent', label: 'Embedded engineering depth' },
      { metric: 'Ongoing care', label: 'Post-launch support options' },
    ],
    seoTitle: 'Staff Augmentation and IT Support | Quobol - Embedded Engineers',
    seoDescription:
      'Quobol provides senior staff augmentation and post-launch support retainers. Embedded engineers and stable production care - simplifying tomorrow, today.',
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
