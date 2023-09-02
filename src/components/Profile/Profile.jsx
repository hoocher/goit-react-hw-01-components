import { ProfileCss, Description, ImgCss, NameCss } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCss>
      <Description>
        <ImgCss src={avatar} alt="User avatar" className="avatar" />
        <NameCss>{username}</NameCss>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </ProfileCss>
  );
};
