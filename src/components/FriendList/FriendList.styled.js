import { styled } from 'styled-components';

export const UlFriendsList = styled('ul')(() => {
  return {
    width: '420px',
    margin: '0 auto',
    marginTop: '20px',
    marginBottom: ' 20px',
    backgroundColor: 'pink',
  };
});

export const FriendsItem = styled('li')(() => {
  return {
    outline: 'solid 1px black',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };
});

export const IsOffline = styled('span')(() => {
  return {
    backgroundColor: 'red',
  };
});
