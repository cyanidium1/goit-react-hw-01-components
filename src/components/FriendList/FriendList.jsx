import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(el => (
        <FriendListItem item={el} key={el.id} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
