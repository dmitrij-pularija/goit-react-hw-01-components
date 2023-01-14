import PropTypes from 'prop-types';
import Css from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={Css.friends__list}>
      <FriendListItem friends={friends} />
    </ul>
  );
}

const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li className={Css.item} key={id}>
      <span className={isOnline ? Css.online : Css.offline}></span>
      <img className={Css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={Css.name}>{name}</p>
    </li>
  ));
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
