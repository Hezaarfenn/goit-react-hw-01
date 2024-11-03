/* eslint-disable react/prop-types */
import styles from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img className={styles.avatar}
          src={image}
          alt="User avatar"
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.list}>
          <span className={styles.followers}>Followers</span>
          <span className={styles.follower}>{stats.followers}</span>
        </li>
        <li className={styles.list}>
          <span className={styles.views}>Views</span>
          <span className={styles.view}>{stats.views}</span>
        </li>
        <li className={styles.list}>
          <span className={styles.likes}>Likes</span>
          <span className={styles.like}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


export default Profile;

