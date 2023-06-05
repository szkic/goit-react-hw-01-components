import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { fireEvent } from '@testing-library/react';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const classNames = [css.status];
  if (isOnline) classNames.push(css.true);

  return (
    <li className={css.item} key={id}>
      {console.log()}
      <span className={classNames.join(' ')}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width={48} />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
