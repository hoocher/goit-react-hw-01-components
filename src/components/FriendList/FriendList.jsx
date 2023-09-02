import React from 'react';
import { UlFriendsList, FriendsItem } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <UlFriendsList>
      {friends.map(friend => (
        <FriendsItem key={friend.id}>
          <span>{friend.isOnline ? 'online' : 'offLine'}</span>
          <img src={friend.avatar} alt="User avatar" width="48" />
          <p>{friend.name}</p>
        </FriendsItem>
      ))}
    </UlFriendsList>
  );
}

export default FriendList;
