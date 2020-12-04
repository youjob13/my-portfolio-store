import { NavLink } from "react-router-dom";

const Navigation = ({ styles }) => {
  return (
    <nav className={styles.navbar} role="navigation">
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to="/catalog">Goods</NavLink>
        </li>
        <li className={styles.navItem}>
          <a href="/">Brands</a>
        </li>
        <li className={styles.navItem}>
          <a href="/">Clearance</a>
        </li>
      </ul>
      <select className={styles.navSelect}>
        <option>Brands</option>
        <option>
          <NavLink to="/catalog">Goods</NavLink>
        </option>
        <option>Brands</option>
        <option>Clearance</option>
      </select>
    </nav>
  );
};

export default Navigation;
