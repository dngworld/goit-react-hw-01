import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';
const FriendList = ({ items }) => {
  return (
    <ul className={css.container}>
      {items.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
