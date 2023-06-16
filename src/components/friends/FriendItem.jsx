import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <span className={styles.wrapper}>
        <span className={`${styles.status} ${styles[isOnline]}`}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
      </span>
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
