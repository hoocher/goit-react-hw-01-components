import React from 'react';
import PropTypes from 'prop-types';
import { UlFriendsList } from './FriendList.styled';
import FriendListItem from './FriendsItem';

const FriendList = ({ friends }) => {
  return (
    <UlFriendsList>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </UlFriendsList>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
