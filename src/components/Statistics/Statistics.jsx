import React from 'react';
import { SectionStat, UlStat, LiStatItem } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <SectionStat>
      {title && <h2>{title}</h2>}
      <UlStat>
        {stats.map(stat => (
          <LiStatItem key={stat.id}>
            <span>{stat.label}</span>
            <span> {stat.percentage}</span>
          </LiStatItem>
        ))}
      </UlStat>
    </SectionStat>
  );
};

export default Statistics;
