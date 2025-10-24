
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className || "h-8 w-8"}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    {children}
  </svg>
);

export const ExternalLinkIcon: React.FC = () => (
  <IconWrapper className="h-4 w-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </IconWrapper>
);

export const RocketIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </IconWrapper>
);

export const HandshakeIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75a9.75 9.75 0 1 0 0-19.5 9.75 9.75 0 0 0 0 19.5Zm0 0-2.25-2.25m2.25 2.25-2.25-2.25M12 21.75l2.25-2.25m-2.25 2.25 2.25-2.25m9-11.25-9 9M3.375 12.875l9-9m-9 9v.002c0 .021.012.04.032.052l.02.012c.018.01.038.015.058.015h.005c.022 0 .043-.006.06-.017l.016-.01c.018-.012.032-.028.042-.045l.01-.018c.01-.017.017-.035.022-.053v-.003m-2.25-2.25 2.25 2.25m-2.25-2.25v.003c0 .021.012.04.032.052l.02.012c.018.01.038.015.058.015h.005c.022 0 .043-.006.06-.017l.016-.01c.018-.012.032-.028.042-.045l.01-.018c.01-.017.017-.035.022-.053v-.003" />
  </IconWrapper>
);

export const BuildingStorefrontIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5A2.25 2.25 0 0 1 15.75 11.25 2.25 2.25 0 0 1 18 13.5V21m-4.5 0-2.25-2.25M18 21l-2.25-2.25m-8.25-7.5h12.75a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5h3.75a2.25 2.25 0 0 0 4.5 0h3.75Z" />
  </IconWrapper>
);

export const BriefcaseIcon: React.FC = () => (
  <IconWrapper className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.098a2.25 2.25 0 0 1-2.25 2.25H6.002a2.25 2.25 0 0 1-2.25-2.25v-4.098m16.5 0a2.25 2.25 0 0 0-2.25-2.25H6.002a2.25 2.25 0 0 0-2.25 2.25m16.5 0v-4.098a2.25 2.25 0 0 0-2.25-2.25H6.002a2.25 2.25 0 0 0-2.25 2.25v4.098" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12.375V6.375a3.375 3.375 0 0 0-3.375-3.375h-3a3.375 3.375 0 0 0-3.375 3.375v6" />
  </IconWrapper>
);

export const UserGroupIcon: React.FC = () => (
  <IconWrapper className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.742-.586 1.5 1.5 0 0 0 .82-1.992l-.364-1.34a2.25 2.25 0 0 0-2.176-1.58H15.75m-5.25 0a2.25 2.25 0 0 1-2.25-2.25V6.75a2.25 2.25 0 0 1 2.25-2.25h.006a2.25 2.25 0 0 1 2.25 2.25v5.25a2.25 2.25 0 0 1-2.25 2.25h-.006Zm-5.25 0H6.75a2.25 2.25 0 0 0-2.176 1.58l-.364 1.34a1.5 1.5 0 0 0 .82 1.992A9.094 9.094 0 0 0 6 18.72m9.75-3.375a2.25 2.25 0 0 0-2.25-2.25H9.75a2.25 2.25 0 0 0-2.25 2.25M15.75 15.35V6.75a2.25 2.25 0 0 0-2.25-2.25H10.5a2.25 2.25 0 0 0-2.25 2.25v8.6" />
  </IconWrapper>
);

export const CogIcon: React.FC = () => (
  <IconWrapper className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15.033-5.467 1.032-1.032m12.932 12.932-1.032-1.032M4.5 12V3m15 9V3m-8.967 15.033 1.032-1.032M5.533 5.533l-1.032-1.032" />
  </IconWrapper>
);

export const TagIcon: React.FC = () => (
  <IconWrapper className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
  </IconWrapper>
);

export const GiftIcon: React.FC = () => (
  <IconWrapper className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.375a9.75 9.75 0 0 1 6.375 6.375m-12.75 0a9.75 9.75 0 0 1 6.375-6.375M12.75 3.375c-3.518 0-6.375 2.857-6.375 6.375" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 20.625c-3.518 0-6.375-2.857-6.375-6.375h12.75c0 3.518-2.857 6.375-6.375 6.375Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.375a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm6.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </IconWrapper>
);

export const HeartIcon: React.FC = () => (
  <IconWrapper className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </IconWrapper>
);

export const SparklesIcon: React.FC = () => (
    <IconWrapper className="h-12 w-12 mx-auto text-emerald-400 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </IconWrapper>
);

