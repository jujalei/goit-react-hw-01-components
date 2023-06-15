import PropTypes from 'prop-types';
import './Profile.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile container">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar img-container" />
        <p className="name info full-name">{username}</p>
        <p className="tag info">@{tag}</p>
        <p className="location info place">{location}</p>
      </div>

      <ul className="stats posts-info">
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
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
