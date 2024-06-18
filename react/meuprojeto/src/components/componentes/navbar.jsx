import { Link } from "react-router-dom";
import style from "./navbar.module.css";
const Navbar = () => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <Link to="/">home</Link>
      </li>
      <li className={style.item}>
        <Link to="/empresa">empresa</Link>
      </li>
      <li className={style.item}>
        <Link to="/contato">contato</Link>
      </li>
    </ul>
  );
};

export default Navbar;
