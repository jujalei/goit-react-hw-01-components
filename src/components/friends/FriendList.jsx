import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(data => {
        return (
          <li key={data.id} className={styles.item}>
            <FriendItem
              id={data.id}
              isOnline={data.isOnline}
              avatar={data.avatar}
              name={data.name}
            />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
