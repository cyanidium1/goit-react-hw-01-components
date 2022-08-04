import css from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(el => (
        <li key={el.id} className={css.item}>
          <div className={el.isOnline ? css.online : css.offline}></div>
          <img src={el.avatar} alt="User avatar" width="48" />
          <p>{el.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
