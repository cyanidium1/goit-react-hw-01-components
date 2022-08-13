import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ item }) => {
  return (
    <li className={css.item}>
      <div className={item.isOnline ? css.online : css.offline}></div>
      <img src={item.avatar} alt="User avatar" width="48" />
      <p>{item.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  item: PropTypes.object,
};

export default FriendListItem;
