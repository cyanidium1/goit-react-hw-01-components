import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';

function FriendList({ friends }) {
  const elements = friends.map(el => <FriendListItem item={el} />);

  return <ul className={css.list}>{elements}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
