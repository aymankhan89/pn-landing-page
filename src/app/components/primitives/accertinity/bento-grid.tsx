'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { cn } from '@/app/lib/utils';

export interface BentoGridItemProps {
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** either a React node _or_ a src (string or StaticImageData) */
  header?: React.ReactNode | string | StaticImageData;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  header,
}) => {
  const isImageHeader =
    typeof header === 'string' ||
    (header && typeof header === 'object' && 'src' in header);

  return (
    <div
      className={cn(
        'group/bento shadow-input row-span-1 flex flex-col  space-y-4 rounded-[7px] border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl ',
        className
      )}
    >
      {isImageHeader ? (
        <Image
          src={header}
          alt={typeof title === 'string' ? title : 'header image'}

          className=""
        />
      ) : (
        header
      )}

      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-2 mb-2 text-black font-sans font-bold ">
          {title}
        </div>
        <div className=" text-xs font-normal text-[#727272]">
          {description}
        </div>
      </div>
    </div>
  );
};

export const BentoGrid: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => (
  <div
    className={cn(
      ' grid max-w-7xl grid-cols-1 gap-[30px] md:auto-rows-[18rem] md:grid-cols-3',
      className
    )}
  >
    {children}
  </div>
);
