'use client';

import React from 'react';
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';
import { BentoGrid, BentoGridItem } from '../primitives/accertinity/bento-grid';
import Communication from '@/app/assets/pngs/Communication.png';
import PoorMatch from '@/app/assets/pngs/PoorMatch.png';
import LackVisibility from '@/app/assets/pngs/LackVisibility.png';
import ManualTasks from '@/app/assets/pngs/ManualTasks.png';
import DataMigration from '@/app/assets/pngs/DataMigration.png';

const items = [
  {
    header: Communication,
    title: 'Scattered Communication',
    description:
      'Recruiters juggle multiple platforms (emails, spreadsheets, Slack, etc.) leading to lost context and wasted time.',
  },
  {
    header: PoorMatch,
    title: 'Poor Candidate Matching',
    description:
      'Manual sourcing often leads to irrelevant applications and mismatches.',
  },
  {
    header: LackVisibility,
    title: 'Lack of Visibility',
    description:
      'No real-time insights into team performance, pipeline status, or bottlenecks.',
  },
  {
    header: ManualTasks,
    title: 'Manual, Repetitive Tasks',
    description:
      'Following up with candidates, sending emails, updating statuses – all done manually.',
  },
  {
    header: DataMigration,
    title: 'Difficult Data Migrations & Integrations',
    description:
      'Moving data from legacy tools or syncing across platforms is tedious and risky.',
  },
];

export function BentoGridDemo() {
  return (
    <section className="">
      <div>


        {/* The grid itself */}
        <BentoGrid>
          {items.map((item, idx) => (
            <BentoGridItem
              key={idx}
              header={item.header}
              title={item.title}
              description={item.description}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
