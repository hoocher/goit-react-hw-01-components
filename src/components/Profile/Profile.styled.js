import { styled } from 'styled-components';

export const ProfileCss = styled('div')(() => {
  return {
    width: '420px',
    margin: '0 auto',
    marginTop: '20px',
    marginBottom: ' 20px',
    backgroundColor: 'pink',
  };
});

export const Description = styled('div')(() => {
  return {
    textAlign: 'center',
  };
});

export const ImgCss = styled('img')(() => {
  return {
    display: 'block',
    width: '100%',
  };
});

export const NameCss = styled('p')(() => {
  return {
    fontSize: '24px',
    margin: '0 auto',
  };
});
