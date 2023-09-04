import { FriendsItem, IsOffline } from './FriendList.styled';

const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <FriendsItem key={id}>
      {isOnline ? <span>Online</span> : <IsOffline>Offline</IsOffline>}
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendsItem>
  );
};
export default FriendListItem;
