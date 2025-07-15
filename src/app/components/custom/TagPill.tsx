'use client';

import React from 'react';
import { cn } from '@/app/lib/utils';

export interface TagPillProps {
  icon?: React.ReactNode;
  label: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
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
