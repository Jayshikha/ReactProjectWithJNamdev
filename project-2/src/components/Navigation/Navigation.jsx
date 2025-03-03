import { Container } from '@material-ui/core'
import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={`${styles.navigation}  container`}>
      <div>
        <img src="/images/logo.png" alt="Company Logo" />
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
