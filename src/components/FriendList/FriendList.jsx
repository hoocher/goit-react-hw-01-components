import React from 'react';
import PropTypes from 'prop-types';
import { UlFriendsList, FriendsItem, IsOffline } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <UlFriendsList>
      {friends.map(friend => FriendListItem(friend))}
    </UlFriendsList>
  );
};

export default FriendList;

const FriendListItem = friend => {
  return (
    <FriendsItem key={friend.id}>
      {friend.isOnline ? <span>Online</span> : <IsOffline>Offline</IsOffline>}
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
    </FriendsItem>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
