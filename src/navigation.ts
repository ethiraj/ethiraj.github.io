import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/#approach'),
      links: [
        { text: 'Trusted Reporting', href: getPermalink('/#approach') },
        { text: 'Data Infrastructure', href: getPermalink('/#approach') },
        { text: 'AI/ML Strategy', href: getPermalink('/#approach') },
      ],
    },
    {
      text: 'Why Us?',
      href: getPermalink('/#why-us'),
    },
    {
      text: 'Data & AI Readiness',
      href: getPermalink('/services/readiness'),
    },
    {
      text: 'Clients',
      href: getPermalink('/#proof'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Align on Reality', href: getPermalink('/services/readiness') }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Reporting & BI', href: getPermalink('/#services') },
        { text: 'Data Infrastructure', href: getPermalink('/#services') },
        { text: 'AI/ML Strategy', href: getPermalink('/#services') },
      ],
    },
    {
      title: 'Strategic Readiness',
      links: [
        { text: 'Data & AI Assessment', href: getPermalink('/services/readiness') },
        { text: 'Operational Roadmap', href: getPermalink('/#process') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Principal', href: getPermalink('/about') },
        { text: 'Insights & Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/ethiraj-krishnamanaidu/' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:ethiraj.k@dataadvisors.ai' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm">🚀</span>
    © 2024 · Ethiraj Krishnamanaidu. All rights reserved.
  `,
};
