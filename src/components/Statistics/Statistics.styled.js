import { styled } from 'styled-components';

export const SectionStat = styled('section')(() => {
  return {
    width: '420px',
    margin: '0 auto',
    marginTop: '20px',
    marginBottom: ' 20px',
    backgroundColor: 'pink',
  };
});

export const UlStat = styled('ul')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
  };
});

export const LiStatItem = styled('li')(() => {
  return {
    padding: '16px',
    outline: 'solid black 1px',
  };
});

export const H2Title = styled('h2')(() => {
  return {
    padding: '20px',
    textAlign: 'center',
    textTransform: 'uppercase',
  };
});
