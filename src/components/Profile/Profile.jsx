import PropTypes from 'prop-types';
import Css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={Css.profile}>
      <div className={Css.description}>
        <img src={avatar} alt="User avatar" className={Css.avatar} />
        <p className={Css.name}>{username}</p>
        <p className={Css.tag}>@{tag}</p>
        <p className={Css.location}>{location}</p>
      </div>

      <ul className={Css.stats}>
        <li className={Css.stats__item}>
          <span className={Css.label}>Followers</span>
          <span className={Css.quantity}>{stats.followers}</span>
        </li>
        <li className={Css.stats__item}>
          <span className={Css.label}>Views</span>
          <span className={Css.quantity}>{stats.views}</span>
        </li>
        <li className={Css.stats__item}>
          <span className={Css.label}>Likes</span>
          <span className={Css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
