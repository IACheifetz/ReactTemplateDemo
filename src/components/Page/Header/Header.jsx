import SlideoutMenu from './SlideoutMenu.jsx';
import Navigation from './Navigation.jsx';
import User from './User.jsx';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        <SlideoutMenu />
      </div>

      <h1>App Template Demo</h1>

      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>

      <User />
    </header>
  );
}
