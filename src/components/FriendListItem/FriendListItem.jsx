import css from './FriendListItem.module.css';

const FriendListItem = ({ item }) => {
  return (
    <li key={item.id} className={css.item}>
      <div className={item.isOnline ? css.online : css.offline}></div>
      <img src={item.avatar} alt="User avatar" width="48" />
      <p>{item.name}</p>
    </li>
  );
};

export default FriendListItem;
