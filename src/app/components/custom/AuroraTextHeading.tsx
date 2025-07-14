'use client';

import React from 'react';
import {cn} from '@/app/lib/utils';
import {AuroraText} from '../primitives/magic-ui/AuroraText';

export interface AuroraTextHeadingProps { /** The text or nodes to render with the Aurora effect */
    children: React.ReactNode;
    /** Which heading tag to use (h1–h6) */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /** Extra classes for sizing, color, spacing, etc. */
    className?: string;
}

export const AuroraTextHeading: React.FC < AuroraTextHeadingProps > = ({
    children,
    as: Tag = 'h1',
    className
}) => (
    <Tag className={
        cn('text-4xl font-bold tracking-tighter md:text-5xl lg:text-[45px]', className)
    }>
        <AuroraText>{children}</AuroraText>
    </Tag>
);
