import css from './Profile.module.css';
const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <div className={css.profile}>
      <div>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
          width={200}
          height={200}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers</span>
          <span className={css.value}>{stats.followers}</span>
        </li>

        <li className={css.statsItem}>
          <span className={css.label}>Views</span>
          <span className={css.value}>{stats.views}</span>
        </li>

        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span className={css.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
