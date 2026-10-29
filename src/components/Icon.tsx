import type { ReactNode } from 'react'

export type IconName = 'robot' | 'arrow' | 'spark' | 'plan' | 'code'

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    robot: <><rect x="4" y="7" width="16" height="13" rx="4" /><path d="M12 3v4M1 12v4m22-4v4M8 16h8" /><circle cx="8.5" cy="12" r=".8" fill="currentColor" /><circle cx="15.5" cy="12" r=".8" fill="currentColor" /></>,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    spark: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" /><path d="M20 2v4m-2-2h4" /></>,
    plan: <><rect x="5" y="5" width="14" height="17" rx="2" /><rect x="9" y="2" width="6" height="6" rx="1" fill="currentColor" /><path d="m8 12 1 1 2-2m2 1h3m-8 5h8" /></>,
    code: <><rect x="2" y="3" width="20" height="18" rx="3" /><path d="M2 8h20m-14 4-3 3 3 3m8-6 3 3-3 3m-3-7-2 8" /></>,
  }
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

