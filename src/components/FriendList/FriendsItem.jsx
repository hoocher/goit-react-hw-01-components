import { FriendsItem, IsOffline } from './FriendList.styled';

const FriendListItem = ({ friend }) => {
  return (
    <FriendsItem>
      {friend.isOnline ? <span>Online</span> : <IsOffline>Offline</IsOffline>}
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
    </FriendsItem>
  );
};
export default FriendListItem;
