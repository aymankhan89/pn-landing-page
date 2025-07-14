// components/ui/TagPill.tsx
'use client';

import React from 'react';
import { cn } from '@/app/lib/utils';

export interface TagPillProps {
  /** Icon on the left side */
  icon?: React.ReactNode;
  /** The text or element to display */
  label: React.ReactNode;
  /** Optional click handler */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** Extra classes (e.g. to override colors) */
  className?: string;
  /** Choose one of a few variants for bg/text colors */
  variant?: 'neutral' | 'primary' | 'accent';
}


export const TagPill: React.FC<TagPillProps> = ({
  icon,
  label,
  className,
}) => {
  return (
    <div
      className={cn(
        'inline-flex select-none border border-[#E1E1E1] text-black items-center space-x-2 rounded-[7px]  p-[10px]  text-xs font-normal transition hover:brightness-95',
        className
      )}
    >
      {icon && (
        <span className="flex-shrink-0 text-lg leading-none">
          {icon}
        </span>
      )}
      <span>{label}</span>
    </div>
  );
};
