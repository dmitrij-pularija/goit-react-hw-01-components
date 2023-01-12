import PropTypes from 'prop-types';
import Css from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={Css.friends__list}>
      {friends.map(({ avatar, name, isOnline, id }) =>
        FriendListItem(avatar, name, isOnline, id)
      )}
    </ul>
  );
}

function FriendListItem(avatar, name, isOnline, id) {
  return (
    <li className={Css.item} key={id}>
      <span className={isOnline ? Css.online : Css.offline}></span>
      <img className={Css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={Css.name}>{name}</p>
    </li>
  );
}

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      key: PropTypes.number,
    })
  ).isRequired,
};
