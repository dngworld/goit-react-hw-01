import clsx from 'clsx';
import css from './FriendListItem.module.css';
const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const statusClasses = clsx(css.status, {
    [css.isOnline]: isOnline,
    [css.isOffline]: !isOnline,
  });
  return (
    <div className={css.wraper}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="50" />
      <p className={css.name}>{name}</p>
      <p className={statusClasses}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
export default FriendListItem;
