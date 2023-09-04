import React from 'react';
import PropTypes from 'prop-types';
import { SectionStat, UlStat, LiStatItem, H2Title } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <SectionStat>
      {title && <H2Title>{title}</H2Title>}
      <UlStat>
        {stats.map(stat => (
          <LiStatItem key={stat.id}>
            <span>{stat.label}</span>
            <span> {stat.percentage}%</span>
          </LiStatItem>
        ))}
      </UlStat>
    </SectionStat>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
