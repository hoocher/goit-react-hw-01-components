import { styled } from 'styled-components';

export const TableContainer = styled('div')(() => {
  return {
    width: '420px',
    margin: '0 auto',
    marginTop: '20px',
    marginBottom: ' 20px',
    backgroundColor: 'pink',
  };
});

export const ThType = styled('th')(() => {
  return {
    width: '220px',
    padding: '4px 0 4px 10px',
    outline: 'solid black 2px',
  };
});

export const TdType = styled('td')(() => {
  return {
    width: '220px',
    padding: '4px 0 4px 10px',
    outline: 'solid black 1px',
  };
});

export const ThAmount = styled('th')(() => {
  return {
    width: '120px',
    padding: '4px 0 4px 10px',
    outline: 'solid black 2px',
  };
});

export const TdAmount = styled('td')(() => {
  return {
    width: '120px',
    padding: '4px 0 4px 10px',
    outline: 'solid black 1px',
  };
});

export const ThCurrency = styled('th')(() => {
  return {
    width: '120px',
    padding: '4px 0 4px 10px',
    outline: 'solid black 2px',
  };
});

export const TdCurrency = styled('td')(() => {
  return {
    width: '120px',
    padding: '4px 0 4px 10px',
    outline: 'solid black 1px',
  };
});

export const Table = styled('table')(() => {
  return {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  };
});
