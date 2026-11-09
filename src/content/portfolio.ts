import { logoFor, screenshotsFor } from './media';
import type { Portfolio } from './types';

/*
 * All portfolio text, links and media live in this file.
 *
 * Files referenced here (photo, CV) go in the `public/` folder and are written
 * without a leading slash, e.g. "sultan-almukhan.jpg".
 *
 * Logos and screenshots come from `npm run images`, which turns the originals
 * in Logos/ and Screenshots/<App>/ into web copies and looks them up by slug
 * (see scripts/optimize-images.mjs). A project with no screenshots shows no
 * gallery; one with no logo shows its title alone. Where third-party images
 * come from is recorded in ASSET_SOURCES.md.
 */
export const portfolio: Portfolio = {
  profile: {
    name: 'Sultan Almukhan',
    initials: 'SA',
    role: 'AI-First Senior iOS Engineer',
    experience: '7+ years across AI, fintech, media, and telecom',
    intro:
      'I build production iOS applications from architecture to release, with a focus on voice-first AI experiences, Swift modernization, and reliable mobile engineering. I also work across backend APIs, UI/UX, and AI-assisted development workflows.',
    photo: 'sultan-almukhan.jpg',
  },

  cv: {
    file: 'Sultan_Almukhan_iOS_Engineer.pdf',
    downloadName: 'Sultan_Almukhan_iOS_Engineer.pdf',
  },

  contact: {
    intro: "Whether it's a role, a product or a question about my work, I'd be glad to hear from you.",
    location: 'Based in Europe',
    email: 's.almukhan.dev@gmail.com',
    linkedin: { href: 'https://www.linkedin.com/in/salmukhan/', label: 'linkedin.com/in/salmukhan' },
    github: { href: 'https://github.com/salmukhan', label: 'github.com/salmukhan' },
    whatsapp: { href: 'https://wa.me/491791567186', label: '+49 179 1567186' },
    appStoreDeveloper: {
      href: 'https://apps.apple.com/us/developer/sultan-almukhan/id1833875345',
      label: 'App Store developer profile',
    },
  },

  navigation: [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ],

  soloBadge: {
    label: 'Solo iOS Developer',
    note: 'Built and shipped end-to-end.',
  },

  projects: [
    {
      title: 'Professional Projects',
      intro: 'Apps I worked on at FGS Global, Tele2, Revolut and Appunite.',
      projects: [
        {
          id: 'app-fergus',
          name: 'Fergus',
          subtitle: 'FGS Global',
          description:
            'A private enterprise voice-first AI application supporting employees across 13 countries. It combines on-device speech recognition, streamed LLM responses over SSE, and server-generated text-to-speech playback.',
          stack: { label: 'FGS Global stack', items: ['Swift', 'SwiftUI', 'AVFoundation', 'Speech Framework', 'SSE', 'Next.js'] },
          solo: true,
          logo: logoFor('fergus'),
          screenshots: screenshotsFor('fergus'),
          store: {
            kind: 'notice',
            title: 'Internal enterprise app',
            message:
              'Fergus is a private application used internally at FGS Global. It is distributed through Apple Business Manager and MDM and is not available on the public App Store.',
          },
        },
        {
          id: 'app-mitt-tele2',
          name: 'Mitt Tele2',
          subtitle: 'Tele2',
          description:
            'A telecom app for mobile account management and customer services, with media features such as ringtones and call recording.',
          stack: { label: 'Tele2 stack', items: ['Swift', 'UIKit', 'SwiftUI', 'Swift Testing'] },
          logo: logoFor('mitt-tele2'),
          screenshots: screenshotsFor('mitt-tele2'),
          store: {
            kind: 'link',
            href: 'https://apps.apple.com/de/app/mitt-tele2/id479841366',
            ariaLabel: 'Mitt Tele2 on the App Store',
          },
        },
        {
          id: 'app-comviq',
          name: 'Comviq',
          subtitle: 'Tele2',
          description:
            'A mobile self-service app for account and subscription management, top-ups, and related telecom services.',
          stack: { label: 'Tele2 stack', items: ['Swift', 'UIKit', 'SwiftUI', 'Swift Testing'] },
          logo: logoFor('comviq'),
          screenshots: screenshotsFor('comviq'),
          store: {
            kind: 'link',
            href: 'https://apps.apple.com/de/app/comviq/id469353162',
            ariaLabel: 'Comviq on the App Store',
          },
        },
        {
          id: 'app-revolut',
          name: 'Revolut',
          subtitle: 'Revolut',
          description:
            'A digital banking and payments app offering card transfers, P2P payments, bank transfers and transaction history. My work focused on transfer flows and faster repeat payments.',
          stack: { label: 'Revolut stack', items: ['Swift', 'UIKit', 'MVVM', 'Core Data', 'XCTest', 'Fastlane'] },
          logo: logoFor('revolut'),
          screenshots: screenshotsFor('revolut'),
          screenshotsNote: 'Current App Store screenshots.',
          store: {
            kind: 'link',
            href: 'https://apps.apple.com/app/id932493382',
            ariaLabel: 'Revolut on the App Store',
          },
        },
        {
          id: 'app-blocktrade',
          name: 'Blocktrade',
          subtitle: 'Appunite',
          description:
            'A cryptocurrency exchange for buying and selling digital assets, featuring real-time price updates and trading information. The mobile experience uses WebSockets to keep changing market data responsive.',
          stack: { label: 'Appunite stack', items: ['Swift', 'Objective-C', 'UIKit', 'WebSockets', 'Core Data'] },
          logo: logoFor('blocktrade'),
          screenshots: screenshotsFor('blocktrade'),
          screenshotsNote: "Mobile product visuals from Appunite's Blocktrade case study.",
          store: {
            kind: 'link',
            label: 'Case study',
            href: 'https://www.appunite.com/projects/blocktrade',
            ariaLabel: "Blocktrade case study on Appunite's website",
          },
        },
        {
          id: 'app-wire',
          name: 'Wire',
          subtitle: 'Appunite',
          description:
            'An encrypted messaging and collaboration app for teams, supporting one-to-one and group chats, file sharing, and voice and video calls.',
          stack: { label: 'Appunite stack', items: ['Swift', 'UIKit'] },
          logo: logoFor('wire'),
          screenshots: screenshotsFor('wire'),
          screenshotsNote: 'Current App Store screenshots.',
          store: {
            kind: 'link',
            href: 'https://apps.apple.com/app/id930944768',
            ariaLabel: 'Wire on the App Store',
          },
        },
      ],
    },
    {
      title: 'Personal Projects',
      intro: 'Published under my own App Store developer account.',
      introLink: {
        href: 'https://apps.apple.com/us/developer/sultan-almukhan/id1833875345',
        label: 'Developer profile',
      },
      projects: [
        {
          id: 'app-stepshero',
          name: 'StepsHero: Walking Game',
          shortName: 'StepsHero',
          subtitle: 'Health & Fitness',
          description:
            'A step counter that turns walking into a role-playing game. Daily steps earn XP that levels up raccoon heroes, with streaks, step challenges and achievements to keep people moving.',
          logo: logoFor('stepshero'),
          solo: true,
          screenshots: screenshotsFor('stepshero'),
          store: {
            kind: 'link',
            href: 'https://apps.apple.com/us/app/stepshero-walking-game/id6752722061',
            ariaLabel: 'StepsHero on the App Store',
          },
        },
        {
          id: 'app-capslab',
          name: 'Auto Captions: CapsLab AI',
          shortName: 'CapsLab AI',
          subtitle: 'Photo & Video',
          description:
            'Adds AI-generated captions to videos for TikTok, Instagram and YouTube, with speech transcription, translation into 99 languages and customizable caption styles.',
          logo: logoFor('capslab'),
          solo: true,
          screenshots: screenshotsFor('capslab'),
          store: {
            kind: 'link',
            href: 'https://apps.apple.com/us/app/auto-captions-capslab-ai/id6751768318',
            ariaLabel: 'Auto Captions: CapsLab AI on the App Store',
          },
        },
      ],
    },
  ],

  experience: [
    {
      start: '2025-03',
      company: 'FGS Global',
      role: 'AI-First Senior iOS Engineer',
      companyDescription: 'FGS Global is a strategic communications advisory firm.',
      achievements: [
        'Built and shipped an enterprise voice-first AI application for employees across 13 countries as the sole iOS engineer, owning architecture, implementation, and integrations while delivering the MVP in one month',
        'Accelerated feature development by ~40% by building AI-assisted workflows for development, debugging, and code review with Claude Code, AI agents, and MCP integrations, with human-in-the-loop approvals',
        'Engineered a real-time, low-latency LLM voice pipeline combining server-generated TTS via ElevenLabs, streaming LLM responses over SSE, and on-device STT that eliminated third-party transcription costs, saving ~$11K annually',
        'Expanded into full-stack work, designing UI/UX in Figma and building 30+ endpoints with Next.js that connect the iOS app to backend and AI services, collaborating with cross-functional teams',
      ],
      technologies: ['Swift', 'SwiftUI', 'MVVM', 'AVFoundation', 'Speech Framework', 'SSE', 'Next.js', 'LLM', 'Claude Code', 'MCP'],
      apps: [{ name: 'Fergus', projectId: 'app-fergus' }],
    },
    {
      start: '2023-02',
      end: '2025-03',
      company: 'Tele2',
      role: 'Senior iOS Developer',
      companyDescription: 'Tele2 is a telecommunications operator serving customers in Sweden and the Baltics.',
      achievements: [
        'Reduced duplicated UI code by ~35% by architecting a multi-brand design system with 32 reusable components shared across 2 telecom apps',
        'Led the migration from Swift 5 to Swift 6 strict concurrency (async/await, actors), transitioned from XCTest to Swift Testing, and increased test coverage from 41.7% to 78.1%',
        'Developed a Ringtones media module with catalog browsing and instant preview, supporting 7K+ activations a month',
        'Delivered a Call Recording media module, enabling users to review recorded conversations through synchronized audio playback and interactive transcript navigation, supporting 9K+ recording playbacks per month',
      ],
      technologies: ['Swift', 'UIKit', 'SwiftUI', 'MVP-C', 'AVFoundation', 'SPM', 'Swift Testing', 'Fastlane', 'GitLab CI', 'Firebase', 'Amplitude'],
      apps: [
        { name: 'Mitt Tele2', projectId: 'app-mitt-tele2' },
        { name: 'Comviq', projectId: 'app-comviq' },
      ],
    },
    {
      start: '2021-03',
      end: '2023-02',
      company: 'Revolut',
      role: 'iOS Engineer',
      companyDescription: 'Revolut is a financial technology company offering banking, payments and money management apps.',
      achievements: [
        'Launched Instant Card Transfers for a banking app, letting users initiate a card transfer in under a minute and reaching 50K+ transfers a month',
        'Reduced repeat transfer time by ~40% with one-tap repeat with pre-filled payment details in transaction history',
        'Improved P2P and bank transfer flows with clearer recipient selection, simpler confirmation, and earlier input validation',
      ],
      technologies: ['Swift', 'UIKit', 'MVVM', 'Flow Coordinator', 'Core Data', 'Feature Flags', 'XCTest', 'Fastlane', 'CI/CD'],
      apps: [{ name: 'Revolut', projectId: 'app-revolut' }],
    },
    {
      start: '2019-01',
      end: '2021-03',
      company: 'Appunite',
      role: 'iOS Developer',
      companyDescription: 'Appunite is a software development company that builds web and mobile products for clients.',
      achievements: [
        'Built and launched a crypto exchange app from scratch in 4 months as the sole iOS developer, implementing user registration, identity verification (KYC), and real-time price updates via WebSockets',
        'Delivered a meeting management module for an enterprise SaaS platform, with recurring meetings and high-performance custom Google Calendar-style timeline views',
      ],
      technologies: ['Swift', 'Objective-C', 'UIKit', 'MVC', 'MVVM', 'Combine', 'RxSwift', 'WebSockets', 'Core Data', 'CocoaPods', 'XCTest'],
      // Wire is shown as a project card but not linked here until an individual contribution is confirmed.
      apps: [{ name: 'Blocktrade', projectId: 'app-blocktrade' }],
    },
  ],

  about: {
    lead: 'I am an AI-first Senior iOS Engineer with 7+ years of experience building Swift applications across AI, fintech, media, and telecom. My work spans product requirements, mobile architecture, implementation, testing, and automated releases. Beyond iOS, I contribute to backend development and UI/UX design, and integrate AI-assisted workflows into everyday engineering.',
    body: 'I have mentored junior iOS engineers through code reviews and regular knowledge-sharing sessions, and founded a coding school attended by 100+ students. I enjoy owning features end to end, modernizing existing codebases, and delivering maintainable products with cross-functional teams.',
    expertise: [
      {
        title: 'iOS / Mobile',
        items:
          'Swift, SwiftUI, UIKit, Xcode, Swift Concurrency (Swift 6, async/await, actors), Combine, Swift Package Manager (SPM), Core Data, AVFoundation, Speech Framework, Apple Pay (PassKit), Keychain, RxSwift, Objective-C',
      },
      {
        title: 'Architecture, Networking & Testing',
        items:
          'MVVM, MVP, Clean Architecture, Design Systems, REST APIs (URLSession), WebSockets, SSE, OAuth 2.0, OIDC, Okta, Unit Testing (XCTest, Swift Testing)',
      },
      {
        title: 'AI, Backend & DevOps',
        items:
          'LLM, AI agents, MCP, Claude Code (sub-agents, skills, hooks), STT, TTS, Next.js, TypeScript, Git, CI/CD, Fastlane, TestFlight, App Store Connect, Firebase (Crashlytics, Analytics)',
      },
    ],
    education: [
      { school: 'Suleyman Demirel University', detail: "Master's Degree in Computer Science" },
      { school: 'Suleyman Demirel University', detail: "Bachelor's Degree in Information Systems" },
    ],
    languages: [
      { name: 'English', level: 'C1 (Advanced)' },
      { name: 'Turkish', level: 'C1 (Advanced)' },
      { name: 'Kazakh', level: 'Native' },
      { name: 'Russian', level: 'C1 (Advanced)' },
    ],
  },
};
